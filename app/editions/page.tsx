import type { Metadata } from "next";
import Link from "next/link";
import { DymoTape } from "@/components/dymo/DymoTape";
import { EditionsIndex } from "@/components/editions/EditionsIndex";

export const metadata: Metadata = {
  title: "Versions",
  description: "Earlier versions of this notebook, kept visitable.",
};

export default function EditionsPage() {
  return (
    <div className="editions-page">
      <div className="editions-page-inner">
        <h1>
          <DymoTape size="lg">Versions</DymoTape>
        </h1>
        <p className="editions-intro">Previous covers</p>
        <EditionsIndex />
        <p className="editions-back">
          <Link href="/" className="editions-back-link">
            Back to the cover
          </Link>
        </p>
      </div>
    </div>
  );
}
