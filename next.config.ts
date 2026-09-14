import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Vercel's public project alias was being indexed as a duplicate of the real site.
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'isr-website-theta.vercel.app' }],
        destination: 'https://spineregistries.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
