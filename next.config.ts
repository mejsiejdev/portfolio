import type { NextConfig } from "next";
import { API_URL } from "@/lib/api";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    remotePatterns: [new URL(`${API_URL}/static/images/*`)],
  },
};

export default nextConfig;
