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
      import: "./src/video-downloader.ts",
      filename: "video-downloader.js"
    },
    serve: {
      import: "./src/serve-js-server/index.ts",
      filename: "serve-js-server.js"
    },
    externalModule: {
      import: "./src/external-module.ts",
      filename: "external.js"
    }
  },
  optimization: {
    minimize: false
  },
  target: "node",
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs-module"
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
