var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV;

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // entry: './src/main.js',
  // entry: './src/Components/index.js',
  entry: NODE_ENV == 'development' ? './src/main.js' : './src/components/index.js',
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: 'zhc-birt-cmps.js',
    library: 'zhc-birt-cmps',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }, {
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
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
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
  externals: {
    vue:'vue',
    echarts: 'echarts',
    // raphael:'raphael',
    // jquery:'jquery',
    'element-ui': 'element-ui',
    // 'bignumber.js':'bignumber.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
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
