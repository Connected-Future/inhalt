import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the dev-only on-screen indicator out of the sidebar's bottom-left
  // account block. This affects development only; nothing ships in production.
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
