/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'images.unsplash.com', 'via.placeholder.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.replit.dev',
            },
            {
                protocol: 'https',
                hostname: '**.repl.co',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '/api',
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:8000/api/:path*',
            },
        ];
    },
}

module.exports = nextConfig
