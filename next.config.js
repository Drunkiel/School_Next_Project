/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  state: {
    dataURL: [],
  },
  images: {
    domains: ["media.tenor.com", "c.tenor.com"],
  },
};

module.exports = nextConfig;
