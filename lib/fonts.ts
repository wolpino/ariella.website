import {
  Archivo,
  Caveat,
  DM_Mono,
  Geist,
  Instrument_Serif,
  Permanent_Marker,
  Sofia_Sans_Condensed,
  Source_Serif_4,
  Special_Elite,
  Walter_Turncoat,
} from "next/font/google";

/* The four fonts the site uses. */

const display = Instrument_Serif({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Archivo({
  axes: ["wdth"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
  display: "swap",
});

/*
 * Fonts for the frozen editions, the studio, and the résumé pop-up.
 * Not preloaded: the browser only downloads them on a page that uses them.
 */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const typewriter = Special_Elite({
  weight: "400",
  variable: "--font-typewriter",
  subsets: ["latin"],
  preload: false,
});

const hand = Caveat({
  weight: ["500", "600", "700"],
  variable: "--font-hand",
  subsets: ["latin"],
  preload: false,
});

const pen = Walter_Turncoat({
  weight: "400",
  variable: "--font-pen",
  subsets: ["latin"],
  preload: false,
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  preload: false,
});

const dymo = Sofia_Sans_Condensed({
  weight: "800",
  variable: "--font-dymo",
  subsets: ["latin"],
  preload: false,
});

export const fontVariables = [
  display,
  sans,
  mono,
  marker,
  geistSans,
  typewriter,
  hand,
  pen,
  serif,
  dymo,
]
  .map((font) => font.variable)
  .join(" ");
