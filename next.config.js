/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/casa-de-arte',
  assetPrefix: 'https://amjed456.github.io/casa-de-arte',
  trailingSlash: true,
}

module.exports = nextConfig