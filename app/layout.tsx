import type { Metadata } from "next";
import { cookies } from "next/headers";
import {
  Fraunces,
  Source_Sans_3,
  Syne,
  DM_Sans,
  Caveat,
  Geist,
  Permanent_Marker,
  Sofia_Sans_Condensed,
  Source_Serif_4,
  Special_Elite,
  Walter_Turncoat,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { getThemeInitScript } from "@/lib/theme-script";
import { isThemeId, type ThemeId } from "@/themes";
import "./globals.css";

const displayProfessional = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-professional",
  display: "swap",
});

const bodyProfessional = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-professional",
  display: "swap",
});

const displayFun = Syne({
  subsets: ["latin"],
  variable: "--font-display-fun",
  display: "swap",
});

const bodyFun = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body-fun",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const typewriter = Special_Elite({
  weight: "400",
  variable: "--font-typewriter",
  subsets: ["latin"],
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const marker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
});

const pen = Walter_Turncoat({
  weight: "400",
  variable: "--font-pen",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const dymo = Sofia_Sans_Condensed({
  weight: "800",
  variable: "--font-dymo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ariella Wolpin",
    template: "%s · Ariella Wolpin",
  },
  description:
    "Portfolio and project hub — design, photography, and code.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const raw = cookieStore.get("ariella-theme")?.value;
  const initialTheme: ThemeId = isThemeId(raw) ? raw : "professional";

  const fontVars = [
    displayProfessional.variable,
    bodyProfessional.variable,
    displayFun.variable,
    bodyFun.variable,
    geistSans.variable,
    typewriter.variable,
    hand.variable,
    marker.variable,
    pen.variable,
    serif.variable,
    dymo.variable,
  ].join(" ");

  return (
    <html
      lang="en"
      data-theme={initialTheme}
      className={fontVars}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: getThemeInitScript() }}
        />
      </head>
      <body>
        <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
