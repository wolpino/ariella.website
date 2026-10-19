import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Cursor's browser opens the dev server at 127.0.0.1. Without this, Next
  // blocks dev assets and the theme button never hydrates.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
