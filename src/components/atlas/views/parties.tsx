"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { NATIONAL_PARTIES, STATE_PARTIES } from "@/data/parties";
import { partyColor } from "@/lib/atlas";

export function PartiesView() {
  const [filter, setFilter] = useState<"all" | "National" | "State">("all");
  const [q, setQ] = useState("");

  const all = useMemo(() => [...NATIONAL_PARTIES, ...STATE_PARTIES], []);
  const list = useMemo(() => {
    let l = filter === "all" ? all : all.filter((p) => p.status === filter);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      l = l.filter((p) => p.name.toLowerCase().includes(s) || p.abbr.toLowerCase().includes(s) || p.base.toLowerCase().includes(s));
    }
    return [...l].sort((a, b) => b.ls2024 - a.ls2024 || a.name.localeCompare(b.name));
  }, [all, filter, q]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="rule-tick" />
      <p className="eyebrow mt-6">Party directory</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">The parties</h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
        Six parties hold national recognition (ECI list of March 2024); the rest of India&apos;s
        politics runs through strong regional platforms. Identity is shown with colour chips —
        party symbols are official ECI artworks and are not reproduced here.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          {(["all", "National", "State"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-[0.83rem] font-medium transition-colors ${
                filter === f ? "text-card-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              style={filter === f ? { background: "var(--a-nda)" } : undefined}
            >
              {f === "all" ? "All" : `${f} parties`}
            </button>
          ))}
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, state…"
          aria-label="Search parties"
          className="w-full max-w-xs rounded-full border border-border bg-card px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
        />
        <span className="text-[0.8rem] text-muted-foreground">{list.length} parties</span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <motion.article
            key={p.abbr}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.3) }}
            className="flex flex-col rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 shrink-0 rounded-lg border" style={{ background: `color-mix(in oklch, ${partyColor(p.abbr)} 26%, var(--card))`, borderColor: partyColor(p.abbr) }} />
              <div>
                <h2 className="display text-xl leading-tight">{p.name}</h2>
                <div className="text-[0.72rem] text-muted-foreground">{p.abbr} · {p.status} party</div>
              </div>
            </div>
            <p className="mt-3 flex-1 text-[0.84rem] leading-relaxed text-muted-foreground">{p.blurb}</p>
            <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-border/70 pt-3 text-[0.74rem]">
              <div><dt className="text-muted-foreground">Founded</dt><dd className="font-medium">{p.founded}</dd></div>
              <div><dt className="text-muted-foreground">Base</dt><dd className="truncate font-medium" title={p.base}>{p.base}</dd></div>
              <div><dt className="text-muted-foreground">LS 2024</dt><dd className="font-medium tabular-nums">{p.ls2024} seat{p.ls2024 === 1 ? "" : "s"}</dd></div>
            </dl>
            <div className="mt-2 text-[0.74rem] text-muted-foreground">Founder: {p.founder}</div>
          </motion.article>
        ))}
      </div>
      {list.length === 0 && (
        <p className="mt-10 text-sm text-muted-foreground">No parties match that search.</p>
      )}
    </div>
  );
}
