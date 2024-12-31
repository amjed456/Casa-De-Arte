/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'casa-de-arte.vercel.app'
      }
    ]
  },
  assetPrefix: '/',
  trailingSlash: true,
}

module.exports = nextConfig