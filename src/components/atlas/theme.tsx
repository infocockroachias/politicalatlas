"use client";

import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "system";
export type TextScale = "90" | "100" | "110" | "125";

const ThemeCtx = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
  textScale: TextScale;
  setTextScale: (t: TextScale) => void;
}>({
  theme: "system",
  setTheme: () => {},
  textScale: "100",
  setTextScale: () => {},
});

export function useTheme() {
  return useContext(ThemeCtx);
}

function initialTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem("atlas-theme") as Theme | null;
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

function initialScale(): TextScale {
  if (typeof window === "undefined") return "100";
  const stored = localStorage.getItem("atlas-text-scale") as TextScale | null;
  if (stored === "90" || stored === "100" || stored === "110" || stored === "125") return stored;
  return "100";
}

function applyTheme(theme: Theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

// The html class is already applied pre-hydration by the inline script in
// layout.tsx; React state is initialised from the same source, so no effect
// is needed for the first paint.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [textScale, setTextScaleState] = useState<TextScale>(initialScale);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem("atlas-theme", next);
    } catch {}
    applyTheme(next);
  };

  const setTextScale = (next: TextScale) => {
    setTextScaleState(next);
    try {
      localStorage.setItem("atlas-text-scale", next);
    } catch {}
    document.documentElement.style.setProperty("--atlas-text-scale", `${next}%`);
  };

  return (
    <ThemeCtx.Provider value={{ theme, setTheme, textScale, setTextScale }}>
      {children}
    </ThemeCtx.Provider>
  );
}
