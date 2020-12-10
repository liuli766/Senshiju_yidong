module.exports = {
  outputDir: 'shenshiju', // shenshiju 
  devServer: {
  //   proxy: {
  //     '/api': {
  //         target: 'http://villa.jisapp.cn', //接口域名
  //         changeOrigin: true,             //是否跨域
  //         ws: true,                       //是否代理 websockets
  //         secure: true,                   //是否https接口
  //         pathRewrite: {                  //路径重置
  //             '^/api': ''
  //         }
  //     }
  // }
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  },
  productionSourceMap: false,

}
