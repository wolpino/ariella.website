import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-inner">
        <h1>Page not found</h1>
        <p>
          <Link href="/">Back home</Link>
        </p>
      </div>
    </main>
  );
}
