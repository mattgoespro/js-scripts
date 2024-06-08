declare const FontAlphabets: {
    Big: {
        height: number;
        letters: string;
        characters: string;
    };
};
export declare function getAsciiText(fontName: keyof typeof FontAlphabets, text: string): string;
export {};
