import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="page">
      <h1 className="page__title">Projects</h1>
      <p className="page__lede">Things I&apos;ve built or am building.</p>
      <ul className="project-grid">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
