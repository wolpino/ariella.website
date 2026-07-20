import {
  DEFAULT_THEME,
  THEME_COOKIE,
  THEME_STORAGE_KEY,
  isThemeId,
} from "@/themes";

/**
 * Inline before paint to avoid theme flash. Keep in sync with ThemeProvider.
 */
export function getThemeInitScript(): string {
  return `(function(){try{var c="${THEME_COOKIE}";var k="${THEME_STORAGE_KEY}";var d="${DEFAULT_THEME}";var m=document.cookie.match(new RegExp("(?:^|; )"+c+"=([^;]*)"));var v=m?decodeURIComponent(m[1]):null;if(!v){try{v=localStorage.getItem(k)}catch(e){}}if(v!=="professional"&&v!=="fun")v=d;document.documentElement.setAttribute("data-theme",v);document.documentElement.dataset.theme=v;}catch(e){document.documentElement.setAttribute("data-theme","${DEFAULT_THEME}");}})();`;
}

export function parseThemeCookie(cookieHeader: string | undefined): string {
  if (!cookieHeader) return DEFAULT_THEME;
  const match = cookieHeader.match(
    new RegExp(`(?:^|;\\s*)${THEME_COOKIE}=([^;]*)`),
  );
  const value = match ? decodeURIComponent(match[1]) : undefined;
  return isThemeId(value) ? value : DEFAULT_THEME;
}
