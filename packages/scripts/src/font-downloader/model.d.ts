import { GoogleFontType } from "./google-fonts";
export interface FontFileDownloadDetails {
    zipName: string;
    manifest: {
        files: FontFile[];
        fileRefs: FontFileRef[];
    };
}
export interface FontFile {
    filename: string;
    contents: string;
}
export interface FontFileRef {
    filename: string;
    url: string;
    date: FontDate;
}
export interface FontDate {
    seconds: number;
    nanos: number;
}
export interface GoogleFonts {
    familyMetadataList: GoogleFont[];
}
export interface GoogleFont {
    family: string;
    displayName?: string;
    category: GoogleFontType;
    fonts: Fonts;
}
type Fonts = {
    [key: string]: {
        thickness: number;
        slant: number;
        width: number;
        lineHeight: number;
    };
};
export {};
