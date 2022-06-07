const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
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
      {
        test: /\.css$/i,
        use: [
          { loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader },
          { loader: "css-modules-typescript-loader",
            options: {
              mode: process.env.CI ? 'verify' : 'emit'
            } 
          },
          { loader: "css-loader", options: { modules: {
            mode: "local",
            auto: true,
            exportGlobals: true,
            localIdentName: "[name]__[local]--[hash:base64:5]",
          } } }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      title: 'Intern test task',
      template: path.resolve(__dirname, "./public/index.html"),
      favicon: path.resolve(__dirname, "./public/favicon.ico"),
      cache: true
    }),
    new MiniCssExtractPlugin( {
      filename: `static/css/${devMode ? "[name].css" : "[name].[contenthash].css"}`,
      chunkFilename: `static/css/${devMode ? "[id].css" : "[id].[contenthash].css"}` 
    }),
  ]
};