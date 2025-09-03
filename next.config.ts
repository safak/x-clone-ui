// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com", // ✅ tweet & profile photos
      },
    ],
  },
};

module.exports = nextConfig;

