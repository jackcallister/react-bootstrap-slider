module.exports = {
  entry: './components/main.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
