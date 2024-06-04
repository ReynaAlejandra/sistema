const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5001', // Cambia este puerto por el de tu backend
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
})