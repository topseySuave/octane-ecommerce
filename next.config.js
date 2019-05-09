const sass = require('@zeit/next-sass');
const typescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins');
const path = require('path');

module.exports = withPlugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    sassLoaderOptions: {
      includePaths: ["styles"]
    },
  }],
  typescript,
], {
  target: 'server',
  webpack: (config, { dev }) => {
    config.resolve.alias.lib = path.resolve('lib');
    config.resolve.alias.components = path.resolve('components');
    return config;
  },
});
