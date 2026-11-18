"use client";

import { useMemo, useState } from "react";
import { STATES } from "@/data/states";
import { ELECTIONS } from "@/data/elections";
import { NATIONAL_PARTIES, STATE_PARTIES } from "@/data/parties";
import { TIMELINE, type TimelineEra } from "@/data/timeline";
import type { Alliance } from "@/lib/atlas";
import { AllianceBar, HBars, StatTile } from "./charts";
import { TileMap, MapLegend, StatePanel } from "./indiamap";
import { SectionHeader } from "./kit";

// The India entry carries the atlas's deepest country modules: the union's
// state map, the Lok Sabha election explorer, the party directory and the
// political timeline. Facts live in local tables; everything below derives
// from them at render time.

export function IndiaModules() {
  return (
    <div id="in-depth" className="scroll-mt-24 space-y-10">
      <div className="rounded-2xl border border-brand/25 bg-brand-soft/40 px-5 py-3">
        <div className="eyebrow">The Union in Depth</div>
        <p className="mt-1 text-[0.875rem] leading-relaxed text-muted-foreground">
          India's entry runs deeper than any other in this atlas: the state-by-state map of two
          verdicts, the Lok Sabha explorer for 2014–2024, the party directory and the republic's
          political timeline.
        </p>
      </div>
      <MapModule />
      <ElectionsModule />
      <PartiesModule />
      <TimelineModule />
    </div>
  );
}

// ─── State map ──────────────────────────────────────────────────────────────

