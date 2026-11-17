// ─── Political Atlas data contract ──────────────────────────────────────────
// Every fact in the atlas lives in local TypeScript tables. No API, no backend.

export type EntityKind =
  | "country"
  | "ideology"
  | "concept"
  | "system"
  | "mechanism"
  | "policy"
  | "document"
  | "institution"
  | "figure"
  | "event"
  | "movement";

export type Attestation = "well-attested" | "attested" | "disputed";

export interface Fact {
  /** Short field label, e.g. "Founding Year" */
  label: string;
  /** Field value, e.g. "1947" or "Bicameral" */
  value: string;
  attestation?: Attestation;
  /** Optional 1–3 sentence explanation of the value */
  note?: string;
}

export interface Relation {
  /** Target entity id (must exist somewhere in the atlas) */
  to: string;
  /** Fixed vocabulary — see SPEC.md */
  kind:
    | "influenced"
    | "influenced-by"
    | "produced"
    | "governs"
    | "founded"
    | "led"
    | "member-of"
    | "participant-in"
    | "precursor-of"
    | "spawned"
    | "exemplifies"
    | "uses"
    | "contrasts-with"
    | "cited-by"
    | "shaped"
    | "established"
    | "part-of";
  /** Optional short note on how the two entries touch */
  note?: string;
}

export interface SourceRef {
  /** A real, public reference work, e.g. "Encyclopædia Britannica — 'India'" */
  work: string;
  /** 1 = canon / scholarly reference; 2 = reputable secondary; 3 = news of record */
  tier: 1 | 2 | 3;
  note?: string;
}

export interface FactSnapshot {
  label: string;
  value: string;
  note?: string;
}

/** How an entity's record looked at a past moment (countries mainly) */
export interface YearSnapshot {
  year: number;
  /** Short headline for that year, e.g. "Dominion within the Commonwealth" */
  headline: string;
  /** 1–3 sentences of context */
  lead?: string;
  facts: FactSnapshot[];
}

/** Country-only classification fields, used by Browse By facets */
export interface CountryExtras {
  capital?: string;
  foundingYear?: number;
  headOfState?: string;
  headOfGovernment?: string;
  legislature?: string;
  electoralSystem?: string;
  /** Coarse standing: "Free" | "Partly Free" | "Not Free" */
  freedomStatus?: string;
  /** Coarse band: "Full democracy" | "Flawed democracy" | "Hybrid regime" | "Authoritarian regime" */
  democracyBand?: string;
  /** "Ancient" | "Medieval" | "Early modern" | "19th century" | "20th century" | "21st century" */
  foundingEra?: string;
  /** e.g. "Federal parliamentary republic" */
  governmentType?: string;
  /** e.g. "South Asia", "Western Europe", "West Africa" */
  worldRegion?: string;
}

export interface Entity {
  /** Lowercase kebab id, unique across the atlas, e.g. "india" */
  id: string;
  kind: EntityKind;
  name: string;
  /** 2–5 original sentences introducing the entry. Cross-links by [[id]] */
  lead: string;
  status: "verified" | "reviewed" | "developing";
  /** Structured facts (first 3–4 become the headline facts on the entry page) */
  facts: Fact[];
  relations?: Relation[];
  sources?: SourceRef[];
  history?: YearSnapshot[];
  extras?: CountryExtras;
  /** ISO date the entry was added to the atlas, drives "Recently Added" */
  addedOn?: string;
}

// ─── Editorial layer ────────────────────────────────────────────────────────

export interface QuizQuestion {
  prompt: string;
  options: string[];
  /** index of the correct option */
  answer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  subtitle: string;
  /** entity/category area, e.g. "Governing Mechanisms" */
  topic: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Expert";
  questions: QuizQuestion[];
}

export interface TrailStop {
  /** entity id */
  entry: string;
  /** why this stop comes next — one or two sentences */
  why: string;
}

export interface Trail {
  id: string;
  title: string;
  blurb: string;
  stops: TrailStop[];
}

export interface OpenQuestion {
  id: string;
  section: string; // domain group name, e.g. "Systems & Mechanics"
  question: string;
  /** what would actually resolve it */
  whatWouldResolve: string;
  /** expertise the answer needs */
  expertiseNeeded: string;
  kind: "Missing record" | "Unresolved dispute" | "Interpretation" | "Empirical gap";
}

export interface DisputedStatement {
  id: string;
  statement: string;
  /** entity id the claim sits against */
  entity: string;
  status: "debated" | "debunked";
  reasoning: string;
}

export interface AtlasCase {
  id: string;
  title: string;
  topic: string;
  status: "Awaiting Evidence" | "In Review" | "Decided" | "Closed";
  opened: string; // ISO date
  summary: string;
  decision?: string;
  dissent?: string;
}

export interface Correction {
  id: string;
  date: string;
  entity: string; // entity id
  was: string;
  now: string;
  note?: string;
}

export interface Campaign {
  id: string;
  title: string;
  blurb: string;
  /** entity ids highlighted by the campaign */
  entries: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  body: string;
}

export interface NewsletterEdition {
  id: string;
  date: string;
  title: string;
  summary: string;
  highlights: string[];
}

export interface Community {
  id: string;
  name: string;
  blurb: string;
  members: number;
}

export interface ForumReply {
  author: string;
  when: string;
  body: string;
}

export interface ForumThread {
  id: string;
  title: string;
  author: string;
  when: string;
  tags: string[];
  replies: ForumReply[];
}

/** Calendar observance for the "Today" page. monthDay = "MM-DD" */
export interface Observance {
  monthDay: string;
  year?: number;
  title: string;
  entity?: string;
  blurb: string;
}
