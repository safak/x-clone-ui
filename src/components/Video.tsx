"use client";

type VideoTypes = {
  src: string;
  poster?: string;
  className?: string;
};

const Video = ({ src, poster, className }: VideoTypes) => {
  return (
    <video
      className={className}
      controls
      playsInline
      preload="metadata"       // ✅ ensures metadata loads without forcing full download
      crossOrigin="anonymous"  // ✅ needed for CORS + proxy
      poster={poster}
    >
      <source
        src={`/api/proxy?url=${encodeURIComponent(src)}`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;

