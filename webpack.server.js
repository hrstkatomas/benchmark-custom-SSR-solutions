const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./react-app.node.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              onlyCompileBundledFiles: true,
            },
          },
        ],
      },
    ],
  },
};
