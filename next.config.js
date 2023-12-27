/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "media.graphassets.com" }],
  },
  experimental: {
    // appDir: true,
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
