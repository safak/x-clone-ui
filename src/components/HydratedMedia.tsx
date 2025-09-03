// HydratedMedia.tsx
import { useEffect, useState } from "react";

export default function HydratedMedia({ url }: { url: string }) {
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    console.log("HydratedMedia received URL:", url);

    if (!url) {
      setResolvedSrc(null);
      return;
    }

    // Prevent trying to render shortlinks (not direct images)
    const isRawShortlink = url.startsWith("https://t.co/");
    setResolvedSrc(isRawShortlink ? null : url);
    setFailed(false); // reset failure state when URL changes
  }, [url]);

  if (!resolvedSrc || failed) {
    return (
      <div
        className="media-fallback flex items-center justify-center rounded-md bg-gray-900 text-gray-400 text-sm italic"
        style={{ minHeight: "200px" }}
      >
        Image not available
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt="Post image"
      loading="lazy"
      className="rounded-md max-w-full object-contain"
      style={{ maxHeight: "500px", backgroundColor: "#111" }}
      onError={() => {
        console.warn("❌ HydratedMedia failed to load:", resolvedSrc);
        setFailed(true); // triggers fallback UI
      }}
    />
  );
}
