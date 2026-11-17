"use client";

import { motion } from "framer-motion";
import { STATES } from "@/data/states";
import { dominantAlliance, assemblyAlliance, type Alliance, type StateEntry } from "@/lib/atlas";
import { AllianceBar } from "./charts";

export type MapMode = "ls2024" | "assembly";

function tileAlliance(s: StateEntry, mode: MapMode): Alliance {
  return mode === "ls2024" ? dominantAlliance(s.ls2024) : assemblyAlliance(s.assembly);
}

function tileStyle(a: Alliance, selected: boolean, muted: boolean): React.CSSProperties {
  const c = a === "OTH" ? "var(--a-oth)" : a === "NDA" ? "var(--a-nda)" : "var(--a-india)";
  return {
    background: `color-mix(in oklch, ${c} ${muted ? 12 : 24}%, var(--card))`,
    borderColor: `color-mix(in oklch, ${c} ${muted ? 25 : 50}%, var(--border))`,
    boxShadow: selected ? `0 0 0 2px ${c}, 0 12px 24px -12px ${c}` : undefined,
  };
}

const swatch = (a: Alliance) =>
  a === "OTH" ? "var(--a-oth)" : a === "NDA" ? "var(--a-nda)" : "var(--a-india)";

function Tile({
  s, mode, selected, onSelect, compact = false,
}: {
  s: StateEntry; mode: MapMode; selected: boolean; onSelect?: (id: string) => void; compact?: boolean;
}) {
  const a = tileAlliance(s, mode);
  const noAssembly = mode === "assembly" && !s.assembly;
  return (
    <button
      onClick={() => onSelect?.(s.id)}
      aria-label={`${s.name} — ${mode === "ls2024" ? "2024 Lok Sabha" : "Assembly"}: ${
        a === "NDA" ? "NDA" : a === "INDIA" ? "INDIA bloc" : "Others"
      }`}
      className={`tile aspect-square w-full rounded-md border ${noAssembly ? "border-dashed" : ""} flex flex-col items-center justify-center ${
        compact ? "p-0.5" : "p-1"
      } ${selected ? "relative z-10" : ""}`}
      style={tileStyle(a, selected, noAssembly)}
    >
      <span className={`display font-semibold leading-none ${compact ? "text-[11px]" : "text-[13px] sm:text-[15px]"}`}>
        {s.short}
      </span>
      {!compact && (
        <span className="mt-1 text-[9px] leading-none tabular-nums text-foreground/60 sm:text-[10px]">
          {s.lsSeats}
        </span>
      )}
    </button>
  );
}

