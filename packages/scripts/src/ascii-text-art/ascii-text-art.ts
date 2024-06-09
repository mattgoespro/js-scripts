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
  let characterAscii = "";
  const letterAsciiLines = asciiSymbols.split("\n");

  const startIndex = characterIndex * symbolFontSpec.height;

  for (let i = startIndex + 1; i < startIndex + symbolFontSpec.height + 1; i++) {
    characterAscii += letterAsciiLines[i] + "\n";
  }

  return characterAscii;
}

export function getAsciiText(fontName: keyof typeof FontAlphabets, text: string): string {
  const font = FontAlphabets[fontName];
  const { height, letters } = font;

  // Split the letters string into an array of lines
  const letterLines = letters.split("\n").slice(1); // Skip the initial empty line
  const charMap = new Map<AsciiSymbol, string[]>();

  // Create a map from character to its ASCII art lines
  for (let i = 0; i < SYMBOL_SET.letters.length; i++) {
    const letter = SYMBOL_SET.letters[i];
    const charArt = [];

    for (let j = 0; j < height; j++) {
      charArt.push(letterLines[i * height + j]);
    }

    charMap.set(letter, charArt);
  }

  for (let i = 0; i < SYMBOL_SET.characters.length; i++) {
    const symbol = SYMBOL_SET.characters[i];
    const symbolArt = [];

    for (let j = 0; j < height; j++) {
      symbolArt.push(letterLines[(SYMBOL_SET.letters.length + i) * height + j]);
    }

    charMap.set(symbol, symbolArt);
  }

  // Convert the input text to ASCII art
  const asciiArtLines = Array.from({ length: height }, () => "");

  for (const char of text) {
    const lowerChar = char.toLowerCase() as AsciiSymbol;
    const charArt = charMap.get(lowerChar);

    if (charArt) {
      for (let i = 0; i < height; i++) {
        asciiArtLines[i] += charArt[i] + " ";
      }
    } else {
      // If character is not found, add spaces
      for (let i = 0; i < height; i++) {
        asciiArtLines[i] += " ".repeat(6); // Assuming max width of any character is 5
      }
    }
  }

  return asciiArtLines.join("\n");
}

getAsciiText("Big", "Hello world!");

exports = {};
