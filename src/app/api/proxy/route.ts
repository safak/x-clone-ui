import { NextRequest, NextResponse } from "next/server";

const BLOCKED_EXTENSIONS = [".js", ".css", ".map"];
const BLOCKED_PATHS = ["/_next/"];
const DEFAULT_TYPE = "application/octet-stream";
const TIMEOUT_MS = 8000;

// ✅ Only allow Twitter/X media domains
const ALLOWED_HOSTS = ["pbs.twimg.com", "video.twimg.com"];

function isBlocked(url: string): boolean {
  return (
    BLOCKED_PATHS.some((path) => url.includes(path)) ||
    BLOCKED_EXTENSIONS.some((ext) => url.endsWith(ext))
  );
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  console.log("🔎 Proxy request for:", url);

  if (!url || !/^https?:\/\//.test(url)) {
    return new NextResponse("Missing or invalid URL", { status: 400 });
  }

  try {
    const parsedUrl = new URL(url);

    // 🚫 Ensure only whitelisted hosts
    if (!ALLOWED_HOSTS.includes(parsedUrl.hostname)) {
      console.warn("🚫 Blocked non-Twitter host:", parsedUrl.hostname);
      return new NextResponse("Blocked host", { status: 403 });
    }

    if (isBlocked(url)) {
      console.warn("🚫 Blocked static asset:", url);
      return new NextResponse("Blocked static asset", { status: 403 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    // ✅ Forward Range header if present
    const range = req.headers.get("range");

    const upstream = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; x-clone-proxy/1.0)",
        Accept:
          "image/avif,image/webp,image/apng,image/*,video/*;q=0.9,*/*;q=0.8",
        Referer: "https://x.com/",
        ...(range ? { Range: range } : {}),
      },
    });

    clearTimeout(timeout);

    if (!upstream.ok || !upstream.body) {
      return new NextResponse(`Upstream error: ${upstream.statusText}`, {
        status: upstream.status || 502,
      });
    }

    // 🛠 Forward video-related headers exactly
    const headers = new Headers();
    for (const [key, value] of upstream.headers.entries()) {
      if (
        ["content-type", "content-length", "accept-ranges", "content-range"].includes(
          key.toLowerCase()
        )
      ) {
        headers.set(key, value);
      }
    }

    headers.set("Cache-Control", "public, max-age=86400");
    headers.set("Access-Control-Allow-Origin", "*");

    console.log(
      `✅ Proxy fetched: ${url} → ${upstream.status} (${headers.get(
        "content-type"
      )})`
    );

    // ✅ Preserve 206 Partial Content if returned
    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers,
    });
  } catch (err: unknown) {
    const error = err as Error;
    const isAbort = error.name === "AbortError";
    console.error("❌ Proxy fetch failed:", error.message);
    return new NextResponse(
      isAbort ? "Upstream timeout" : "Failed to fetch resource",
      { status: 500 }
    );
  }
}
