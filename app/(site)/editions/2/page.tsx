import type { Metadata } from "next";
import { EditionTwo } from "@/editions/2/EditionTwo";

export const metadata: Metadata = {
  title: "Version 2",
  description: "The marble notebook cover: bowed label, sticky note, Dymo tape.",
};

export default function EditionTwoPage() {
  return <EditionTwo />;
}
