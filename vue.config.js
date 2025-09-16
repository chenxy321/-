const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true, // 设置是否需要转译依赖

  devServer: {
    proxy: {
      '/settings.json': {
        target: 'http://demo.cyt369.com',
        changeOrigin: true,
        pathRewrite: {
          '^/settings.json': '/WebAPI/api/settings.json'
        }
      }
    }
  }
});
