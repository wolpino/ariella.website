import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found desk-surface">
      <div className="not-found__inner">
        <h1 className="not-found__title">Page not found</h1>
        <p>
          <Link href="/" className="not-found__home">
            Back home
          </Link>
        </p>
      </div>
    </main>
  );
}
