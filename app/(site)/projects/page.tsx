import type { Metadata } from "next";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
};

/** Agent B builds the project cards here. */
export default function ProjectsPage() {
  return (
    <div className="page">
      <h1 className="page__title">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
