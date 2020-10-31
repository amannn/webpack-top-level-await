module.exports = {
  target: ['web', 'es5'],
  output: {
    filename: 'main.webpack.js'
  },
  experiments: {
    topLevelAwait: true
  }
};
