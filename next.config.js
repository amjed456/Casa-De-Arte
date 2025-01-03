/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/casa-de-arte',
  assetPrefix: '.',
  trailingSlash: true,
}

module.exports = nextConfig