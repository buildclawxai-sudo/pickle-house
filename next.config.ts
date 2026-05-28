import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'enhancepickleball.com',
      },
      {
        protocol: 'https',
        hostname: 'juciao.com.au',
      },
      {
        protocol: 'https',
        hostname: 'luzzpickleball.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
};

export default nextConfig;
