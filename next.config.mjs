/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/testing-lotte',
  images: {
    unoptimized: true
  }
};

export default nextConfig;