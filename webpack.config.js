var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //the first item in array is the polyfill we installed
  //babel will make sure our entire app has everything included in babel/polyfill which includes Promise api/primitive so inside of our app we can now use promises
  //babel-polyfill includes support for async await
  entry: ["@babel/polyfill", "whatwg-fetch", "./app/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
