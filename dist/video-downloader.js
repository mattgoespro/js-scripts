/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3843:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVideoUrl = exports.resolveVideoInMillis = exports.waitForMillis = exports.timeoutAfter = void 0;
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
const timeoutAfter = (time) => new Promise((_, reject) => setTimeout(() => reject(new Error("Timed out.")), time));
exports.timeoutAfter = timeoutAfter;
const waitForMillis = (time) => new Promise((resolve) => setTimeout(resolve, time));
exports.waitForMillis = waitForMillis;
async function resolveVideoInMillis(time) {
    return new Promise((resolve, reject) => {
        const resolveVideoElement = async () => {
            let videoElement = document.querySelector("video");
            while (videoElement == null) {
                await (0, exports.waitForMillis)(500);
                videoElement = document.querySelector("video");
            }
            return videoElement;
        };
        Promise.race([resolveVideoElement, (0, exports.timeoutAfter)(time)])
            .then((el) => {
            resolve(el);
        })
            .catch(() => reject(new Error("Unable to resolve video element.")));
    });
}
exports.resolveVideoInMillis = resolveVideoInMillis;
const pageUrl = window.location.href;
function getVideoUrl() {
    if (Object.values(MATCH_URL_REGEX_MAP).some((urlPattern) => urlPattern.test(pageUrl))) {
        if (MATCH_URL_REGEX_MAP["camwhoresbay"].test(pageUrl)) {
            document.querySelector("div.fp-player").click();
            resolveVideoInMillis(100)
                .then((videoElement) => {
                getVideoSource(videoElement);
            })
                .catch((error) => console.log(error.message));
        }
        else {
            resolveVideoInMillis(100)
                .then((videoElement) => {
                getVideoSource(videoElement);
            })
                .catch((error) => console.log(error.message));
        }
    }
}
exports.getVideoUrl = getVideoUrl;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[3843](0, __webpack_exports__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;