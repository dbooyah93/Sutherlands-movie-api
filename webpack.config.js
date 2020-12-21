const path = require( 'path' );
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
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
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({})
    ]
  };
};