export function TileMap({
  mode, selected, onSelect, interactive = true,
}: { mode: MapMode; selected?: string | null; onSelect?: (id: string) => void; interactive?: boolean }) {
  const main = STATES.filter((s) => s.box === "main");
  const ne = STATES.filter((s) => s.box === "ne");
  const islands = STATES.filter((s) => s.box === "islands");

  return (
    <div className="grid grid-cols-9 gap-1.5" role="group" aria-label="Tile map of India">
      {/* mainland tiles at their grid coordinates */}
      {main.map((s) => (
        <div key={s.id} style={{ gridRow: s.grid.r + 1, gridColumn: s.grid.c + 1 }}>
          <Tile s={s} mode={mode} selected={selected === s.id} onSelect={interactive ? onSelect : undefined} />
        </div>
      ))}

      {/* North-East inset */}
      <div
        className="rounded-lg border border-dashed border-border/80 p-1.5"
        style={{ gridRow: "1 / 4", gridColumn: "7 / 10" }}
      >
        <div className="eyebrow mb-1.5 text-center text-[0.6rem]">North East</div>
        <div className="grid grid-cols-3 gap-1.5">
          {ne.map((s) => (
            <div key={s.id} style={{ gridRow: s.grid.r + 1, gridColumn: s.grid.c + 1 }}>
              <Tile s={s} mode={mode} selected={selected === s.id} onSelect={interactive ? onSelect : undefined} compact />
            </div>
          ))}
        </div>
      </div>

      {/* Islands & city UT inset */}
      <div
        className="rounded-lg border border-dashed border-border/80 p-1.5"
        style={{ gridRow: 9, gridColumn: "1 / 5" }}
      >
        <div className="eyebrow mb-1.5 text-center text-[0.6rem]">Islands & city UTs</div>
        <div className="grid grid-cols-3 gap-1.5">
          {islands.map((s) => (
            <div key={s.id}>
              <Tile s={s} mode={mode} selected={selected === s.id} onSelect={interactive ? onSelect : undefined} compact />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MapLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-muted-foreground">
      <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded border" style={{ background: `color-mix(in oklch, var(--a-nda) 24%, var(--card))`, borderColor: swatch("NDA") }} />NDA</span>
      <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded border" style={{ background: `color-mix(in oklch, var(--a-india) 24%, var(--card))`, borderColor: swatch("INDIA") }} />INDIA bloc</span>
      <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded border" style={{ background: `color-mix(in oklch, var(--a-oth) 24%, var(--card))`, borderColor: swatch("OTH") }} />Others</span>
      <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded border border-dashed border-border" />No assembly (UT)</span>
    </div>
  );
}

export function StatePanel({ s, mode }: { s: StateEntry; mode: MapMode }) {
  const dominant = dominantAlliance(s.ls2024);
  const domColor = swatch(dominant);
  return (
    <motion.aside
      key={s.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl border border-border bg-card p-5"
      aria-label={`${s.name} details`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="eyebrow">{s.region} · {s.type === "ut" ? "Union Territory" : "State"}</div>
          <h3 className="display mt-1 text-2xl leading-tight">{s.name}</h3>
        </div>
        <span className="rounded-full border px-2.5 py-1 text-[0.7rem] font-semibold tabular-nums"
          style={{ color: domColor, borderColor: `color-mix(in oklch, ${domColor} 45%, var(--border))`, background: `color-mix(in oklch, ${domColor} 12%, var(--card))` }}>
          {s.lsSeats} LS
        </span>
      </div>

      <div className="mt-1 text-sm text-muted-foreground">Capital: {s.capital}</div>

      <div className="mt-4">
        <div className="eyebrow mb-2">Lok Sabha 2024</div>
        <AllianceBar nda={s.ls2024.nda} india={s.ls2024.india} oth={s.ls2024.oth} />
        <div className="mt-3 text-[0.82rem] leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground/85">Leading: </span>{s.topParties2024}
        </div>
      </div>

      <div className="rule-tick my-4" />

      {s.assembly ? (
        <div>
          <div className="eyebrow mb-2">Assembly — position as of Nov 2026</div>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-[0.82rem]">
            <dt className="text-muted-foreground">Ruling</dt><dd className="text-right font-medium">{s.assembly.ruling}</dd>
            <dt className="text-muted-foreground">Chief Minister</dt><dd className="text-right font-medium">{s.assembly.cm}</dd>
            <dt className="text-muted-foreground">In office since</dt><dd className="text-right">{s.assembly.cmSince}</dd>
            <dt className="text-muted-foreground">House strength</dt><dd className="text-right tabular-nums">{s.assembly.strength}</dd>
            <dt className="text-muted-foreground">Last election</dt><dd className="text-right">{s.assembly.lastElection}</dd>
          </dl>
        </div>
      ) : (
        <div>
          <div className="eyebrow mb-2">Legislature</div>
          <p className="text-[0.82rem] leading-relaxed text-muted-foreground">
            No elected Assembly — administered by the President through an Administrator /
            Lieutenant Governor (Article 239).
          </p>
        </div>
      )}

      <div className="mt-4 rounded-xl border px-4 py-3"
        style={{ borderColor: `color-mix(in oklch, var(--a-nda) 35%, var(--border))`, background: `color-mix(in oklch, var(--a-nda) 8%, var(--card))` }}>
        <div className="eyebrow mb-1" style={{ color: "var(--a-nda)" }}>UPSC lens</div>
        <p className="text-[0.82rem] leading-relaxed text-foreground/85">{s.note}</p>
      </div>
    </motion.aside>
  );
}
