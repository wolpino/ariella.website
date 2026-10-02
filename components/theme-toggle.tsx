"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  getThemeSnapshot,
  hydrateThemeStore,
  subscribeTheme,
} from "@/lib/theme-store";
import type { ThemeId } from "@/themes";

export function ThemeToggle({ initialTheme }: { initialTheme: ThemeId }) {
  const [theme, setTheme] = useState<ThemeId>(initialTheme);

  useEffect(() => {
    hydrateThemeStore(initialTheme);
    // The pre-paint script may have applied localStorage after the server
    // render. Syncing here keeps the first client render aligned with HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(getThemeSnapshot());
    return subscribeTheme(() => {
      setTheme(getThemeSnapshot());
    });
  }, [initialTheme]);

  const isProfessional = theme === "professional";

  return (
    <div className="theme-toggle" role="group" aria-label="Site theme">
      <button
        type="button"
        className="theme-toggle__btn"
        aria-pressed={isProfessional}
        onClick={() => applyTheme("professional")}
      >
        Professional
      </button>
      <button
        type="button"
        className="theme-toggle__btn"
        aria-pressed={!isProfessional}
        onClick={() => applyTheme("fun")}
      >
        Fun
      </button>
    </div>
  );
}
