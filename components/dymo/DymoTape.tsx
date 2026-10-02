import Link from "next/link";
import "./dymo.css";

export const dymoColors = ["black", "pine", "hunter", "moss"] as const;
export type DymoColor = (typeof dymoColors)[number];

type DymoTapeProps = {
  children: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "lg";
  color?: DymoColor;
  className?: string;
};

const photoLabels: Record<string, string> = {
  VERSIONS: "/textures/dymo-versions.png",
  RESUME: "/textures/dymo-resume.png",
};

function TapeLetters({ label }: { label: string }) {
  return (
    <>
      {Array.from(label).map((char, index) => (
        <span key={`${char}-${index}`} className="dymo-char">
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </>
  );
}

export function DymoTape({
  children,
  href,
  onClick,
  size = "sm",
  color = "black",
  className = "",
}: DymoTapeProps) {
  const label = children.toUpperCase();
  const photo = photoLabels[label];
  const colorClass = photo || color === "black" ? "" : ` dymo-tape--${color}`;
  const tape = (
    <span
      className={`dymo-tape dymo-tape--${size}${photo ? " dymo-tape--photo" : ""}${colorClass} ${className}`.trim()}
      aria-hidden="true"
    >
      {photo ? (
        // Decorative photo of the label. The control name is the aria-label.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt="" />
      ) : (
        <TapeLetters label={label} />
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="dymo-tape-link" aria-label={label}>
        {tape}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" className="dymo-tape-link" aria-label={label} onClick={onClick}>
        {tape}
      </button>
    );
  }

  return (
    <>
      <span className="sr-only">{label}</span>
      {tape}
    </>
  );
}
