const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  mode: 'production', // production|development  // https://segmentfault.com/a/1190000013712229
  entry: './src/components/Charts/index.js',
  output: {
    path: path.resolve(__dirname, './src/components/Charts/dist'),
    publicPath: '/dist/',
    filename: 'zhc-chart.js',
    library: 'zhc-chart',
    libraryTarget: 'umd'
    // libraryExport: 'default',
    // umdNamedDefine: true,
    // globalObject: `(typeof self !== 'undefined' ? self : this)`, // https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target
    // globalObject: 'typeof self !== \'undefined\' ? self : this' // element-ui 写法
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/, // 被 test 匹配的文件都会被 babel 编译
      loader: 'babel-loader'
      //   include:[resolve('../../../modules/core-js/')] //打包时兼容旧浏览器的语法
    }, {
      test: /\.css$/,
      loader: 'css-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  externals: {
    echarts: 'echarts'

  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      compress: true
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, './src/components/Charts/dist'), // root去找要删除的文件夹
      exclude: '', // 排除不删除的目录
      verbose: true, // 控制台打印日志?
      dry: false// 为false是删除文件夹的，为true是不删除的，默认值是false
    })
  ],
  // 优化项配置
  optimization: {
    minimize: process.env.NODE_ENV!='development', // 开发时不分包优化压缩可以调试
    // 分割代码块
    splitChunks: {
      cacheGroups: {
        // vue相关框架
        vue: {
          test: /[\\/]node_modules[\\/]vue[\\/]/,
          name: 'vue',
          chunks: 'initial',
          minSize: 0, // 大于0个字节
          enforce: true, // 强制生成
          priority: 10, // 权重
          minChunks: 1 // 在分割之前，这个代码块最小应该被引用的次数
        },
        // 除Vue之外其他框架
        vendors: {
          test: /[\\/]node_modules[\\/]?!(vue)[\\/]/,
          name: 'vendors',
          chunks: 'initial',
          reuseExistingChunk: true,
          // enforce: true, //强制生成
          priority: 5, // 权重
          minChunks: 1 // 在分割之前，这个代码块最小应该被引用的次数
        },
        zhcLib: {
          name: 'zhcLib',
          test: /[\\/]node_modules[\\/]zhc-\w.+[\\/]/,
          chunks: 'all',
          reuseExistingChunk: true,
          minSize: 0, // 代码最小多大，进行抽离
          minChunks: 1 // 代码复 2 次以上的抽离
        }
      }
    }
  }

}
