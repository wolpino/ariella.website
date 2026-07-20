export const THEME_COOKIE = "ariella-theme";
export const THEME_STORAGE_KEY = "ariella-theme";

export type ThemeId = "professional" | "fun";

export type ThemeConfig = {
  id: ThemeId;
  label: string;
  colors: {
    bg: string;
    fg: string;
    muted: string;
    accent: string;
    accentFg: string;
    border: string;
    surface: string;
    focus: string;
  };
  fonts: {
    display: string;
    body: string;
  };
  motion: {
    duration: string;
  };
  radii: {
    sm: string;
    md: string;
  };
};

export function isThemeId(value: unknown): value is ThemeId {
  return value === "professional" || value === "fun";
}

export function themeToCssVars(theme: ThemeConfig): Record<string, string> {
  return {
    "--color-bg": theme.colors.bg,
    "--color-fg": theme.colors.fg,
    "--color-muted": theme.colors.muted,
    "--color-accent": theme.colors.accent,
    "--color-accent-fg": theme.colors.accentFg,
    "--color-border": theme.colors.border,
    "--color-surface": theme.colors.surface,
    "--color-focus": theme.colors.focus,
    "--font-display": theme.fonts.display,
    "--font-body": theme.fonts.body,
    "--motion-duration": theme.motion.duration,
    "--radius-sm": theme.radii.sm,
    "--radius-md": theme.radii.md,
  };
}
