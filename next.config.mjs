/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md'],
  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3gga64bj3439.cloudfront.net',
        pathname: '/Assets/frontend/**',
      },
      {
        protocol: 'https',
        hostname: 'centralci.azureedge.net',
        pathname: '/livcast-asset/Assets/frontend/**',
      }
    ]
  },
};

export default nextConfig;