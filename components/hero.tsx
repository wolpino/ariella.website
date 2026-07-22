import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="composition-label composition-label--hero">
        <p className="composition-label__brand">{site.name}</p>
        <p className="composition-label__rule" aria-hidden="true" />
        <h1 id="hero-heading" className="composition-label__title">
          Composition book
        </h1>
        <p className="composition-label__subtitle">
          A hub for projects — creative and code
        </p>
        <div className="composition-label__lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="composition-label__lede">{site.tagline}</p>
        <div className="hero__actions">
          <Link href="/projects" className="btn btn--primary">
            View projects
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
