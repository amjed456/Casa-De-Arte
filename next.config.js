/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: 'https://casa-de-arte.vercel.app',
  basePath: '',
}

module.exports = nextConfig 