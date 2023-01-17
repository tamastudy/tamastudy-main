const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development",
});
const { createSecureHeaders } = require("next-secure-headers");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  headers: async () => {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
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
  reactStrictMode: false,
};

module.exports = withPWA(nextConfig);
