"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isProfessional = theme === "professional";

  return (
    <div className="theme-toggle" role="group" aria-label="Site theme">
      <button
        type="button"
        className="theme-toggle__btn"
        aria-pressed={isProfessional}
        onClick={() => setTheme("professional")}
      >
        Professional
      </button>
      <button
        type="button"
        className="theme-toggle__btn"
        aria-pressed={!isProfessional}
        onClick={() => setTheme("fun")}
      >
        Fun
      </button>
    </div>
  );
}
