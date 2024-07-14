/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "rohyksdlruptnthzbbxs.supabase.co",
        port: "",
      },

    ],
  },
};

export default nextConfig;
