export type ProjectCategory = "creative" | "code" | "apps";

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  href: string;
  external?: boolean;
  status: "live" | "coming-soon";
};

export const projects: Project[] = [
  {
    id: "photos-feed",
    title: "Photography feed",
    summary:
      "Ongoing photo stream — a living feed, separate from curated collections on this site (coming later).",
    category: "creative",
    href: "https://photos.ariella.website/",
    external: true,
    status: "live",
  },
  {
    id: "trial-eclair",
    title: "Trial & Eclair",
    summary: "Recipe development app (v1). Linked here when ready to share.",
    category: "apps",
    href: "#",
    status: "coming-soon",
  },
  {
    id: "coding-placeholder",
    title: "Code projects",
    summary:
      "Selected engineering work will land here. Placeholder until repos are ready to feature.",
    category: "code",
    href: "#",
    status: "coming-soon",
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  creative: "Creative",
  code: "Code",
  apps: "Apps",
};
