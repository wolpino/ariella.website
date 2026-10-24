import Link from "next/link";
import { ResumeLink } from "@/components/site/ResumeLink";
import { site } from "@/content/site";

/** Inner-page header. Agent B finishes this. */
export function SiteHeader() {
  return (
    <header className="site-head">
      <Link href="/" className="site-head__home">
        <span className="site-head__name">{site.name}</span>
      </Link>
      <nav className="site-nav" aria-label="Main">
        <Link href="/projects">Projects</Link>
        <ResumeLink>Résumé</ResumeLink>
      </nav>
    </header>
  );
}
