import type { Metadata } from "next";
import { EditionZero } from "@/editions/0/EditionZero";

export const metadata: Metadata = {
  title: "Version 0",
  description: "The first live site: Mostly practice!",
};

export default function EditionZeroPage() {
  return <EditionZero />;
}
