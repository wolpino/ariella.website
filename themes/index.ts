import { fun } from "./fun";
import { professional } from "./professional";
import type { ThemeConfig, ThemeId } from "./types";

export { fun, professional };
export type { ThemeConfig, ThemeId };
export {
  THEME_COOKIE,
  THEME_STORAGE_KEY,
  isThemeId,
  themeToCssVars,
} from "./types";

export const themes: Record<ThemeId, ThemeConfig> = {
  professional,
  fun,
};

export const DEFAULT_THEME: ThemeId = "professional";

export function getTheme(id: ThemeId): ThemeConfig {
  return themes[id];
}
