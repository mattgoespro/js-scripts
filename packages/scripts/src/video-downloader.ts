import commander, { createArgument, createOption } from "commander";
import os from "os";
import path from "path";
import execSh from "exec-sh";
import { SpawnOptionsWithoutStdio } from "child_process";

export async function downloadVideo(url: string, downloadFilePath: string) {
  const args: SpawnOptionsWithoutStdio = { shell: true };

  await execSh.promise(`youtube-dl ${url} -o ${downloadFilePath}`, args);
}

function createCli() {
  return commander.program
    .addArgument(createArgument("<url>", "URL of the video to download").argRequired())
    .addOption(
      createOption("-d, --directory <directory>", "Output directory.")
        .default(path.join(os.homedir(), "Downloads"), "Default to the user's download directory.")
        .makeOptionMandatory(false)
    )
    .addOption(
      createOption(
        "-f, --filename <filename>",
        "Defaults to the inferred file name from the download URL."
      ).makeOptionMandatory(false)
    )
    .action(
      async (
        url: string,
        options?: { directory?: string; filename?: string; outputFilePath?: string }
      ) => {
        console.log("Downloading video from", url);
        let filename = options.filename;

        if (filename == null && url.endsWith(".m3u8")) {
          const m3u8 = url.split("/").pop();
          filename = [`${m3u8?.split(".")[0]}`, "mp4"].join(".");
        }

        if (filename == null) {
          filename = "video.mp4";
        }

        options.outputFilePath = path.join(options.directory, filename);

        downloadVideo(url, options.outputFilePath);
      }
    );
}

const cli = createCli().parse();
