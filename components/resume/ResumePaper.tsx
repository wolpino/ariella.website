"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

type PaperLayout = {
  scale: number;
  height: number;
};

export function ResumePaper({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<PaperLayout>({ scale: 1, height: 0 });

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const page = pageRef.current;
    if (!stage || !page) {
      return;
    }

    const update = () => {
      const nextScale = Math.min(1, stage.clientWidth / page.offsetWidth);
      const scale =
        Number.isFinite(nextScale) && nextScale > 0 ? nextScale : 1;
      const height = page.offsetHeight * scale;

      setLayout((current) =>
        current.scale === scale && current.height === height
          ? current
          : { scale, height },
      );
    };

    const observer = new ResizeObserver(update);
    observer.observe(stage);
    observer.observe(page);
    update();

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={stageRef} className="resume-stage">
      <div
        className="resume-paper-slot"
        style={layout.height ? { height: layout.height } : undefined}
      >
        <div
          ref={pageRef}
          className="resume-paper"
          style={{ transform: `scale(${layout.scale})` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
