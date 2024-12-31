/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repositoryName = 'Casa-De-Arte'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure base path and asset prefix for GitHub Pages
  
  trailingSlash: true,
}

module.exports = nextConfig