import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/static/images/**",
      },
      ...(process.env.NEXT_PUBLIC_API_URL
        ? [new URL(`${process.env.NEXT_PUBLIC_API_URL}/static/images/**`)]
        : []),
    ],
  },
};

export default nextConfig;
