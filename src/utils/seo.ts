import { NOINDEX_ROUTES } from "../consts.ts";

const normalize = (path: string) => `/${path.replace(/^\/+|\/+$/g, "")}`;

const excluded = new Set(NOINDEX_ROUTES.map(normalize));

/** Checks whether a route should be hidden from search. Used by BaseHead. */
export function isNoindexRoute(pathname: string): boolean {
  const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/+$/, "");
  const path =
    base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return excluded.has(normalize(path));
}
