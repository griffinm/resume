/** @type {import('next').NextConfig} */
// 'standalone' for the Docker image (default); 'export' for static hosting
// (AWS Amplify) when NEXT_OUTPUT=export is set in the build environment.
const outputMode = process.env.NEXT_OUTPUT === 'export' ? 'export' : 'standalone';

const nextConfig = {
  reactStrictMode: true,
  output: outputMode,
  // Explicitly enable minification for production builds
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Static export has no server to run the Next.js image optimizer, so serve
  // images unoptimized in that mode. The Docker/standalone build is untouched.
  images: {
    unoptimized: outputMode === 'export',
  },
};

export default nextConfig;

