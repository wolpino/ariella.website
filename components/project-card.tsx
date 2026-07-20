import Link from "next/link";
import { categoryLabels, type Project } from "@/content/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const isSoon = project.status === "coming-soon";
  const className = `project-card${isSoon ? " project-card--soon" : ""}`;

  const body = (
    <>
      <div className="project-card__meta">
        <span className="project-card__category">
          {categoryLabels[project.category]}
        </span>
        {isSoon ? (
          <span className="project-card__status">Coming soon</span>
        ) : project.external ? (
          <span className="project-card__status">External</span>
        ) : null}
      </div>
      <h2 className="project-card__title">{project.title}</h2>
      <p className="project-card__summary">{project.summary}</p>
      {!isSoon ? (
        <span className="project-card__cta">
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
