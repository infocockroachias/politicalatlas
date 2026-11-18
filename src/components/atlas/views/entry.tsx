"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  entityOrThrow,
  categoryForKind,
  relationsTo,
  entities,
  findPath,
} from "@/data";
import type { Entity } from "@/data/types";
import {
  PageHeader,
  SectionHeader,
  AttestBadge,
  StatusBadge,
  LeadText,
  SourceRow,
  ViewLink,
  EmptyState,
} from "../kit";
import { IndiaModules } from "../india-modules";

const KIND_GROUP: Record<string, string> = {
  country: "Systems & Mechanics",
  system: "Systems & Mechanics",
  mechanism: "Systems & Mechanics",
  policy: "Systems & Mechanics",
  ideology: "Ideas & Texts",
  document: "Ideas & Texts",
  concept: "Ideas & Texts",
  event: "Events & Movements",
  movement: "Events & Movements",
  figure: "People & Institutions",
  institution: "People & Institutions",
};

const KIND_LABELS: { key: string; label: string }[] = [
  { key: "governs", label: "governs" },
  { key: "founded", label: "founded" },
  { key: "led", label: "led" },
  { key: "produced", label: "produced" },
  { key: "established", label: "established" },
  { key: "shaped", label: "shaped" },
  { key: "spawned", label: "preceded" },
  { key: "exemplifies", label: "exemplifies" },
  { key: "uses", label: "uses" },
  { key: "member-of", label: "member of" },
  { key: "part-of", label: "part of" },
  { key: "participant-in", label: "participant in" },
  { key: "influenced", label: "influenced" },
  { key: "influenced-by", label: "influenced by" },
  { key: "precursor-of", label: "precursor of" },
  { key: "cited-by", label: "cited by" },
  { key: "contrasts-with", label: "contrasts with" },
];

function kindLabel(k: string) {
  return KIND_LABELS.find((x) => x.key === k)?.label ?? k;
}

export function EntryView({ id }: { id: string }) {
  const e = useMemo(() => {
    try {
      return entityOrThrow(id);
    } catch {
      return null;
    }
  }, [id]);

  if (!e) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <EmptyState
          title="No entry by that name"
          body={`The atlas holds no entry called “${id}”. It may not have been written yet, or the link may be incomplete.`}
        />
        <div className="mt-6 text-center">
          <Link href="#/systems" className="btn-ghost">Browse all entries</Link>
        </div>
      </div>
    );
  }

  const cat = categoryForKind(e.kind);
  const incoming = relationsTo(e.id);
  const sources = e.sources ?? [];

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <PageHeader
        eyebrow={cat.kindLabel}
        title={e.name}
        trail={[
          { label: "Home", to: "home" },
          { label: KIND_GROUP[e.kind], to: "domains" },
          { label: cat.name, to: `category/${cat.id}` },
          { label: e.name },
        ]}
        badges={
          <>
            <span className="pill">{cat.knowledge}</span>
            <StatusBadge status={e.status} />
          </>
        }
      >
        <div className="mt-5">
          <LeadText lead={e.lead} />
          <ContentsNav sections={sectionIds(e)} />
        </div>
      </PageHeader>

      <div className="space-y-10">
        <FactsSection e={e} sourceCount={sources.length} />
        {e.history && e.history.length > 0 && <PastYearSection e={e} />}
        <ConnectionsSection e={e} incoming={incoming} />
        {e.id === "india" && <IndiaModules />}
        {sources.length > 0 && (
          <SectionHeader id="sources" title="Sources" count={sources.length}>
            <div className="card-warm px-5 py-2">
              {sources.map((s, i) => (
                <SourceRow key={i} n={i + 1} work={s.work} tier={s.tier} note={s.note} />
              ))}
            </div>
          </SectionHeader>
        )}
        <BrowserNotesSection e={e} />
      </div>
    </article>
  );
}

function sectionIds(e: Entity): { label: string; id: string }[] {
  const ids: { label: string; id: string }[] = [{ label: "Facts", id: "facts" }];
  if (e.history?.length) ids.push({ label: "At a Past Year", id: "past-year" });
  ids.push({ label: "Connections", id: "connections" });
  if (e.id === "india") {
    ids.push({ label: "The Union in Depth", id: "in-depth" });
  }
  if (e.sources?.length) ids.push({ label: "Sources", id: "sources" });
  ids.push({ label: "Your Notes", id: "notes" });
  return ids;
}

