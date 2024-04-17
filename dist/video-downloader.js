(() => {
  "use strict";
  var e = {};
  ((e, o) => {
    Object.defineProperty(o, "__esModule", { value: !0 }),
      (o.getVideoUrl = o.resolveVideoInMillis = o.waitForMillis = o.timeoutAfter = void 0);
    const t = {
      spankbang: /https:\/\/(www\.)?spankbang\.com\/[\w-]+\/(videos?|playlist)\/.*/,
      camwhoresbay: /https:\/\/(www\.)?camwhoresbay\.com\/videos\/[\w\d]+\/.*/,
      "camwhores.tv": /https:\/\/(www\.)?camwhores.tv\/videos\/.*/
    };
    function l(e) {
      var o;
      null != e
        ? ((o = e.currentSrc),
          console.log("                                                                 "),
          console.log("██╗   ██╗██╗██████╗ ███████╗ ██████╗     ███████╗██████╗  ██████╗"),
          console.log("██║   ██║██║██╔══██╗██╔════╝██╔═══██╗    ██╔════╝██╔══██╗██╔════╝"),
          console.log("██║   ██║██║██║  ██║█████╗  ██║   ██║    ███████╗██████╔╝██║     "),
          console.log("╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║   ██║    ╚════██║██╔══██╗██║     "),
          console.log(" ╚████╔╝ ██║██████╔╝███████╗╚██████╔╝    ███████║██║  ██║╚██████╗"),
          console.log("  ╚═══╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝"),
          console.log("                                                                 "),
          console.log(),
          console.log(),
          console.log(),
          console.log(o))
        : alert("Mo video source found.");
    }
    async function s(e) {
      return new Promise((t, l) => {
        Promise.race([
          async () => {
            let e = document.querySelector("video");
            for (; null == e; )
              await (0, o.waitForMillis)(500), (e = document.querySelector("video"));
            return e;
          },
          (0, o.timeoutAfter)(e)
        ])
          .then((e) => {
            t(e);
          })
          .catch(() => l(new Error("Unable to resolve video element.")));
      });
    }
    (o.timeoutAfter = (e) =>
      new Promise((o, t) => setTimeout(() => t(new Error("Timed out.")), e))),
      (o.waitForMillis = (e) => new Promise((o) => setTimeout(o, e))),
      (o.resolveVideoInMillis = s);
    const n = window.location.href;
    o.getVideoUrl = function () {
      Object.values(t).some((e) => e.test(n)) &&
        (t.camwhoresbay.test(n)
          ? (document.querySelector("div.fp-player").click(),
            s(100)
              .then((e) => {
                l(e);
              })
              .catch((e) => console.log(e.message)))
          : s(100)
              .then((e) => {
                l(e);
              })
              .catch((e) => console.log(e.message)));
    };
  })(0, e),
    (module.exports = e);
})();
