/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
generateBuildId: () => {
  return process.env.GIT_SHA || "";
};
