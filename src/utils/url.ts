/** Puts the site's base path (for example `/livebridge-site`) in front of a path that starts with `/`. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return `${base}${path}`;
}
