"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BrandBlock } from "./brand";
import { useTheme, type TextScale } from "./theme";
import { searchAtlas, entitiesOfKind, categoryById, stats } from "@/data";
import type { Entity } from "@/data/types";

// ─── Route change closes panels ─────────────────────────────────────────────

function useCloseOnHash(setOpen: () => void) {
  useEffect(() => {
    const fn = () => setOpen();
    window.addEventListener("hashchange", fn);
    return () => window.removeEventListener("hashchange", fn);
  }, [setOpen]);
}

// ─── The atlas family (Switch Atlas) ────────────────────────────────────────

const ATLAS_FAMILY = [
  { name: "Political Atlas", tag: "The Shape of Power", current: true },
  { name: "History Atlas", tag: "In preparation" },
  { name: "Geography Atlas", tag: "In preparation" },
  { name: "Law Atlas", tag: "In preparation" },
  { name: "Economics Atlas", tag: "In preparation" },
  { name: "Society and Culture Atlas", tag: "In preparation" },
];

function Panel({ children, wide = false, static: isStatic = false }: { children: React.ReactNode; wide?: boolean; static?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className={`z-50 rounded-xl border border-border bg-popover text-popover-foreground shadow-xl shadow-black/5 ${
        wide ? "w-[min(46rem,92vw)]" : "w-[min(22rem,92vw)]"
      } ${isStatic ? "" : "absolute right-0 top-[calc(100%+10px)]"}`}
    >
      {children}
    </motion.div>
  );
}

const menuItem =
  "flex items-center justify-between gap-3 rounded-md px-3 py-2 text-[0.9rem] hover:bg-secondary transition-colors";

// ─── Header ─────────────────────────────────────────────────────────────────

type OpenPanel = null | "explore" | "discover" | "interact" | "about" | "countries" | "settings" | "family" | "search" | "signin" | "mobile";

