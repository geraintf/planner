const webpack = require('webpack');

const ENV = process.env.NODE_ENV;
const PRODUCTION = ENV === 'production';

const browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  mode: PRODUCTION ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react-app'] },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV),
        BROWSER: JSON.stringify(true),
      },
    }),
    // ['babel-plugin-styled-components']
  ],
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  mode: PRODUCTION ? 'production' : 'development',
  output: {
    path: __dirname,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react-app'] },
      },
    ],
  },
};

module.exports = [browserConfig, serverConfig];
