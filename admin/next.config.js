const { createSecureHeaders } = require("next-secure-headers");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  headers: async () => {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
};

module.exports = nextConfig;
