import Link from "next/link";
import { categoryLabels, type Project } from "@/content/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const isSoon = project.status === "coming-soon";
  const className = `composition-label composition-label--card project-card${
    isSoon ? " project-card--soon" : ""
  }`;

  const body = (
    <>
      <div className="composition-label__meta">
        <span>{categoryLabels[project.category]}</span>
        {isSoon ? <span>Coming soon</span> : null}
        {!isSoon && project.external ? <span>External</span> : null}
      </div>
      <h2 className="composition-label__title composition-label__title--card">
        {project.title}
      </h2>
      <div className="composition-label__lines" aria-hidden="true">
        <span />
        <span />
      </div>
      <p className="composition-label__lede">{project.summary}</p>
      {!isSoon ? (
        <span className="composition-label__cta">
          {project.external ? "Open project" : "View"} →
        </span>
      ) : null}
    </>
  );

  if (isSoon) {
    return <article className={className}>{body}</article>;
  }

  if (project.external) {
    return (
      <a
        className={className}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return (
    <Link className={className} href={project.href}>
      {body}
    </Link>
  );
}
