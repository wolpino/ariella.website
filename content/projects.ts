export type Project = {
  id: string;
  title: string;
  summary: string;
  /** The small gold line above the title, such as "Web app · in progress". */
  kind: string;
  /** Leave out when there is nothing to link to yet. The card then shows without a link. */
  href?: string;
  external?: boolean;
  /** Leave out for a card that is still to come. It shows an empty frame. */
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    id: "trial-eclair",
    title: "Trial & Eclair",
    summary:
      "A recipe development app with role-based workflows, built with AI-assisted code.",
    kind: "Web app · in progress",
    image: {
      src: "/photos/kitchen-light.jpg",
      width: 1600,
      height: 1200,
      alt: "Poppies in glass vases on a kitchen windowsill",
    },
  },
  {
    id: "this-website",
    title: "This website",
    summary: "Every past version of this site, kept as editions.",
    kind: "This site · versions 0–2",
    href: "/editions",
    image: {
      src: "/editions/shelby.jpg",
      width: 1080,
      height: 810,
      alt: "Shelby the dog, from version 0 of this site",
    },
  },
  {
    id: "more-coming-soon",
    title: "More coming soon",
    summary: "New projects will show up here.",
    kind: "Coming",
  },
];
