const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude
      .add(path.resolve('src/icons'));
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: [path.resolve('src/icons')],
          options: {
            symbolId: 'icon-[name]',
          },
        },
      ],
    },
  },
  baseUrl: './',
  devServer: {
    proxy: {
      '/rest': {
        target: 'http://47.93.235.47:8088/mockjsdata/2',
        ws: true,
        changeOrigin: true,
      },
      '/api': {
        // target: 'http://sxqfwl2015.6655.la:20083/',
        // target: 'http://47.92.204.199:8061/',
        // target: 'http://192.168.20.31:8090/',
        // target: 'http://192.168.3.160:8091/',
        // target: 'http://192.168.20.26:8090/',
        // target: 'http://192.168.3.188:8084/',
        // target: 'http://192.168.20.34:8090/',
        target: 'http://192.168.10.89:8090/',
        pathRewrite: {
          '^/api': '',
        },
      },
      '/edu': {
        target: 'http://192.168.10.89:8090/',
        pathRewrite: {
          '^/edu': '',
        },
      },
    },
  },
};
