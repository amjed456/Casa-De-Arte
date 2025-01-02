/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Casa-De-Arte',
  assetPrefix: '/Casa-De-Arte',
  experimental: {
    appDir: true,
  },
  distDir: '.next',
  generateBuildId: async () => {
    return 'build'
  }
}

module.exports = nextConfig