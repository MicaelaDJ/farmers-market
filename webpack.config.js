const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {

  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  externals: {
    'react': 'React'
},

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }
};

// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
// for (var i = 0; i < array.length; i++) {
//   array[i]
// } {
// 
// }
// while (true) {
// 
// }