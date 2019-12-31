const BaseUrl = process.env.VUE_APP_BASE_URL

module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
  devServer: {
    open: true, // 有效值（true||false) npm run serve后,是否打开浏览器
    // host: 'localhost', // 配置端口号
    // port: 8080,
    // https: false, // 有效值(true||false)
    // hotOnly: false, // 热更新
    proxy: {
      '/api': { // 请求称号
        target: BaseUrl, // 请求的接口
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}