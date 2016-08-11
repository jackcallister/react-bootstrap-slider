module.exports = {
  entry: './components/main.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'jsx' }
    ]
  }
};
