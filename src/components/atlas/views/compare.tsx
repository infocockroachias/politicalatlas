"use client";

import { useState } from "react";
import { STATES } from "@/data/states";
import { dominantAlliance } from "@/lib/atlas";
import { AllianceBar } from "../charts";

const ALLI_COLOR: Record<string, string> = {
  NDA: "var(--a-nda)",
  INDIA: "var(--a-india)",
  OTH: "var(--a-oth)",
};

function StateSelect({ value, onChange, id }: { value: string; onChange: (v: string) => void; id: string }) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={id === "a" ? "First state" : "Second state"}
      className="w-full rounded-xl border border-border bg-card px-4 py-3 text-[0.95rem] font-medium outline-none focus:ring-2 focus:ring-ring"
    >
      {STATES.map((s) => (
        <option key={s.id} value={s.id}>{s.name}</option>
      ))}
    </select>
  );
}

function Row({ label, a, b }: { label: string; a: React.ReactNode; b: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_110px_1fr] items-center gap-3 border-t border-border/70 py-3 sm:grid-cols-[1fr_170px_1fr]">
      <div className="text-right text-[0.88rem]">{a}</div>
      <div className="text-center text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-[0.88rem]">{b}</div>
    </div>
  );
}

export function CompareView() {
  const [a, setA] = useState("UP");
  const [b, setB] = useState("TN");
  const sa = STATES.find((s) => s.id === a)!;
  const sb = STATES.find((s) => s.id === b)!;

  const allianceText = (s: typeof sa) => {
    const d = dominantAlliance(s.ls2024);
    return (
      <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: ALLI_COLOR[d] }}>
        <i className="h-2.5 w-2.5 rounded-full" style={{ background: ALLI_COLOR[d] }} />
        {d === "OTH" ? "Others" : d} {s.ls2024.nda}/{s.ls2024.india}/{s.ls2024.oth}
      </span>
    );
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="rule-tick" />
      <p className="eyebrow mt-6">Compare</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">Two states, side by side</h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
        Pick any two states or UTs to read their files together — seats, the 2024 verdict and the
        assembly position as of November 2026.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <StateSelect value={a} onChange={setA} id="a" />
        <StateSelect value={b} onChange={setB} id="b" />
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card px-5 pb-4 pt-5 sm:px-7">
        <div className="grid grid-cols-[1fr_110px_1fr] items-baseline gap-3 pb-4 sm:grid-cols-[1fr_170px_1fr]">
          <h2 className="display text-right text-2xl sm:text-3xl">{sa.name}</h2>
          <span className="text-center text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">vs</span>
          <h2 className="display text-2xl sm:text-3xl">{sb.name}</h2>
        </div>

        <Row label="LS seats" a={<b className="tabular-nums">{sa.lsSeats}</b>} b={<b className="tabular-nums">{sb.lsSeats}</b>} />
        <Row label="2024 verdict" a={allianceText(sa)} b={allianceText(sb)} />
        <Row label="Assembly" a={<span>{sa.assembly ? sa.assembly.ruling : "No legislature"}</span>} b={<span>{sb.assembly ? sb.assembly.ruling : "No legislature"}</span>} />
        <Row label="Chief Minister" a={<b>{sa.assembly ? sa.assembly.cm : "—"}</b>} b={<b>{sb.assembly ? sb.assembly.cm : "—"}</b>} />
        <Row label="Since" a={<span>{sa.assembly ? sa.assembly.cmSince : "—"}</span>} b={<span>{sb.assembly ? sb.assembly.cmSince : "—"}</span>} />
        <Row label="House" a={<span className="tabular-nums">{sa.assembly ? sa.assembly.strength : "—"}</span>} b={<span className="tabular-nums">{sb.assembly ? sb.assembly.strength : "—"}</span>} />

        <div className="grid grid-cols-[1fr_110px_1fr] items-start gap-3 border-t border-border/70 py-4 sm:grid-cols-[1fr_170px_1fr]">
          <div className="text-right text-[0.78rem] leading-relaxed text-muted-foreground">{sa.note}</div>
          <div className="text-center text-[0.68rem] font-semibold uppercase tracking-wider" style={{ color: "var(--a-nda)" }}>UPSC lens</div>
          <div className="text-[0.78rem] leading-relaxed text-muted-foreground">{sb.note}</div>
        </div>

        <div className="grid grid-cols-[1fr_110px_1fr] items-center gap-3 border-t border-border/70 py-4 sm:grid-cols-[1fr_170px_1fr]">
          <div className="ml-auto w-full max-w-[220px]"><AllianceBar nda={sa.ls2024.nda} india={sa.ls2024.india} oth={sa.ls2024.oth} showLabels={false} height={10} /></div>
          <div className="text-center text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">2024</div>
          <div className="w-full max-w-[220px]"><AllianceBar nda={sb.ls2024.nda} india={sb.ls2024.india} oth={sb.ls2024.oth} showLabels={false} height={10} /></div>
        </div>
      </div>
    </div>
  );
}
