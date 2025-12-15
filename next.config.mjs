/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb"
    }
  },
  images: {
    domains: ["localhost", "supabase.co", "lh3.googleusercontent.com"]
  }
};

export default nextConfig;
