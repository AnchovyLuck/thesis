/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "32dsdi2drh.ufs.sh",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
