var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV;

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: ['syntax-dynamic-import']
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      // img loader
      {
        test: /\.(ico|png|gif|jpe?g)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            /*
             *  limit=10000 ： 10kb
             *  图片小于10kb 采用内联的形式，否则输出图片
             * */
            limit: 10000,
            name: 'images/[name]-[hash:8].[ext]'
          }
        }]
      },
      // font loader
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5000,
            name: 'font/[name]-[hash:8].[ext]'
          }
        }]

      },
      // csv|tsv loader
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },

      // xml loader
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    },
    after: require('./mock/mock-server.js')
  },
  performance: {
    hints: false
  },
  plugins: [
    // 加载jquery 
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
  ],
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
