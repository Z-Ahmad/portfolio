export type Theme = "light" | "dark";
export const THEME_KEY = "theme";

/**
 * Runs before first paint (inlined in <head>) so the page never flashes the
 * wrong theme. A saved choice wins; otherwise follow the OS.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;
