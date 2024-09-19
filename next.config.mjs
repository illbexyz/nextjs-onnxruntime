/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
        source: "/:path*",
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.parser.javascript.importMeta = false;

    return config;
  },
};

export default nextConfig;
