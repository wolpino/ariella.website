import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="page-block">
      <header className="section-head section-head--page">
        <h1>Projects</h1>
        <p>
          Creative work, code, and apps — live links where they exist, placeholders
          where they are still cooking.
        </p>
      </header>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
