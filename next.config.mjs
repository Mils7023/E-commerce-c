import withPWA from "next-pwa";
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: process.env.GRAPHQL_URL,
      },
    ];
  },

  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    DOMAIN_URL: process.env.DOMAIN_URL,
    MEDIA_URL: process.env.MEDIA_URL,
    PAYPAL_RETURN_URL: process.env.PAYPAL_RETURN_URL,
    PAYPAL_CANCEL_URL: process.env.PAYPAL_CANCEL_URL,
  },
  images: {
    domains: [process.env.DOMAIN_URL],
    unoptimized: true,
  },
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "graphql-tag/loader",
        },
      ],
    });

    return config;
  },
};

const pwaConfig = withPWA({
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { ...nextConfig, ...pwaConfig };
