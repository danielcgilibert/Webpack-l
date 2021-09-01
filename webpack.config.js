const HtmlWebpackPlugin = require("html-webpack-plugin");
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

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    // entry: './src/index.js'
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
    module: { rules },
    devServer: {
      //configuración devServer
      open: true, //abre el navegador
      port: 3000,
      client: {
        overlay: true,
      }, // abrir un overlay con errores
      compress: true, //comprime
    },
    devtool: "source-map", // sirve para debuggear el código
  };
};
