import type { NextConfig } from "next";

const backendPort = parseInt(process.env.BACKEND_PORT || "") || 4000;

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:" + backendPort + "/api/:path*",
      },
    ];
  },
};

export default nextConfig;
