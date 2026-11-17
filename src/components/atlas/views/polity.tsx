"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { POLITY, type PolityTag } from "@/data/polity";

const TAGS: (PolityTag | "All")[] = ["All", "Article", "Schedule", "Amendment", "Doctrine", "Institution"];

const tagStyle: Record<PolityTag, { bg: string; fg: string }> = {
  Article: { bg: "var(--a-nda)", fg: "var(--card)" },
  Schedule: { bg: "var(--a-india)", fg: "var(--card)" },
  Amendment: { bg: "oklch(0.55 0.1 230)", fg: "var(--card)" },
  Doctrine: { bg: "var(--a-oth)", fg: "var(--card)" },
  Institution: { bg: "oklch(0.55 0.1 300)", fg: "var(--card)" },
};

export function PolityView() {
  const [tag, setTag] = useState<PolityTag | "All">("All");
  const list = useMemo(() => (tag === "All" ? POLITY : POLITY.filter((p) => p.tag === tag)), [tag]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="rule-tick" />
      <p className="eyebrow mt-6">Polity notes</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">The Constitution, in 34 notes</h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
        Original one-paragraph summaries of the Articles, Schedules, Amendments and doctrines that
        dominate UPSC papers — each ending with an exam pointer. Read the card, test yourself in
        the Quiz.
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full border px-4 py-1.5 text-[0.82rem] font-medium transition-colors ${
              tag === t ? "text-card-foreground" : "border-border text-muted-foreground hover:text-foreground"
            }`}
            style={tag === t ? { background: "var(--a-nda)", borderColor: "transparent" } : undefined}
          >
            {t === "All" ? "All notes" : `${t}s`}
          </button>
        ))}
        <span className="ml-auto self-center text-[0.8rem] text-muted-foreground">{list.length} notes</span>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {list.map((p, i) => {
          const t = tagStyle[p.tag];
          return (
            <motion.article
              key={p.ref}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.3) }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="display text-[1.05rem] font-semibold" style={{ color: "var(--a-nda)" }}>{p.ref}</span>
                <span className="rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide"
                  style={{ background: t.bg, color: t.fg }}>
                  {p.tag}
                </span>
              </div>
              <h2 className="display mt-1.5 text-xl">{p.title}</h2>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-muted-foreground">{p.body}</p>
              {p.examHint && (
                <div className="mt-3 rounded-lg border px-3 py-2 text-[0.78rem] leading-relaxed"
                  style={{
                    borderColor: "color-mix(in oklch, var(--a-nda) 35%, var(--border))",
                    background: "color-mix(in oklch, var(--a-nda) 8%, var(--card))",
                  }}>
                  <span className="font-semibold" style={{ color: "var(--a-nda)" }}>Exam hint — </span>
                  <span className="text-foreground/85">{p.examHint}</span>
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
