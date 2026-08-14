import Link from "next/link";
import { PhotoStrip } from "@/components/photo-strip";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__content">
        <h1 id="hero-heading" className="hero__brand">
          <span className="hero__title-pro">{site.tagline}</span>
          <span className="hero__title-fun">{site.funHeading}</span>
        </h1>
        <p className="hero__sub-fun">{site.funTopics.join(" · ")}</p>
        <div className="hero__actions">
          <Link href="/projects" className="btn btn--primary">
            View projects
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Contact
          </Link>
        </div>
      </div>
      <PhotoStrip />
    </section>
  );
}
