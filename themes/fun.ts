import type { ThemeConfig } from "./types";

/** Expressive, Wix-inspired — opt-in */
export const fun: ThemeConfig = {
  id: "fun",
  label: "Fun",
  colors: {
    bg: "#fff3e8",
    fg: "#2a1020",
    muted: "#7a4e5f",
    accent: "#e23d5d",
    accentFg: "#fff8f5",
    border: "#f2c9b8",
    surface: "#ffe7d4",
    focus: "#e23d5d",
  },
  fonts: {
    display: "var(--font-display-fun)",
    body: "var(--font-body-fun)",
  },
  motion: {
    duration: "280ms",
  },
  radii: {
    sm: "10px",
    md: "18px",
  },
};
