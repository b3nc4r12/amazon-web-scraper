/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ["m.media-amazon.com"]
  },
  env: {
    firebase_api_key: process.env.FIREBASE_API_KEY
  }
}

module.exports = nextConfig