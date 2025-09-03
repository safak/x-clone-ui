"use client";

import { useEffect, useState } from "react";
import Post from "./Post";
import type { MediaItem, MediaType } from "./TweetMedia";

// --- Types ---

// Raw tweet shape (looser, comes straight from API)
type RawTweet = {
  id?: string;
  text?: string;
  createdAt?: string;
  created_at?: string;
  metrics?: UITweet["metrics"];
  public_metrics?: UITweet["metrics"];
  user?: UITweet["user"];
  media?: Partial<MediaItem>[];
};

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

// --- Helpers ---

const validTypes = ["photo", "video", "animated_gif"] as const;
const isMediaType = (t: unknown): t is MediaType =>
  typeof t === "string" && (validTypes as readonly string[]).includes(t);

// Normalize raw API tweet to strict UI type
const normalizeTweet = (raw: RawTweet): UITweet => {
  const mediaArray = Array.isArray(raw.media) ? raw.media : [];

  return {
    id: raw.id ?? "",
    text: raw.text ?? "",
    createdAt: raw.createdAt ?? raw.created_at ?? "",
    metrics:
      raw.metrics ??
      raw.public_metrics ?? {
        retweet_count: 0,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
    user:
      raw.user ?? {
        id: "",
        username: "",
        name: "",
        profile_image_url: "",
      },
    source: "x",
    media: mediaArray
      .map((m): MediaItem | null => {
        const type = isMediaType(m?.type) ? m.type : "photo";
        const url =
          (m?.url && typeof m.url === "string" && m.url) ||
          (m?.preview_image_url && typeof m.preview_image_url === "string"
            ? m.preview_image_url
            : "");

        if (!url) return null;

        return {
          media_key: m?.media_key ?? "",
          type,
          url,
          preview_image_url:
            m?.preview_image_url && typeof m.preview_image_url === "string"
              ? m.preview_image_url
              : undefined,
        };
      })
      .filter((m): m is MediaItem => m !== null),
  };
};

// --- Component ---

const Comments = () => {
  const [tweets, setTweets] = useState<UITweet[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTweets = async () => {
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
      } catch (err) {
        setError("Tweet hydration failed");
        console.error("Tweet hydration failed:", err);
      }
    };

    loadTweets();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500 px-4">{error}</p>
      ) : tweets.length === 0 ? (
        <p className="text-gray-500 px-4">No comments available.</p>
      ) : (
        <div className="flex flex-col gap-4 px-4">
          {tweets.slice(0, 6).map((tweet) => (
            <Post key={tweet.id} {...tweet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
