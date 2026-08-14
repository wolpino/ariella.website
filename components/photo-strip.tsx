import Image from "next/image";
import { funStripFrames } from "@/content/fun-strip";

/** Duplicated track for a seamless vertical loop. */
const LOOP_COPIES = [0, 1] as const;

export function PhotoStrip() {
  return (
    <div className="photo-strip" aria-hidden="true">
      <div className="photo-strip__track">
        {LOOP_COPIES.flatMap((copy) =>
          funStripFrames.map((frame, index) => (
            <div className="photo-strip__frame" key={`${copy}-${frame.src}`}>
              <Image
                src={frame.src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 280px"
                className="photo-strip__img"
                priority={copy === 0 && index < 2}
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