export function Nav() {
  const [open, setOpen] = useState<OpenPanel>(null);
  const close = () => setOpen(null);
  useCloseOnHash(close);
  const barRef = useRef<HTMLElement>(null);
  const hoveredAt = useRef(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const groups: { key: Exclude<OpenPanel, null | "settings" | "family" | "search" | "signin" | "mobile" | "countries">; label: string; items: { label: string; to: string }[] }[] = [
    {
      key: "explore",
      label: "Explore",
      items: [
        { label: "Browse Domains", to: "domains" },
        { label: "A to Z Index", to: "atoz" },
        { label: "All Systems", to: "systems" },
      ],
    },
    {
      key: "discover",
      label: "Discover",
      items: [
        { label: "Compare", to: "compare" },
        { label: "Path Finder", to: "connections" },
        { label: "Trails", to: "trails" },
        { label: "Today", to: "today" },
      ],
    },
    {
      key: "interact",
      label: "Interact",
      items: [
        { label: "Forum", to: "forum" },
        { label: "Communities", to: "communities" },
        { label: "Quizzes", to: "quizzes" },
        { label: "Open Questions", to: "open-questions" },
        { label: "Disputed Statements", to: "disputed" },
        { label: "Cases", to: "cases" },
        { label: "Recent Corrections", to: "corrections" },
        { label: "Recently Added", to: "recently-added" },
        { label: "Campaigns", to: "campaigns" },
        { label: "Embed a Card", to: "embed" },
      ],
    },
    {
      key: "about",
      label: "About",
      items: [
        { label: "About", to: "about" },
        { label: "Why Create an Account", to: "account" },
        { label: "News", to: "news" },
        { label: "FAQ", to: "faq" },
        { label: "Subscribe", to: "subscribe" },
        { label: "Newsletter Editions", to: "newsletter" },
      ],
    },
  ];

  return (
    <header
      ref={barRef}
      className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center gap-4 px-4 sm:px-6 relative">
        <Link href="#/home" aria-label="Political Atlas home" className="shrink-0">
          <BrandBlock />
        </Link>

        {/* primary groups (desktop) */}
        <nav aria-label="Primary" className="ml-4 hidden items-center gap-0.5 lg:flex">
          {groups.map((g) => (
            <div key={g.key} className="relative">
              <button
                onClick={() =>
                  setOpen((o) => (o === g.key && Date.now() - hoveredAt.current > 400 ? null : g.key))
                }
                onMouseEnter={() => {
                  hoveredAt.current = Date.now();
                  setOpen((o) => (o === null ? g.key : o));
                }}
                aria-expanded={open === g.key}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-[0.9rem] font-medium text-foreground/85 hover:bg-secondary hover:text-foreground"
              >
                {g.label}
                <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${open === g.key ? "rotate-180" : ""}`} aria-hidden>
                  <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <AnimatePresence>
                {open === g.key && (
                  <div className="absolute left-0" onMouseLeave={() => setOpen(null)}>
                    <Panel>
                      <div className="p-1.5">
                        {g.items.map((it) => (
                          <Link key={it.to} href={`#/${it.to}`} className={menuItem} onClick={close}>
                            {it.label}
                          </Link>
                        ))}
                      </div>
                    </Panel>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Countries mega-dropdown — the atlas's country selector */}
          <div className="relative">
            <button
              onClick={() =>
                setOpen((o) => (o === "countries" && Date.now() - hoveredAt.current > 400 ? null : "countries"))
              }
              onMouseEnter={() => {
                hoveredAt.current = Date.now();
                setOpen((o) => (o === null ? "countries" : o));
              }}
              aria-expanded={open === "countries"}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-[0.9rem] font-medium text-foreground/85 hover:bg-secondary hover:text-foreground"
            >
              Countries
              <span className="rounded-full bg-brand-soft px-1.5 py-0.5 text-[0.625rem] font-bold text-brand">{stats.countries}</span>
              <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${open === "countries" ? "rotate-180" : ""}`} aria-hidden>
                <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* countries panel lives at header level, centred under the bar */}
        <AnimatePresence>
          {open === "countries" && (
            <div
              className="absolute left-1/2 top-[4.4rem] z-40 -translate-x-1/2"
              onMouseLeave={() => setOpen(null)}
            >
              <Panel wide static>
                <CountriesMenu onPick={close} />
              </Panel>
            </div>
          )}
        </AnimatePresence>

        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => setOpen((o) => (o === "signin" ? null : "signin"))}
            className="hidden rounded-md px-3 py-2 text-[0.9rem] font-medium text-foreground/85 hover:bg-secondary sm:block"
          >
            Sign In
          </button>
          <HeaderIcon label="Display settings" open={open === "settings"} onToggle={() => setOpen((o) => (o === "settings" ? null : "settings"))}>
            <svg viewBox="0 0 20 20" className="h-[1.1rem] w-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2.5" y="4" width="15" height="10" rx="1.5" />
              <path d="M7 17h6" strokeLinecap="round" />
            </svg>
          </HeaderIcon>
          <HeaderIcon label="Switch Atlas" open={open === "family"} onToggle={() => setOpen((o) => (o === "family" ? null : "family"))}>
            <svg viewBox="0 0 20 20" className="h-[1.1rem] w-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="10" r="7.5" />
              <path d="M10 2.5c-3 3.5-3 11.5 0 15M10 2.5c3 3.5 3 11.5 0 15M2.8 7.5h14.4M2.8 12.5h14.4" />
            </svg>
          </HeaderIcon>
          <HeaderIcon label="Search" open={open === "search"} onToggle={() => setOpen((o) => (o === "search" ? null : "search"))}>
            <svg viewBox="0 0 20 20" className="h-[1.1rem] w-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="9" cy="9" r="5.5" />
              <path d="M13.2 13.2L17 17" strokeLinecap="round" />
            </svg>
          </HeaderIcon>
          <button
            onClick={() => setOpen((o) => (o === "mobile" ? null : "mobile"))}
            aria-label="Menu"
            aria-expanded={open === "mobile"}
            className="rounded-md p-2.5 hover:bg-secondary lg:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              {open === "mobile" ? <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" /> : <path d="M3 5.5h14M3 10h14M3 14.5h14" strokeLinecap="round" />}
            </svg>
          </button>

          <AnimatePresence>{open === "settings" && (
            <div className="absolute right-4 top-[4.4rem]"><Panel><SettingsPanel /></Panel></div>
          )}</AnimatePresence>
          <AnimatePresence>{open === "family" && (
            <div className="absolute right-4 top-[4.4rem]"><Panel><FamilyPanel /></Panel></div>
          )}</AnimatePresence>
          <AnimatePresence>{open === "search" && (
            <div className="absolute right-4 top-[4.4rem]"><Panel wide><SearchPanel onPick={close} /></Panel></div>
          )}</AnimatePresence>
          <AnimatePresence>{open === "signin" && (
            <div className="absolute right-4 top-[4.4rem]"><Panel><SignInPanel /></Panel></div>
          )}</AnimatePresence>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open === "mobile" && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Mobile"
            className="overflow-hidden border-t border-border/70 lg:hidden"
          >
            <div className="max-h-[70vh] overflow-y-auto px-4 py-3">
              <MobileCountries />
              {groups.map((g) => (
                <div key={g.key} className="mb-3">
                  <div className="eyebrow mb-1">{g.label}</div>
                  <div className="grid grid-cols-2 gap-x-3">
                    {g.items.map((it) => (
                      <Link key={it.to} href={`#/${it.to}`} onClick={close} className="rounded-md px-2 py-1.5 text-[0.9rem] hover:bg-secondary">
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={close} className="btn-ghost mt-2 w-full">Sign In</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeaderIcon({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={label}
      aria-expanded={open}
      title={label}
      className={`hidden rounded-md p-2.5 transition-colors sm:block ${open ? "bg-secondary text-brand" : "hover:bg-secondary"}`}
    >
      {children}
    </button>
  );
}

// ─── Countries mega menu ────────────────────────────────────────────────────

const REGION_ORDER = [
  "South Asia", "East Asia", "Southeast Asia", "Central Asia", "Middle East",
  "Western Europe", "Northern Europe", "Southern Europe", "Eastern Europe",
  "North America", "South America", "West Africa", "East Africa", "North Africa", "Southern Africa", "Oceania",
];

function CountriesMenu({ onPick }: { onPick: () => void }) {
  const [q, setQ] = useState("");
  const countries = useMemo(() => entitiesOfKind("country"), []);
  const filtered = useMemo(() => {
    if (!q.trim()) return countries;
    return countries.filter((c) => c.name.toLowerCase().includes(q.trim().toLowerCase()));
  }, [countries, q]);

  const grouped = useMemo(() => {
    const m = new Map<string, Entity[]>();
    for (const c of filtered) {
      const r = c.extras?.worldRegion ?? "Elsewhere";
      const arr = m.get(r) ?? [];
      arr.push(c);
      m.set(r, arr);
    }
    return REGION_ORDER.filter((r) => m.has(r)).map((r) => ({ region: r, items: m.get(r)!.sort((a, b) => a.name.localeCompare(b.name)) }));
  }, [filtered]);

  return (
    <div className="p-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="eyebrow">Select a country</div>
        <Link href="#/category/countries" onClick={onPick} className="text-[0.8rem] font-semibold text-brand hover:underline">
          All {stats.countries} →
        </Link>
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Find a country…"
        className="mb-2 w-full rounded-lg border border-input bg-card px-3 py-2 text-[0.9rem] outline-none focus:ring-2 focus:ring-ring/50"
      />
      <div className="max-h-[24rem] overflow-y-auto pr-1">
        {grouped.length === 0 && (
          <p className="px-2 py-6 text-center text-sm text-muted-foreground">No country matches that search.</p>
        )}
        {grouped.map((g) => (
          <div key={g.region} className="mb-1.5">
            <div className="px-2 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">{g.region}</div>
            <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-3">
              {g.items.map((c) => (
                <Link
                  key={c.id}
                  href={`#/entry/${c.id}`}
                  onClick={onPick}
                  className={`rounded-md px-2 py-1.5 text-[0.875rem] hover:bg-secondary ${c.id === "india" ? "font-semibold text-brand" : ""}`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileCountries() {
  const countries = entitiesOfKind("country");
  const india = countries.find((c) => c.id === "india");
  return (
    <div className="mb-3">
      <div className="eyebrow mb-1">Countries · {stats.countries}</div>
      <div className="flex flex-wrap gap-1.5">
        {india && (
          <Link href="#/entry/india" className="rounded-full border border-brand/50 bg-brand-soft px-3 py-1.5 text-[0.85rem] font-semibold text-brand">
            India
          </Link>
        )}
        {countries
          .filter((c) => c.id !== "india")
          .slice(0, 11)
          .map((c) => (
            <Link key={c.id} href={`#/entry/${c.id}`} className="rounded-full border border-border px-3 py-1.5 text-[0.85rem] hover:bg-secondary">
              {c.name}
            </Link>
          ))}
        <Link href="#/category/countries" className="rounded-full border border-border px-3 py-1.5 text-[0.85rem] font-semibold text-brand hover:bg-secondary">
          All →
        </Link>
      </div>
    </div>
  );
}

// ─── Panels ─────────────────────────────────────────────────────────────────

function SettingsPanel() {
  const { theme, setTheme, textScale, setTextScale } = useTheme();
  return (
    <div className="p-4">
      <div className="eyebrow mb-3">Text size</div>
      <div className="mb-5 flex items-center gap-2">
        {(["90", "100", "110", "125"] as TextScale[]).map((s) => (
          <button
            key={s}
            onClick={() => setTextScale(s)}
            aria-pressed={textScale === s}
            className={`h-9 min-w-11 rounded-md border px-2 text-[0.8rem] font-semibold transition-colors ${
              textScale === s ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
            }`}
          >
            {s}%
          </button>
        ))}
      </div>
      <div className="eyebrow mb-3">Theme</div>
      <div className="flex items-center gap-2">
        {(["system", "light", "dark"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            aria-pressed={theme === t}
            className={`h-9 rounded-md border px-3 text-[0.8rem] font-semibold capitalize transition-colors ${
              theme === t ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="mt-4 text-[0.75rem] leading-relaxed text-muted-foreground">
        Choices are kept in this browser only. Nothing is sent anywhere.
      </p>
    </div>
  );
}

function FamilyPanel() {
  return (
    <div className="p-4">
      <div className="eyebrow mb-1">Switch Atlas</div>
      <p className="mb-3 text-[0.8rem] leading-relaxed text-muted-foreground">
        The Approaches atlas family on approachestoias.com.
      </p>
      <div className="space-y-1">
        {ATLAS_FAMILY.map((a) =>
          a.current ? (
            <div key={a.name} className="flex items-center justify-between rounded-md bg-brand-soft px-3 py-2">
              <div>
                <div className="text-[0.9rem] font-semibold text-brand">{a.name}</div>
                <div className="text-[0.75rem] text-brand/80">{a.tag}</div>
              </div>
              <span className="pill pill-brand">Current</span>
            </div>
          ) : (
            <div key={a.name} className="flex items-center justify-between rounded-md px-3 py-2 opacity-70">
              <div>
                <div className="text-[0.9rem] font-semibold">{a.name}</div>
                <div className="text-[0.75rem] text-muted-foreground">{a.tag}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function SignInPanel() {
  return (
    <div className="p-4">
      <div className="eyebrow mb-1">Sign In</div>
      <p className="mb-3 text-[0.875rem] leading-relaxed text-muted-foreground">
        Reading the atlas needs no account. An account adds the things that are yours:
        starred entries, quiz scores, forum posts and disputes raised under your own name.
      </p>
      <div className="space-y-1.5">
        <div className="rounded-lg border border-border p-3 text-[0.8rem] leading-relaxed">
          Accounts are served by the publisher at{" "}
          <a href="https://www.approachestoias.com" target="_blank" rel="noreferrer" className="font-semibold text-brand hover:underline">
            approachestoias.com
          </a>. This atlas itself stores everything in your browser and calls nothing.
        </div>
        <a href="https://www.approachestoias.com" target="_blank" rel="noreferrer" className="btn-brand block w-full text-center">
          Continue on the publisher's site
        </a>
        <Link href="#/account" className="btn-ghost block w-full text-center">Why create an account?</Link>
      </div>
    </div>
  );
}

function SearchPanel({ onPick }: { onPick: () => void }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchAtlas(q, 10), [q]);
  return (
    <div className="p-3">
      <input
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search the atlas — an ideology, a constitution, a system…"
        className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-[0.95rem] outline-none focus:ring-2 focus:ring-ring/50"
      />
      <div className="mt-2 max-h-[24rem] overflow-y-auto">
        {q.trim() === "" ? (
          <div className="p-2">
            <div className="eyebrow mb-2">Try</div>
            {["India", "Magna Carta", "Separation of powers", "Presidential system", "Nelson Mandela"].map((s) => (
              <button key={s} onClick={() => setQ(s)} className={menuItem + " w-full"}>
                <span className="text-muted-foreground">{s}</span>
              </button>
            ))}
          </div>
        ) : results.length === 0 ? (
          <p className="px-2 py-6 text-center text-sm text-muted-foreground">
            Nothing in the atlas matches “{q}”. Names and descriptions are both searched.
          </p>
        ) : (
          results.map((e) => (
            <Link key={e.id} href={`#/entry/${e.id}`} onClick={onPick} className={menuItem}>
              <span className="flex-1">
                <span className="font-semibold">{e.name}</span>
                <span className="ml-2 text-[0.75rem] text-muted-foreground">{categoryById[e.kind === "country" ? "countries" : e.kind === "system" ? "systems-of-government" : e.kind === "mechanism" ? "political-mechanisms" : e.kind === "figure" ? "political-figures" : e.kind === "concept" ? "political-concepts" : e.kind + "s"]?.name ?? e.kind}</span>
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
