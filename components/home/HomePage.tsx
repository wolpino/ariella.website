import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { site } from "@/content/site";
import { DeskPhotos } from "./DeskPhotos";
import { NotebookCover } from "./NotebookCover";
import "./home.css";

/** Home: Ari's name, the notebook on the desk, and photos around it on desktop. */
export function HomePage() {
  return (
    <div className="home desk-surface">
      <header className="home-top">
        <h1 className="home-name">
          <Link href="/">{site.name}</Link>
        </h1>
      </header>
      <main className="home-scene">
        <DeskPhotos />
        <NotebookCover />
      </main>
      <SiteFooter />
    </div>
  );
}
