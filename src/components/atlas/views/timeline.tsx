"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TIMELINE, type TimelineEra } from "@/data/timeline";

const ERAS: { id: TimelineEra | "all"; label: string }[] = [
  { id: "all", label: "All years" },
  { id: "foundation", label: "Foundation 1950-67" },
  { id: "turning-points", label: "Turning points" },
  { id: "democracy", label: "Democratic deepening" },
  { id: "recent", label: "Recent decade" },
];

export function TimelineView() {
  const [era, setEra] = useState<TimelineEra | "all">("all");
  const events = TIMELINE.filter((e) => era === "all" || e.era === era);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="rule-tick" />
      <p className="eyebrow mt-6">Political timeline</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">The Republic in time</h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
        Milestones from the first general election to the 2026 verdicts — the constitutional
        moments, ruptures and realignments every aspirant should hold in one thread.
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {ERAS.map((e) => (
          <button
            key={e.id}
            onClick={() => setEra(e.id)}
            className={`rounded-full border px-4 py-1.5 text-[0.82rem] font-medium transition-colors ${
              era === e.id ? "text-card-foreground" : "border-border text-muted-foreground hover:text-foreground"
            }`}
            style={era === e.id ? { background: "var(--a-nda)", borderColor: "transparent" } : undefined}
          >
            {e.label}
          </button>
        ))}
      </div>

      <ol className="relative mt-10 max-w-3xl border-l border-border pl-6 sm:pl-10">
        {events.map((e, i) => (
          <motion.li
            key={`${e.year}-${e.title}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.25) }}
            className="relative pb-10"
          >
            <span className="absolute -left-[31px] top-1 flex h-3.5 w-3.5 items-center justify-center sm:-left-[47px]">
              <i className="block h-3 w-3 rounded-full border-2" style={{ borderColor: "var(--a-nda)", background: "var(--card)" }} />
            </span>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="display text-3xl tabular-nums" style={{ color: "var(--a-nda)" }}>{e.year}</span>
              <span className="text-[0.74rem] font-medium uppercase tracking-wider text-muted-foreground">{e.date}</span>
            </div>
            <h2 className="display mt-1.5 text-xl">{e.title}</h2>
            <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted-foreground">{e.detail}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
