import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.status === "live").slice(0, 2);

  return (
    <>
      <Hero />
      <section className="home-featured" aria-labelledby="featured-heading">
        <div className="section-head">
          <h2 id="featured-heading">Featured</h2>
          <p>Live work you can open now. More on the projects page.</p>
        </div>
        <div className="project-grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
