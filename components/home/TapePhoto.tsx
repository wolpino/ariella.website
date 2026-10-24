"use client";

import { useEffect, useRef, useState } from "react";

type TapePhotoProps = {
  src: string;
};

function tapeOf(img: HTMLImageElement | null) {
  return img?.closest<HTMLElement>(".tape") ?? null;
}

function markLoaded(img: HTMLImageElement | null) {
  if (img && img.complete && img.naturalWidth > 0) {
    tapeOf(img)?.setAttribute("data-photo", "loaded");
  }
}

/**
 * A photograph of the real Dymo tape, layered inside a `.tape` link.
 *
 * Until the photo loads, the drawn Step 3 tape shows. Once it loads, this sets
 * `data-photo="loaded"` on the surrounding `.tape` link, and home.css swaps the
 * drawn tape for the photo (the word stays in the DOM for screen readers).
 * If the photo fails, it is removed and the drawn tape stays.
 *
 * The attribute is set on the link from here, not passed as a prop, because the
 * Résumé link is rendered by the shared ResumeLink, which takes no extra props.
 */
export function TapePhoto({ src }: TapePhotoProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // The server-rendered image can finish loading before React hydrates,
  // in which case onLoad / onError never fire. Check once after mount.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
      return;
    }
    markLoaded(img);
    return () => tapeOf(img)?.removeAttribute("data-photo");
  }, [src]);

  if (failed) return null;

  return (
    // Decorative: the link's name comes from the live word next to it.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className="tape__photo"
      src={src}
      alt=""
      decoding="async"
      onLoad={(event) => markLoaded(event.currentTarget)}
      onError={(event) => {
        tapeOf(event.currentTarget)?.removeAttribute("data-photo");
        setFailed(true);
      }}
    />
  );
}
