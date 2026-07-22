import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.status === "live").slice(0, 2);

  return (
    <div className="fun-surface fun-surface--cover">
      <Hero />
      <section className="home-featured" aria-labelledby="featured-heading">
        <div className="section-head">
          <h2 id="featured-heading" className="section-head__cover-title">
            Featured
          </h2>
          <p>Live work on the cover — open a label to visit.</p>
        </div>
        <div className="project-grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
