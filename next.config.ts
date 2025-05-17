import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "dgxwulsaskeapldevwjp.supabase.co",
      pathname: "/**", // Bắt buộc phải có
      // pathname: "/storage/v1/object/public/**",
    }]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // <-- Thêm dòng này để tăng giới hạn body
    },
  },
};

export default nextConfig;
