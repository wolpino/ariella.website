import type { ThemeConfig } from "./types";

/**
 * Expressive, Wix-inspired — opt-in.
 * Sampled from ariellawolpin.wixsite.com: charcoal ground, muted gold brand,
 * construction yellow accents.
 */
export const fun: ThemeConfig = {
  id: "fun",
  label: "Fun",
  colors: {
    bg: "#141414",
    fg: "#f3efe4",
    muted: "#a39e90",
    accent: "#ecc85c",
    accentFg: "#141414",
    border: "#3a3a3a",
    surface: "#1e1e1e",
    focus: "#fcfc30",
  },
  fonts: {
    display: "var(--font-display-fun)",
    body: "var(--font-body-fun)",
  },
  motion: {
    duration: "280ms",
  },
  radii: {
    sm: "4px",
    md: "10px",
  },
};
