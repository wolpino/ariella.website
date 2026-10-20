type LabelFrame = "bowed" | "ornate";

type CompositionLabelProps = {
  frame: LabelFrame;
  title: string;
};

function BowedFrame() {
  return (
    <svg
      className="composition-label-frame"
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#fff"
        d="M8 46C90 8 150 3 200 3C250 3 310 8 392 46V254C310 292 250 297 200 297C150 297 90 292 8 254Z"
      />
      <path
        fill="none"
        stroke="#111"
        strokeWidth="3"
        d="M22 54C98 18 154 12 200 12C246 12 302 18 378 54V246C302 282 246 288 200 288C154 288 98 282 22 246Z"
      />
      <path
        fill="none"
        stroke="#111"
        strokeWidth="1.35"
        d="M34 64C106 30 158 24 200 24C242 24 294 30 366 64V236C294 270 242 276 200 276C158 276 106 270 34 236Z"
      />
    </svg>
  );
}

function OrnateFrame() {
  const outer =
    "M52 22C42 22 34 26 28 33C18 41 14 52 14 64V216C14 228 18 239 28 247C34 254 42 258 52 258H64C78 258 86 270 114 270H386C414 270 422 258 436 258H448C458 258 466 254 472 247C482 239 486 228 486 216V64C486 52 482 41 472 33C466 26 458 22 448 22H436C422 22 414 10 386 10H114C86 10 78 22 64 22H52Z";
  const inner =
    "M62 34C52 34 44 38 38 45C30 52 26 62 26 74V206C26 218 30 228 38 235C44 242 52 246 62 246H70C88 246 96 258 122 258H378C404 258 412 246 430 246H438C448 246 456 242 462 235C470 228 474 218 474 206V74C474 62 470 52 462 45C456 38 448 34 438 34H430C412 34 404 22 378 22H122C96 22 88 34 70 34H62Z";
  const hairline =
    "M72 42C64 42 58 45 54 50C48 56 46 62 46 72V208C46 218 48 224 54 230C58 235 64 238 72 238H80C98 238 106 250 124 250H376C394 250 402 238 420 238H428C436 238 442 235 446 230C452 224 454 218 454 208V72C454 62 452 56 446 50C442 45 436 42 428 42H420C402 42 394 30 376 30H124C106 30 98 42 80 42H72Z";

  return (
    <svg
      className="composition-label-frame"
      viewBox="0 0 500 280"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill="#111" d={outer} />
      <path fill="#fff" d={inner} />
      <path fill="none" stroke="#111" strokeWidth="1.2" d={hairline} />
    </svg>
  );
}

export function CompositionLabel({ frame, title }: CompositionLabelProps) {
  return (
    <div className={`composition-label composition-label--${frame}`}>
      {frame === "bowed" ? <BowedFrame /> : <OrnateFrame />}
      <div className="composition-label-content">
        <h1 className="composition-label-title">{title}</h1>
        <div className="composition-label-rules" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="composition-label-meta">
          <p>200 pages • 100 sheets</p>
          <p>8.5 x 11 in / 22 x 28 cm</p>
          <p>College Ruled</p>
        </div>
      </div>
    </div>
  );
}
