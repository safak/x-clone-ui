"use client";

import TweetMedia from "./TweetMedia";

type MediaType = "photo" | "video" | "animated_gif";

type TweetHydrated = {
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
  media: {
    media_key: string;
    type: MediaType;
    url: string;
    preview_image_url?: string;
  }[];
  source: "x";
};

type PostProps = Partial<TweetHydrated> & {
  type?: "status" | "media" | "quote" | string;
};

const Post = ({ text, createdAt, user, media, metrics, type }: PostProps) => {
  return (
    <div className="border p-4 rounded-lg bg-black shadow-sm text-white">
      {/* Optional Type Label */}
      {type && (
        <div className="text-xs text-gray-400 mb-2 italic">
          Viewing as: {type}
        </div>
      )}

      {/* Header */}
      {user && (
        <div className="flex items-center gap-2">
          <img
            src={user.profile_image_url}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="font-semibold text-white">{user.name}</div>
            <div className="text-sm text-gray-400">@{user.username}</div>
          </div>
        </div>
      )}

      {/* Body */}
      {text && (
        <div className="mt-2 text-base whitespace-pre-wrap text-white">
          {text}
        </div>
      )}

      {/* Media */}
      {media && media.length > 0 && (
  <TweetMedia media={media} />
)}


      {/* Timestamp */}
      {createdAt && (
        <div className="text-xs text-gray-400 mt-2">
          {new Date(createdAt).toLocaleString()}
        </div>
      )}

      {/* Metrics */}
      {metrics && (
        <div className="mt-2 text-xs text-gray-400 flex gap-4">
          <span>💬 {metrics.reply_count}</span>
          <span>🔁 {metrics.retweet_count}</span>
          <span>❤️ {metrics.like_count}</span>
          <span>🔖 {metrics.quote_count}</span>
        </div>
      )}
    </div>
  );
};

export default Post;
