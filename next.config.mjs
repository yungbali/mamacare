/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
