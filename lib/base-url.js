import { siteUrl } from "../content/site";

// The site address for server-generated files (sitemap, robots): NEXT_PUBLIC_SITE_URL,
// or the address the request came in on when it isn't set.
export const baseUrl = (req) => {
  if (siteUrl) return siteUrl;
  const proto = String(req.headers["x-forwarded-proto"] || "https").split(",")[0];
  return `${proto}://${req.headers.host}`;
};
