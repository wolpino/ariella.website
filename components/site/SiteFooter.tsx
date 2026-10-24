import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <span className="site-foot__copyright">{site.copyright}</span>
      <span>updated {site.lastUpdated}</span>
    </footer>
  );
}
