import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placecage.lucidinternets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
