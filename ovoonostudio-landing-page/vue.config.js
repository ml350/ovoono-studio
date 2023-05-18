const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('gltf')
      .test(/\.gltf$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();

    config.module
      .rule('obj')
      .test(/\.obj$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '3600',
      'Access-Control-Expose-Headers': 'Content-Length'
    }
  }
})
