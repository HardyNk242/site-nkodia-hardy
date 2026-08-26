/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* Image optimisation — serve AVIF/WebP automatically */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },

  /* La page Publications a été fusionnée dans Recherches. Redirection
     permanente pour ne pas casser les liens déjà partagés ou indexés.
     Le fragment (#axe-03) est conservé par le navigateur. */
  async redirects() {
    return [
      { source: "/publications", destination: "/recherches", permanent: true },
    ];
  },

  /* Security & caching headers */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        /* Long-cache static images */
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
