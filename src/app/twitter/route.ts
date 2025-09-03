// src/app/twitter/route.ts
import { NextResponse } from "next/server"

type TwitterUserResponse = {
  data: {
    id: string
    username?: string
    name?: string
    profile_image_url?: string
  }
}

export async function GET() {
  const bearerToken = process.env.TWITTER_BEARER_TOKEN

  if (!bearerToken || bearerToken.length < 20) {
    return NextResponse.json(
      { error: "Missing or invalid bearer token" },
      { status: 401 }
    )
  }

  try {
    const res = await fetch(
      "https://api.twitter.com/2/users/by/username/DNixed0323?user.fields=id",
      {
        headers: { Authorization: `Bearer ${bearerToken}` },
      }
    )

    if (!res.ok) {
      const errorText = await res.text()
      return NextResponse.json(
        {
          error: `Twitter API error: ${res.status} ${res.statusText}`,
          details: errorText,
        },
        { status: res.status }
      )
    }

    const data: TwitterUserResponse = await res.json()
    return NextResponse.json(data)
  } catch (err: unknown) {
    const error = err as Error
    console.error("Twitter fetch failed:", error.message)
    return NextResponse.json(
      { error: "Failed to fetch Twitter user", details: error.message },
      { status: 500 }
    )
  }
}
