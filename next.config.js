/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/casa-de-arte',
  assetPrefix: '/casa-de-arte',
}

module.exports = nextConfig