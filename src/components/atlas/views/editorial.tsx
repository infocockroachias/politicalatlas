"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  openQuestions,
  disputedStatements,
  atlasCases,
  corrections,
  campaigns,
  news,
  recentlyAdded,
  entityOrThrow,
  entities,
} from "@/data";
import { PageHeader, SectionHeader, EmptyState, ViewLink, KindPill, leadPlain } from "../kit";

// ─── Open Questions ─────────────────────────────────────────────────────────

export function OpenQuestionsView() {
  const [section, setSection] = useState<string>("All");
  const sections = useMemo(() => Array.from(new Set(openQuestions.map((q) => q.section))), []);
  const rows = section === "All" ? openQuestions : openQuestions.filter((q) => q.section === section);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="Open Questions"
        trail={[{ label: "Home", to: "home" }, { label: "Open Questions" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Things this atlas does not know. Each entry is a question that specialists have posed
          and not settled, recorded with what would actually resolve it and which expertise the
          answer needs. These are kept deliberately, rather than quietly omitted: an atlas that
          shows only what it is sure of implies a confidence it has not earned, and the gaps are
          often where the interesting work is.
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {["All", ...sections].map((s) => (
            <button
              key={s}
              onClick={() => setSection(s)}
              aria-pressed={section === s}
              className={`rounded-full border px-3 py-1.5 text-[0.8rem] font-semibold transition-colors ${
                section === s ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="mt-3 text-[0.8125rem] text-muted-foreground">{rows.length} open questions shown.</p>
      </PageHeader>

      <div className="space-y-4">
        {rows.map((q) => (
          <div key={q.id} className="card-warm p-5">
            <div className="eyebrow">{q.section}</div>
            <h3 className="font-display mt-1.5 text-[1.2rem] font-bold leading-snug">{q.question}</h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground/80">What would resolve it: </span>
              {q.whatWouldResolve}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="pill">{q.kind}</span>
              <span className="pill pill-brand">Needs: {q.expertiseNeeded}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Disputed Statements ────────────────────────────────────────────────────

export function DisputedView() {
  const [status, setStatus] = useState<"All" | "debated" | "debunked">("All");
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    let rows = disputedStatements;
    if (status !== "All") rows = rows.filter((d) => d.status === status);
    const t = q.trim().toLowerCase();
    if (t) rows = rows.filter((d) => d.statement.toLowerCase().includes(t) || d.reasoning.toLowerCase().includes(t));
    return rows;
  }, [status, q]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="Disputed Statements"
        trail={[{ label: "Home", to: "home" }, { label: "Disputed Statements" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Claims this atlas currently marks as unsettled or as tested and found false. A debated
          fact is one scholars hold competing positions on; a debunked one has been checked
          against the record and found not to hold. Both are kept in view rather than quietly
          smoothed over, with the reasoning that put each one where it stands.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="flex gap-1.5">
            {(["All", "debated", "debunked"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                aria-pressed={status === s}
                className={`rounded-full border px-3 py-1.5 text-[0.8rem] font-semibold capitalize transition-colors ${
                  status === s ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search statements…"
            className="w-full max-w-xs rounded-lg border border-input bg-card px-3.5 py-2 text-[0.9rem] outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>
      </PageHeader>

      {rows.length === 0 ? (
        <EmptyState title="No statements match" body={`Nothing under “${q}”.`} />
      ) : (
        <div className="space-y-4">
          {rows.map((d) => (
            <div key={d.id} className="card-warm p-5">
              <span className={`pill ${d.status === "debunked" ? "pill-brand" : "pill"}`}>
                {d.status === "debated" ? "Debated" : "Debunked"}
              </span>
              <h3 className="font-display mt-2 text-[1.15rem] font-bold leading-snug">“{d.statement}”</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{d.reasoning}</p>
              <ViewLink to={`entry/${d.entity}`} className="mt-3 inline-block text-[0.85rem] font-semibold text-brand hover:underline">
                The entry this sits against →
              </ViewLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Cases ──────────────────────────────────────────────────────────────────

export function CasesView() {
  const [status, setStatus] = useState<string>("All");
  const statuses = ["All", "Awaiting Evidence", "In Review", "Decided", "Closed"];
  const rows = status === "All" ? atlasCases : atlasCases.filter((c) => c.status === status);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="Cases"
        trail={[{ label: "Home", to: "home" }, { label: "Cases" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          The atlas adjudicates in public. Every claim that has been formally challenged and
          re-examined has a case here, whatever the outcome: what was looked at, the full
          reasoning behind the decision, and any dissent recorded against it.
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              aria-pressed={status === s}
              className={`rounded-full border px-3 py-1.5 text-[0.8rem] font-semibold transition-colors ${
                status === s ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </PageHeader>

      {rows.length === 0 ? (
        <EmptyState
          title="No cases with that status"
          body="When a challenge to something the atlas states is formally reviewed, its case will appear here with the full evidence trail."
        />
      ) : (
        <div className="space-y-4">
          {rows.map((c) => (
            <div key={c.id} className="card-warm p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="pill">{c.status}</span>
                <span className="text-[0.8125rem] text-muted-foreground">Opened {c.opened}</span>
              </div>
              <h3 className="font-display mt-2 text-[1.2rem] font-bold leading-snug">{c.title}</h3>
              <div className="eyebrow mt-1">{c.topic}</div>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{c.summary}</p>
              {c.decision && (
                <p className="mt-3 rounded-lg border border-attest/40 bg-attest-soft/50 p-3 text-[0.875rem] leading-relaxed">
                  <span className="font-bold">Decision. </span>{c.decision}
                </p>
              )}
              {c.dissent && (
                <p className="mt-2 rounded-lg border border-border bg-secondary/50 p-3 text-[0.875rem] leading-relaxed">
                  <span className="font-bold">Dissent recorded. </span>{c.dissent}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Recent Corrections ─────────────────────────────────────────────────────

export function CorrectionsView() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="Recent Corrections"
        trail={[{ label: "Home", to: "home" }, { label: "Recent Corrections" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          A correction log is the atlas's memory of its own mistakes. Each row records what an
          entry said, what it says now, and when the change was made.
        </p>
      </PageHeader>
      <div className="space-y-3">
        {corrections.map((c) => {
          const e = entities.find((x) => x.id === c.entity);
          return (
            <div key={c.id} className="card-warm p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[0.8125rem] font-semibold text-muted-foreground">{c.date}</span>
                {e && <ViewLink to={`entry/${e.id}`} className="pill pill-brand">{e.name}</ViewLink>}
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-secondary/40 p-3">
                  <div className="eyebrow mb-1">Was</div>
                  <p className="text-[0.875rem] leading-relaxed">{c.was}</p>
                </div>
                <div className="rounded-lg border border-attest/40 bg-attest-soft/40 p-3">
                  <div className="eyebrow mb-1">Now</div>
                  <p className="text-[0.875rem] leading-relaxed">{c.now}</p>
                </div>
              </div>
              {c.note && <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">{c.note}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Recently Added ─────────────────────────────────────────────────────────

export function RecentlyAddedView() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="Recently Added"
        trail={[{ label: "Home", to: "home" }, { label: "Recently Added" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          The atlas grows entry by entry. These are the most recent additions, newest first.
        </p>
      </PageHeader>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recentlyAdded.map((e) => (
          <ViewLink key={e.id} to={`entry/${e.id}`} className="block">
            <div className="card-warm hover-lift h-full p-4">
              <div className="flex items-center justify-between gap-2">
                <KindPill kind={e.kind} />
                <span className="text-[0.75rem] text-muted-foreground">{e.addedOn}</span>
              </div>
              <h3 className="font-display mt-2 text-[1.0625rem] font-bold">{e.name}</h3>
              <p className="mt-2 line-clamp-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {leadPlain(e.lead)}
              </p>
            </div>
          </ViewLink>
        ))}
      </div>
    </div>
  );
}

// ─── Campaigns ──────────────────────────────────────────────────────────────

export function CampaignsView() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="Campaigns"
        trail={[{ label: "Home", to: "home" }, { label: "Campaigns" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          A campaign is a reading route with a thesis: a set of entries the editors have drawn
          together so that reading them in sequence leaves you with an argument, not a list.
        </p>
      </PageHeader>
      <div className="space-y-10">
        {campaigns.map((c) => (
          <section key={c.id}>
            <SectionHeader title={c.title}>
              <p className="-mt-2 mb-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">{c.blurb}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {c.entries.map((id) => {
                  const e = entities.find((x) => x.id === id);
                  if (!e) return null;
                  return (
                    <ViewLink key={id} to={`entry/${id}`} className="block">
                      <div className="card-warm hover-lift h-full p-4">
                        <h4 className="font-display font-bold">{e.name}</h4>
                        <p className="mt-1.5 line-clamp-2 text-[0.8125rem] text-muted-foreground">
                          {leadPlain(e.lead).slice(0, 120)}…
                        </p>
                      </div>
                    </ViewLink>
                  );
                })}
              </div>
            </SectionHeader>
          </section>
        ))}
      </div>
    </div>
  );
}

// ─── Embed a Card ───────────────────────────────────────────────────────────

export function EmbedView() {
  const [id, setId] = useState("india");
  const sorted = useMemo(() => entities.slice().sort((a, b) => a.name.localeCompare(b.name)), []);
  const url = typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}#/entry/${id}` : `#/entry/${id}`;
  const snippet = `<iframe src="${url}" width="360" height="420" style="border:1px solid #ddd;border-radius:12px" title="Political Atlas card" loading="lazy"></iframe>`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="Embed a Card"
        trail={[{ label: "Home", to: "home" }, { label: "Embed a Card" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Any entry can travel as a card: a small framed view of the entry, hosted here and
          embedded wherever you write. Copy the snippet below — nothing is tracked, and the card
          reads from the same local data the atlas does.
        </p>
      </PageHeader>

      <SectionHeader title="Choose an entry">
        <select
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full max-w-sm rounded-lg border border-input bg-card px-3 py-2.5 text-[0.9rem]"
        >
          {sorted.map((e) => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </select>
      </SectionHeader>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <div className="eyebrow mb-3">Preview</div>
          <div className="card-warm overflow-hidden">
            <div className="border-b border-border bg-secondary/50 px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
              Political Atlas · Card
            </div>
            {(() => {
              const e = entities.find((x) => x.id === id);
              if (!e) return null;
              return (
                <div className="p-4">
                  <Link href={`#/entry/${id}`} className="font-display text-[1.15rem] font-bold hover:text-brand">{e.name}</Link>
                  <p className="mt-2 line-clamp-5 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {leadPlain(e.lead)}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[0.75rem] text-muted-foreground">
                    <span>Political Atlas — The Shape of Power</span>
                    <span className="text-brand">Open →</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
        <div>
          <div className="eyebrow mb-3">Snippet</div>
          <pre className="card-warm overflow-x-auto p-4 text-[0.78rem] leading-relaxed">{snippet}</pre>
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(snippet);
              } catch {}
            }}
            className="btn-brand mt-3"
          >
            Copy snippet
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── News ───────────────────────────────────────────────────────────────────

export function NewsView() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="News"
        trail={[{ label: "Home", to: "home" }, { label: "News" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          What the atlas has been doing, dated and brief.
        </p>
      </PageHeader>
      <div className="space-y-4">
        {news.map((n) => (
          <article key={n.id} className="card-warm p-5">
            <div className="text-[0.8125rem] font-semibold text-muted-foreground">{n.date}</div>
            <h3 className="font-display mt-1 text-[1.2rem] font-bold">{n.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{n.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

// keep unused imports referenced
