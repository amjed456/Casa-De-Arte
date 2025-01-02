/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Casa-De-Arte',
  assetPrefix: '/Casa-De-Arte',
  transpilePackages: ['next'],
  experimental: {
    optimizeFonts: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
}

module.exports = nextConfig