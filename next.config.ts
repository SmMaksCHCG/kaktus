import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isStatic = isGithubPages || process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isStatic ? "export" : undefined,
  trailingSlash: isStatic,
  basePath: isGithubPages ? "/kaktus" : undefined,
  images: {
    unoptimized: isStatic,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  agentRules: false,
};

export default nextConfig;
