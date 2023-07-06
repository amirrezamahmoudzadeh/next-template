/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "fa",
    localeDetection: false,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
