import { FontFileDownloadDetails, GoogleFont } from "./model";
export type GoogleFontType = "Sans Serif" | "Serif" | "Display" | "Handwriting" | "Monospace";
export declare function getGoogleFonts(): Promise<GoogleFont[]>;
export declare function getFontDownloadDetails(fontFamily: string): Promise<FontFileDownloadDetails>;
