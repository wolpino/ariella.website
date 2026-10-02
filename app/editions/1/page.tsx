import type { Metadata } from "next";
import { EditionOne } from "@/editions/1/EditionOne";

export const metadata: Metadata = {
  title: "Edition 1",
  description: "The first cover: a composition notebook, work in progress.",
};

export default function EditionOnePage() {
  return <EditionOne />;
}
