import type { CoverVariant } from "@/content/site";

export type Edition = {
  number: number;
  title: string;
  blurb: string;
  href: `/${string}`;
  year: string;
  variant?: CoverVariant;
  previewImage?: string;
};

/**
 * Table of contents for the in-site archive.
 * When shipping a new homepage, freeze the previous one under
 * editions/<n>/ and add a row here. Do not point /editions/1 at `/`.
 */
export const editions: readonly Edition[] = [
  {
    number: 0,
    title: "Mostly practice",
    blurb:
      "The first live site at ariella.website: a black page, a photo of Shelby, and a promise of more practice.",
    href: "/editions/0",
    year: "2026",
    previewImage: "/editions/version-0.png",
  },
  {
    number: 1,
    title: "Composition cover",
    blurb: "A black-and-white notebook. Work in progress. A resume in the margin.",
    href: "/editions/1",
    year: "2026",
    variant: "stylized",
  },
  {
    number: 2,
    title: "Marble cover",
    blurb:
      "Photographed marble on a wood desk, a bowed composition label, a lime sticky, and Dymo tape.",
    href: "/editions/2",
    year: "2026",
    variant: "high-fidelity",
  },
];