function MapModule() {
  const [mode, setMode] = useState<"ls2024" | "assembly">("ls2024");
  const [selected, setSelected] = useState<string | null>("UP");
  const s = STATES.find((x) => x.id === selected) ?? null;

  return (
    <SectionHeader title="The State Map" count={STATES.length}>
      <p className="-mt-2 mb-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
        36 states and union territories as tiles — colour by the 2024 Lok Sabha verdict or by who
        governs each assembly as of November 2026. Select any tile for its seats, alliance split
        and ruling arrangement.
      </p>
      <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <div className="mb-3 flex gap-2">
            {(
              [
                { key: "ls2024", label: "Lok Sabha 2024" },
                { key: "assembly", label: "Assemblies (Nov 2026)" },
              ] as const
            ).map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                aria-pressed={mode === m.key}
                className={`rounded-full border px-3.5 py-1.5 text-[0.8rem] font-semibold transition-colors ${
                  mode === m.key ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
          <TileMap mode={mode} selected={selected} onSelect={setSelected} />
          <div className="mt-3"><MapLegend /></div>
        </div>
        {s && <StatePanel s={s} mode={mode} />}
      </div>
    </SectionHeader>
  );
}

// ─── Election explorer ──────────────────────────────────────────────────────

function ElectionsModule() {
  const [yearIdx, setYearIdx] = useState(0);
  const y = ELECTIONS[yearIdx];
  const parties = useMemo(() => [...y.parties].sort((a, b) => b.seats - a.seats || (b.voteShare ?? 0) - (a.voteShare ?? 0)), [y]);

  return (
    <SectionHeader title="Election Explorer" count={ELECTIONS.length}>
      <div className="mb-4 flex flex-wrap gap-2">
        {ELECTIONS.map((e, i) => (
          <button
            key={e.year}
            onClick={() => setYearIdx(i)}
            aria-pressed={i === yearIdx}
            className={`rounded-full border px-3.5 py-1.5 text-[0.8rem] font-semibold transition-colors ${
              i === yearIdx ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
            }`}
          >
            Lok Sabha {e.year}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        <StatTile value={y.nda + y.india + y.others} label="Seats" sub={`${y.turnout} turnout`} />
        <StatTile value={y.nda} label="NDA" sub="alliance seats" />
        <StatTile value={y.india} label="INDIA bloc" sub="alliance seats" />
        <StatTile value={y.others} label="Others" sub="alliance seats" />
      </div>

      <div className="mt-4"><AllianceBar nda={y.nda} india={y.india} oth={y.others} /></div>

      <p className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">{y.summary}</p>

      <div className="card-warm mt-5 overflow-hidden">
        <table className="w-full text-[0.875rem]">
          <thead>
            <tr className="border-b border-border bg-secondary/50 text-left">
              <th className="px-4 py-2.5 font-bold">Party</th>
              <th className="px-4 py-2.5 font-bold">Alliance</th>
              <th className="px-4 py-2.5 text-right font-bold">Seats</th>
              <th className="px-4 py-2.5 text-right font-bold">Vote share</th>
            </tr>
          </thead>
          <tbody>
            {parties.slice(0, 14).map((p) => (
              <tr key={p.abbr} className="border-b border-border/50 last:border-0">
                <td className="px-4 py-2 font-semibold">{p.name}</td>
                <td className="px-4 py-2">{allianceLabel(p.alliance)}</td>
                <td className="px-4 py-2 text-right tabular-nums">{p.seats}</td>
                <td className="px-4 py-2 text-right tabular-nums">{p.voteShare != null ? `${p.voteShare.toFixed(2)}%` : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="border-t border-border/60 px-4 py-2 text-[0.75rem] text-muted-foreground">
          Leading rows shown; {parties.length - 14 > 0 ? `${parties.length - 14} further rows` : "all rows"} in the table. Results as declared by the Election Commission of India.
        </p>
      </div>
    </SectionHeader>
  );
}

function allianceLabel(a: Alliance) {
  return a === "NDA" ? "NDA" : a === "INDIA" ? "INDIA bloc" : "Others";
}

// ─── Party directory ────────────────────────────────────────────────────────

function PartiesModule() {
  const [tab, setTab] = useState<"national" | "state">("national");
  const rows = tab === "national" ? NATIONAL_PARTIES : STATE_PARTIES;

  return (
    <SectionHeader title="Party Directory" count={rows.length}>
      <p className="-mt-2 mb-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
        Founding, founders and current footprint. Party symbols are election-commission artworks
        and are deliberately not reproduced.
      </p>
      <div className="mb-4 flex gap-2">
        {(
          [
            { key: "national", label: `National parties (${NATIONAL_PARTIES.length})` },
            { key: "state", label: `State parties (${STATE_PARTIES.length})` },
          ] as const
        ).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            aria-pressed={tab === t.key}
            className={`rounded-full border px-3.5 py-1.5 text-[0.8rem] font-semibold transition-colors ${
              tab === t.key ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((p) => (
          <div key={p.abbr} className="card-warm p-4">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-display font-bold">{p.name}</h4>
              <span className="pill">{p.abbr}</span>
            </div>
            <dl className="mt-3 space-y-1.5 text-[0.8125rem]">
              <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Founded</dt><dd className="text-right font-medium">{p.founded}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted-foreground">By</dt><dd className="text-right font-medium">{p.founder}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Base</dt><dd className="text-right font-medium">{p.base}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Lok Sabha 2024</dt><dd className="text-right font-medium tabular-nums">{p.ls2024}</dd></div>
            </dl>
            <p className="mt-3 border-t border-border/60 pt-3 text-[0.8rem] leading-relaxed text-muted-foreground">{p.blurb}</p>
          </div>
        ))}
      </div>
    </SectionHeader>
  );
}

// ─── Timeline ───────────────────────────────────────────────────────────────

const ERA_TABS: { key: TimelineEra | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "foundation", label: "Foundation" },
  { key: "democracy", label: "Democracy" },
  { key: "turning-points", label: "Turning Points" },
  { key: "recent", label: "Recent" },
];

function TimelineModule() {
  const [era, setEra] = useState<TimelineEra | "all">("all");
  const rows = era === "all" ? TIMELINE : TIMELINE.filter((t) => t.era === era);

  return (
    <SectionHeader title="Political Timeline" count={TIMELINE.length}>
      <div className="mb-4 flex flex-wrap gap-2">
        {ERA_TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setEra(t.key)}
            aria-pressed={era === t.key}
            className={`rounded-full border px-3.5 py-1.5 text-[0.8rem] font-semibold transition-colors ${
              era === t.key ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ol className="relative ml-3 border-l-2 border-brand/30 pl-6">
        {rows.map((t, i) => (
          <li key={i} className="relative pb-7 last:pb-0">
            <span
              className="absolute -left-[1.72rem] top-1 h-3.5 w-3.5 rounded-full border-2 bg-card"
              style={{ borderColor: "var(--brand)" }}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-display text-[1.05rem] font-bold">{t.date}</span>
              <span className="pill">{ERA_TABS.find((x) => x.key === t.era)?.label}</span>
            </div>
            <h4 className="mt-1 font-semibold">{t.title}</h4>
            <p className="mt-1 max-w-2xl text-[0.875rem] leading-relaxed text-muted-foreground">{t.detail}</p>
          </li>
        ))}
      </ol>
    </SectionHeader>
  );
}

// keep helpers referenced
