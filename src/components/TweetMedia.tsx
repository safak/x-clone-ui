"use client";

import { useEffect, useState, memo } from "react";
import HotReloadWrapper from "@/client/dev/hot-reloader/HotReloadWrapper";

// Re-export types so other files can `import type { MediaItem, MediaType } from "./TweetMedia"`
import type { TweetMedia } from "@/libs/fetchTweets";
export type { TweetMedia as MediaItem } from "@/libs/fetchTweets";
export type MediaType = TweetMedia["type"];

type Props = {
  media?: TweetMedia[];
};

const getMimeType = (url: string): string => {
  if (url.endsWith(".webm")) return "video/webm";
  if (url.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
};

const getFallback = (type: string): string =>
  type === "photo" ? "/fallback.jpg" : "/fallback-video.jpg";

const gridClassMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-2", // fix: 3 photos still show in 2 cols like Twitter
  4: "grid-cols-2",
};

// 🖼 Photo
const PhotoMedia = ({ src, fallback }: { src: string; fallback: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="rounded-lg w-full max-h-[600px] overflow-hidden border border-red-500">
      <img
        src={imgSrc}
        alt={`Tweet image: ${src}`}
        className="rounded-lg w-full object-contain aspect-video"
        style={{
          minHeight: "250px",
          backgroundColor: "#111",
          aspectRatio: "16/9",
          display: "block",
        }}
        onError={() => {
          console.warn("❌ Image failed:", imgSrc);
          setImgSrc(fallback);
        }}
        onLoad={() => console.info("✅ Loaded image:", src)}
      />
      <div className="text-xs text-white bg-black/70 px-2 py-1 break-all">
        {imgSrc}
      </div>
    </div>
  );
};

// 🎥 Video
const VideoMedia = ({
  videoSrc,
  posterSrc,
  fallback,
}: {
  videoSrc: string;
  posterSrc: string;
  fallback: string;
}) => (
  <div className="rounded-lg w-full max-h-[600px] overflow-hidden border border-blue-500">
    <video
      controls
      playsInline
      preload="none"
      poster={posterSrc}
      className="rounded-lg w-full aspect-video object-cover"
      onError={(e) => {
        console.warn("❌ Video failed to load:", videoSrc);
        e.currentTarget.poster = fallback;
      }}
    >
      <source src={videoSrc} type={getMimeType(videoSrc)} />
      Your browser does not support the video tag.
    </video>
    <div className="text-xs text-white bg-black/70 px-2 py-1 break-all">
      {videoSrc}
    </div>
  </div>
);

const TweetMedia = memo(({ media = [] }: Props) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsHydrated(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  if (!isHydrated || media.length === 0) {
    return <div style={{ minHeight: "250px", backgroundColor: "#111" }} />;
  }

  const gridCols = gridClassMap[media.length] ?? "grid-cols-2";

  return (
    <HotReloadWrapper>
      <div className={`mt-2 grid gap-2 ${gridCols}`}>
        {media.map((m) => {
          const fallbackSrc = getFallback(m.type);

          if (m.type === "photo") {
            const resolvedSrc = m.url || fallbackSrc;
            console.debug("[TweetMedia] Photo candidate", resolvedSrc);

            return (
              <PhotoMedia
                key={m.media_key}
                src={resolvedSrc}
                fallback={fallbackSrc}
              />
            );
          }

          if (m.type === "video" || m.type === "animated_gif") {
            const videoSrc = m.url || fallbackSrc; // ✅ trust pre-resolved
            const posterSrc = m.preview_image_url || fallbackSrc;

            console.debug("[TweetMedia] Video candidate", { videoSrc, posterSrc });

            return (
              <VideoMedia
                key={m.media_key}
                videoSrc={videoSrc}
                posterSrc={posterSrc}
                fallback={fallbackSrc}
              />
            );
          }

          console.warn("Unsupported media type:", m.type);
          return null;
        })}
      </div>
    </HotReloadWrapper>
  );
});

TweetMedia.displayName = "TweetMedia";
export default TweetMedia;
