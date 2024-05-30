/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'travelist.jp',
        port: ''
      }
    ],
  },
};

export default nextConfig;
