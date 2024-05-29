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
      }
    ],
  },
};

export default nextConfig;
