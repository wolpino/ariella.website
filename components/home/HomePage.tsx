import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { site } from "@/content/site";
import { NotebookCover } from "./NotebookCover";
import "./home.css";

/** Home: Ari's name, and the notebook alone on the wood desk. */
export function HomePage() {
  return (
    <div className="home">
      <header className="home-top">
        <h1 className="home-name">
          <Link href="/">{site.name}</Link>
        </h1>
      </header>
      <main className="home-scene">
        <NotebookCover />
      </main>
      <SiteFooter />
    </div>
  );
}
