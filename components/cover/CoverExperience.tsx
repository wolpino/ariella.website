"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NotebookCover } from "@/components/notebook/NotebookCover";
import { ResumeModal } from "@/components/resume/ResumeModal";
import type { CoverVariant } from "@/content/site";

const RESUME_PARAM = "resume";

type CoverExperienceProps = {
  variant: CoverVariant;
  showEditionsMark?: boolean;
  layout?: "page" | "frame";
};

export function CoverExperience({
  variant,
  showEditionsMark = true,
  layout = "page",
}: CoverExperienceProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const open = searchParams.get(RESUME_PARAM) === "1";

  const onOpenChange = useCallback(
    (nextOpen: boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      if (nextOpen) {
        params.set(RESUME_PARAM, "1");
      } else {
        params.delete(RESUME_PARAM);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  return (
    <>
      <NotebookCover
        variant={variant}
        showEditionsMark={showEditionsMark}
        layout={layout}
        onResumeClick={() => onOpenChange(true)}
      />
      <ResumeModal open={open} onOpenChange={onOpenChange} />
    </>
  );
}
