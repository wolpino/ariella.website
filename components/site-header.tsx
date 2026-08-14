import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";
import type { ThemeId } from "@/themes";

export function SiteHeader({ initialTheme }: { initialTheme: ThemeId }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          {site.name}
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="site-header__link">
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle initialTheme={initialTheme} />
      </div>
    </header>
  );
}
