import path from "path";
import TsConfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration } from "webpack";

export default (tsConfigPath: string): Configuration => {
  const packageDir = path.dirname(tsConfigPath);
  const packagePath = path.join(packageDir, "package.json");
  const packageName = require(packagePath).name;

  if (!packageName) {
    throw new Error(`${packageDir}: package.json must have a name field`);
  }

  return {
    mode: "production",
    target: "node",
    output: {
      path: path.join(__dirname, "dist", packageName),
      libraryTarget: "commonjs"
    },
    resolve: {
      extensions: [".ts", ".js"],
      plugins: [
        new TsConfigPathsWebpackPlugin({
          configFile: tsConfigPath
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
    devtool: false
  };
};
