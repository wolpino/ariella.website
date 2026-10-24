import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

/** One project: a straight white-border print, the gold kind line, title, and summary. */
export function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <span className="snap project-card__print">
        {project.image ? (
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            sizes="(max-width: 900px) 50vw, 25vw"
          />
        ) : (
          <span className="project-card__empty" aria-hidden="true">
            next project
          </span>
        )}
      </span>
      <span className="project-card__kind">{project.kind}</span>
      <h2 className="project-card__title">{project.title}</h2>
      <p className="project-card__summary">{project.summary}</p>
    </>
  );

  if (!project.href) {
    return <div className="project-card">{body}</div>;
  }

  if (project.external) {
    return (
      <a
        href={project.href}
        className="project-card project-card--link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={project.href} className="project-card project-card--link">
      {body}
    </Link>
  );
}
