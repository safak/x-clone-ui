"use client";

import { useEffect, useState } from "react";
import Post from "./Post";
import type { MediaItem, MediaType } from "./TweetMedia";

// The UI’s tweet shape (media is strictly typed to MediaItem[])
type UITweet = {
  id: string;
  text: string;
  createdAt: string;
  metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  user: {
    id: string;
    username: string;
    name: string;
    profile_image_url: string;
  };
  media: MediaItem[];
  source: "x";
};

// Force API values into our strict union
const normalizeMediaType = (rawType: unknown): MediaType => {
  if (typeof rawType !== "string") return "photo";
  const t = rawType.toLowerCase();
  if (t === "photo" || t === "image") return "photo";
  if (t === "video") return "video";
  if (t === "animated_gif" || t === "gif") return "animated_gif";
  return "photo"; // fallback
};

// Normalize raw API tweet to the strict UI type
const normalizeTweet = (raw: unknown): UITweet => {
  if (typeof raw !== "object" || raw === null) {
    return {
      id: "",
      text: "",
      createdAt: "",
      metrics: { retweet_count: 0, reply_count: 0, like_count: 0, quote_count: 0 },
      user: { id: "", username: "", name: "", profile_image_url: "" },
      media: [],
      source: "x",
    };
  }

  const r = raw as Record<string, unknown>;
  const mediaArray = Array.isArray(r.media) ? r.media : [];

  return {
    id: String(r.id ?? ""),
    text: String(r.text ?? ""),
    createdAt: String(r.createdAt ?? r.created_at ?? ""),
    metrics: (r.metrics ||
      r.public_metrics || {
        retweet_count: 0,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      }) as UITweet["metrics"],
    user: (r.user || {
      id: "",
      username: "",
      name: "",
      profile_image_url: "",
    }) as UITweet["user"],
    source: "x",
    media: mediaArray
      .map((m) => {
        if (typeof m !== "object" || m === null) return null;
        const mm = m as Record<string, unknown>;

        const type = normalizeMediaType(mm.type);
        const url =
          (typeof mm.url === "string" && mm.url) ||
          (typeof mm.preview_image_url === "string" && mm.preview_image_url) ||
          "";

        if (!url) return null;

        return {
          media_key: String(mm.media_key ?? ""),
          type,
          url,
          preview_image_url:
            typeof mm.preview_image_url === "string" ? mm.preview_image_url : undefined,
        } as MediaItem;
      })
      .filter((m): m is MediaItem => m !== null),
  };
};

const Feed = () => {
  const [tweets, setTweets] = useState<UITweet[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/x-feed", { cache: "no-store" });
        const data = await res.json();

        if (data?.error) {
          setError(data.error);
          console.error("X API error:", data.error);
          return;
        }

        if (Array.isArray(data?.tweets)) {
          setTweets(data.tweets.map(normalizeTweet));
        } else {
          setError("Unexpected response format");
          console.error("Unexpected response format:", data);
        }
      } catch (e) {
        setError("Tweet hydration failed");
        console.error("Tweet hydration failed:", e);
      }
    };
    load();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : tweets.length === 0 ? (
        <p className="text-gray-500">No tweets available.</p>
      ) : (
        tweets.slice(0, 6).map((tweet) => <Post key={tweet.id} {...tweet} />)
      )}
    </div>
  );
};

export default Feed;

