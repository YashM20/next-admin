/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md'],
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;