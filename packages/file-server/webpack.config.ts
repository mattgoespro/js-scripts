import path from "path";
import { Configuration } from "webpack";
import baseConfig from "../../webpack.config";
import merge from "webpack-merge";

const config = baseConfig(path.join(__dirname, "tsconfig.json"));

export default merge<Configuration>(
  {
    target: "node",
    entry: "./src/file-server.ts",
    output: {
      path: path.join(config.output.path, "file-server"),
      filename: "file-server.js"
    }
  },
  config
);
