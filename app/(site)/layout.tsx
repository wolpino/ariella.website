import { cookies } from "next/headers";
import { SiteHeader } from "@/components/site-header";
import { isThemeId, type ThemeId } from "@/themes";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const raw = cookieStore.get("ariella-theme")?.value;
  const initialTheme: ThemeId = isThemeId(raw) ? raw : "professional";

  return (
    <>
      <SiteHeader initialTheme={initialTheme} />
      <main className="site-main">{children}</main>
    </>
  );
}
