// next.config.mjs
export default {
  images: {
    domains: ['placeimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/img/**', // Adjust this path according to your needs
      },
    ],
  },
};

