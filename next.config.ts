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
      ...(process.env.NEXT_PUBLIC_IMAGE_HOSTNAME
        ? [
            {
              protocol: "https" as const,
              hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME,
              pathname: "/static/images/**",
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;
