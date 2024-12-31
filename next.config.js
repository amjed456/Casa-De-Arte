/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Update assetPrefix to start with a leading slash
  assetPrefix: '/',
  basePath: '',
}

module.exports = nextConfig 