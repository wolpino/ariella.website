"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CoverScreen } from "@/components/cover/CoverScreen";
import { NotebookCover } from "@/components/notebook/NotebookCover";
import { editions, type Edition } from "@/editions/catalog";
import "./editions.css";

function EditionPreview({
  edition,
  size,
}: {
  edition: Edition;
  size: "thumb" | "modal";
}) {
  if (edition.previewImage) {
    return (
      <div
        className={`edition-preview edition-preview--${size}`}
        aria-hidden={size === "thumb" ? true : undefined}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="edition-preview-image"
          src={edition.previewImage}
          alt=""
        />
      </div>
    );
  }

  const variant = edition.variant ?? "stylized";
  const cover =
    size === "thumb" ? (
      <NotebookCover
        variant={variant}
        layout="frame"
        showEditionsMark={false}
        interactive={false}
        onResumeClick={() => undefined}
      />
    ) : (
      <CoverScreen
        variant={variant}
        layout="frame"
        showEditionsMark={false}
      />
    );

  return (
    <div
      className={`edition-preview edition-preview--${size}`}
      aria-hidden={size === "thumb" ? true : undefined}
    >
      {size === "thumb" ? (
        <div className="edition-preview-scale">{cover}</div>
      ) : (
        cover
      )}
    </div>
  );
}

export function EditionsIndex() {
  const [openEdition, setOpenEdition] = useState<Edition | null>(null);

  return (
    <>
      <ol className="edition-list">
        {editions.map((edition) => (
          <li key={edition.number} className="edition-item">
            <p className="edition-label">
              Version {edition.number} · {edition.year}
            </p>
            <p className="edition-title">{edition.title}</p>
            <button
              type="button"
              className="edition-card"
              onClick={() => setOpenEdition(edition)}
              aria-label={`Version ${edition.number}, ${edition.title}`}
            >
              <EditionPreview edition={edition} size="thumb" />
            </button>
          </li>
        ))}
      </ol>

      <Dialog.Root
        open={openEdition !== null}
        onOpenChange={(open) => {
          if (!open) {
            setOpenEdition(null);
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="edition-overlay" />
          <Dialog.Content className="edition-dialog">
            <Dialog.Title className="sr-only">
              {openEdition
                ? `Version ${openEdition.number}: ${openEdition.title}`
                : "Version"}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              {openEdition?.blurb ?? "Earlier cover of this site."}
            </Dialog.Description>
            {openEdition ? (
              <EditionPreview edition={openEdition} size="modal" />
            ) : null}
            <Dialog.Close className="edition-close" aria-label="Close">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.7 6.7a1 1 0 0 1 1.4 0L12 10.58l3.9-3.88a1 1 0 1 1 1.4 1.42L13.42 12l3.88 3.9a1 1 0 0 1-1.42 1.4L12 13.42l-3.9 3.88a1 1 0 0 1-1.4-1.42L10.58 12 6.7 8.1a1 1 0 0 1 0-1.4Z"
                />
              </svg>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