function ContentsNav({ sections }: { sections: { label: string; id: string }[] }) {
  return (
    <nav aria-label="Contents on This Page" className="mt-5 flex flex-wrap items-center gap-x-1 gap-y-1 text-[0.8125rem] text-muted-foreground">
      {sections.map((s, i) => (
        <span key={s.id} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden className="px-0.5">·</span>}
          <a href={`#${s.id}`} className="hover:text-foreground hover:underline underline-offset-2">{s.label}</a>
        </span>
      ))}
    </nav>
  );
}

// ─── Facts ──────────────────────────────────────────────────────────────────

function FactsSection({ e, sourceCount }: { e: Entity; sourceCount: number }) {
  const isCountry = e.kind === "country";
  const ex = e.extras;

  const headline = isCountry ? e.facts.slice(0, 2) : e.facts.slice(0, 4);
  const compare = isCountry ? e.facts.slice(2, 6) : e.facts.slice(4);
  const classify = isCountry
    ? [
        ex?.freedomStatus ? { label: "Freedom Status", value: ex.freedomStatus, note: "Coarse, widely used classification recorded as of the atlas's last review." } : null,
        ex?.democracyBand ? { label: "Democracy Band", value: ex.democracyBand, note: undefined } : null,
        ex?.governmentType ? { label: "Form of Government", value: ex.governmentType, note: undefined } : null,
        ex?.worldRegion ? { label: "World Region", value: ex.worldRegion, note: undefined } : null,
      ].filter((x): x is { label: string; value: string; note?: string } => !!x)
    : [];

  return (
    <SectionHeader id="facts" title="Facts">
      <div className="card-warm grid gap-6 p-6 md:grid-cols-3" style={isCountry ? undefined : { gridTemplateColumns: "1fr" }}>
        {/* headline facts */}
        <div className={isCountry ? "" : "md:col-span-3"}>
          {headline.map((f, i) => (
            <div key={i} className={i > 0 ? "mt-5 border-t border-border/60 pt-5" : ""}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-[1.05rem] font-bold">{f.label}</h3>
                <AttestBadge attestation={f.attestation} />
              </div>
              <div className="mt-1.5 text-[1.25rem] font-semibold">
                {f.value}
                {sourceCount > 0 && <sup className="fnref" title={`${sourceCount} sources`}>{sourceCount}</sup>}
              </div>
              {f.note && <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">{f.note}</p>}
            </div>
          ))}
        </div>

        {isCountry && (
          <>
            {/* browse and compare */}
            <div className="md:border-l md:border-border/60 md:pl-6">
              <div className="eyebrow mb-3">Browse and Compare</div>
              {compare.map((f, i) => (
                <div key={i} className={i > 0 ? "mt-4 border-t border-border/60 pt-4" : ""}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[0.8125rem] font-bold text-muted-foreground">{f.label}</span>
                    <AttestBadge attestation={f.attestation} />
                  </div>
                  <div className="mt-1 text-[1.05rem] font-semibold">
                    {f.value}
                    {sourceCount > 0 && <sup className="fnref">{sourceCount}</sup>}
                  </div>
                  {f.note && <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground">{f.note}</p>}
                </div>
              ))}
            </div>

            {/* classification */}
            <div className="md:border-l md:border-border/60 md:pl-6">
              <div className="eyebrow mb-3">Classification</div>
              {classify.map((f, i) => (
                <div key={i} className={i > 0 ? "mt-4 border-t border-border/60 pt-4" : ""}>
                  <span className="text-[0.8125rem] font-bold text-muted-foreground">{f.label}</span>
                  <div className="mt-1 text-[1.05rem] font-semibold">{f.value}</div>
                  {f.note && <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground">{f.note}</p>}
                </div>
              ))}
              <ViewLink to={`category/countries`} className="mt-4 inline-block text-[0.8125rem] font-semibold text-brand hover:underline">
                Compare with other countries →
              </ViewLink>
            </div>
          </>
        )}
      </div>
    </SectionHeader>
  );
}

// ─── At a Past Year ─────────────────────────────────────────────────────────

function PastYearSection({ e }: { e: Entity }) {
  const history = e.history!;
  const [year, setYear] = useState<number>("present" as unknown as number);
  void year;

  const [selected, setSelected] = useState<number | "present">("present");
  const snap = selected === "present" ? null : history.find((h) => h.year === selected);

  return (
    <SectionHeader id="past-year" title="At a Past Year">
      <div className="card-warm p-6">
        <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
          Choose a year to see this entry's facts as the atlas records them at that moment: what it
          held then, what it held instead, and what it had not yet adopted. Choose Present for the
          current record.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <label className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">Year</label>
          <select
            value={String(selected)}
            onChange={(ev) => setSelected(ev.target.value === "present" ? "present" : Number(ev.target.value))}
            className="rounded-lg border border-input bg-card px-3 py-2 text-[0.9rem]"
          >
            <option value="present">Present</option>
            {history.map((h) => (
              <option key={h.year} value={h.year}>{h.year}</option>
            ))}
          </select>
        </div>

        <AnimatePresenceBox show={selected !== "present"}>
          {snap && (
            <motion.div
              key={snap.year}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-5 rounded-xl border border-border bg-secondary/40 p-5"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-[1.6rem] font-bold">{snap.year}</span>
                <h3 className="font-display text-[1.15rem] font-bold">{snap.headline}</h3>
              </div>
              {snap.lead && <p className="mt-2 max-w-2xl text-[0.9rem] leading-relaxed text-muted-foreground">{snap.lead}</p>}
              <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {snap.facts.map((f, i) => (
                  <div key={i}>
                    <dt className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">{f.label}</dt>
                    <dd className="mt-0.5 text-[1rem] font-semibold">{f.value}</dd>
                    {f.note && <dd className="mt-1 text-[0.8rem] text-muted-foreground">{f.note}</dd>}
                  </div>
                ))}
              </dl>
            </motion.div>
          )}
        </AnimatePresenceBox>
        {selected === "present" && (
          <p className="mt-4 rounded-xl border border-border bg-secondary/40 p-5 text-[0.9rem] leading-relaxed text-muted-foreground">
            Showing the present record — the facts above, as the atlas holds them now.
          </p>
        )}
      </div>
    </SectionHeader>
  );
}

function AnimatePresenceBox({ show, children }: { show: boolean; children: React.ReactNode }) {
  return <>{show && children}</>;
}

// ─── Connections ────────────────────────────────────────────────────────────

function ConnectionsSection({ e, incoming }: { e: Entity; incoming: { from: Entity; kind: string; note?: string }[] }) {
  const outgoing = e.relations ?? [];
  return (
    <SectionHeader id="connections" title="Connections" count={outgoing.length + incoming.length}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <div className="eyebrow mb-3">Outward — what this entry touches</div>
          {outgoing.length === 0 ? (
            <p className="text-[0.875rem] text-muted-foreground">No relations recorded yet.</p>
          ) : (
            <div className="space-y-2">
              {outgoing.map((r, i) => {
                const target = entities.find((x) => x.id === r.to);
                if (!target) return null;
                return (
                  <Link key={i} href={`#/entry/${r.to}`} className="card-warm hover-lift flex items-center gap-3 p-3">
                    <span className="pill shrink-0">{kindLabel(r.kind)}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold">{target.name}</span>
                      {r.note && <span className="block truncate text-[0.78rem] text-muted-foreground">{r.note}</span>}
                    </span>
                    <span aria-hidden className="text-brand">→</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div>
          <div className="eyebrow mb-3">Inward — what cites this entry</div>
          {incoming.length === 0 ? (
            <p className="text-[0.875rem] text-muted-foreground">
              Nothing records a relation to this entry yet. Relations are written one at a time, in both directions.
            </p>
          ) : (
            <div className="space-y-2">
              {incoming.slice(0, 12).map((r, i) => (
                <Link key={i} href={`#/entry/${r.from.id}`} className="card-warm hover-lift flex items-center gap-3 p-3">
                  <span className="pill shrink-0">{kindLabel(r.kind)}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">{r.from.name}</span>
                    {r.note && <span className="block truncate text-[0.78rem] text-muted-foreground">{r.note}</span>}
                  </span>
                  <span aria-hidden className="text-brand">←</span>
                </Link>
              ))}
              {incoming.length > 12 && (
                <p className="text-[0.8125rem] text-muted-foreground">+ {incoming.length - 12} more</p>
              )}
            </div>
          )}
          <PathTeaser id={e.id} />
        </div>
      </div>
    </SectionHeader>
  );
}

function PathTeaser({ id }: { id: string }) {
  const targets = entities.filter((x) => x.id !== id && (x.kind === "system" || x.kind === "document")).slice(0, 40);
  const [picked, setPicked] = useState("");
  const path = useMemo(() => (picked ? findPath(id, picked) : null), [id, picked]);
  return (
    <div className="mt-5 rounded-xl border border-dashed border-border p-4">
      <div className="eyebrow mb-2">Path Finder</div>
      <p className="mb-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
        See the chain of recorded relations linking this entry to another.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={picked}
          onChange={(ev) => setPicked(ev.target.value)}
          className="rounded-lg border border-input bg-card px-3 py-1.5 text-[0.85rem]"
        >
          <option value="">Choose an entry…</option>
          {targets.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        {picked && (
          <ViewLink to={`connections?from=${id}&to=${picked}`} className="text-[0.8125rem] font-semibold text-brand hover:underline">
            Open in Path Finder →
          </ViewLink>
        )}
      </div>
      {path && (
        <p className="mt-2 text-[0.8125rem] text-muted-foreground">
          {path.length === 0 ? "Same entry." : `${path.length} hop${path.length > 1 ? "s" : ""} — ${path.map((p) => p.to.name).join(" → ")}`}
        </p>
      )}
    </div>
  );
}

// ─── Reader notes (browser-local comments & challenges) ─────────────────────

interface NoteRow { body: string; when: string; kind: "comment" | "challenge" }

function BrowserNotesSection({ e }: { e: Entity }) {
  const key = `atlas-notes-${e.id}`;
  const [notes, setNotes] = useState<NoteRow[]>([]);
  const [body, setBody] = useState("");
  const [kind, setKind] = useState<"comment" | "challenge">("comment");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(key) ?? "[]") as NoteRow[];
      setNotes(raw);
    } catch {}
    setReady(true);
    return () => setReady(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [e.id]);

  const add = () => {
    const trimmed = body.trim();
    if (!trimmed) return;
    const row: NoteRow = { body: trimmed, when: new Date().toISOString().slice(0, 10), kind };
    const next = [...notes, row];
    setNotes(next);
    setBody("");
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {}
  };

  const comments = notes.filter((n) => n.kind === "comment");
  const challenges = notes.filter((n) => n.kind === "challenge");

  return (
    <SectionHeader id="notes" title="Your Notes" count={notes.length}>
      <div className="card-warm p-6">
        <p className="text-[0.875rem] leading-relaxed text-muted-foreground">
          Notes you write here are <strong>kept in this browser only</strong> — the atlas calls no
          server and stores nothing anywhere else. Reader challenges that you want the editors to
          weigh should go through the publisher's contact page.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <select
            value={kind}
            onChange={(ev) => setKind(ev.target.value as "comment" | "challenge")}
            className="rounded-lg border border-input bg-card px-3 py-2 text-[0.9rem]"
          >
            <option value="comment">Comment</option>
            <option value="challenge">Challenge</option>
          </select>
          <input
            value={body}
            onChange={(ev) => setBody(ev.target.value)}
            onKeyDown={(ev) => ev.key === "Enter" && add()}
            placeholder={kind === "comment" ? "Share a thought…" : "Spotted an error or a better source? Note it…"}
            className="flex-1 rounded-lg border border-input bg-card px-3 py-2 text-[0.9rem] outline-none focus:ring-2 focus:ring-ring/40"
          />
          <button onClick={add} className="btn-brand shrink-0">Add</button>
        </div>

        <div className="mt-5 space-y-2">
          {comments.length > 0 && (
            <>
              <div className="eyebrow">Comments ({comments.length})</div>
              {comments.map((n, i) => (
                <div key={i} className="rounded-lg border border-border bg-secondary/40 p-3 text-[0.875rem]">
                  <span className="text-muted-foreground">{n.when} — </span>{n.body}
                </div>
              ))}
            </>
          )}
          {challenges.length > 0 && (
            <>
              <div className="eyebrow mt-3">Reader Challenges ({challenges.length})</div>
              {challenges.map((n, i) => (
                <div key={i} className="rounded-lg border border-brand/30 bg-brand-soft/50 p-3 text-[0.875rem]">
                  <span className="text-muted-foreground">{n.when} — </span>{n.body}
                </div>
              ))}
            </>
          )}
          {ready && notes.length === 0 && (
            <p className="text-[0.875rem] text-muted-foreground">
              No notes yet. Be the first to share a thought — it stays on this device.
            </p>
          )}
        </div>
      </div>
    </SectionHeader>
  );
}
