"use client";

import { useState } from "react";
import { ELECTIONS } from "@/data/elections";
import { STATES } from "@/data/states";
import { AllianceBar, HBars, StatTile } from "../charts";
import { dominantAlliance } from "@/lib/atlas";

export function ElectionsView({ param }: { param?: string }) {
  const initialYear = (param === "2014" || param === "2019" ? Number(param) : 2024) as 2014 | 2019 | 2024;
  const [year, setYear] = useState<2014 | 2019 | 2024>(initialYear);
  const e = ELECTIONS.find((x) => x.year === year)!;
  const rows = [...e.parties].sort((a, b) => b.seats - a.seats || (b.voteShare ?? 0) - (a.voteShare ?? 0));
  const majors = rows.filter((r) => r.abbr !== "IND").slice(0, 16);
  const nationalRows = rows.filter((r) => r.abbr !== "IND" && r.seats > 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="rule-tick" />
      <p className="eyebrow mt-6">Election explorer</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">Three Lok Sabhas</h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
        2014 built the majority, 2019 doubled down on it, 2024 rebuilt the coalition. Switch years
        to see the party-wise arithmetic — seats and (for 2024) vote shares.
      </p>

      {/* year switch */}
      <div className="mt-7 inline-flex rounded-full border border-border bg-card p-1">
        {[2024, 2019, 2014].map((y) => (
          <button
            key={y}
            onClick={() => setYear(y as 2014 | 2019 | 2024)}
            aria-pressed={year === y}
            className={`rounded-full px-5 py-2 text-[0.83rem] font-medium transition-colors ${
              year === y ? "text-card-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            style={year === y ? { background: "var(--a-nda)" } : undefined}
          >
            {y}
          </button>
        ))}
      </div>

      {/* alliance summary */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[380px_1fr]">
        <div className="space-y-3">
          <StatTile value={`${e.turnout}`} label="Turnout" sub={`${e.year} general election`} />
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="eyebrow mb-3">Alliance totals</div>
            <AllianceBar nda={e.nda} india={e.india} oth={e.others} />
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div><div className="display text-2xl tabular-nums" style={{ color: "var(--a-nda)" }}>{e.nda}</div><div className="text-[0.7rem] text-muted-foreground">NDA</div></div>
              <div><div className="display text-2xl tabular-nums" style={{ color: "var(--a-india)" }}>{e.india}</div><div className="text-[0.7rem] text-muted-foreground">INDIA bloc{year < 2024 ? " (UPA)" : ""}</div></div>
              <div><div className="display text-2xl tabular-nums" style={{ color: "var(--a-oth)" }}>{e.others}</div><div className="text-[0.7rem] text-muted-foreground">Others</div></div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="display text-2xl">{e.winner}</h2>
            <span className="text-[0.78rem] text-muted-foreground">PM: {e.pm}</span>
          </div>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">{e.summary}</p>
          <div className="rule-tick my-5" />
          <div className="eyebrow mb-4">Party-wise seats{year === 2024 ? " · vote share" : ""}</div>
          <HBars rows={majors} cap={16} />
          <details className="mt-4">
            <summary className="cursor-pointer text-[0.82rem] font-medium text-muted-foreground hover:text-foreground">
              Full party table ({nationalRows.length} parties with seats)
            </summary>
            <div className="nice-scroll mt-3 max-h-72 overflow-y-auto pr-2">
              <HBars rows={nationalRows} cap={nationalRows.length} />
            </div>
          </details>
        </div>
      </div>

      {/* state-wise table for 2024 */}
      {year === 2024 && (
        <div className="mt-10">
          <div className="rule-tick" />
          <h2 className="display mt-6 text-3xl">The 2024 verdict, state by state</h2>
          <p className="mt-2 max-w-2xl text-[0.9rem] text-muted-foreground">
            Alliance splits for all 36 states and UTs — totals sum to NDA 293 · INDIA 234 · Others 16 = 543.
          </p>
          <div className="nice-scroll mt-6 max-h-[560px] overflow-y-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] border-collapse text-[0.84rem]">
              <thead className="sticky top-0 z-10 bg-card">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">State / UT</th>
                  <th className="px-2 py-3 text-center font-semibold">Seats</th>
                  <th className="px-4 py-3 font-semibold">NDA / INDIA / Others</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">Largest bloc</th>
                </tr>
              </thead>
              <tbody>
                {STATES.map((s) => {
                  const d = dominantAlliance(s.ls2024);
                  const c = d === "NDA" ? "var(--a-nda)" : d === "INDIA" ? "var(--a-india)" : "var(--a-oth)";
                  return (
                    <tr key={s.id} className="border-t border-border/70 hover:bg-secondary/60">
                      <td className="px-4 py-2.5 font-medium">{s.name}</td>
                      <td className="px-2 py-2.5 text-center tabular-nums">{s.lsSeats}</td>
                      <td className="px-4 py-2.5">
                        <span className="tabular-nums">{s.ls2024.nda} / {s.ls2024.india} / {s.ls2024.oth}</span>
                        <span className="ml-3 inline-block w-24 align-middle"><AllianceBar nda={s.ls2024.nda} india={s.ls2024.india} oth={s.ls2024.oth} showLabels={false} height={8} /></span>
                      </td>
                      <td className="hidden px-4 py-2.5 sm:table-cell">
                        <span className="inline-flex items-center gap-2 font-medium" style={{ color: c }}>
                          <i className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                          {d === "OTH" ? "Others" : d}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {year !== 2024 && (
        <p className="mt-10 text-[0.82rem] text-muted-foreground">
          The state-wise alliance table is available for the 2024 election — switch the year
          selector to 2024 to view it.
        </p>
      )}
    </div>
  );
}
