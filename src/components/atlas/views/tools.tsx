"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { entities, entitiesOfKind, categoryById, categories, parseLead } from "@/data";
import type { Entity } from "@/data/types";
import { PageHeader, SectionHeader, EmptyState, ViewLink } from "../kit";

// ─── Compare ────────────────────────────────────────────────────────────────

const RECENT = [
  ["india", "united-states"],
  ["direct-democracy", "military-dictatorship"],
  ["self-determination", "shura"],
  ["constitutional-amendment", "single-transferable-vote"],
  ["parliamentary-system", "presidential-system"],
  ["magna-carta", "us-constitution"],
] as const;

export function CompareView({ param }: { param?: string }) {
  const initial = param?.split("-vs-") ?? [];
  const [aId, setAId] = useState<string>(initial[0] ?? "");
  const [bId, setBId] = useState<string>(initial[1] ?? "");
  const [cat, setCat] = useState<string>("");

  const a = entities.find((e) => e.id === aId);
  const b = entities.find((e) => e.id === bId);

  const pickable = useMemo(() => (cat ? entitiesOfKind(categoryById[cat].kind) : entities).slice().sort((x, y) => x.name.localeCompare(y.name)), [cat]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Comparison"
        title="Compare"
        trail={[{ label: "Home", to: "home" }, { label: "Compare" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          A comparison reads both kinds of claim the atlas records — the facts held against an
          entity and the relations it stands in — and sets them side by side: what the entries
          share, what each holds a different account of, and what only one of them says. Nothing
          is inferred; a claim appears only where the atlas records it.
        </p>
      </PageHeader>

      <SectionHeader title="Choose What to Compare">
        <div className="card-warm grid gap-5 p-5 md:grid-cols-2">
          <div>
            <div className="eyebrow mb-2">Browse by category</div>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-[0.9rem]"
            >
              <option value="">Any category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name} ({entitiesOfKind(c.kind).length})</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Picker label="First entity" value={aId} onChange={setAId} rows={pickable} />
            <Picker label="Second entity" value={bId} onChange={setBId} rows={pickable} />
          </div>
        </div>
      </SectionHeader>

      {a && b ? (
        <div className="mt-8">
          <SectionHeader title={`${a.name} · ${b.name}`}>
            <Comparison a={a} b={b} />
          </SectionHeader>
        </div>
      ) : (
        <div className="mt-8">
          <SectionHeader title="Recent Comparisons">
            <p className="-mt-2 mb-4 text-[0.9375rem] text-muted-foreground">
              Comparisons readers reach for often, open to look at with no name attached.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {RECENT.map(([x, y]) => {
                const xe = entities.find((e) => e.id === x);
                const ye = entities.find((e) => e.id === y);
                if (!xe || !ye) return null;
                return (
                  <button
                    key={`${x}|${y}`}
                    onClick={() => {
                      setAId(x);
                      setBId(y);
                      window.scrollTo(0, 0);
                    }}
                    className="card-warm hover-lift flex items-center justify-center gap-3 p-4"
                  >
                    <span className="text-right font-semibold">{xe.name}</span>
                    <span className="pill pill-brand">vs</span>
                    <span className="font-semibold">{ye.name}</span>
                  </button>
                );
              })}
            </div>
          </SectionHeader>
        </div>
      )}
    </div>
  );
}

function Picker({
  label,
  value,
  onChange,
  rows,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows: Entity[];
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-[0.9rem]">
        <option value="">Choose…</option>
        {rows.map((r) => (
          <option key={r.id} value={r.id}>{r.name}</option>
        ))}
      </select>
    </label>
  );
}

function Comparison({ a, b }: { a: Entity; b: Entity }) {
  const aFacts = new Map(a.facts.map((f) => [f.label.toLowerCase(), f]));
  const bFacts = new Map(b.facts.map((f) => [f.label.toLowerCase(), f]));
  const labels = Array.from(new Set([...a.facts.map((f) => f.label), ...b.facts.map((f) => f.label)]));
  const aOut = a.relations ?? [];
  const bOut = b.relations ?? [];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {[a, b].map((e, i) => (
          <div key={e.id} className="card-warm p-5">
            <div className="eyebrow">{i === 0 ? "First" : "Second"}</div>
            <Link href={`#/entry/${e.id}`} className="font-display text-[1.3rem] font-bold hover:text-brand">{e.name}</Link>
            <p className="mt-2 line-clamp-4 text-[0.875rem] leading-relaxed text-muted-foreground">
              {parseLead(e.lead).map((t) => t.text).join("")}
            </p>
          </div>
        ))}
      </div>

      <div className="card-warm overflow-x-auto">
        <table className="w-full min-w-[36rem] text-[0.875rem]">
          <thead>
            <tr className="border-b border-border bg-secondary/50 text-left">
              <th className="px-4 py-2.5 font-bold">Field</th>
              <th className="px-4 py-2.5 font-bold">{a.name}</th>
              <th className="px-4 py-2.5 font-bold">{b.name}</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((label) => {
              const fa = aFacts.get(label.toLowerCase());
              const fb = bFacts.get(label.toLowerCase());
              const shared = fa && fb && fa.value === fb.value;
              return (
                <tr key={label} className={`border-b border-border/50 last:border-0 ${shared ? "bg-attest-soft/40" : ""}`}>
                  <td className="px-4 py-2.5 font-semibold text-muted-foreground">{label}</td>
                  <td className="px-4 py-2.5">{fa ? fa.value : <span className="text-muted-foreground">— not recorded</span>}</td>
                  <td className="px-4 py-2.5">{fb ? fb.value : <span className="text-muted-foreground">— not recorded</span>}</td>
                </tr>
              );
            })}
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5 font-semibold text-muted-foreground">Relations recorded</td>
              <td className="px-4 py-2.5">{aOut.length}</td>
              <td className="px-4 py-2.5">{bOut.length}</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-semibold text-muted-foreground">Sources cited</td>
              <td className="px-4 py-2.5">{a.sources?.length ?? 0}</td>
              <td className="px-4 py-2.5">{b.sources?.length ?? 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">
        Rows shaded in green are values the two entries share exactly. An em-dash means the atlas
        records no such claim for that entry — absence here is an index of the record, not a fact
        about the world.
      </p>
    </div>
  );
}

// ─── Path Finder ────────────────────────────────────────────────────────────

import { findPath } from "@/data";

export function ConnectionsView({ query }: { query?: URLSearchParams }) {
  const [fromId, setFromId] = useState(query?.get("from") ?? "");
  const [toId, setToId] = useState(query?.get("to") ?? "");
  const path = useMemo(() => (fromId && toId ? findPath(fromId, toId) : null), [fromId, toId]);
  const sorted = useMemo(() => entities.slice().sort((x, y) => x.name.localeCompare(y.name)), []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Connections"
        title="Path Finder"
        trail={[{ label: "Home", to: "home" }, { label: "Path Finder" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Pick any two entries and see the chain of recorded relations that links them, one hop at
          a time. Every step is a connection somebody wrote down in the atlas, not a resemblance
          this page inferred.
        </p>
      </PageHeader>

      <SectionHeader title="Choose Two Entries">
        <div className="card-warm grid gap-5 p-5 md:grid-cols-2">
          <Picker label="Start from" value={fromId} onChange={(v) => { setFromId(v); }} rows={sorted} />
          <Picker label="Destination" value={toId} onChange={(v) => { setToId(v); }} rows={sorted} />
        </div>
      </SectionHeader>

      <div className="mt-8">
        <SectionHeader title="How the Chain Is Chosen">
          <p className="-mt-2 max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            The finder walks the relation graph outward from the start — following each recorded
            claim in both directions — and returns a shortest chain of recorded steps. Ties are
            broken breadth-first, so the first shortest chain found is shown; other equally short
            chains may exist.
          </p>
        </SectionHeader>
      </div>

      {fromId && toId && (
        <div className="mt-8">
          {path == null ? (
            <EmptyState
              title="No recorded chain links these two"
              body="The atlas's relation graph does not connect them yet. Relations grow one written claim at a time."
            />
          ) : path.length === 0 ? (
            <EmptyState title="Same entry" body="Start and destination are the same record." />
          ) : (
            <SectionHeader title="The Chain" count={path.length}>
              <ol className="relative ml-3 border-l-2 border-brand/30 pl-6">
                {path.map((step, i) => (
                  <li key={i} className="relative pb-6 last:pb-0">
                    <span className="absolute -left-[1.72rem] top-1 h-3.5 w-3.5 rounded-full border-2 bg-card" style={{ borderColor: "var(--brand)" }} aria-hidden />
                    <div className="flex flex-wrap items-center gap-2">
                      <ViewLink to={`entry/${step.from.id}`} className="font-display font-bold hover:text-brand">{step.from.name}</ViewLink>
                      <span className="pill">{step.direction === "inverse" ? "← recorded by" : "→ records"} {step.kind}</span>
                      <ViewLink to={`entry/${step.to.id}`} className="font-display font-bold text-brand hover:underline">{step.to.name}</ViewLink>
                    </div>
                    {step.note && <p className="mt-1 max-w-2xl text-[0.85rem] leading-relaxed text-muted-foreground">{step.note}</p>}
                  </li>
                ))}
              </ol>
            </SectionHeader>
          )}
        </div>
      )}
    </div>
  );
}
