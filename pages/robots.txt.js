import { baseUrl } from "../lib/base-url";

// Served at /robots.txt: lets search engines crawl everything and points them to the sitemap.
export function getServerSideProps({ req, res }) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.end(["User-agent: *", "Allow: /", "", `Sitemap: ${baseUrl(req)}/sitemap.xml`, ""].join("\n"));
  return { props: {} };
}

export default function Robots() {
  return null;
}
