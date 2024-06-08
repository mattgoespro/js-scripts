const Big = {
  height: 6,
  letters: `

    /\\
   /  \\
  / /\\ \\
 / ____ \\
/_/    \\_\\
 ____
|  _ \\
| |_) |
|  _ <
| |_) |
|____/
  _____
 / ____|
| |
| |
| |____
 \\_____|
 _____
|  __ \\
| |  | |
| |  | |
| |__| |
|_____/
 ______
|  ____|
| |__
|  __|
| |____
|______|
 ______
|  ____|
| |__
|  __|
| |
|_|
  _____
 / ____|
| |  __
| | |_ |
| |__| |
 \\_____|
 _    _
| |  | |
| |__| |
|  __  |
| |  | |
|_|  |_|
 _____
|_   _|
  | |
  | |
 _| |_
|_____|
      _
     | |
     | |
 _   | |
| |__| |
 \\____/
 _  __
| |/ /
| ' /
|  <
| . \\
|_|\\_\\
 _
| |
| |
| |
| |____
|______|
 __  __
|  \\/  |
| \\  / |
| |\\/| |
| |  | |
|_|  |_|
 _   _
| \\ | |
|  \\| |
| . \` |
| |\\  |
|_| \\_|
  ____
 / __ \\
| |  | |
| |  | |
| |__| |
 \\____/
 _____
|  __ \\
| |__) |
|  ___/
| |
|_|
  ____
 / __ \\
| |  | |
| |  | |
| |__| |
 \\___\\_\\
 _____
|  __ \\
| |__) |
|  _  /
| | \\ \\
|_|  \\_\\
  _____
 / ____|
| (___
 \\___ \\
 ____) |
|_____/
 _______
|__   __|
   | |
   | |
   | |
   |_|
 _    _
| |  | |
| |  | |
| |  | |
| |__| |
 \\____/
__      __
\\ \\    / /
 \\ \\  / /
  \\ \\/ /
   \\  /
    \\/
__          __
\\ \\        / /
 \\ \\  /\\  / /
  \\ \\/  \\/ /
   \\  /\\  /
    \\/  \\/
__   __
\\ \\ / /
 \\ V /
  > <
 / . \\
/_/ \\_\\
__     __
\\ \\   / /
 \\ \\_/ /
  \\   /
   | |
   |_|
 ______
|___  /
   / /
  / /
 / /__
/_____|
`,
  characters: `
 _
| |
| |
| |
|_|
(_)
 ___
|__ \\
   ) |
  / /
 |_|
 (_)



 _
( )
|/
 _ _
( | )
 V V



 _
( )
|/




 _
(_)
 _
(_)


 _
(_)
 _
(_)

 _
( )
|/
   _  _
 _| || |_
|_  __  _|
 _| || |_
|_  __  _|
  |_||_|

  ___
 ( _ )
 / _ \\/\\
| (_>  <
 \\___/\\/
    _
 /\\| |/\\
 \\ \` ' /
|_     _|
 / , . \\
 \\/|_|\\/
 __
/ /
| |
| |
| |
\\_\\
 __
\\ \\
 | |
 | |
 | |
 /_/


 ______
|______|






 ______
|______|
   __
  / /
 / /
< <
\\ \\
 \\_\\
__
\\ \\
 \\ \\
  > >
 / /
/_/
     __
    / /
   / /
  / /
 / /
/_/
`
};

const FontAlphabets = {
  Big
};

const SYMBOL_SET = {
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
} as const;

type AsciiSymbol = (typeof SYMBOL_SET)[keyof typeof SYMBOL_SET][number];

function getAsciiCharacter(
  fontName: keyof typeof FontAlphabets,
  symbol: AsciiSymbol,
  wordSpacing = 1
): string {
  let symbolType: "letters" | "characters" = null;

  if (SYMBOL_SET.characters.includes(symbol as (typeof SYMBOL_SET)["characters"][number])) {
    if (symbol === " ") {
      return "\t"
        .repeat(FontAlphabets[fontName].height * wordSpacing)
        .split("")
        .join("\n");
    }

    symbolType = "characters";
  } else {
    symbolType = "letters";
  }

  const symbolFontSpec = FontAlphabets[fontName];
  const characterIndex = symbolFontSpec[symbolType].indexOf(symbol);
  const asciiSymbols = symbolFontSpec[symbolType];
  console.log("symbol type:", symbolType);
  console.log("character index:", characterIndex);
  let characterAscii = "";
  const letterAsciiLines = asciiSymbols.split("\n");

  const startIndex = characterIndex * symbolFontSpec.height;

  for (let i = startIndex + 1; i < startIndex + symbolFontSpec.height + 1; i++) {
    characterAscii += letterAsciiLines[i] + "\n";
  }

  return characterAscii;
}

console.log(getAsciiCharacter("Big", "!"));

export function getAsciiText(fontName: keyof typeof FontAlphabets, text: string): string {
  const letters = text.split("");
  const characters = letters.map((letter) =>
    getAsciiCharacter(fontName, letter as (typeof SYMBOL_SET)[keyof typeof SYMBOL_SET][number])
  );

  const characterLines = characters.map((character) => {
    const lines = character.split("\n");
    const maxLength = Math.max(...lines.map((line) => line.length));
    return lines.map((line) => line.padEnd(maxLength, " "));
  });

  const wordLines = characterLines[0].map((_, lineIndex) =>
    characterLines.map((character) => character[lineIndex]).join(" ")
  );

  return wordLines.join("\n");
}
