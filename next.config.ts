import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 개편으로 없어진 페이지는 새 페이지로 연결
  async redirects() {
    return [
      { source: "/features", destination: "/", permanent: true },
      { source: "/features/:path*", destination: "/academy", permanent: true },
      { source: "/reviews", destination: "/academy", permanent: true },
    ];
  },
};

export default nextConfig;
