const path = require( 'path' );
module.exports = {
  // entry: path.resolve(`${__dirname}/client/src/index.jsx`),
  entry: './client/src/index.jsx',
  output: {
    path: path.join( __dirname, '/client/dist' ),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)?$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}