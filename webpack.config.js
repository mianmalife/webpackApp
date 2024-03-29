const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const OUT_PUT = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[contenthash].js',
  assetModuleFilename: 'images/[hash][ext][query]',
  clean: true
}
const config = {
  entry: ['./src/index.jsx'],
  output: devMode ? OUT_PUT : Object.assign(OUT_PUT, { publicPath: './' }),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [devMode && require.resolve('react-refresh/babel')].filter(
              Boolean
            )
          }
        }
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 12 * 1024 // 12kb
          }
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeAttrs',
                    params: {
                      attrs: '(fill|stroke)'
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    port: 9002,
    hot: true,
    client: {
      reconnect: true,
      overlay: {
        errors: true,
        warnings: false
      }
    },
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'sunshine',
      template: 'src/index.html',
      inject: true
    }),
    !devMode && new MiniCssExtractPlugin(),
    new ESLintPlugin({
      context: './src',
      extensions: ['tsx', 'ts', 'js', 'jsx']
    }),
    devMode && new ReactRefreshWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/config.js',
          info: { minimized: true }
        }
      ]
    })
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true
      }),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false // 删除注释
          }
        },
        parallel: true,
        extractComments: false // 不生成注释文件
      })
    ]
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    delete config.devtool
  } else {
    delete config.optimization
  }
  return config
}
