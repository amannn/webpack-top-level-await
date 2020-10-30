module.exports = {
  target: ['web', 'es5'],
  experiments: {
    topLevelAwait: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
