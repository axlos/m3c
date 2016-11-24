module.exports = {
  context: __dirname + '/client',
  entry: './js/app.module.js',
  output: {
    path: __dirname + '/client/dist',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
