export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const coverVariants = ["stylized", "high-fidelity", "ornate"] as const;

export type CoverVariant = (typeof coverVariants)[number];

export const site = {
  name: "Ariella Wolpin",
  /** Cover label. The header brand stays `name`. */
  title: "Ariella's Website",
  role: "software · photos · words",
  coverVariant: "high-fidelity" as CoverVariant,
  resumePdfPath: "/resume.pdf",
  lastUpdated: "Sep 2, 2026",
  shortName: "Ariella",
  tagline: "Design, photography, and code — a hub for projects in progress.",
  /** Fun Home lockup — Wix used “collections” under the name */
  funHeading: "collections",
  funTopics: ["photography", "web applications", "notes"] as const,
  /** TODO: replace with your preferred public email */
  email: "hello@ariella.website",
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ] as const satisfies readonly NavItem[],
  socials: [
    {
      label: "Photography feed",
      href: "https://photos.ariella.website/",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:hello@ariella.website",
      external: false,
    },
    // TODO: add LinkedIn / GitHub / Instagram when ready
  ] as const satisfies readonly SocialLink[],
};
