module.exports = {
  entry: './src/index.js',
  output: {
    path: './public/javascripts/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
