"use client";

import { DymoTape } from "@/components/dymo/DymoTape";
import { CompositionLabel } from "@/components/notebook/CompositionLabel";
import type { CoverVariant } from "@/content/site";
import { site } from "@/content/site";
import "./notebook.css";

type NotebookCoverProps = {
  variant: CoverVariant;
  onResumeClick: () => void;
  showEditionsMark?: boolean;
  layout?: "page" | "frame";
  interactive?: boolean;
};

export function NotebookCover({
  variant,
  onResumeClick,
  showEditionsMark = true,
  layout = "page",
  interactive = true,
}: NotebookCoverProps) {
  const marble = variant !== "stylized";
  const theme = marble ? "high-fidelity" : "stylized";
  const labelFrame = variant === "ornate" ? "ornate" : "bowed";

  return (
    <div className="desk" data-cover={theme} data-layout={layout}>
      <div className="tabletop">
        <div className="notebook-stage">
          <div className="notebook">
            <div className="spine" aria-hidden="true" />
            <div className="cover-inner">
              <div className="label-stack">
                {marble ? (
                  <CompositionLabel frame={labelFrame} title={site.title} />
                ) : (
                  <div className="label">
                    <span className="label-margin" aria-hidden="true" />
                    {interactive ? (
                      <h1 className="label-name">{site.title}</h1>
                    ) : (
                      <p className="label-name">{site.title}</p>
                    )}
                    <p className="label-role">{site.role}</p>
                  </div>
                )}
                <div className="sticker" aria-hidden="true">
                  {marble ? (
                    <>
                      <span className="sticker-fold" />
                      <span className="sticker-full">
                        <span>This website</span>
                        <span>is a work in</span>
                        <span>progress!</span>
                        <span>Check</span>
                        <span>back soon...</span>
                      </span>
                      <span className="sticker-updated">
                        last updated: {site.lastUpdated}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="sticker-wip">WIP</span>
                      <span className="sticker-full">Work in progress</span>
                    </>
                  )}
                </div>
              </div>
              {marble ? null : interactive ? (
                <button type="button" className="resume-link" onClick={onResumeClick}>
                  resume
                </button>
              ) : (
                <span className="resume-link">resume</span>
              )}
            </div>
            {marble ? (
              <span className="resume-mark">
                {interactive ? (
                  <DymoTape onClick={onResumeClick}>Resume</DymoTape>
                ) : (
                  <DymoTape>Resume</DymoTape>
                )}
              </span>
            ) : null}
            {showEditionsMark ? (
              <span className="editions-mark">
                <DymoTape href="/editions">Versions</DymoTape>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
