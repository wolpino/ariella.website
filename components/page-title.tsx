import type { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode;
  /** Optional small eyebrow above the main title (open notebook only) */
  eyebrow?: string;
};

/** Gold paper + clear tape — Fun open pages only; harmless in Professional. */
export function PageTitle({ children, eyebrow }: PageTitleProps) {
  return (
    <div className="page-title page-title--taped">
      <div className="page-title__tape page-title__tape--top" aria-hidden="true" />
      <div className="page-title__paper">
        {eyebrow ? <p className="page-title__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-title__text">{children}</h1>
      </div>
      <div className="page-title__tape page-title__tape--bottom" aria-hidden="true" />
    </div>
  );
}
