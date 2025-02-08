/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Other experimental configurations can go here
    },
    serverExternalPackages: [
        '@react-email/render',
    ],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', 
            },
        ],
    },
}

module.exports = nextConfig