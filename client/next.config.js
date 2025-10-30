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
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
    },
}

module.exports = nextConfig
