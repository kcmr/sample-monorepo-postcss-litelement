const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const babelConfig = require('./babel.config');

const packagesPath = path.resolve(__dirname, 'packages/');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  target: 'web', // when using .browserslistrc HMR stops working if this option is not set to web
  devServer: {
    contentBase: packagesPath,
    watchContentBase: true,
    port: 5000,
    host: 'localhost',
    publicPath: '/',
    hot: true,
    overlay: true,
    stats: {
      preset: 'errors-warnings',
      colors: true,
      timings: true,
    },
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: packagesPath,
        use: {
          loader: path.resolve(__dirname, 'add-dependency-loader.js'),
          options: {
            context: packagesPath,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          ...babelConfig,
        },
      },
      {
        test: /\.js$/,
        loader: 'string-replace-loader',
        include: packagesPath,
        options: {
          search: './dist/index.js',
          replace: './src/index.js',
          flags: 'g',
        },
      },
    ],
  },
};
