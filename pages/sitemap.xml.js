import { projects } from "../content/site";
import { baseUrl } from "../lib/base-url";

// Served at /sitemap.xml: every page of the site, with project photos, so search engines
// find new projects without waiting to crawl the links. Updates itself when projects change.

const escape = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function sitemap(base) {
  const url = (path) => `${base}${path}`;
  const page = (path, priority, images = []) =>
    [
      "  <url>",
      `    <loc>${escape(url(path))}</loc>`,
      `    <priority>${priority}</priority>`,
      ...images.map(
        (image) => `    <image:image><image:loc>${escape(url(image.src))}</image:loc></image:image>`
      ),
      "  </url>",
    ].join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    page("/", "1.0"),
    ...projects.map((p) => page(`/work/${p.slug}`, "0.8", p.images)),
    "</urlset>",
    "",
  ].join("\n");
}

export function getServerSideProps({ req, res }) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  res.end(sitemap(baseUrl(req)));
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
