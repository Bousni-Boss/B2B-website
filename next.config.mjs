// next.config.mjs
import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { allowedOrigins: ['*'] } },
  webpack: (config) => {
    config.resolve.alias ??= {};
    config.resolve.alias['@'] = path.resolve(process.cwd()); // "@/..." -> project root
    return config;
  },
};

export default nextConfig;
