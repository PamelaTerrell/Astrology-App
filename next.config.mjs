/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/astrology-2025",
        destination: "/dark-side",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;