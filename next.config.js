// The site's public address, used for share previews, canonical links and the sitemap.
// Set NEXT_PUBLIC_SITE_URL (for example https://www.viraas.in) in the hosting settings.
// On Vercel it falls back to the project's production domain automatically.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "")
).replace(/\/$/, "")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Baked in at build time so the server and browser always agree on the address.
  env: { NEXT_PUBLIC_SITE_URL: siteUrl },
  // Let browsers reuse photos and fonts on return visits instead of re-checking each one.
  async headers() {
    return [
      {
        // 30 days, then refreshed in the background. If you replace a photo but keep its
        // file name, some visitors may see the old one until this runs out.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ]
  },
}

module.exports = nextConfig
