/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "faithful-blessing-e37af8b2a2.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
