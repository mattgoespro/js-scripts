import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TsConfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration, DefinePlugin } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

const videoDownloaderOutputDir = "video-downloader/";

const config: Configuration = {
  mode: "production",
  entry: {
    serve: {
      import: "./src/file-server/index.ts",
      filename: "file-server.js"
    },
    vdl: {
      import: "./src/video-downloader.ts",
      filename: `${videoDownloaderOutputDir}/vdl.js`
    }
  },
  optimization: {
    minimize: false
  },
  target: "node",
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs"
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "bin/youtube-dl.exe",
          to: videoDownloaderOutputDir
        }
      ]
    }),
    new CleanWebpackPlugin({ verbose: true }),
    new DefinePlugin({
      "process.env.YTDL_EXE": JSON.stringify(path.join(__dirname, "bin", "youtube-dl.exe"))
    })
  ]
};

export default config;
