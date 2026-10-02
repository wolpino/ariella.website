"use client";

import { CoverScreen } from "@/components/cover/CoverScreen";
import { Hero } from "@/components/hero";
import { useTheme } from "@/components/theme-provider";

export function HomeView() {
  const { theme } = useTheme();

  if (theme === "fun") {
    return <CoverScreen variant="high-fidelity" showEditionsMark={false} />;
  }

  return (
    <div className="fun-surface fun-surface--cover">
      <Hero />
    </div>
  );
}
