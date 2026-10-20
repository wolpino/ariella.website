import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="fun-surface fun-surface--open">
      <div className="page-block page-block--narrow">
        <header className="section-head section-head--page">
          <PageTitle>Contact</PageTitle>
          <p className="section-head__open-lede">
            Reach out for work, collabs, or just to say hi.
          </p>
        </header>
        <div className="open-sheet">
          <ul className="contact-list">
            {site.socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="contact-list__link"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="contact-list__label">{item.label}</span>
                  <span className="contact-list__value">
                    {item.href.replace(/^mailto:/, "")}
                    {item.external ? " ↗" : ""}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="contact-note">
            Prefer a different email or social? Update{" "}
            <code>content/site.ts</code> — placeholders are intentional for MVP.
          </p>
        </div>
      </div>
    </div>
  );
}
