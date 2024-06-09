declare const Big: {
    height: number;
    letters: string;
    characters: string;
};
declare const FontAlphabets: {
    Big: {
        height: number;
        letters: string;
        characters: string;
    };
};
declare const SYMBOL_SET: {
    readonly letters: readonly ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    readonly characters: readonly [" ", ".", ",", "!", "?", ":", ";", "\"", "'", "#", "&", "*", "(", ")", "-", "_", "<", ">", "/"];
};
type AsciiSymbol = (typeof SYMBOL_SET)[keyof typeof SYMBOL_SET][number];
declare function getAsciiCharacter(fontName: keyof typeof FontAlphabets, symbol: AsciiSymbol, wordSpacing?: number): string;
declare function getAsciiText(fontName: keyof typeof FontAlphabets, text: string): string;
