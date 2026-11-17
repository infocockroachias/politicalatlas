"use client";

import { useState } from "react";
import { STATES, STATE_BY_ID } from "@/data/states";
import { TileMap, MapLegend, StatePanel, type MapMode } from "../indiamap";

export function MapView({ param }: { param?: string }) {
  const [mode, setMode] = useState<MapMode>("ls2024");
  const [selected, setSelected] = useState<string | null>(param && STATE_BY_ID[param] ? param : "UP");
  const s = STATE_BY_ID[selected ?? "UP"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="rule-tick" />
      <p className="eyebrow mt-6">Atlas · 36 tiles</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">The Map</h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
        Every state and Union Territory as a tile, positioned roughly where it sits on the map of
        India. Click any tile to open its file — Lok Sabha result, assembly position, and the
        constitutional angle worth remembering.
      </p>

      {/* mode switch */}
      <div className="mt-7 inline-flex rounded-full border border-border bg-card p-1" role="tablist" aria-label="Map colour mode">
        {([
          ["ls2024", "Lok Sabha 2024"],
          ["assembly", "Assemblies (Nov 2026)"],
        ] as [MapMode, string][]).map(([m, label]) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-full px-4 py-2 text-[0.83rem] font-medium transition-colors ${
              mode === m ? "text-card-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            style={mode === m ? { background: "var(--a-nda)" } : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <TileMap mode={mode} selected={selected} onSelect={setSelected} />
          <div className="mt-5">
            <MapLegend />
          </div>
          <p className="mt-4 text-[0.78rem] leading-relaxed text-muted-foreground">
            Numbers under abbreviations show Lok Sabha seats. In &ldquo;Assemblies&rdquo; mode the
            dashed tiles are UTs without a legislature. The North-East and island UTs are shown as
            insets — standard atlas practice.
          </p>

          {/* quick index */}
          <div className="mt-8">
            <div className="eyebrow mb-3">Jump to a state</div>
            <div className="flex flex-wrap gap-1.5">
              {STATES.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelected(st.id)}
                  className={`rounded-full border px-2.5 py-1 text-[0.74rem] font-medium transition-colors ${
                    selected === st.id ? "text-card-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={selected === st.id ? { background: "var(--foreground)" } : { borderColor: "var(--border)" }}
                >
                  {st.short}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          {s && <StatePanel s={s} mode={mode} />}
        </div>
      </div>
    </div>
  );
}
