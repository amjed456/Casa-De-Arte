/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/Casa-De-Arte',
  assetPrefix: '/Casa-De-Arte/',
}

module.exports = nextConfig