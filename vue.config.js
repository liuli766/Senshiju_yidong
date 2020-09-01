module.exports = {
  outputDir: 'shenshiju', // shenshiju 
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "server": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
 

}
