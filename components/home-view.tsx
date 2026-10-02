"use client";

import { CoverScreen } from "@/components/cover/CoverScreen";
import { Hero } from "@/components/hero";
import { useTheme } from "@/components/theme-provider";

export function HomeView() {
  const { theme } = useTheme();

  if (theme === "fun") {
    return <CoverScreen variant="high-fidelity" />;
  }

  return (
    <div className="fun-surface fun-surface--cover">
      <Hero />
    </div>
  );
}
