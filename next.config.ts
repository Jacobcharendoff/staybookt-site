import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pulse API lives on Railway. The hero analyzer in Section 1 calls it server-side
  // via a route handler at /api/analyze so we keep the PULSE_WEB_KEY off the client.
  // No proxy needed at the Next config level; route handlers handle origin.

  // Allow Pulse-hosted assets if/when we lazy-load thumbnail/preview images from the
  // analyze response.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.staybookt.com" },
      { protocol: "https", hostname: "*.up.railway.app" },
    ],
  },

  // Treat staging and production builds identically. Vercel will set NEXT_PUBLIC_VERCEL_ENV.
  experimental: {
    // Future home for typedRoutes, optimizePackageImports if we wire shadcn or similar.
  },
};

export default nextConfig;
