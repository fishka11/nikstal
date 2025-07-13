/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["media.graphassets.com"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
     ]
  },
  experimental: {
    appDir: true,
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
