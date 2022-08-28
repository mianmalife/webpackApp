const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const ENV = process.env.NODE_ENV
const OUT_PUT = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[contenthash].js',
  assetModuleFilename: 'images/[hash][ext][query]',
  clean: true
}
const config = {
  entry: ['./src/index.jsx'],
  output:
    ENV === 'development'
      ? OUT_PUT
      : Object.assign(OUT_PUT, { publicPath: './' }),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ENV === 'development' && require.resolve('react-refresh/babel')
            ].filter(Boolean)
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#5468ff',
                  'link-color': '#5468ff',
                  'border-radius-base': '2px'
                },
                javascriptEnabled: true
              }
            }
          }
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
    new AntdDayjsWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      context: './src',
      extensions: ['tsx', 'ts', 'js', 'jsx']
    }),
    ENV === 'development' && new ReactRefreshWebpackPlugin(),
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
  if (ENV === 'production') {
    delete config.devtool
  } else {
    delete config.optimization
  }
  return config
}
