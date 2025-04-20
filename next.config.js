/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'ipfs.io',
      'gateway.ipfs.io'
      // Add other domains as needed
    ]
  }
}

module.exports = nextConfig 