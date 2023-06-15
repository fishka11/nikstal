/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["media.graphassets.com"] },
  async redirects() {
    return [
      {
        source: "/o-nas",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
