import axios from "axios";
import { FontFile, FontFileDownloadDetails, FontFileRef, GoogleFont, GoogleFonts } from "./model";

export type GoogleFontType = "Sans Serif" | "Serif" | "Display" | "Handwriting" | "Monospace";

const client = axios.create({
  baseURL: "https://fonts.google.com",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
  }
});

export async function getGoogleFonts() {
  const fontsRsp = await client.get<GoogleFonts>("metadata/fonts");
  console.log(Object.entries(fontsRsp.data).at(0));
  return fontsRsp.data.familyMetadataList.map<GoogleFont>((font) => {
    const { family, displayName, category, fonts } = font;

    return {
      family,
      displayName,
      category,
      fonts
    };
  });
}

export async function getFontDownloadDetails(fontFamily: string) {
  const fontUrl = `https://fonts.google.com/?family=${fontFamily}`;
  const fontRsp = await client.get<FontFileDownloadDetails>(fontUrl, {
    params: {
      family: fontFamily
    }
  });

  return fontRsp.data;
}

async function main() {
  const fonts = await getGoogleFonts();

  for (const font of fonts) {
    console.log(`Downloading font family ${font.family}...`);

    const details = await getFontDownloadDetails(font.family);
    console.log(`Downloading font family '${font.family}' to ${details.zipName}`);

    console.log(await getFontDownloadDetails(font.family));
  }
}

main();
