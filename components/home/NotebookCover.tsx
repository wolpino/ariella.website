import Link from "next/link";
import { ResumeLink } from "@/components/site/ResumeLink";
import { site } from "@/content/site";
import { TapePhoto } from "./TapePhoto";

/* The bowed label frame, copied from components/notebook/CompositionLabel.tsx (edition 2). */
function BowedFrame() {
  return (
    <svg
      className="cover-label__frame"
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#fff"
        d="M8 46C90 8 150 3 200 3C250 3 310 8 392 46V254C310 292 250 297 200 297C150 297 90 292 8 254Z"
      />
      <path
        fill="none"
        stroke="#111"
        strokeWidth="3"
        d="M22 54C98 18 154 12 200 12C246 12 302 18 378 54V246C302 282 246 288 200 288C154 288 98 282 22 246Z"
      />
      <path
        fill="none"
        stroke="#111"
        strokeWidth="1.35"
        d="M34 64C106 30 158 24 200 24C242 24 294 30 366 64V236C294 270 242 276 200 276C158 276 106 270 34 236Z"
      />
    </svg>
  );
}

/** A cover tape's contents: the live word, plus the tape photo when one is configured. */
function TapeContents({ word, photo }: { word: string; photo?: string }) {
  return (
    <>
      <span className="tape__text">{word}</span>
      {photo ? <TapePhoto src={photo} /> : null}
    </>
  );
}

/** The closed composition notebook (edition 2 look): marble cover, bowed label, sticky, three Dymo tapes. */
export function NotebookCover() {
  const photos = site.tapePhotos;

  return (
    <div className="cover-book">
      <span className="cover-spine" aria-hidden="true" />

      <div className="cover-label">
        <BowedFrame />
        <div className="cover-label__in">
          <p className="cover-field cover-field--name">
            <span>Name</span>
            <b>{site.cover.name}</b>
          </p>
          <p className="cover-field cover-field--subject">
            <span>Subject</span>
            <b>{site.cover.subject}</b>
          </p>
          <p className="cover-field">
            <span>Also</span>
            <b>{site.cover.also}</b>
          </p>
          <p className="cover-label__meta" aria-hidden="true">
            200 pages • 100 sheets · College Ruled
          </p>
        </div>
      </div>

      <div className="home-sticky">
        <p>
          This website <br />
          is a work in <br />
          progress! <br />
          Check <br />
          back soon...
        </p>
        <small>last updated: {site.lastUpdated}</small>
      </div>

      <nav className="cover-tapes" aria-label="Main">
        <Link href="/projects" className="tape tape--red tape--1">
          <TapeContents word="Projects" photo={photos.projects} />
        </Link>
        <ResumeLink className="tape tape--blue tape--2">
          <TapeContents word="Résumé" photo={photos.resume} />
        </ResumeLink>
        <a
          href={site.linkedIn}
          className="tape tape--green tape--3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TapeContents word="LinkedIn" photo={photos.linkedIn} />
        </a>
      </nav>
    </div>
  );
}
