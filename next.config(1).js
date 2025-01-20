/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 在构建时忽略 ESLint 错误
  },
  images: {
    domains: ['o9mma8lo72x0bom4.public.blob.vercel-storage.com'],
  },
}

module.exports = nextConfig 