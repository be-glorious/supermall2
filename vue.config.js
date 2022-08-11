module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [], //后缀名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}