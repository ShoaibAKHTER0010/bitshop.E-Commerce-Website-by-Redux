// next.config.mjs
export default {
  images: {
    domains: ['placeimg.com'],
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/img/**', // Adjust this path according to your needs
      },
    ],
  },
};

