var webpack = require('webpack');

module.exports = {
    module: {
        rules: [
          {
           test: /\.svg$/,
           loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
          },
        ],
      },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      }),
    ]
  }
};