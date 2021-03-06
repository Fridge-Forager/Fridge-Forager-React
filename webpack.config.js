const path = require("path");

const SRC_DIR = path.join(__dirname, "client", "src");
const DIST_DIR = path.join(__dirname, "client", "dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'build.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      }, {
        test: /\.scss$/i,
        use: [{
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "sass-loader",
          options: {
            implementation: require('sass'),
          }
        }],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", '.css'],
  },
};
