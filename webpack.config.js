const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require('assets-webpack-plugin');

const ENV = process.env.NODE_ENV;
const PRODUCTION = ENV === 'production';

const distPath = path.join(__dirname, 'dist');


const commonConfig = {
  mode: PRODUCTION ? 'production' : 'development',
  resolve: {
    alias: {
      src: path.resolve('src'),
      components: path.resolve('src/client/components')
    }
  }
};

const browserConfig = {
  ...commonConfig,
  entry: './src/client/index.js',
  output: {
    path: distPath,
    filename: 'bundle.js'
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
    },
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new AssetsPlugin({
      path: distPath,
      filename: 'manifest.json'
    })
  ],
};

const serverConfig = {
  ...commonConfig,
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      },
    ],
  },
};

module.exports = [browserConfig, serverConfig];
