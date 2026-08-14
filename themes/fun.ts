import type { ThemeConfig } from "./types";

/**
 * Photobooth + pinball hybrid Fun theme — opt-in.
 * Inky black frames, high-contrast greys, one amber glow. See docs/FUN-THEME.md
 */
export const fun: ThemeConfig = {
  id: "fun",
  label: "Fun",
  colors: {
    bg: "#050505",
    fg: "#f2f0ea",
    muted: "#9a9690",
    accent: "#ffb020",
    accentFg: "#050505",
    border: "#1a1a1a",
    surface: "#111111",
    focus: "#ffc44d",
  },
  fonts: {
    display: "var(--font-display-fun)",
    body: "var(--font-body-fun)",
  },
  motion: {
    duration: "240ms",
  },
  radii: {
    sm: "2px",
    md: "4px",
  },
};
