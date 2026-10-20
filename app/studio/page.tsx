import type { Metadata } from "next";
import { Suspense } from "react";
import { StudioView } from "./studio-view";

export const metadata: Metadata = {
  title: "Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return (
    <Suspense fallback={null}>
      <StudioView />
    </Suspense>
  );
}
