"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trails, entityOrThrow, observances, quizzes } from "@/data";
import type { Quiz } from "@/data/types";
import { PageHeader, SectionHeader, EmptyState, ViewLink } from "../kit";

// ─── Trails ─────────────────────────────────────────────────────────────────

const trailKey = (id: string) => `atlas-trail-${id}`;

export function TrailsView() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Atlas"
        title="Atlas Trails"
        trail={[{ label: "Home", to: "home" }, { label: "Trails" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          A trail is a short, ordered route through the atlas. Each stop says why it comes next,
          so a journey reads as an argument rather than a list. Start one, leave, and come back:
          your place is kept in this browser, and you do not need an account for that.
        </p>
      </PageHeader>

      <div className="grid gap-4 md:grid-cols-2">
        {trails.map((t) => (
          <Link key={t.id} href={`#/trail/${t.id}`} className="card-warm hover-lift block p-5">
            <h3 className="font-display text-[1.15rem] font-bold leading-snug">{t.title}</h3>
            <p className="mt-2 line-clamp-2 text-[0.875rem] leading-relaxed text-muted-foreground">{t.blurb}</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="pill">{t.stops.length} stops</span>
              <ProgressDots trailId={t.id} total={t.stops.length} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProgressDots({ trailId, total }: { trailId: string; total: number }) {
  const [progress, setProgress] = useState(0);
  useMemo(() => {
    try {
      const raw = localStorage.getItem(trailKey(trailId));
      if (raw) setProgress(Number(raw) || 0);
    } catch {}
    return null;
  }, [trailId]);
  void setProgress;
  const filled = Math.min(progress, total);
  return (
    <span className="flex items-center gap-0.5" aria-label={`${filled} of ${total} stops visited in this browser`}>
      {Array.from({ length: Math.min(total, 12) }).map((_, i) => (
        <i key={i} className={`h-1.5 w-1.5 rounded-full ${i < filled ? "bg-brand" : "bg-border"}`} />
      ))}
      {total > 12 && <span className="ml-1 text-[0.7rem] text-muted-foreground">{filled}/{total}</span>}
    </span>
  );
}

export function TrailDetailView({ id }: { id: string }) {
  const trail = trails.find((t) => t.id === id);
  const [at, setAt] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    try {
      return Number(localStorage.getItem(trailKey(id)) ?? 0) || 0;
    } catch {
      return 0;
    }
  });

  if (!trail) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <EmptyState title="No such trail" body={`The atlas runs no trail called “${id}”.`} />
        <div className="mt-6 text-center"><Link href="#/trails" className="btn-ghost">All trails</Link></div>
      </div>
    );
  }

  const stop = trail.stops[Math.min(at, trail.stops.length - 1)];
  const entry = (() => {
    try {
      return entityOrThrow(stop.entry);
    } catch {
      return null;
    }
  })();

  const advance = (n: number) => {
    const next = Math.max(0, Math.min(trail.stops.length - 1, n));
    setAt(next);
    try {
      localStorage.setItem(trailKey(trail.id), String(next));
    } catch {}
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Trail"
        title={trail.title}
        trail={[{ label: "Home", to: "home" }, { label: "Trails", to: "trails" }, { label: trail.title }]}
        badges={<><span className="pill">{trail.stops.length} stops</span><span className="pill">Stop {at + 1} of {trail.stops.length}</span></>}
      >
        <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">{trail.blurb}</p>
      </PageHeader>

      {/* progress rail */}
      <div className="mb-8 flex items-center gap-1" aria-hidden>
        {trail.stops.map((_, i) => (
          <button
            key={i}
            onClick={() => advance(i)}
            className={`h-1.5 flex-1 rounded-full transition-colors ${i <= at ? "bg-brand" : "bg-border"}`}
            aria-label={`Go to stop ${i + 1}`}
          />
        ))}
      </div>

      {entry && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="card-warm p-6">
            <div className="flex items-baseline justify-between gap-3">
              <span className="eyebrow">Stop {at + 1}</span>
              <span className="text-[0.8125rem] text-muted-foreground">{at + 1} / {trail.stops.length}</span>
            </div>
            <h2 className="font-display mt-2 text-[1.6rem] font-bold">{entry.name}</h2>
            <p className="mt-2 text-[0.9375rem] italic leading-relaxed text-brand">{stop.why}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ViewLink to={`entry/${entry.id}`} className="btn-brand">Open the entry</ViewLink>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => advance(at - 1)} disabled={at === 0} className="btn-ghost disabled:opacity-40">
          ← Previous stop
        </button>
        {at < trail.stops.length - 1 ? (
          <button onClick={() => advance(at + 1)} className="btn-brand">Next stop →</button>
        ) : (
          <span className="pill pill-attest">Trail complete</span>
        )}
      </div>
    </div>
  );
}

// ─── Today ──────────────────────────────────────────────────────────────────

function fmtDate(d: Date) {
  return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
const md = (d: Date) => `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export function TodayView({ param }: { param?: string }) {
  const today = new Date();
  const [date, setDate] = useState<Date>(() => {
    if (param && /^\d{4}-\d{2}-\d{2}$/.test(param)) {
      const [y, m, d] = param.split("-").map(Number);
      return new Date(y, m - 1, d);
    }
    return today;
  });

  const rows = observances.filter((o) => o.monthDay === md(date));
  const prev = new Date(date); prev.setDate(prev.getDate() - 1);
  const next = new Date(date); next.setDate(next.getDate() + 1);
  const iso = (d: Date) => `${d.getFullYear()}-${md(d)}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="The Calendar"
        title="Today in the Atlas"
        trail={[{ label: "Home", to: "home" }, { label: "Today" }]}
      >
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
          {fmtDate(date)}. Dates are your browser's, so the day you get is your own.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link href={`#/today/${iso(prev)}`} className="btn-ghost">The Day Before</Link>
          <Link href={`#/today/${iso(next)}`} className="btn-ghost">The Day After</Link>
          <label className="flex items-center gap-2 text-[0.85rem]">
            <span className="font-bold uppercase tracking-wide text-muted-foreground">Go to</span>
            <input
              type="date"
              value={iso(date)}
              onChange={(e) => {
                const [y, m, d] = e.target.value.split("-").map(Number);
                if (y && m && d) setDate(new Date(y, m - 1, d));
              }}
              className="rounded-lg border border-input bg-card px-3 py-2 text-[0.9rem]"
            />
          </label>
        </div>
      </PageHeader>

      {rows.length === 0 ? (
        <EmptyState
          title="The atlas records no observance on this date"
          body="That is not the same as nothing being observed: many holidays follow calendars whose rules have not been written down here yet. Try the days either side."
        />
      ) : (
        <SectionHeader title={rows.length === 1 ? "1 observance" : `${rows.length} observances`}>
          <div className="space-y-3">
            {rows.map((o, i) => (
              <div key={i} className="card-warm p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[1.15rem] font-bold">{o.title}</h3>
                  {o.year && <span className="pill">{o.year}</span>}
                </div>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{o.blurb}</p>
                {o.entity && (
                  <ViewLink to={`entry/${o.entity}`} className="mt-3 inline-block text-[0.85rem] font-semibold text-brand hover:underline">
                    Open the entry →
                  </ViewLink>
                )}
              </div>
            ))}
          </div>
        </SectionHeader>
      )}
    </div>
  );
}

// ─── Quizzes ────────────────────────────────────────────────────────────────

export function QuizzesView() {
  const [level, setLevel] = useState<"All" | Quiz["difficulty"]>("All");
  const rows = level === "All" ? quizzes : quizzes.filter((q) => q.difficulty === level);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Test Your Knowledge"
        title="Quizzes"
        trail={[{ label: "Home", to: "home" }, { label: "Quizzes" }]}
      >
        <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Scored quizzes drawn from the atlas. Pick a topic, a difficulty and a length, and see
          where you stand. Everything is scored in your own browser.
        </p>
        <div className="mt-5 flex items-center gap-2">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">Level</span>
          {(["All", "Beginner", "Intermediate", "Expert"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              aria-pressed={level === l}
              className={`rounded-full border px-3 py-1.5 text-[0.8rem] font-semibold transition-colors ${
                level === l ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </PageHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rows.map((q) => (
          <Link key={q.id} href={`#/quiz/${q.id}`} className="card-warm hover-lift block p-5">
            <div className="eyebrow">{q.topic}</div>
            <h3 className="font-display mt-1.5 text-[1.15rem] font-bold leading-snug">{q.title}</h3>
            <p className="mt-1 text-[0.8125rem] text-muted-foreground">{q.subtitle}</p>
            <p className="mt-2 line-clamp-2 text-[0.85rem] leading-relaxed text-muted-foreground">{q.description}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="pill">{q.questions.length} questions</span>
              <span className="pill">{q.difficulty}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function QuizRunView({ id }: { id: string }) {
  const quiz = quizzes.find((q) => q.id === id);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  if (!quiz) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <EmptyState title="No such quiz" body={`The atlas runs no quiz called “${id}”.`} />
        <div className="mt-6 text-center"><Link href="#/quizzes" className="btn-ghost">All quizzes</Link></div>
      </div>
    );
  }

  const answer = (qi: number, oi: number) => {
    const next = [...answers];
    next[qi] = oi;
    setAnswers(next);
  };

  const score = quiz.questions.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow={`${quiz.topic} · ${quiz.difficulty}`}
        title={quiz.title}
        trail={[{ label: "Home", to: "home" }, { label: "Quizzes", to: "quizzes" }, { label: quiz.title }]}
        badges={<span className="pill">{quiz.questions.length} questions</span>}
      >
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">{quiz.description}</p>
      </PageHeader>

      <div className="space-y-5">
        {quiz.questions.map((q, qi) => (
          <div key={qi} className="card-warm p-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[0.75rem] font-bold uppercase tracking-wide text-muted-foreground">Question {qi + 1}</span>
              {done && (
                <span className={`pill ${answers[qi] === q.answer ? "pill-attest" : "pill"}`}>
                  {answers[qi] === q.answer ? "Correct" : "Incorrect"}
                </span>
              )}
            </div>
            <h3 className="font-display mt-1.5 text-[1.1rem] font-bold leading-snug">{q.prompt}</h3>
            <div className="mt-3 grid gap-2">
              {q.options.map((opt, oi) => {
                const picked = answers[qi] === oi;
                const correct = done && oi === q.answer;
                return (
                  <button
                    key={oi}
                    onClick={() => !done && answer(qi, oi)}
                    disabled={done}
                    className={`rounded-lg border px-4 py-2.5 text-left text-[0.9rem] transition-colors ${
                      correct
                        ? "border-attest/60 bg-attest-soft font-semibold"
                        : picked
                          ? "border-brand/60 bg-brand-soft font-semibold"
                          : "border-border hover:bg-secondary"
                    }`}
                  >
                    <span className="mr-2 font-bold text-muted-foreground">{String.fromCharCode(65 + oi)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>
            {done && <p className="mt-3 rounded-lg bg-secondary/50 p-3 text-[0.85rem] leading-relaxed text-muted-foreground">{q.explanation}</p>}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {!done ? (
          <button
            onClick={() => setDone(true)}
            disabled={answers.filter((a) => a != null).length < quiz.questions.length}
            className="btn-brand disabled:opacity-40"
          >
            Score this attempt ({answers.filter((a) => a != null).length}/{quiz.questions.length} answered)
          </button>
        ) : (
          <>
            <div className="stat-tile px-5 py-4">
              <span className="font-display text-[1.6rem] font-bold">{score} / {quiz.questions.length}</span>
              <span className="ml-2 text-[0.8125rem] text-muted-foreground">scored in this browser</span>
            </div>
            <button
              onClick={() => {
                setAnswers([]);
                setDone(false);
                window.scrollTo(0, 0);
              }}
              className="btn-ghost"
            >
              Try again
            </button>
          </>
        )}
        <Link href="#/quizzes" className="text-[0.875rem] font-semibold text-brand hover:underline">All quizzes →</Link>
      </div>
    </div>
  );
}
