// src/app/api/tweets/route.ts
import { fetchTweets } from "@/libs/fetchTweets"
import { NextResponse } from "next/server"

export async function GET() {
  const bearerToken = process.env.X_ACCESS_TOKEN

  if (!bearerToken || bearerToken.length < 20) {
    console.error("Missing or invalid bearer token")
    return NextResponse.json(
      { error: "Missing or invalid bearer token" },
      { status: 401 }
    )
  }

  try {
    const tweets = await fetchTweets(bearerToken)
    return NextResponse.json({ tweets }) // ✅ wraps array under `tweets`
  } catch (err: unknown) {
    const error = err as Error
    const message = error.message || "Unknown error"
    console.error("Tweet fetch failed:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
