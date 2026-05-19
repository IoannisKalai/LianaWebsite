const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix paths to files in `public/` when the site is served under a subpath (GitHub Pages). */
export function assetPath(path: string): string {
  if (!path || /^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (basePath && !normalized.startsWith(`${basePath}/`)) {
    return `${basePath}${normalized}`;
  }
  return normalized;
}
