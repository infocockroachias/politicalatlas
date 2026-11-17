"use client";

import { motion } from "framer-motion";
import { navigate } from "@/lib/router";
import { TileMap } from "../indiamap";
import { StatTile } from "../charts";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const DOMAINS = [
  { v: "map", n: "01", t: "The Map", d: "36 states and UTs as interactive tiles — colour by the 2024 Lok Sabha verdict or by who governs each Assembly today." },
  { v: "elections", n: "02", t: "Election Explorer", d: "Party-wise seat and vote-share tables for 2014, 2019 and 2024, plus the full state-wise alliance split of the last general election." },
  { v: "parties", n: "03", t: "Party Directory", d: "Six national parties and the major regional forces — founders, origins, current footprint. Facts only; no ECI symbols reproduced." },
  { v: "polity", n: "04", t: "Polity Notes", d: "34 exam-calibrated notes on Articles, Schedules, Amendments and doctrines, each with a prelims pointer." },
  { v: "timeline", n: "05", t: "Political Timeline", d: "From the first general election to the 2026 state verdicts — the turning points that shaped the Republic." },
  { v: "quiz", n: "06", t: "Practice Quiz", d: "Original UPSC-style MCQs with explanations, covering polity, elections and current affairs through November 2026." },
];

const TRAILS = [
  {
    title: "Read the 2024 verdict",
    steps: ["Map — see where each alliance won", "Elections — the numbers behind the shift", "Compare — UP vs Maharashtra"],
    cta: "map",
  },
  {
    title: "Constitution bootcamp",
    steps: ["Polity — 34 notes with exam hints", "Quiz — test yourself on the basics"],
    cta: "polity",
  },
  {
    title: "The Republic in time",
    steps: ["Timeline — 1952 to 2026 turning points", "Elections — compare three Lok Sabhas"],
    cta: "timeline",
  },
];

export function HomeView() {
  return (
    <div className="paper-grid">
      {/* Hero */}
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-20 lg:pt-20">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
            <p className="eyebrow">An interactive atlas · by Approaches to IAS</p>
            <h1 className="display mt-4 text-5xl leading-[1.05] sm:text-6xl lg:text-[4.2rem]">
              The Political<br />Atlas of India
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
              How power is arranged in the world&apos;s largest democracy — mapped, tabulated and
              explorable. From the first general election of 1951-52 to the assembly verdicts of
              2026, built for UPSC preparation: every fact carries its exam relevance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("map")}
                className="rounded-full px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
                style={{ background: "var(--a-nda)" }}
              >
                Open the atlas map
              </button>
              <button
                onClick={() => navigate("elections")}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Browse three Lok Sabhas
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="eyebrow mb-3">Lok Sabha 2024 · map preview</div>
            <TileMap mode="ls2024" interactive={false} />
            <div className="mt-3 text-[0.72rem] text-muted-foreground">
              Tiles are simplified positions, not geographic boundaries — a deliberately
              schematic atlas view.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/70 bg-card/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:grid-cols-6">
          <StatTile value="543" label="Lok Sabha seats" />
          <StatTile value="36" label="States & UTs" />
          <StatTile value="3" label="Election years" sub="2014 · 2019 · 2024" />
          <StatTile value="30+" label="Party profiles" />
          <StatTile value="34" label="Polity notes" />
          <StatTile value="18" label="Practice MCQs" />
        </div>
      </section>

      {/* Domains */}
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <motion.div {...fade}>
            <div className="rule-tick" />
            <p className="eyebrow mt-6">Explore the atlas</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">Six domains, one Republic</h2>
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOMAINS.map((d, i) => (
              <motion.button
                key={d.v}
                onClick={() => navigate(d.v)}
                {...fade}
                transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
                className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="display text-[0.95rem]" style={{ color: "var(--a-nda)" }}>{d.n}</span>
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </div>
                <h3 className="display mt-3 text-2xl">{d.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Trails */}
      <section className="border-b border-border/70 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <motion.div {...fade}>
            <p className="eyebrow">Guided trails</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">Three paths through the atlas</h2>
          </motion.div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {TRAILS.map((t, i) => (
              <motion.div key={t.title} {...fade} transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                className="flex flex-col rounded-2xl border border-border bg-background p-6">
                <h3 className="display text-xl">{t.title}</h3>
                <ol className="mt-4 flex-1 space-y-2.5">
                  {t.steps.map((s, si) => (
                    <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold"
                        style={{ background: "color-mix(in oklch, var(--a-nda) 18%, var(--card))", color: "var(--a-nda)" }}>
                        {si + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
                <button
                  onClick={() => navigate(t.cta)}
                  className="mt-6 self-start rounded-full border border-border px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Start this trail
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <motion.div {...fade} className="max-w-3xl">
            <p className="eyebrow">How this atlas works</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">Three editorial principles</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-5">
                <span className="display text-3xl" style={{ color: "var(--a-nda)" }}>i.</span>
                <div>
                  <h3 className="display text-xl">Facts first, noise never</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Seats, shares and dates are compiled from officially declared results. Analysis
                    stays descriptive; every state card carries a short UPSC lens on why it matters
                    for the exam.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="display text-3xl" style={{ color: "var(--a-nda)" }}>ii.</span>
                <div>
                  <h3 className="display text-xl">Everything lives in your browser</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    The entire atlas is a static frontend. All data ships with the app as local
                    tables — no API calls, no accounts, no tracking. It even works offline once
                    loaded.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="display text-3xl" style={{ color: "var(--a-nda)" }}>iii.</span>
                <div>
                  <h3 className="display text-xl">Original by design</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Design, prose and quiz content are original. Party symbols are official
                    ECI artworks and are deliberately not reproduced — colour chips stand in for
                    identity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
