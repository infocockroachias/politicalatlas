"use client";

import { motion } from "framer-motion";
import type { Alliance, PartyRow } from "@/lib/atlas";
import { partyColor } from "@/lib/atlas";

/** Stacked alliance bar — one horizontal strip split into NDA / INDIA / Others. */
export function AllianceBar({
  nda, india, oth, showLabels = true, height = 14,
}: { nda: number; india: number; oth: number; showLabels?: boolean; height?: number }) {
  const total = nda + india + oth || 1;
  const seg: { a: Alliance; n: number }[] = [
    { a: "NDA", n: nda }, { a: "INDIA", n: india }, { a: "OTH", n: oth },
  ];
  return (
    <div>
      <div className="flex w-full overflow-hidden rounded-full" style={{ height }}>
        {seg.map((s) =>
          s.n > 0 ? (
            <div
              key={s.a}
              className="h-full"
              style={{ width: `${(s.n / total) * 100}%`, background: `var(--a-${s.a === "OTH" ? "oth" : s.a.toLowerCase()})` }}
              title={`${s.a}: ${s.n}`}
            />
          ) : null
        )}
      </div>
      {showLabels && (
        <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[0.72rem] text-muted-foreground">
          <span className="flex items-center gap-1.5"><i className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--a-nda)" }} />NDA {nda}</span>
          <span className="flex items-center gap-1.5"><i className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--a-india)" }} />INDIA {india}</span>
          {oth > 0 && (
            <span className="flex items-center gap-1.5"><i className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--a-oth)" }} />Others {oth}</span>
          )}
        </div>
      )}
    </div>
  );
}

/** Horizontal party bars — the workhorse chart of the elections view. */
export function HBars({ rows, cap = 30 }: { rows: PartyRow[]; cap?: number }) {
  const shown = rows.slice(0, cap);
  const max = Math.max(...shown.map((r) => r.seats), 1);
  return (
    <ol className="space-y-2.5">
      {shown.map((r, i) => (
        <li key={r.abbr} className="grid grid-cols-[86px_1fr_auto] items-center gap-x-3 sm:grid-cols-[120px_1fr_auto]">
          <span className="truncate text-[0.8rem] font-medium text-foreground/90">{r.abbr}</span>
          <span className="h-[15px] w-full overflow-hidden rounded-full bg-muted">
            <motion.span
              className="block h-full rounded-full"
              style={{ background: partyColor(r.abbr) }}
              initial={{ width: 0 }}
              whileInView={{ width: `${(r.seats / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.03, 0.4), ease: "easeOut" }}
            />
          </span>
          <span className="w-14 text-right text-[0.8rem] tabular-nums text-muted-foreground">
            {r.seats}
            {r.voteShare !== undefined ? <span className="hidden sm:inline"> · {r.voteShare.toFixed(1)}%</span> : null}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function StatTile({ value, label, sub }: { value: string | number; label: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-5 py-4">
      <div className="display text-3xl tabular-nums text-foreground">{value}</div>
      <div className="mt-1 text-[0.8rem] font-medium text-foreground/80">{label}</div>
      {sub && <div className="text-[0.72rem] text-muted-foreground">{sub}</div>}
    </div>
  );
}
