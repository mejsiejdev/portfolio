import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME!,
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
};

export default nextConfig;
