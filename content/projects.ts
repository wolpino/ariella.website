export type ProjectCategory = "creative" | "code" | "apps";

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  /** Leave out when there is nothing to link to yet. The card then shows without a link. */
  href?: string;
  external?: boolean;
  status: "live" | "coming-soon";
};

export const projects: Project[] = [
  {
    id: "trial-eclair",
    title: "Trial & Eclair",
    summary:
      "A recipe development app with role-based workflows, built with AI-assisted code.",
    category: "apps",
    status: "live",
  },
  {
    id: "more-coming-soon",
    title: "More coming soon",
    summary: "New projects will show up here.",
    category: "creative",
    status: "coming-soon",
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  creative: "Creative",
  code: "Code",
  apps: "Apps",
};
