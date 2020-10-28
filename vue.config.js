// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/aviasales/'
    : '/',
  assetsDir: '',
  filenameHashing: true,
  productionSourceMap: false
}
