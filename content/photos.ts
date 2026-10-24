export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

/** The photos on the desk around the home notebook (desktop only). */
export const deskPhotos: Photo[] = [
  {
    src: "/photos/after-close.jpg",
    width: 1200,
    height: 1600,
    alt: "Pink drink under neon bar signs",
    caption: "After close",
  },
  {
    src: "/photos/the-freeze.jpg",
    width: 374,
    height: 426,
    alt: "The Freeze ice cream stand at dusk",
    caption: "The Freeze, at dusk",
  },
  {
    src: "/photos/pinball.jpg",
    width: 900,
    height: 675,
    alt: "Photobooth strips on a pinball machine",
    caption: "Pinball",
  },
  {
    src: "/photos/blossoms.jpg",
    width: 281,
    height: 426,
    alt: "Pink cherry blossoms",
    caption: "Blossoms",
  },
];
