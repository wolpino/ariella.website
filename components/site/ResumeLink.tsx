"use client";

import { useState, type ReactNode } from "react";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { site } from "@/content/site";

type ResumeLinkProps = {
  children: ReactNode;
  className?: string;
};

/** A link to the PDF that opens the résumé pop-up instead, unless the visitor asked for a new tab. */
export function ResumeLink({ children, className }: ResumeLinkProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href={site.resumePdfPath}
        className={className}
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
          }
          event.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      <ResumeModal open={open} onOpenChange={setOpen} />
    </>
  );
}
