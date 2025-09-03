"use client";

type ImageProps = {
  path: string;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
  tr?: boolean; // if true = apply ImageKit transformations (avatar mode)
};

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
const fallbackBase = "/"; // assumes static assets live in /public/

if (!urlEndpoint) {
  console.warn("⚠️ Missing NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT in .env");
}

const Image = ({ path, alt, w, h, className = "", tr = false }: ImageProps) => {
  if (!path) {
    console.warn("⚠️ Image component received empty path");
    return (
      <div
        className="bg-gray-800 text-gray-400 flex items-center justify-center italic rounded"
        style={{ width: w || 100, height: h || 100, minHeight: "50px" }}
      >
        No image
      </div>
    );
  }

  // normalize path (strip leading slashes)
  const cleanPath = path.replace(/^\/+/, "");
  const fallbackSrc = `${fallbackBase}${cleanPath}`;

  // build ImageKit transformations
  const transformations =
    tr && (w || h)
      ? [`w-${w || 100}`, h ? `h-${h}` : null].filter(Boolean).join(",")
      : "";

  const src = urlEndpoint
    ? transformations
      ? `${urlEndpoint}/tr:${transformations}/${cleanPath}`
      : `${urlEndpoint}/${cleanPath}`
    : fallbackSrc;

  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      decoding="async"
      loading="lazy"
      className={`${className} ${tr ? "rounded-full object-cover" : ""}`}
      style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
      onError={(e) => {
        console.warn(`❌ Image failed: ${src} → falling back to ${fallbackSrc}`);
        e.currentTarget.src = fallbackSrc;
        e.currentTarget.classList.add("border", "border-orange-500");
      }}
    />
  );
};

export default Image;
