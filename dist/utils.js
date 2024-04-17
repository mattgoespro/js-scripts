(() => {
  "use strict";
  ((e, o) => {
    o.x = o.mN = void 0;
    (o.mN = (e) => new Promise((o, i) => setTimeout(() => i(new Error("Timed out.")), e))),
      (o.x = (e) => new Promise((o) => setTimeout(o, e)));
    window.location.href;
  })(0, {});
})();
