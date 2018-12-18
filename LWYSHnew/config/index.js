// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/jdclwysh/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    host: '192.168.1.212',
    port: 8089,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    // assetsPublicPath: '/',
      proxyTable: {   //解决跨域
          '/api': {
              //target: 'http://192.168.1.222:8080/a/',//设置你调用的接口域名和端口号
              // target: 'http://192.168.1.26:8069/api',//设置你调用的接口域名和端口号
              target: 'http://192.168.1.27:8069/api',//设置你调用的接口域名和端口号
              // target: 'http://192.168.1.27:8069/zpk/api',//设置你调用的接口域名和端口号
              changeOrigin: true,     //跨域
              pathRewrite: {
                  '^/api': ''          //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
              }
          }
      },
    //   env: require('./dev.env'),
    //   port: 8084,
    //   autoOpenBrowser: true,
    //   assetsSubDirectory: 'static',
    //   assetsPublicPath: '/',
    //   proxyTable: {   //解决跨域
    //
    //   },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
