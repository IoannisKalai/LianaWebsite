import type { NextConfig } from "next";

/** Set in CI when building for https://<user>.github.io/<repo>/ */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "LianaWebsite";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isGithubPages
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
