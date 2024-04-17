// / Thunder Client autocompletion on tc object
// eslint-disable-next-line @typescript-eslint/triple-slash-reference

import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TsConfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration } from "webpack";

const config: Configuration = {
  mode: "production",
  entry: {
    utils: {
      import: "./src/utils.ts",
      filename: "video-downloader.js"
    }
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsConfigPathsWebpackPlugin({
        configFile: "./tsconfig.json"
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  devtool: false,
  plugins: [new CleanWebpackPlugin({ verbose: true })]
};

export default config;
