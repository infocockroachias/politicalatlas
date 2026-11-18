import type { Entity, EntityKind } from "./types";
import { countriesAsiaA } from "./countries-asia-a";
import { countriesAsiaB } from "./countries-asia-b";
import { countriesEurope } from "./countries-europe";
import { countriesWest } from "./countries-west";
import { countriesIndia } from "./countries-india";
import { ideologies } from "./ideologies";
import { concepts } from "./concepts";
import { systems } from "./systems";
import { mechanisms } from "./mechanisms";
import { policies } from "./policies";
import { documents } from "./documents";
import { institutions } from "./institutions";
import { figuresA } from "./figures-a";
import { figuresB } from "./figures-b";
import { events } from "./events";
import { movements } from "./movements";
import { quizzes } from "./quizzes";
import { trails } from "./trails";
import { openQuestions } from "./open-questions";
import { disputedStatements } from "./disputed";
import { atlasCases } from "./cases";
import { corrections } from "./corrections";
import { campaigns } from "./campaigns";
import { news } from "./news";
import { newsletter } from "./newsletter";
import { communities } from "./communities";
import { forumThreads } from "./forum";
import { observances } from "./calendar";
import { categories, categoryForKind } from "./categories";

export * from "./types";
export * from "./categories";
export { quizzes, trails, openQuestions, disputedStatements, atlasCases, corrections, campaigns, news, newsletter, communities, forumThreads, observances };

// ─── Entity registry ────────────────────────────────────────────────────────

const groups: Entity[][] = [
  countriesIndia,
  countriesAsiaA,
  countriesAsiaB,
  countriesEurope,
  countriesWest,
  ideologies,
  concepts,
  systems,
  mechanisms,
  policies,
  documents,
  institutions,
  figuresA,
  figuresB,
  events,
  movements,
];

export const entities: Entity[] = groups.flat();

const byId = new Map<string, Entity>();
for (const e of entities) {
  if (byId.has(e.id)) throw new Error(`Duplicate entity id: ${e.id}`);
  byId.set(e.id, e);
}

export function entity(id: string): Entity | undefined {
  return byId.get(id);
}

export function entityOrThrow(id: string): Entity {
  const e = byId.get(id);
  if (!e) throw new Error(`Unknown entity: ${id}`);
  return e;
}

export function entitiesOfKind(kind: EntityKind): Entity[] {
  return entities.filter((e) => e.kind === kind);
}

export function entitiesOfCategory(categoryId: string): Entity[] {
  const cat = categories.find((c) => c.id === categoryId);
  return cat ? entities.filter((e) => e.kind === cat.kind) : [];
}

/** Entities that name a given entity in their relations (incoming links) */
export function relationsTo(id: string): { from: Entity; kind: string; note?: string }[] {
  const out: { from: Entity; kind: string; note?: string }[] = [];
  for (const e of entities) {
    for (const r of e.relations ?? []) {
      if (r.to === id) out.push({ from: e, kind: r.kind, note: r.note });
    }
  }
  return out;
}

// ─── [[link]] parsing ───────────────────────────────────────────────────────

export interface LeadToken {
  type: "text" | "link" | "bold";
  text: string;
  /** resolved target for links */
  target?: string;
  label?: string;
}

/** Parse "…[[entity-id]]…" and "[[entity-id|Label]]" markup into tokens */
export function parseLead(lead: string): LeadToken[] {
  const tokens: LeadToken[] = [];
  const re = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(lead))) {
    if (m.index > last) tokens.push({ type: "text", text: lead.slice(last, m.index) });
    const target = m[1];
    tokens.push({ type: "link", text: m[2] ?? entity(target)?.name ?? m[1], target, label: m[2] });
    last = m.index + m[0].length;
  }
  if (last < lead.length) tokens.push({ type: "text", text: lead.slice(last) });
  return tokens;
}

// ─── Stats ──────────────────────────────────────────────────────────────────

export const stats = {
  figures: entitiesOfKind("figure").length,
  ideologies: entitiesOfKind("ideology").length,
  documents: entitiesOfKind("document").length,
  entries: entities.length,
  sourcedFacts: entities.reduce((n, e) => n + e.facts.length + (e.relations?.length ?? 0), 0),
  countries: entitiesOfKind("country").length,
};

// ─── Facets (Browse By) ─────────────────────────────────────────────────────

export function facetValues(categoryId: string, key: string): { value: string; count: number; ids: string[] }[] {
  const rows = entitiesOfCategory(categoryId);
  const map = new Map<string, string[]>();
  for (const e of rows) {
    const v =
      key === "foundingYear"
        ? e.extras?.foundingYear != null
          ? String(e.extras.foundingYear)
          : undefined
        : (e.extras as Record<string, string | undefined> | undefined)?.[key];
    if (!v) continue;
    const arr = map.get(v) ?? [];
    arr.push(e.id);
    map.set(v, arr);
  }
  return Array.from(map.entries())
    .map(([value, ids]) => ({ value, count: ids.length, ids }))
    .sort((a, b) =>
      key === "foundingYear" ? Number(a.value) - Number(b.value) : b.count - a.count || a.value.localeCompare(b.value),
    );
}

