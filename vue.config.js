// module.exports = {

//     //axios域代理，解决axios跨域问题

//     devServer: {
//         overlay: {
//             warnings: false,
//             errors: false
//          },
//          lintOnSave: false,
//         // open: true,
//         // host: 'http://192.168.1.3',
//         // port: 8081,
//         // https: false,
//         // hotOnly: false,
//         proxy: { // 配置跨域
//             '/api': {
//                 //要访问的跨域的api的域名
//                 target: 'http://villa.jisapp.cn',
//                 ws: true,
//                 changOrigin: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         },
//     }
// }