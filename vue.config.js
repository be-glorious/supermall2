module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [], //åįžå
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