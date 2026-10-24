export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Photographs of the real Dymo tape on the home cover, one per label.
 * A label without a photo shows the drawn Step 3 tape. To add one, drop the
 * PNG in public/textures/ and add its path here.
 */
export type TapePhotos = {
  projects?: string;
  resume?: string;
  linkedIn?: string;
};

const tapePhotos: TapePhotos = {
  resume: "/textures/dymo-resume.png",
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
  tapePhotos,
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
