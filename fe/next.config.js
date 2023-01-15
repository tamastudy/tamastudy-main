/** @type {import('next').NextConfig} */
const nextConfig = {
  // proxy !!!!!!!!
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: "http://localhost:8080/:slug*",
      },
    ];
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
