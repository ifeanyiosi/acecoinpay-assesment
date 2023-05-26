/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.co.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
