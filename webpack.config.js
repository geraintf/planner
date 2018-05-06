const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const ENV = process.env.NODE_ENV;
const PRODUCTION = ENV === 'production';

const browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  mode: PRODUCTION ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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
    })
  ],
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  mode: PRODUCTION ? 'production' : 'development',
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
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.less$/,
        use: ['css-loader', 'less-loader']
      },
    ],
  },
};

module.exports = [browserConfig, serverConfig];
