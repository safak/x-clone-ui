// src/libs/fetchTweets.ts

export type MediaType = "photo" | "video" | "animated_gif";

export type TwitterUser = {
  id: string;
  username: string;
  name: string;
  profile_image_url: string;
};

export type TweetMetrics = {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
};

export type TweetMediaRaw = {
  media_key: string;
  type: string;
  url?: string;
  preview_image_url?: string;
  variants?: {
    bit_rate?: number;
    bitrate?: number;
    content_type: string;
    url: string;
  }[];
};

export type TweetMedia = {
  media_key: string;
  type: MediaType;
  url: string;
  preview_image_url?: string;
  variants?: {
    bitrate?: number;
    content_type: string;
    url: string;
  }[];
};

export type TweetRaw = {
  id: string;
  text: string;
  created_at: string;
  public_metrics: TweetMetrics;
  author_id: string;
  attachments?: {
    media_keys?: string[];
  };
  referenced_tweets?: { type: string; id: string }[];
};

export type TwitterApiResponse = {
  data: TweetRaw[];
  includes: {
    users: TwitterUser[];
    media?: TweetMediaRaw[];
    tweets?: TweetRaw[];
  };
};

export type TweetHydrated = {
  id: string;
  text: string;
  createdAt: string;
  metrics: TweetMetrics;
  user: TwitterUser;
  media: TweetMedia[];
  source: "x";
};

// 🔒 Proxy wrapper (only for video/gif)
const proxyUrl = (url: string, type?: MediaType) => {
  if (!url) return "";
  const clean = url.replace(/&amp;/g, "&");

  // ✅ photos load directly
  if (type === "photo") return clean;

  // ✅ video/gif go through proxy
  return `/api/proxy?url=${encodeURIComponent(clean)}`;
};

// 🖼 Media resolver
const resolveMediaUrl = (m: TweetMedia): string => {
  if (m.type === "photo") {
    const rawUrl = m.url || m.preview_image_url || "";
    return proxyUrl(rawUrl, "photo");
  }

  if (m.type === "video" || m.type === "animated_gif") {
    if (Array.isArray(m.variants) && m.variants.length > 0) {
      const mp4Variant = m.variants
        .filter((v) => v.content_type === "video/mp4")
        .sort((a, b) => (b.bitrate ?? 0) - (a.bitrate ?? 0))[0];
      if (mp4Variant?.url) return proxyUrl(mp4Variant.url, m.type);
    }
    if (m.url) return proxyUrl(m.url, m.type);
    if (m.preview_image_url) return proxyUrl(m.preview_image_url, m.type);
  }

  return "";
};

export const fetchTweets = async (
  bearerToken: string
): Promise<TweetHydrated[]> => {
  if (!bearerToken || typeof bearerToken !== "string") {
    throw new Error("Missing or invalid bearer token");
  }

  // 1. Get user ID
  const userRes = await fetch(
    "https://api.twitter.com/2/users/by/username/DNixed0323?user.fields=id",
    {
      headers: { Authorization: `Bearer ${bearerToken}` },
      cache: "no-store",
    }
  );

  if (!userRes.ok) {
    throw new Error(`Failed to fetch user: ${userRes.statusText}`);
  }

  const { data: user }: { data: TwitterUser } = await userRes.json();

  // 2. Fetch tweets + referenced tweets + media
  const tweetRes = await fetch(
    `https://api.twitter.com/2/users/${user.id}/tweets?exclude=replies&tweet.fields=created_at,public_metrics,referenced_tweets&expansions=author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id,referenced_tweets.id.attachments.media_keys&user.fields=username,name,profile_image_url&media.fields=media_key,type,url,preview_image_url,variants`,
    {
      headers: { Authorization: `Bearer ${bearerToken}` },
      cache: "no-store",
    }
  );

  if (!tweetRes.ok) {
    throw new Error(`Failed to fetch tweets: ${tweetRes.statusText}`);
  }

  const raw: TwitterApiResponse = await tweetRes.json();

  // 3. Index users + media + referenced tweets
  const users: Record<string, TwitterUser> = Object.fromEntries(
    raw.includes.users.map((u) => [u.id, u])
  );

  const media: Record<string, TweetMedia> = Object.fromEntries(
    (raw.includes.media || []).map((m) => {
      const normalizedVariants =
        m.variants?.map((v) => ({
          bitrate: v.bit_rate ?? v.bitrate,
          content_type: v.content_type,
          url: v.url,
        })) ?? [];

      const normalized: TweetMedia = {
        media_key: m.media_key,
        type:
          m.type === "photo" || m.type === "video" || m.type === "animated_gif"
            ? m.type
            : "photo",
        url: m.url ?? "",
        preview_image_url: m.preview_image_url,
        variants: normalizedVariants,
      };

      return [m.media_key, normalized]; // ⚡ keep raw, resolve later
    })
  );

  const referencedTweets: Record<string, TweetRaw> = Object.fromEntries(
    (raw.includes.tweets || []).map((t) => [t.id, t])
  );

  // 4. Hydrate tweets
  return raw.data.map((tweet): TweetHydrated => {
    let hydratedMedia: TweetMedia[] =
      tweet.attachments?.media_keys
        ?.map((key) => {
          const m = media[key];
          return m
            ? { ...m, url: resolveMediaUrl(m) } // resolve only here
            : null;
        })
        .filter((m): m is TweetMedia => Boolean(m?.url)) || [];

    // If no direct media, check referenced tweet(s)
    if (hydratedMedia.length === 0 && tweet.referenced_tweets) {
      for (const ref of tweet.referenced_tweets) {
        const refTweet = referencedTweets[ref.id];
        if (refTweet?.attachments?.media_keys) {
          hydratedMedia =
            refTweet.attachments.media_keys
              .map((key) => {
                const m = media[key];
                return m
                  ? { ...m, url: resolveMediaUrl(m) }
                  : null;
              })
              .filter((m): m is TweetMedia => Boolean(m?.url)) || [];
          if (hydratedMedia.length > 0) break;
        }
      }
    }

    return {
      id: tweet.id,
      text: tweet.text,
      createdAt: tweet.created_at,
      metrics: tweet.public_metrics,
      user: users[tweet.author_id],
      media: hydratedMedia,
      source: "x",
    };
  });
};
