const MATCH_URL_REGEX_MAP = {
  spankbang: /https:\/\/(www\.)?spankbang\.com\/[\w-]+\/(videos?|playlist)\/.*/,
  camwhoresbay: /https:\/\/(www\.)?camwhoresbay\.com\/videos\/[\w\d]+\/.*/,
  "camwhores.tv": /https:\/\/(www\.)?camwhores.tv\/videos\/.*/
};

function log(message) {
  console.log("                                                                 ");
  console.log("██╗   ██╗██╗██████╗ ███████╗ ██████╗     ███████╗██████╗  ██████╗");
  console.log("██║   ██║██║██╔══██╗██╔════╝██╔═══██╗    ██╔════╝██╔══██╗██╔════╝");
  console.log("██║   ██║██║██║  ██║█████╗  ██║   ██║    ███████╗██████╔╝██║     ");
  console.log("╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║   ██║    ╚════██║██╔══██╗██║     ");
  console.log(" ╚████╔╝ ██║██████╔╝███████╗╚██████╔╝    ███████║██║  ██║╚██████╗");
  console.log("  ╚═══╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝");
  console.log("                                                                 ");
  console.log();
  console.log();
  console.log();
  console.log(message);
}

function getVideoSource(videoElement) {
  if (videoElement == null) {
    alert("Mo video source found.");
    return;
  }

  log(videoElement.currentSrc);
}

export const timeoutAfter = (time: number) =>
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timed out.")), time));

export const waitForMillis = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export async function resolveVideoInMillis(time: number) {
  return new Promise((resolve, reject) => {
    const resolveVideoElement = async () => {
      let videoElement = document.querySelector("video");

      while (videoElement == null) {
        await waitForMillis(500);
        videoElement = document.querySelector("video");
      }

      return videoElement;
    };

    Promise.race([resolveVideoElement, timeoutAfter(time)])
      .then((el) => {
        resolve(el);
      })
      .catch(() => reject(new Error("Unable to resolve video element.")));
  });
}

const pageUrl = window.location.href;

export function getVideoUrl() {
  if (Object.values(MATCH_URL_REGEX_MAP).some((urlPattern) => urlPattern.test(pageUrl))) {
    if (MATCH_URL_REGEX_MAP["camwhoresbay"].test(pageUrl)) {
      document.querySelector<HTMLDivElement>("div.fp-player").click();
      resolveVideoInMillis(100)
        .then((videoElement) => {
          getVideoSource(videoElement);
        })
        .catch((error) => console.log(error.message));
    } else {
      resolveVideoInMillis(100)
        .then((videoElement) => {
          getVideoSource(videoElement);
        })
        .catch((error) => console.log(error.message));
    }
  }
}
