const path = require("path");

const rulesForJavaScript = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};

const rulesForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const rules = [rulesForJavaScript, rulesForStyles];

module.exports = {
  // entry: './src/index.js'
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules,
  },
};
