"use client";

import { useState, useSyncExternalStore } from "react";
import { navigate, parseHashFrom, subscribe, getSnapshot, getServerSnapshot } from "@/lib/router";
import { useTheme } from "./theme";

const LINKS: { view: string; label: string }[] = [
  { view: "home", label: "Home" },
  { view: "map", label: "Map" },
  { view: "elections", label: "Elections" },
  { view: "parties", label: "Parties" },
  { view: "timeline", label: "Timeline" },
  { view: "polity", label: "Polity" },
  { view: "quiz", label: "Quiz" },
  { view: "compare", label: "Compare" },
  { view: "about", label: "About" },
];

export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden className="shrink-0">
      <rect x="2" y="2" width="36" height="36" rx="7" fill="var(--a-nda)" />
      {/* compass-rose style atlas mark */}
      <path d="M20 8 L23 17 L32 20 L23 23 L20 32 L17 23 L8 20 L17 17 Z" fill="var(--background)" />
      <circle cx="20" cy="20" r="3.2" fill="var(--foreground)" />
    </svg>
  );
}

export function Nav() {
  const hash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const route = parseHashFrom(hash);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const go = (view: string) => {
    navigate(view);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left" aria-label="Go to home">
          <BrandMark />
          <span className="leading-tight">
            <span className="eyebrow block">Approaches to IAS</span>
            <span className="display block text-[1.05rem]">Political Atlas</span>
          </span>
        </button>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Atlas sections">
          {LINKS.map((l) => (
            <button
              key={l.view}
              onClick={() => go(l.view)}
              className={`relative rounded-full px-3 py-1.5 text-[0.86rem] font-medium transition-colors ${
                route.view === l.view
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {route.view === l.view && (
                <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full" style={{ background: "var(--a-nda)" }} />
              )}
            </button>
          ))}
        </nav>

        <button
          onClick={toggle}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground lg:ml-2"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          )}
        </button>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden" aria-label="Atlas sections (mobile)">
          <div className="grid grid-cols-2 gap-1.5">
            {LINKS.map((l) => (
              <button
                key={l.view}
                onClick={() => go(l.view)}
                className={`rounded-lg border px-3 py-2.5 text-left text-sm font-medium ${
                  route.view === l.view
                    ? "border-transparent text-card-foreground"
                    : "border-border text-muted-foreground"
                }`}
                style={route.view === l.view ? { background: "var(--a-nda)" } : undefined}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
