"use client";

import { Suspense } from "react";
import { CoverExperience } from "@/components/cover/CoverExperience";
import { NotebookCover } from "@/components/notebook/NotebookCover";
import type { CoverVariant } from "@/content/site";

type CoverScreenProps = {
  variant: CoverVariant;
  showEditionsMark?: boolean;
  layout?: "page" | "frame";
};

export function CoverScreen({
  variant,
  showEditionsMark,
  layout,
}: CoverScreenProps) {
  return (
    <Suspense
      fallback={
        <NotebookCover
          variant={variant}
          showEditionsMark={showEditionsMark}
          layout={layout}
          onResumeClick={() => undefined}
        />
      }
    >
      <CoverExperience
        variant={variant}
        showEditionsMark={showEditionsMark}
        layout={layout}
      />
    </Suspense>
  );
}
