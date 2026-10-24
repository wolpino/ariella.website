"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRef, useState, type CSSProperties } from "react";
import { deskPhotos, type Photo } from "@/content/photos";
import { site } from "@/content/site";

/* The tilt of each print on the desk, from the final mockup. Positions are in home.css. */
const rotations = ["-7deg", "6deg", "5deg", "-5deg"];

/** White-border prints around the notebook (desktop only). Click one to see it bigger. */
export function DeskPhotos() {
  const [active, setActive] = useState<Photo | null>(null);
  // The print that opened the lightbox, so focus can go back to it on close.
  const opener = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      {deskPhotos.slice(0, 4).map((photo, i) => (
        <button
          key={photo.src}
          type="button"
          className={`snap home-shot home-shot--${i + 1}`}
          style={{ "--r": rotations[i] } as CSSProperties}
          onClick={(event) => {
            opener.current = event.currentTarget;
            setActive(photo);
          }}
        >
          <Image
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            sizes="220px"
          />
          <span className="snap__cap">{photo.caption}</span>
        </button>
      ))}

      <Dialog.Root
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="home-lb-overlay" />
          <Dialog.Content
            className="home-lb"
            aria-describedby={undefined}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              opener.current?.focus();
            }}
          >
            {active && (
              <>
                <Image
                  className="home-lb__img"
                  src={active.src}
                  width={active.width}
                  height={active.height}
                  alt={active.alt}
                  sizes="(max-width: 932px) calc(100vw - 32px), 900px"
                  style={
                    {
                      "--w": `${active.width}px`,
                      "--ar": active.width / active.height,
                    } as CSSProperties
                  }
                />
                <div className="home-lb__row">
                  <Dialog.Title className="home-lb__cap">{active.caption}</Dialog.Title>
                  <a
                    className="home-lb__link"
                    href={site.photosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More on photos.ariella.website <span aria-hidden="true">→</span>
                  </a>
                </div>
              </>
            )}
            <Dialog.Close className="home-lb__close">
              Close <span aria-hidden="true">✕</span>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
