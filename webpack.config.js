const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"]
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/styles', to: 'styles' }
    ]),
  ],
};
