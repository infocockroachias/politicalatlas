"use client";

import { navigate } from "@/lib/router";
import { BrandMark } from "./nav";

export function Footer() {
  const go = (view: string) => navigate(view);
  return (
    <footer className="mt-auto border-t border-border/70 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark size={30} />
            <span>
              <span className="eyebrow block">Approaches to IAS</span>
              <span className="display block text-lg">Political Atlas of India</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            An interactive, exam-oriented atlas of Indian politics — maps, election results,
            party profiles and constitutional notes, all stored locally in your browser session.
            No accounts, no tracking, no server calls.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-3">Atlas sections</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {[
              ["map", "Interactive map"], ["elections", "Election explorer"],
              ["parties", "Party directory"], ["timeline", "Political timeline"],
              ["polity", "Polity notes"], ["quiz", "Practice quiz"],
              ["compare", "State compare"], ["about", "About & sources"],
            ].map(([v, label]) => (
              <li key={v}>
                <button className="hover:text-foreground" onClick={() => go(v)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-3">Data & disclaimer</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Election figures are compiled from publicly available Election Commission of India
            declared results and assembly verdicts up to May 2026 (positions as of November 2026).
            All design, code and explanatory notes are original. Party symbols are ECI-owned
            artworks and are intentionally not reproduced. Educational use only — verify against
            the latest official notifications.
          </p>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© 2026 Approaches to IAS · approachestoias.com</span>
          <span>Built as a fully static, frontend-only application — zero API calls.</span>
        </div>
      </div>
    </footer>
  );
}
