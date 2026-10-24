export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Ariella Wolpin",
  resumePdfPath: "/resume.pdf",
  linkedIn: "https://www.linkedin.com/in/ariellawolpin",
  photosUrl: "https://photos.ariella.website/",
  /** The label on the home notebook cover. */
  cover: {
    name: "Ari",
    subject: "Software engineering",
    also: "photography · words",
  },
  copyright:
    "All photographs © 2026 Ariella Wolpin. They're mine; please ask before using them.",
  lastUpdated: "Oct 2026",
  socials: [
    {
      label: "Photography feed",
      href: "https://photos.ariella.website/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ariellawolpin",
    },
  ] as const satisfies readonly SocialLink[],
};
