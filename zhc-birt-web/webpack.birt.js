const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
/**
 * extract-text-webpack-plugin默认安装的版本是3.0.2，还不支持webpack的4.x版本
 * 了解到有extract-text-webpack-plugin有一个4.0的beta版本支持webpack4.x
 * npm install --save-dev extract-text-webpack-plugin@next
 * css生成hash,用extract-text-webpack-plugin加hash看来是无解了
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");



function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // devtool: 'source-map',
  mode: 'production', // production|development  // https://segmentfault.com/a/1190000013712229
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, './src/components/dist'),
    publicPath: '/dist/',
    filename: 'zhcCmps-[name].js',
    library: 'zhcCmps',
    libraryTarget: 'umd'
    // libraryExport: 'default',
    // umdNamedDefine: true,
    // globalObject: `(typeof self !== 'undefined' ? self : this)`, // https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target
    // globalObject: 'typeof self !== \'undefined\' ? self : this' // element-ui 写法
  },
  module: {
    rules: [// 加载css
      {
        test: /\.css$/,
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       url: false
        //     }
        //   }
        // ]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // 加载less
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      // 加载sass
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      // 加载base64
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192 // 当图片小于8192K之后转为base64
            }
          }
        ]
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/, // 被 test 匹配的文件都会被 babel 编译
        loader: 'babel-loader'
      }]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  externals: {
    vue:'vue',
    vuex:'vuex',
    'vue-router':'vue-router',
    echarts: 'echarts',
    'js-md5':'js-md5',
    'fuse.js':'fuse.js',
    screenfull:'screenfull',
    'tui-editor': 'tui-editor',
    'element-ui': 'element-ui'
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   compress: true
    // }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, './src/components/dist'), // root去找要删除的文件夹
      exclude: '', // 排除不删除的目录
      verbose: true, // 控制台打印日志?
      dry: false// 为false是删除文件夹的，为true是不删除的，默认值是false
    })
  ],
  // 优化项配置
  optimization: {
    minimize: process.env.NODE_ENV != 'development', // 开发时不分包优化压缩可以调试
    // 分割代码块
    splitChunks: {
      cacheGroups: {
        // vue: {
        //   test: /[\\/]node_modules[\\/]vue[\\/]/,
        //   name: 'vue',
        //   chunks: 'initial',
        //   minSize: 0, // 大于0个字节
        //   enforce: true, // 强制生成
        //   priority: 10, // 权重
        //   minChunks: 1 // 在分割之前，这个代码块最小应该被引用的次数
        // },
        // elementUI: {
        //   test: /[\\/]node_modules[\\/]element-ui[\\/]/,
        //   name: 'elementUI',
        //   chunks: 'initial',
        //   minSize: 0, // 大于0个字节
        //   enforce: true, // 强制生成
        //   priority: 10, // 权重
        //   minChunks: 1 // 在分割之前，这个代码块最小应该被引用的次数
        // },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          reuseExistingChunk: true,
          minSize: 0, // 代码最小多大，进行抽离
          minChunks: 1 // 代码复 2 次以上的抽离
        }
      }
    }
  }

}
