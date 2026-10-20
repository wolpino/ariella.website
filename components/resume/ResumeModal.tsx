"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { site } from "@/content/site";
import { ResumeDocument } from "./ResumeDocument";
import { ResumePaper } from "./ResumePaper";
import "./resume.css";

type ResumeModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ResumeModal({ open, onOpenChange }: ResumeModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="resume-overlay" />
        <Dialog.Content className="resume-dialog">
          <Dialog.Title className="sr-only">Resume</Dialog.Title>
          <Dialog.Description className="sr-only">
            Ariella Wolpin resume, with a downloadable PDF.
          </Dialog.Description>
          <div className="resume-actions">
            <a
              className="resume-icon-button"
              href={site.resumePdfPath}
              download="AriellaWolpinResume.pdf"
              aria-label="Download PDF"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 3a1 1 0 0 1 1 1v9.17l2.59-2.58a1 1 0 1 1 1.41 1.41l-4.3 4.3a1 1 0 0 1-1.4 0l-4.3-4.3a1 1 0 1 1 1.41-1.41L11 13.17V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"
                />
              </svg>
            </a>
            <Dialog.Close className="resume-icon-button" aria-label="Close">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.7 6.7a1 1 0 0 1 1.4 0L12 10.58l3.9-3.88a1 1 0 1 1 1.4 1.42L13.42 12l3.88 3.9a1 1 0 0 1-1.42 1.4L12 13.42l-3.9 3.88a1 1 0 0 1-1.4-1.42L10.58 12 6.7 8.1a1 1 0 0 1 0-1.4Z"
                />
              </svg>
            </Dialog.Close>
          </div>
          <div className="resume-body">
            <ResumePaper>
              <ResumeDocument />
            </ResumePaper>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
