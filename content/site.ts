export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const site = {
  name: "Ariella Wolpin",
  shortName: "Ariella",
  tagline: "Design, photography, and code — a hub for projects in progress.",
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
