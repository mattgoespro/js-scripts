import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import merge from "webpack-merge";
import baseConfig from "../../webpack.config";

const config = baseConfig(path.join(__dirname, "tsconfig.json"));
const videoDownloaderOutputDir = "video-downloader";

export default merge<Configuration>(
  {
    entry: {
      vdl: {
        import: "./src/video-downloader.ts",
        filename: `${videoDownloaderOutputDir}/vdl.js`
      }
    },
    output: {
      path: path.join(config.output.path, "scripts")
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, "bin", "youtube-dl.exe"),
            to: videoDownloaderOutputDir
          }
        ]
      }),
      new DefinePlugin({
        "process.env.YTDL_EXE": JSON.stringify(path.join(__dirname, "bin", "youtube-dl.exe"))
      })
    ]
  },
  config
);
