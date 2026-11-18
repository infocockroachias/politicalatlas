"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  stats,
  groupedDomains,
  featuredOn,
  openQuestionOfDay,
  searchAtlas,
} from "@/data";
import { ViewLink, EntityCard, SectionHeader } from "../kit";
import { ApproachesMark } from "../brand";

const TODAY_KEY = new Date().toISOString().slice(0, 10);

const ACTIONS = [
  {
    title: "Explore & connect",
    body: "Open any entry and follow it outward through everything it touches — the thinkers, the documents, the movements and the institutions it shaped. See what cites it in return.",
    to: "systems",
    cta: "Open the directory",
  },
  {
    title: "Compare systems",
    body: "Set two or more ideologies, constitutions or systems of government side by side and see where they agree, where they diverge and what each one does with power.",
    to: "compare",
    cta: "Start a comparison",
  },
  {
    title: "Find a path",
    body: "Pick any two entries and see the chain of recorded relations that links them, one hop at a time. Every step is a connection written down in the atlas, not a resemblance the page inferred.",
    to: "connections",
    cta: "Trace a chain",
  },
  {
    title: "Follow a trail",
    body: "Short ordered routes through the collection — leaders who remade their states, documents of liberty, paths to independence. Each stop says why it comes next.",
    to: "trails",
    cta: "Take a trail",
  },
  {
    title: "Test yourself",
    body: "Scored quizzes drawn from the atlas. Pick a topic, a difficulty and a length, and see where you stand — everything scored in your own browser.",
    to: "quizzes",
    cta: "Take a quiz",
  },
  {
    title: "Check the calendar",
    body: "Constitutional days, national days and observances the atlas records, dated and tied to the entries they belong to — today and every day.",
    to: "today",
    cta: "Open Today",
  },
];

