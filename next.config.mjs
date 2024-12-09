/** @type {import('next').NextConfig} */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['localhost']
  },
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')],
    prependData: `@import "base/variables";`
  }
};

export default nextConfig;
