import Link from "next/link";
import { ResumeLink } from "@/components/site/ResumeLink";
import { SiteFooter } from "@/components/site/SiteFooter";
import { site } from "@/content/site";

/** Home. Agent A builds the notebook cover here. */
export default function HomePage() {
  return (
    <>
      <main className="site-main desk-surface">
        <h1>{site.name}</h1>
        <nav aria-label="Main">
          <Link href="/projects">Projects</Link>
          <ResumeLink>Résumé</ResumeLink>
          <a href={site.linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
