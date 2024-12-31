/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Casa-De-Arte', // Add your repository name here
  assetPrefix: '/Casa-De-Arte/', // Add your repository name with trailing slash
  trailingSlash: true,
}

module.exports = nextConfig