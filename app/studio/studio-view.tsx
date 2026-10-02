"use client";

import { useState } from "react";
import { CoverScreen } from "@/components/cover/CoverScreen";
import { coverVariants, type CoverVariant } from "@/content/site";
import "./studio.css";

const notes: Record<CoverVariant, string> = {
  stylized:
    "Graphic speckle, typewriter name, black desk. The flatter, poster-like cover.",
  "high-fidelity":
    "Bowed composition label on photographed marble. Homepage default.",
  ornate: "Ornate bracket composition label on photographed marble.",
};

const variantNames: Record<CoverVariant, string> = {
  stylized: "stylized",
  "high-fidelity": "classic label",
  ornate: "ornate label",
};

export function StudioView() {
  const [variant, setVariant] = useState<CoverVariant>("high-fidelity");
  const [phoneFrame, setPhoneFrame] = useState(false);

  return (
    <div className="studio">
      <header className="studio-toolbar">
        <div>
          <p className="studio-kicker">Studio · not indexed</p>
          <h1 className="studio-title">Cover treatments</h1>
        </div>
        <div className="studio-actions">
          {coverVariants.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={variant === option}
              onClick={() => setVariant(option)}
              className={
                variant === option
                  ? "studio-button studio-button--active"
                  : "studio-button"
              }
            >
              {variantNames[option]}
            </button>
          ))}
          <button
            type="button"
            aria-pressed={phoneFrame}
            onClick={() => setPhoneFrame((value) => !value)}
            className="studio-button"
          >
            {phoneFrame ? "Full width" : "Phone frame"}
          </button>
        </div>
      </header>
      <p className="studio-note">
        {notes[variant]} Homepage still uses the default in{" "}
        <code>content/site.ts</code> until you change it. Resume and editions
        work the same as production.
      </p>
      <div className="studio-stage">
        <div className={phoneFrame ? "studio-frame" : "studio-canvas"}>
          <CoverScreen
            variant={variant}
            layout={phoneFrame ? "frame" : "page"}
          />
        </div>
      </div>
    </div>
  );
}
