"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ResumeLink } from "@/components/site/ResumeLink";
import { site } from "@/content/site";

/** The editions archive is reached from its card on Projects, so it counts as Projects. */
function isProjectsPath(pathname: string) {
  return (
    pathname === "/projects" ||
    pathname.startsWith("/projects/") ||
    pathname === "/editions" ||
    pathname.startsWith("/editions/")
  );
}

/** Inner-page header: the open notebook home link with the name, and the menu. */
export function SiteHeader() {
  const pathname = usePathname() ?? "";
  const onProjects = isProjectsPath(pathname);

  return (
    <header className="site-head">
      <Link href="/" className="site-head__home">
        <span className="home-stack">
          <span className="home-open" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="home-word">Home</span>
        </span>
        <span className="site-head__name">{site.name}</span>
      </Link>
      <nav className="site-nav" aria-label="Main">
        <Link href="/projects" aria-current={onProjects ? "page" : undefined}>
          Projects
        </Link>
        <ResumeLink>Résumé</ResumeLink>
      </nav>
    </header>
  );
}
