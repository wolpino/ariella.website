import Link from "next/link";
import { ResumeLink } from "@/components/site/ResumeLink";
import { site } from "@/content/site";

/** The closed composition notebook: marble cover, white label, three Dymo tapes. */
export function NotebookCover() {
  return (
    <div className="cover-book">
      <div className="cover-label">
        <p className="cover-kind">Composition book</p>
        <p className="cover-field">
          <span>Name</span>
          <b>{site.cover.name}</b>
        </p>
        <p className="cover-field">
          <span>Subject</span>
          <b>{site.cover.subject}</b>
        </p>
        <p className="cover-field">
          <span>Also</span>
          <b className="cover-field__sm">{site.cover.also}</b>
        </p>
      </div>
      <nav className="cover-tapes" aria-label="Main">
        <Link href="/projects" className="tape tape--red tape--1">
          Projects
        </Link>
        <ResumeLink className="tape tape--blue tape--2">Résumé</ResumeLink>
        <a
          href={site.linkedIn}
          className="tape tape--green tape--3"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  );
}
