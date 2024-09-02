const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { TanStackRouterWebpack } = require('@tanstack/router-plugin/webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
    publicPath: 'auto',
  },
  devServer: {
    port: 3003,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.ts|\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new TsconfigPathsPlugin(),
    TanStackRouterWebpack(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ModuleFederationPlugin({
      name: 'websiteA',
      filename: 'remoteEntry.js',
      exposes: {
        './MainApp': './src/App.tsx',
      },
      //   remotes: {
      //     homepage:
      //       'homepage@https://sytac-webpack-module-federation.github.io/homepage/remoteEntry.js',
      //     signup: "signup@https://sytac-webpack-module-federation.github.io/signup/remoteEntry.js",
      //   },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
