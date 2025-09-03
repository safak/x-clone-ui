// src/app/api/x-feed/route.ts
import { NextResponse } from "next/server"

export type TwitterUser = {
  id: string
  username: string
  name: string
  profile_image_url: string
}

export type TweetMetrics = {
  retweet_count: number
  reply_count: number
  like_count: number
  quote_count: number
}

export type TweetMedia = {
  media_key: string
  type: string
  url?: string
  preview_image_url?: string
  variants?: {
    bitrate?: number
    content_type: string
    url: string
  }[]
}

export type TweetRaw = {
  id: string
  text: string
  created_at: string
  public_metrics: TweetMetrics
  author_id: string
  attachments?: {
    media_keys?: string[]
  }
}

export type TwitterApiResponse = {
  data: TweetRaw[]
  includes: {
    users: TwitterUser[]
    media?: TweetMedia[]
  }
}

export type TweetHydrated = {
  id: string
  text: string
  createdAt: string
  metrics: TweetMetrics
  user: TwitterUser
  media: TweetMedia[]
  source: "x"
}

let cachedTweets: TweetHydrated[] | null = null
let lastFetched = 0
const CACHE_DURATION = 60 * 1000 // 60 seconds

function resolveMediaUrl(m: TweetMedia): string {
  if (m.type === "photo") {
    // ✅ Always return the URL if it exists (Twitter photo URLs are valid)
    return m.url ?? ""
  }

  if ((m.type === "video" || m.type === "animated_gif") && Array.isArray(m.variants)) {
    const mp4Variant = m.variants.find((v) => v.content_type === "video/mp4")
    return mp4Variant?.url || m.preview_image_url || m.url || ""
  }

  return m.url || ""
}

export async function GET() {
  const bearerToken = process.env.X_ACCESS_TOKEN

  if (!bearerToken || bearerToken.length < 20) {
    console.error("Missing or invalid bearer token")
    return NextResponse.json(
      { error: "Missing or invalid bearer token" },
      { status: 401 }
    )
  }

  const now = Date.now()
  if (cachedTweets && now - lastFetched < CACHE_DURATION) {
    return NextResponse.json({ tweets: cachedTweets })
  }

  try {
    const userRes = await fetch(
      "https://api.twitter.com/2/users/by/username/DNixed0323?user.fields=id",
      {
        headers: { Authorization: `Bearer ${bearerToken}` },
      }
    )

    if (!userRes.ok) {
      throw new Error(`Failed to fetch user: ${userRes.statusText}`)
    }

    const { data: user }: { data: TwitterUser } = await userRes.json()

    const tweetRes = await fetch(
      `https://api.twitter.com/2/users/${user.id}/tweets?exclude=replies&tweet.fields=created_at,public_metrics&expansions=author_id,attachments.media_keys&user.fields=username,name,profile_image_url&media.fields=media_key,type,url,preview_image_url,variants`,
      {
        headers: { Authorization: `Bearer ${bearerToken}` },
      }
    )

    if (!tweetRes.ok) {
      throw new Error(`Failed to fetch tweets: ${tweetRes.statusText}`)
    }

    const raw: TwitterApiResponse = await tweetRes.json()

    const users: Record<string, TwitterUser> = Object.fromEntries(
      raw.includes.users.map((u) => [u.id, u])
    )

    const media: Record<string, TweetMedia> = Object.fromEntries(
      (raw.includes.media || []).map((m) => {
        const resolvedUrl = resolveMediaUrl(m)
        return [m.media_key, { ...m, url: resolvedUrl }]
      })
    )

    const hydratedTweets: TweetHydrated[] = raw.data.map((tweet) => ({
      id: tweet.id,
      text: tweet.text,
      createdAt: tweet.created_at,
      metrics: tweet.public_metrics,
      user: users[tweet.author_id],
      media: tweet.attachments?.media_keys
        ?.map((key) => media[key])
        .filter(Boolean) || [],
      source: "x",
    }))

    cachedTweets = hydratedTweets
    lastFetched = now

    return NextResponse.json({ tweets: hydratedTweets })
  } catch (err: unknown) {
    const error = err as Error
    const isRateLimit = error.message?.includes("Too Many Requests")
    console.error("Tweet fetch failed:", error.message)

    return NextResponse.json(
      {
        error: isRateLimit
          ? "Rate limit exceeded. Try again in a few minutes."
          : error.message || "Failed to fetch tweets",
      },
      { status: isRateLimit ? 429 : 500 }
    )
  }
}
