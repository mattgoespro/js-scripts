(() => {
  "use strict";
  var _ = {};
  (() => {
    var n = _;
    Object.defineProperty(n, "__esModule", { value: !0 }), (n.getAsciiText = void 0);
    const e = {
        Big: {
          height: 6,
          letters:
            "\n\n    /\\\n   /  \\\n  / /\\ \\\n / ____ \\\n/_/    \\_\\\n ____\n|  _ \\\n| |_) |\n|  _ <\n| |_) |\n|____/\n  _____\n / ____|\n| |\n| |\n| |____\n \\_____|\n _____\n|  __ \\\n| |  | |\n| |  | |\n| |__| |\n|_____/\n ______\n|  ____|\n| |__\n|  __|\n| |____\n|______|\n ______\n|  ____|\n| |__\n|  __|\n| |\n|_|\n  _____\n / ____|\n| |  __\n| | |_ |\n| |__| |\n \\_____|\n _    _\n| |  | |\n| |__| |\n|  __  |\n| |  | |\n|_|  |_|\n _____\n|_   _|\n  | |\n  | |\n _| |_\n|_____|\n      _\n     | |\n     | |\n _   | |\n| |__| |\n \\____/\n _  __\n| |/ /\n| ' /\n|  <\n| . \\\n|_|\\_\\\n _\n| |\n| |\n| |\n| |____\n|______|\n __  __\n|  \\/  |\n| \\  / |\n| |\\/| |\n| |  | |\n|_|  |_|\n _   _\n| \\ | |\n|  \\| |\n| . ` |\n| |\\  |\n|_| \\_|\n  ____\n / __ \\\n| |  | |\n| |  | |\n| |__| |\n \\____/\n _____\n|  __ \\\n| |__) |\n|  ___/\n| |\n|_|\n  ____\n / __ \\\n| |  | |\n| |  | |\n| |__| |\n \\___\\_\\\n _____\n|  __ \\\n| |__) |\n|  _  /\n| | \\ \\\n|_|  \\_\\\n  _____\n / ____|\n| (___\n \\___ \\\n ____) |\n|_____/\n _______\n|__   __|\n   | |\n   | |\n   | |\n   |_|\n _    _\n| |  | |\n| |  | |\n| |  | |\n| |__| |\n \\____/\n__      __\n\\ \\    / /\n \\ \\  / /\n  \\ \\/ /\n   \\  /\n    \\/\n__          __\n\\ \\        / /\n \\ \\  /\\  / /\n  \\ \\/  \\/ /\n   \\  /\\  /\n    \\/  \\/\n__   __\n\\ \\ / /\n \\ V /\n  > <\n / . \\\n/_/ \\_\\\n__     __\n\\ \\   / /\n \\ \\_/ /\n  \\   /\n   | |\n   |_|\n ______\n|___  /\n   / /\n  / /\n / /__\n/_____|\n",
          characters:
            "\n _\n| |\n| |\n| |\n|_|\n(_)\n ___\n|__ \\\n   ) |\n  / /\n |_|\n (_)\n\n\n\n _\n( )\n|/\n _ _\n( | )\n V V\n\n\n\n _\n( )\n|/\n\n\n\n\n _\n(_)\n _\n(_)\n\n\n _\n(_)\n _\n(_)\n\n _\n( )\n|/\n   _  _\n _| || |_\n|_  __  _|\n _| || |_\n|_  __  _|\n  |_||_|\n\n  ___\n ( _ )\n / _ \\/\\\n| (_>  <\n \\___/\\/\n    _\n /\\| |/\\\n \\ ` ' /\n|_     _|\n / , . \\\n \\/|_|\\/\n __\n/ /\n| |\n| |\n| |\n\\_\\\n __\n\\ \\\n | |\n | |\n | |\n /_/\n\n\n ______\n|______|\n\n\n\n\n\n\n ______\n|______|\n   __\n  / /\n / /\n< <\n\\ \\\n \\_\\\n__\n\\ \\\n \\ \\\n  > >\n / /\n/_/\n     __\n    / /\n   / /\n  / /\n / /\n/_/\n"
        }
      },
      t = {
        letters: [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z"
        ],
        characters: [
          " ",
          ".",
          ",",
          "!",
          "?",
          ":",
          ";",
          '"',
          "'",
          "#",
          "&",
          "*",
          "(",
          ")",
          "-",
          "_",
          "<",
          ">",
          "/"
        ]
      };
    function r(_, n) {
      const r = e[_],
        { height: s, letters: o } = r,
        l = o.split("\n").slice(1),
        c = new Map();
      for (let _ = 0; _ < t.letters.length; _++) {
        const n = t.letters[_],
          e = [];
        for (let n = 0; n < s; n++) e.push(l[_ * s + n]);
        c.set(n, e);
      }
      for (let _ = 0; _ < t.characters.length; _++) {
        const n = t.characters[_],
          e = [];
        for (let n = 0; n < s; n++) e.push(l[(t.letters.length + _) * s + n]);
        c.set(n, e);
      }
      const a = Array.from({ length: s }, () => "");
      for (const _ of n) {
        const n = _.toLowerCase(),
          e = c.get(n);
        if (e) for (let _ = 0; _ < s; _++) a[_] += e[_] + " ";
        else for (let _ = 0; _ < s; _++) a[_] += " ".repeat(6);
      }
      return a.join("\n");
    }
    (n.getAsciiText = r), r("Big", "Hello world!");
  })();
  var n = exports;
  for (var e in _) n[e] = _[e];
  _.__esModule && Object.defineProperty(n, "__esModule", { value: !0 });
})();
