/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
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
    appDir: false,
  },
};

module.exports = nextConfig;
