"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { entities, entitiesOfKind, groupedDomains, facetValues, aToZ, categoryById } from "@/data";
import type { Entity } from "@/data/types";
import { PageHeader, SectionHeader, EntityCard, EmptyState } from "../kit";

// ─── Browse Domains ─────────────────────────────────────────────────────────

export function DomainsView() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Explore"
        title="Browse Domains"
        trail={[{ label: "Home", to: "home" }, { label: "Browse Domains" }]}
      >
        <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          The atlas is organised into eleven categories across four domains. Every entry lives in
          exactly one category, and every category states the kind of knowledge it records.
        </p>
      </PageHeader>

      <div className="space-y-10">
        {groupedDomains.map((g) => (
          <section key={g.group}>
            <div className="mb-4 flex items-baseline gap-3">
              <h2 className="font-display text-[1.45rem] font-bold text-brand">{g.group}</h2>
              <span className="pill">{g.items.length} categories</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((d) => (
                <Link key={d.id} href={`#/category/${d.id}`} className="card-warm hover-lift block p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-[1.15rem] font-bold">{d.name}</h3>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[0.75rem] font-bold tabular-nums text-muted-foreground">
                      {d.count}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-3 text-[0.85rem] leading-relaxed text-muted-foreground">{d.scope}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

// ─── A to Z Index ───────────────────────────────────────────────────────────

export function AtoZView() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q.trim()) return aToZ;
    const t = q.trim().toLowerCase();
    return aToZ
      .map((g) => ({ letter: g.letter, items: g.items.filter((e) => e.name.toLowerCase().includes(t)) }))
      .filter((g) => g.items.length > 0);
  }, [q]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Explore"
        title="A to Z Index"
        trail={[{ label: "Home", to: "home" }, { label: "A to Z Index" }]}
      >
        <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Every entry in the atlas, in one alphabetical run.
        </p>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by name…"
          className="mt-5 w-full max-w-md rounded-lg border border-input bg-card px-3.5 py-2.5 text-[0.9375rem] outline-none focus:ring-2 focus:ring-ring/40"
        />
      </PageHeader>

      {filtered.length === 0 ? (
        <EmptyState title="No entries match" body={`Nothing in the index matches “${q}”.`} />
      ) : (
        <div className="space-y-7">
          {filtered.map((g) => (
            <section key={g.letter} aria-label={`Entries under ${g.letter}`}>
              <div className="mb-3 flex items-baseline gap-3 border-b border-border/70 pb-1.5">
                <span className="font-display text-[1.6rem] font-bold text-brand">{g.letter}</span>
                <span className="text-[0.8125rem] text-muted-foreground">{g.items.length} entries</span>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((e) => (
                  <Link key={e.id} href={`#/entry/${e.id}`} className="group flex items-baseline justify-between gap-3 rounded-md px-2 py-1.5 hover:bg-secondary">
                    <span className="truncate font-medium group-hover:text-brand">{e.name}</span>
                    <span className="shrink-0 text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                      {categoryById[e.kind === "country" ? "countries" : e.kind === "system" ? "systems-of-government" : e.kind === "mechanism" ? "political-mechanisms" : e.kind === "figure" ? "political-figures" : e.kind === "concept" ? "political-concepts" : e.kind + "s"]?.name}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── All Systems (directory of everything) ──────────────────────────────────

const KIND_FILTERS = [
  { key: "all", label: "All" },
  { key: "country", label: "Countries" },
  { key: "system", label: "Systems of Government" },
  { key: "mechanism", label: "Mechanisms" },
  { key: "policy", label: "Policies" },
  { key: "ideology", label: "Ideologies" },
  { key: "document", label: "Documents" },
  { key: "concept", label: "Concepts" },
  { key: "event", label: "Events" },
  { key: "movement", label: "Movements" },
  { key: "figure", label: "Figures" },
  { key: "institution", label: "Institutions" },
] as const;

export function AllSystemsView() {
  const [kind, setKind] = useState<string>("all");
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    let rows: Entity[] = kind === "all" ? entities : entitiesOfKind(kind as Entity["kind"]);
    const t = q.trim().toLowerCase();
    if (t) rows = rows.filter((e) => e.name.toLowerCase().includes(t));
    return [...rows].sort((a, b) => a.name.localeCompare(b.name));
  }, [kind, q]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Explore"
        title="All Systems"
        trail={[{ label: "Home", to: "home" }, { label: "All Systems" }]}
      >
        <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          The complete directory: every entry the atlas holds, filterable by kind and searchable
          by name.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name…"
            className="w-full max-w-sm rounded-lg border border-input bg-card px-3.5 py-2.5 text-[0.9375rem] outline-none focus:ring-2 focus:ring-ring/40"
          />
          <div className="flex flex-wrap gap-1.5">
            {KIND_FILTERS.map((k) => (
              <button
                key={k.key}
                onClick={() => setKind(k.key)}
                aria-pressed={kind === k.key}
                className={`rounded-full border px-3 py-1.5 text-[0.78rem] font-semibold transition-colors ${
                  kind === k.key ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[0.8125rem] text-muted-foreground">{rows.length} entries shown.</p>
      </PageHeader>

      {rows.length === 0 ? (
        <EmptyState title="Nothing matches" body={`No ${kind === "all" ? "entries" : kind} match “${q}”.`} />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((e) => (
            <EntityCard key={e.id} e={e} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Category page (with Browse By facets) ──────────────────────────────────

export function CategoryView({ categoryId }: { categoryId: string }) {
  const cat = categoryById[categoryId];
  const [facet, setFacet] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);

  const rows = useMemo(() => (cat ? entitiesOfKind(cat.kind) : []), [cat]);

  if (!cat) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <EmptyState title="No such category" body={`The atlas has no category called “${categoryId}”.`} />
        <div className="mt-6 text-center">
          <Link href="#/domains" className="btn-ghost">Browse Domains</Link>
        </div>
      </div>
    );
  }

  const facets = cat.browseBy ?? [];
  const facetRows = facet ? facetValues(cat.id, facet) : [];
  const shown =
    facet && value ? rows.filter((r) => (r.extras as unknown as Record<string, string> | undefined)?.[facet] === value) : rows;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Category"
        title={cat.name}
        trail={[{ label: "Home", to: "home" }, { label: "Browse Domains", to: "domains" }, { label: cat.name }]}
        badges={
          <>
            <span className="pill">{cat.knowledge}</span>
            <span className="pill">{rows.length} entries</span>
          </>
        }
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">{cat.scope}</p>
      </PageHeader>

      {facets.length > 0 && (
        <SectionHeader title="Browse By">
          <div className="card-warm grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facets.map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setFacet(f.key);
                  setValue(null);
                }}
                aria-pressed={facet === f.key}
                className={`card-warm hover-lift p-3.5 text-left ${facet === f.key ? "border-brand/60" : ""}`}
              >
                <h3 className={`font-display text-[1rem] font-bold ${facet === f.key ? "text-brand" : ""}`}>
                  {facet === f.key ? `By ${f.label}` : f.label}
                </h3>
                <span className="pill mt-2">{rows.length} entries</span>
              </button>
            ))}
            <button
              onClick={() => {
                setFacet(null);
                setValue(null);
              }}
              aria-pressed={!facet}
              className={`card-warm hover-lift p-3.5 text-left ${!facet ? "border-brand/60" : ""}`}
            >
              <h3 className={`font-display text-[1rem] font-bold ${!facet ? "text-brand" : ""}`}>All {cat.name}</h3>
              <span className="pill mt-2">{rows.length} entries</span>
            </button>
          </div>

          {facet && (
            <div className="mt-5">
              <div className="mb-2 text-[0.8125rem] font-bold text-muted-foreground">
                Choose a {facets.find((f) => f.key === facet)?.label} to filter:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {facetRows.map((fv) => (
                  <button
                    key={fv.value}
                    onClick={() => setValue(fv.value === value ? null : fv.value)}
                    aria-pressed={value === fv.value}
                    className={`rounded-full border px-3 py-1.5 text-[0.8rem] font-medium transition-colors ${
                      value === fv.value ? "border-brand/60 bg-brand-soft text-brand" : "border-border hover:bg-secondary"
                    }`}
                  >
                    {fv.value} <span className="text-muted-foreground">· {fv.count}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </SectionHeader>
      )}

      <SectionHeader title={`${cat.name}${value ? ` — ${value}` : ""}`} count={shown.length}>
        {shown.length === 0 ? (
          <EmptyState title="Nothing under this filter" body="Choose a different value, or clear the filter." />
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {shown
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((e) => (
                <EntityCard key={e.id} e={e} showKind={false} />
              ))}
          </div>
        )}
      </SectionHeader>
    </div>
  );
}
