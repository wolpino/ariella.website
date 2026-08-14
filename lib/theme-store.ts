import {
  DEFAULT_THEME,
  THEME_COOKIE,
  THEME_STORAGE_KEY,
  isThemeId,
  type ThemeId,
} from "@/themes";

type Listener = () => void;

type ThemeStore = {
  theme: ThemeId;
  listeners: Set<Listener>;
};

const globalForTheme = globalThis as typeof globalThis & {
  __ariellaThemeStore?: ThemeStore;
};

function readDomTheme(): ThemeId | null {
  if (typeof document === "undefined") return null;
  const attr = document.documentElement.getAttribute("data-theme");
  return isThemeId(attr) ? attr : null;
}

function getStore(): ThemeStore {
  if (!globalForTheme.__ariellaThemeStore) {
    globalForTheme.__ariellaThemeStore = {
      theme: DEFAULT_THEME,
      listeners: new Set(),
    };
  }
  return globalForTheme.__ariellaThemeStore;
}

function emit() {
  getStore().listeners.forEach((listener) => listener());
}

export function subscribeTheme(listener: Listener) {
  const { listeners } = getStore();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getThemeSnapshot(): ThemeId {
  return getStore().theme;
}

/** Sync store to DOM (pre-paint script) or server cookie fallback. */
export function hydrateThemeStore(fallback: ThemeId) {
  getStore().theme = readDomTheme() ?? fallback;
}

export function applyTheme(theme: ThemeId) {
  getStore().theme = theme;
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.dataset.theme = theme;
  }
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  if (typeof document !== "undefined") {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${THEME_COOKIE}=${encodeURIComponent(theme)}; path=/; max-age=${maxAge}; samesite=lax`;
  }
  emit();
}