export function HomeView() {
  const featured = useMemo(() => featuredOn(TODAY_KEY), []);
  const question = useMemo(() => openQuestionOfDay(TODAY_KEY), []);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="paper-gradient">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Government & Political Thought</div>
            <h1 className="font-display mt-3 text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-[3.4rem]">
              Power, mapped: every order, one connected atlas.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              Political Atlas is a cross-referenced encyclopedia of government and political
              thought — from ideologies, constitutions and movements to parliaments, elections
              and beyond. Search any system and follow its threads through every order it shaped.
            </p>
            <SearchLauncher />
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link href="#/domains" className="btn-brand">Browse the Directory</Link>
              <Link href="#/compare" className="btn-ghost">Compare systems</Link>
            </div>
          </motion.div>

          {/* stat tiles */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { n: stats.figures.toLocaleString(), label: "Figures", to: "category/political-figures" },
              { n: stats.ideologies.toLocaleString(), label: "Ideologies", to: "category/ideologies" },
              { n: stats.documents.toLocaleString(), label: "Documents", to: "category/documents" },
              { n: stats.entries.toLocaleString(), label: "Entries", to: "systems" },
              { n: stats.sourcedFacts.toLocaleString(), label: "Sourced Facts", to: "about" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.05, ease: "easeOut" }}
              >
                <Link href={`#/${s.to}`} className="stat-tile block px-4 py-5 text-center">
                  <div className="font-display text-[1.9rem] font-bold leading-none">{s.n}</div>
                  <div className="mt-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">{s.label}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ── Browse by domain ── */}
        <div className="mt-14">
          <SectionHeader title="Browse by Domain">
            <p className="-mt-2 mb-5 text-[0.9375rem] text-muted-foreground">Every section of the atlas.</p>
            <div className="space-y-8">
              {groupedDomains.map((g) => (
                <div key={g.group}>
                  <div className="mb-3 flex items-baseline gap-3">
                    <h3 className="font-display text-[1.15rem] font-bold text-brand">{g.group}</h3>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[0.6875rem] font-bold text-muted-foreground">
                      {g.items.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {g.items.map((d) => (
                      <Link key={d.id} href={`#/category/${d.id}`} className="card-warm hover-lift block p-4">
                        <h4 className="font-display text-[1.0625rem] font-bold leading-snug">{d.name}</h4>
                        <span className="pill mt-3">{d.count} {d.count === 1 ? "entry" : "entries"}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionHeader>
        </div>

        {/* ── What you can do here ── */}
        <div className="mt-16">
          <SectionHeader title="What you can do here">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {ACTIONS.map((a) => (
                <Link key={a.to} href={`#/${a.to}`} className="card-warm hover-lift block p-5">
                  <h3 className="font-display text-[1.125rem] font-bold">{a.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">{a.body}</p>
                  <span className="mt-3 inline-block text-[0.85rem] font-semibold text-brand">{a.cta} →</span>
                </Link>
              ))}
            </div>
          </SectionHeader>
        </div>

        {/* ── Featured today ── */}
        <div className="mt-16">
          <SectionHeader title="Featured Today">
            <p className="-mt-2 mb-5 text-[0.9375rem] text-muted-foreground">A cross-section of the collection, turned daily.</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((e) => (
                <EntityCard key={e.id} e={e} />
              ))}
            </div>
          </SectionHeader>
        </div>

        {/* ── An Open Question ── */}
        {question && (
          <div className="mt-16">
            <SectionHeader title="An Open Question">
              <p className="-mt-2 text-[0.9375rem] text-muted-foreground">A gap nobody has closed yet, rotated daily.</p>
              <div className="card-warm mt-4 max-w-2xl p-6">
                <div className="eyebrow">{question.section}</div>
                <h3 className="font-display mt-2 text-[1.3rem] font-bold leading-snug">{question.question}</h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">{question.whatWouldResolve}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-[0.8125rem]">
                  <span className="pill">Needs: {question.expertiseNeeded}</span>
                  <ViewLink to="open-questions" className="font-semibold text-brand hover:underline">
                    See all open questions →
                  </ViewLink>
                </div>
              </div>
            </SectionHeader>
          </div>
        )}

        {/* ── Publisher strip ── */}
        <div className="mt-16 mb-4">
          <div className="card-warm flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
            <ApproachesMark className="h-12 w-12 shrink-0" />
            <div className="flex-1">
              <h3 className="font-display text-[1.2rem] font-bold">Published by Approaches to IAS</h3>
              <p className="mt-1 max-w-2xl text-[0.875rem] leading-relaxed text-muted-foreground">
                The atlas is a general reference on how power is arranged — open to every reader.
                It grows alongside the publisher's academy on approachestoias.com, where the same
                curiosity is trained into endurance.
              </p>
            </div>
            <a href="https://www.approachestoias.com" target="_blank" rel="noreferrer" className="btn-ghost shrink-0">
              Visit the publisher
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchLauncher() {
  return (
    <form
      className="mx-auto mt-7 flex max-w-xl items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const q = (new FormData(e.currentTarget).get("q") as string)?.trim();
        if (q) {
          const hit = firstHit(q);
          if (hit) window.location.hash = `#/entry/${hit.id}`;
          else window.location.hash = `#/systems`;
        }
      }}
    >
      <label className="relative flex-1">
        <span className="sr-only">Search the encyclopedia</span>
        <svg viewBox="0 0 20 20" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="9" cy="9" r="5.5" />
          <path d="M13.2 13.2L17 17" strokeLinecap="round" />
        </svg>
        <input
          name="q"
          placeholder="Search an ideology, a constitution, a movement, a system."
          className="w-full rounded-xl border border-border bg-card py-3.5 pl-10 pr-4 text-[0.9375rem] shadow-sm outline-none transition-shadow placeholder:text-muted-foreground/80 focus:ring-2 focus:ring-ring/40"
        />
      </label>
      <button type="submit" className="btn-brand shrink-0 px-4" aria-label="Search the atlas">
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="9" r="5.5" />
          <path d="M13.2 13.2L17 17" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}

function firstHit(q: string) {
  return searchAtlas(q, 1)[0] ?? null;
}
