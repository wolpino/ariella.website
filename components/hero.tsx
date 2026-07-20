import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__tape" aria-hidden="true" />
      <div className="hero__copy">
        <p className="hero__brand">{site.name}</p>
        <h1 id="hero-heading" className="hero__title">
          A hub for projects — creative and code.
        </h1>
        <p className="hero__lede">{site.tagline}</p>
        <div className="hero__actions">
          <Link href="/projects" className="btn btn--primary">
            View projects
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Contact
          </Link>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__stack">
          <span className="hero__panel hero__panel--a" />
          <span className="hero__panel hero__panel--b" />
          <span className="hero__panel hero__panel--c" />
        </div>
      </div>
    </section>
  );
}
