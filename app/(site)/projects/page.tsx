import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="fun-surface fun-surface--open">
      <div className="page-block">
        <header className="section-head section-head--page">
          <PageTitle>Projects</PageTitle>
          <p className="section-head__open-lede">
            Creative work, code, and apps — live links where they exist,
            placeholders where they are still cooking.
          </p>
        </header>
        <div className="open-accent" aria-hidden="true" />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
