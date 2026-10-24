import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

/** Show a link without the protocol or a trailing slash. */
function displayUrl(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function ContactPage() {
  return (
    <div className="page">
      <h1 className="page__title">Contact</h1>
      <p className="page__lede">
        Reach out for work, collabs, or just to say hi.
      </p>
      <ul className="contact-links">
        {site.socials.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="contact-links__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-links__label">{item.label}</span>
              <span className="contact-links__url">
                {displayUrl(item.href)}{" "}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
