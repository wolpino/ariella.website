import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import shelby from "@/public/editions/shelby.jpg";
import "./not-found.css";

export const metadata: Metadata = {
  title: "Page not found",
};

/* Torn notebook scraps on the desk. Pure decoration. */
const scraps = [1, 2, 3, 4];

export default function NotFound() {
  return (
    <main className="not-found">
      {scraps.map((n) => (
        <span key={n} className={`not-found__scrap not-found__scrap--${n}`} aria-hidden="true" />
      ))}
      <div className="not-found__inner">
        <h1 className="not-found__title">Page not found</h1>
        <figure className="not-found__photo">
          <Image
            src={shelby}
            alt="Shelby the dog, eyes closed, looking pleased"
            sizes="(max-width: 480px) 270px, 330px"
            priority
          />
          <figcaption>Shelby ate it</figcaption>
        </figure>
        <Link href="/" className="not-found__home">
          Home
        </Link>
      </div>
    </main>
  );
}
