module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/test/' : '/', // если index.html находится в корневой директории проекта
    // publicPath: './' // если index.html находится в папке public
  devServer: {
    historyApiFallback: true
  }
}