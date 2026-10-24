import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="fun-surface fun-surface--open">
      <div className="page-block page-block--narrow">
        <header className="section-head section-head--page">
          <h1>Contact</h1>
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-list__label">{item.label}</span>
                  <span className="contact-list__value">
                    {item.href} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
