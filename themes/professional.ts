import type { ThemeConfig } from "./types";

/** Restrained, recruiter-ready — default theme */
export const professional: ThemeConfig = {
  id: "professional",
  label: "Professional",
  colors: {
    bg: "#f4f2ee",
    fg: "#1b1b1b",
    muted: "#5a5a5a",
    accent: "#1f4d3a",
    accentFg: "#f7faf8",
    border: "#d9d4cb",
    surface: "#fffcf8",
    focus: "#1f4d3a",
  },
  fonts: {
    display: "var(--font-display-professional)",
    body: "var(--font-body-professional)",
  },
  motion: {
    duration: "160ms",
  },
  radii: {
    sm: "4px",
    md: "8px",
  },
};
