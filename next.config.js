/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: 'https://casa-de-arte.vercel.app',
  trailingSlash: true,
}

module.exports = nextConfig 