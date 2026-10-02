import { DymoTape } from "@/components/dymo/DymoTape";
import "./edition-zero.css";

/** Frozen v0: the first live site at ariella.website. */
export function EditionZero() {
  return (
    <div className="edition-zero">
      <div className="edition-zero-main">
        <h1>Mostly practice!</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/editions/shelby.jpg"
          alt="a dog names shelby"
          width={500}
          height={500}
        />
        <p>other practice to come</p>
      </div>
      <span className="edition-zero-versions">
        <DymoTape href="/editions">Versions</DymoTape>
      </span>
    </div>
  );
}