// ─── Search ─────────────────────────────────────────────────────────────────

export function searchAtlas(query: string, limit = 12): Entity[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const scored: { e: Entity; score: number }[] = [];
  for (const e of entities) {
    const name = e.name.toLowerCase();
    let score = 0;
    if (name === q) score = 100;
    else if (name.startsWith(q)) score = 80;
    else if (name.includes(q)) score = 60;
    else if (e.lead.toLowerCase().includes(q)) score = 30;
    else if ((e.facts ?? []).some((f) => f.value.toLowerCase().includes(q) || f.label.toLowerCase().includes(q))) score = 25;
    else if ((e.facts ?? []).some((f) => (f.note ?? "").toLowerCase().includes(q))) score = 18;
    if (score > 0) scored.push({ e, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.e.name.localeCompare(b.e.name)).slice(0, limit).map((s) => s.e);
}

// ─── Path Finder ────────────────────────────────────────────────────────────

export interface PathStep {
  from: Entity;
  to: Entity;
  kind: string;
  note?: string;
  /** direction of the recorded claim: from→to, to→from (inverted), or mutual */
  direction: "forward" | "inverse" | "mutual";
}

/** BFS over the (bidirectional) relation graph; returns one shortest chain */
export function findPath(fromId: string, toId: string): PathStep[] | null {
  if (fromId === toId) return [];
  const prev = new Map<string, { id: string; step: PathStep }>();
  const queue: string[] = [fromId];
  const seen = new Set([fromId]);
  while (queue.length) {
    const cur = queue.shift()!;
    const e = entity(cur);
    if (!e) continue;
    const edges: PathStep[] = [];
    for (const r of e.relations ?? []) {
      const t = entity(r.to);
      if (!t) continue;
      edges.push({ from: e, to: t, kind: r.kind, note: r.note, direction: "forward" });
      edges.push({ from: t, to: e, kind: r.kind, note: r.note, direction: "inverse" });
    }
    for (const step of edges) {
      const nid = step.to.id;
      if (nid === toId) {
        const chain: PathStep[] = [step];
        let back = cur;
        while (back !== fromId) {
          const p = prev.get(back)!;
          chain.unshift(p.step);
          back = p.id;
        }
        return chain;
      }
      if (!seen.has(nid)) {
        seen.add(nid);
        prev.set(nid, { id: cur, step });
        queue.push(nid);
      }
    }
  }
  return null;
}

// ─── Recent / calendar helpers ──────────────────────────────────────────────

export const recentlyAdded: Entity[] = entities
  .filter((e) => e.addedOn)
  .sort((a, b) => (a.addedOn! < b.addedOn! ? 1 : -1))
  .slice(0, 30);

export function observancesFor(monthDay: string) {
  return observances.filter((o) => o.monthDay === monthDay);
}

/** A deterministic "featured" cross-section, stable for a given date */
export function featuredOn(dateKey: string): Entity[] {
  const kinds: EntityKind[] = ["country", "policy", "ideology", "document", "concept", "event", "movement", "figure"];
  let seed = 0;
  for (let i = 0; i < dateKey.length; i++) seed = (seed * 31 + dateKey.charCodeAt(i)) >>> 0;
  return kinds
    .map((k, i) => {
      const pool = entitiesOfKind(k);
      if (!pool.length) return null;
      return pool[(seed + i * 7919) % pool.length];
    })
    .filter((x): x is Entity => !!x);
}

export function openQuestionOfDay(dateKey: string) {
  if (!openQuestions.length) return null;
  let seed = 0;
  for (let i = 0; i < dateKey.length; i++) seed = (seed * 33 + dateKey.charCodeAt(i)) >>> 0;
  return openQuestions[seed % openQuestions.length];
}

// ─── A–Z ────────────────────────────────────────────────────────────────────

export const aToZ: { letter: string; items: Entity[] }[] = (() => {
  const map = new Map<string, Entity[]>();
  for (const e of entities) {
    const ch = e.name[0].toUpperCase();
    const arr = map.get(ch) ?? [];
    arr.push(e);
    map.set(ch, arr);
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([letter, items]) => ({ letter, items: items.sort((x, y) => x.name.localeCompare(y.name)) }));
})();

// ─── Domain groups (home page + domains page) ───────────────────────────────

export const domainGroups = categories.map((c) => ({
  id: c.id,
  name: c.name,
  group: c.group,
  kind: c.kind,
  count: entitiesOfKind(c.kind).length,
  scope: c.scope,
}));

export const groupedDomains = ["Systems & Mechanics", "Ideas & Texts", "Events & Movements", "People & Institutions"].map(
  (g) => ({ group: g, items: domainGroups.filter((d) => d.group === g) }),
);

export { categoryForKind };
