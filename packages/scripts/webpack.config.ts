import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import merge from "webpack-merge";
import baseConfig from "../../webpack.config";

const config = baseConfig(path.join(__dirname, "tsconfig.json"));
const videoDownloaderOutputDir = "video-downloader";

export default merge<Configuration>(
  // configuration that binds exported module functions to the global scope
  {
    output: {
      library: "TextToAscii",
      libraryTarget: "umd",
      globalObject: "this"
    },
    plugins: [
      new DefinePlugin({
        __VIDEO_DOWNLOADER_OUTPUT_DIR__: JSON.stringify(videoDownloaderOutputDir)
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, videoDownloaderOutputDir),
            to: videoDownloaderOutputDir
          }
        ]
      })
    ]
  },
  config
);
