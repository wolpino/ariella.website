"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  applyTheme,
  getThemeSnapshot,
  hydrateThemeStore,
  subscribeTheme,
} from "@/lib/theme-store";
import { DEFAULT_THEME, type ThemeId } from "@/themes";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
  initialTheme = DEFAULT_THEME,
}: {
  children: ReactNode;
  initialTheme?: ThemeId;
}) {
  const [theme, setThemeState] = useState<ThemeId>(initialTheme);

  useEffect(() => {
    hydrateThemeStore(initialTheme);
    setThemeState(getThemeSnapshot());
    return subscribeTheme(() => {
      setThemeState(getThemeSnapshot());
    });
  }, [initialTheme]);

  const setTheme = useCallback((next: ThemeId) => {
    applyTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "professional" ? "fun" : "professional");
  }, [theme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
