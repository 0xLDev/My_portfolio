/* eslint-disable @typescript-eslint/no-var-requires */
const ESLintPlugin = require("eslint-webpack-plugin");
const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    disableStaticImages: true,
  },
  webpack: (config, { dev }) => {
    // Important: return the modified config

    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          eslintPath: require.resolve("eslint"),
          quiet: false,
          exclude: ["node_modules"],
          extensions: ["js", "ts", "tsx", "jsx"],
          emitError: true,
          failOnError: true,
          emitWarning: false,
          failOnWarning: false,
          fix: true,
        }),
      );
    }

    return config;
  },
};

module.exports = withImages(nextConfig);
