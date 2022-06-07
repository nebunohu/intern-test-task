const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: `static/js/${devMode ? "[name].js" : "[name].[contenthash].js"}`,
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'static/media/[hash][ext][query]',
    clean: true,
  },
  optimization: {
    minimize: devMode ? false : true,
    minimizer: [ new TerserPlugin()],
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      }
    },
  },
  mode: devMode ?  "development" : "production",
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000,
    hot: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      title: 'Intern test task',
      template: path.resolve(__dirname, "./public/index.html"),
      favicon: path.resolve(__dirname, "./public/favicon.ico"),
      cache: true
    })
  ]
};