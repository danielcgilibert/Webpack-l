const javaScriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
      plugins: ["@babel/plugin-proposal-optional-chaining"],
    },
  },
};
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env, {mode}) => ({
  output: {
    filename: 'app.[hash].js'
  },
  module: {
    rules: [javaScriptRules]
  },
  plugins: [
    mode === 'production' ? 
    new CompressionPlugin() 
    :
    new HtmlWebpackPlugin({
      title: 'Webpack',
      template: 'src/index.html'
    }),
  ]
});
