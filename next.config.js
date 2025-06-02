/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  reactStrictMode: true,
  experimental: {
    serverComponents: false,
  },
};

module.exports = nextConfig;
