import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: lets the site's JS and HMR websocket load when opened from
  // another device on the local network (e.g. http://192.168.1.6:3000).
  allowedDevOrigins: ["192.168.1.6"],
};

export default nextConfig;
