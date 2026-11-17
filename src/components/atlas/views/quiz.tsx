"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ } from "@/data/quiz";

type Topic = "all" | "Polity" | "Elections" | "Current affairs";
type Phase = "intro" | "run" | "done";

const LETTERS = ["A", "B", "C", "D"];

export function QuizView() {
  const [topic, setTopic] = useState<Topic>("all");
  const [phase, setPhase] = useState<Phase>("intro");
  const [order, setOrder] = useState<number[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [log, setLog] = useState<{ q: string; ok: boolean }[]>([]);

  const pool = useMemo(() => (topic === "all" ? QUIZ : QUIZ.filter((q) => q.topic === topic)), [topic]);
  const current = pool.find((q) => q.id === order[idx]);

  const start = () => {
    const ids = [...pool].sort(() => Math.random() - 0.5).map((q) => q.id);
    setOrder(ids);
    setIdx(0);
    setScore(0);
    setLog([]);
    setPicked(null);
    setPhase("run");
  };

  const choose = (opt: number) => {
    if (!current || picked !== null) return;
    setPicked(opt);
    const ok = opt === current.answer;
    if (ok) setScore((s) => s + 1);
    setLog((l) => [...l, { q: current.question, ok }]);
  };

  const next = () => {
    if (idx + 1 >= order.length) {
      setPhase("done");
      return;
    }
    setIdx((i) => i + 1);
    setPicked(null);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="rule-tick" />
      <p className="eyebrow mt-6">Practice quiz</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">Test the atlas</h1>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
        {QUIZ.length} original UPSC-style questions with explanations — polity, elections and
        current affairs as of November 2026. Questions shuffle each attempt.
      </p>

      {phase === "intro" && (
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="eyebrow mb-3">Choose a topic</div>
          <div className="flex flex-wrap gap-2">
            {(["all", "Polity", "Elections", "Current affairs"] as Topic[]).map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`rounded-full border px-4 py-1.5 text-[0.82rem] font-medium transition-colors ${
                  topic === t ? "text-card-foreground" : "border-border text-muted-foreground hover:text-foreground"
                }`}
                style={topic === t ? { background: "var(--a-nda)", borderColor: "transparent" } : undefined}
              >
                {t === "all" ? "All topics" : t}
              </button>
            ))}
            <span className="ml-auto self-center text-[0.8rem] text-muted-foreground">{pool.length} questions</span>
          </div>
          <button
            onClick={start}
            disabled={pool.length === 0}
            className="mt-6 w-full rounded-full px-6 py-3 text-sm font-semibold text-background disabled:opacity-40 sm:w-auto"
            style={{ background: "var(--a-nda)" }}
          >
            Start the quiz
          </button>
        </div>
      )}

      {phase === "run" && current && (
        <div className="mt-8">
          <div className="flex items-center justify-between text-[0.8rem] text-muted-foreground">
            <span>Question {idx + 1} of {order.length}</span>
            <span className="tabular-nums">Score {score}</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
            <motion.div className="h-full rounded-full" style={{ background: "var(--a-nda)" }}
              animate={{ width: `${((idx + (picked !== null ? 1 : 0)) / order.length) * 100}%` }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={current.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-6 rounded-2xl border border-border bg-card p-6">
              <span className="eyebrow">{current.topic}</span>
              <h2 className="display mt-2 text-xl leading-snug">{current.question}</h2>
              <div className="mt-5 space-y-2.5">
                {current.options.map((opt, i) => {
                  const isAnswer = i === current.answer;
                  const isPicked = picked === i;
                  const revealed = picked !== null;
                  let style: React.CSSProperties = { borderColor: "var(--border)" };
                  if (revealed && isAnswer) {
                    style = { borderColor: "var(--a-india)", background: "color-mix(in oklch, var(--a-india) 14%, var(--card))" };
                  } else if (revealed && isPicked && !isAnswer) {
                    style = { borderColor: "var(--destructive)", background: "color-mix(in oklch, var(--destructive) 10%, var(--card))" };
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => choose(i)}
                      disabled={picked !== null}
                      className="flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-[0.9rem] transition-colors disabled:cursor-default"
                      style={style}
                      aria-pressed={isPicked}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-[0.72rem] font-bold">
                        {LETTERS[i]}
                      </span>
                      <span>{opt}</span>
                      {revealed && isAnswer && <span className="ml-auto text-sm" style={{ color: "var(--a-india)" }}>✓</span>}
                      {revealed && isPicked && !isAnswer && <span className="ml-auto text-sm" style={{ color: "var(--destructive)" }}>✕</span>}
                    </button>
                  );
                })}
              </div>

              {picked !== null && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-xl border border-border/80 bg-secondary/50 p-4 text-[0.86rem] leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Why: </span>{current.explanation}
                </motion.div>
              )}

              <button
                onClick={next}
                disabled={picked === null}
                className="mt-5 w-full rounded-full px-6 py-3 text-sm font-semibold text-background disabled:opacity-30 sm:w-auto"
                style={{ background: "var(--a-nda)" }}
              >
                {idx + 1 === order.length ? "See the result" : "Next question"}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {phase === "done" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
          <div className="eyebrow">Your result</div>
          <div className="display mt-3 text-6xl tabular-nums" style={{ color: "var(--a-nda)" }}>
            {score}<span className="text-3xl text-muted-foreground">/{order.length}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {score / order.length >= 0.8
              ? "Excellent — keep this pace for the Prelims."
              : score / order.length >= 0.5
                ? "Solid base. Revisit the Polity notes for the misses."
                : "A good first pass — read the Polity notes, then retry."}
          </p>
          <div className="nice-scroll mt-5 max-h-44 space-y-1.5 overflow-y-auto rounded-xl border border-border/70 p-3 text-left">
            {log.map((l, i) => (
              <div key={i} className="flex items-center gap-2 text-[0.78rem] text-muted-foreground">
                <span style={{ color: l.ok ? "var(--a-india)" : "var(--destructive)" }}>{l.ok ? "✓" : "✕"}</span>
                <span className="truncate">{l.q}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button onClick={start} className="rounded-full px-6 py-3 text-sm font-semibold text-background" style={{ background: "var(--a-nda)" }}>
              Retry this topic
            </button>
            <button onClick={() => setPhase("intro")} className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary">
              Change topic
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
