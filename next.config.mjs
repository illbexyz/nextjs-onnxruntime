/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.parser.javascript.importMeta = false;

    return config;
  },
};

export default nextConfig;
