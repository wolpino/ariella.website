import type { Metadata } from "next";
import { cookies } from "next/headers";
import {
  Fraunces,
  Source_Sans_3,
  Syne,
  DM_Sans,
} from "next/font/google";
import { SiteHeader } from "@/components/site-header";
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
        <ThemeProvider initialTheme={initialTheme}>
          <SiteHeader initialTheme={initialTheme} />
          <main className="site-main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
