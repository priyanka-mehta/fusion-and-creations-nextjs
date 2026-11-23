/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
