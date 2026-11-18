// Category metadata — the atlas's domain map.

import type { EntityKind } from "./types";

export interface CategoryMeta {
  id: string;
  name: string;
  kind: EntityKind;
  /** domain group on the home page */
  group: "Systems & Mechanics" | "Ideas & Texts" | "Events & Movements" | "People & Institutions";
  /** eyebrow label on entry pages */
  kindLabel: string;
  /** what kind of knowledge pages of this category record */
  knowledge: "Practitioner System" | "Reference and Classification" | "Historical Record";
  /** scope paragraph shown on the category page */
  scope: string;
  /** facet keys for the Browse By block */
  browseBy?: { key: string; label: string }[];
}

export const categories: CategoryMeta[] = [
  {
    id: "countries",
    name: "Countries",
    kind: "country",
    group: "Systems & Mechanics",
    kindLabel: "Country",
    knowledge: "Practitioner System",
    scope:
      "This category is the atlas index of country entities: present-day sovereign states described by their system of government, head-of-state arrangements, legislature and electoral system. A historical polity that no longer exists is carried by the Events and Movements categories instead, and purely geographic facts are kept to the minimum this atlas needs for its own tables.",
    browseBy: [
      { key: "worldRegion", label: "World Region" },
      { key: "governmentType", label: "System or Ideology Practised" },
      { key: "headOfState", label: "Head of State Kind" },
      { key: "legislature", label: "Legislature Houses" },
      { key: "electoralSystem", label: "Electoral System" },
      { key: "freedomStatus", label: "Freedom Status" },
      { key: "democracyBand", label: "Democracy Band" },
      { key: "foundingEra", label: "Founding Era" },
      { key: "foundingYear", label: "Founding Year" },
    ],
  },
  {
    id: "systems-of-government",
    name: "Systems of Government",
    kind: "system",
    group: "Systems & Mechanics",
    kindLabel: "System of Government",
    knowledge: "Practitioner System",
    scope:
      "This category records the constitutional forms a state's executive, legislature and head-of-state arrangements can take. Each entry describes one form: how its executive depends on confidence or election, what mechanisms define it, and which countries practice it. Where a country's practice is contested — as between de jure text and de facto operation — the country entry, not this category, carries the dispute.",
  },
  {
    id: "political-mechanisms",
    name: "Political Mechanisms",
    kind: "mechanism",
    group: "Systems & Mechanics",
    kindLabel: "Political Mechanism",
    knowledge: "Reference and Classification",
    scope:
      "This category records the devices constitutions use to arrange and restrain power: voting systems, confidence rules, review powers, amendment procedures and their kin. Mechanisms are recorded by what they do and where they are used; their real-world effects, where scholars dispute them, are recorded as disputed in the atlas's editorial layer.",
  },
  {
    id: "policies",
    name: "Policies",
    kind: "policy",
    group: "Systems & Mechanics",
    kindLabel: "Policy",
    knowledge: "Reference and Classification",
    scope:
      "This category describes the standing policy domains through which governments act — foreign affairs, trade, health, education, energy and the rest. Each entry explains the domain, the instruments governments typically hold, and the tensions that recur, without taking positions on current measures.",
  },
  {
    id: "ideologies",
    name: "Ideologies",
    kind: "ideology",
    group: "Ideas & Texts",
    kindLabel: "Ideology",
    knowledge: "Practitioner System",
    scope:
      "This category records the organised bodies of political doctrine that movements and parties have carried into practice. Entries describe each ideology's core claims, its canonical thinkers, its institutional practice and its historical record — descriptively and without endorsement. Doctrines whose record includes atrocity are described with that record stated plainly.",
  },
  {
    id: "documents",
    name: "Documents",
    kind: "document",
    group: "Ideas & Texts",
    kindLabel: "Document",
    knowledge: "Practitioner System",
    scope:
      "This category holds the founding and governing texts of political order: charters, constitutions, declarations, treaties and statutes. Each entry records when and where the document was adopted, what it established, and its distinctive provisions described in the atlas's own words.",
  },
  {
    id: "political-concepts",
    name: "Political Concepts",
    kind: "concept",
    group: "Ideas & Texts",
    kindLabel: "Political Concept",
    knowledge: "Reference and Classification",
    scope:
      "This category records the concepts political argument is conducted in: sovereignty, legitimacy, rule of law, social contract and their kin. Each entry gives the concept's core claim, its canonical articulations and the classic contests that keep it unsettled.",
  },
  {
    id: "events",
    name: "Events",
    kind: "event",
    group: "Events & Movements",
    kindLabel: "Event",
    knowledge: "Historical Record",
    scope:
      "This category records constitutional and political turning points: revolutions, settlements, crises and transitions. Each entry gives the event's span, principal actors, outcome and institutional legacy, keeping cause-and-effect claims to what the record supports.",
  },
  {
    id: "movements",
    name: "Movements",
    kind: "movement",
    group: "Events & Movements",
    kindLabel: "Movement",
    knowledge: "Historical Record",
    scope:
      "This category records organised political campaigns that changed institutions: abolitionism, suffrage, decolonisation and their successors. Entries describe methods, achievements and leadership as history, and record internal controversies as part of the record.",
  },
  {
    id: "political-figures",
    name: "Political Figures",
    kind: "figure",
    group: "People & Institutions",
    kindLabel: "Political Figure",
    knowledge: "Historical Record",
    scope:
      "This category records political figures — thinkers, founders, heads of government, movement leaders — whose lives settled or shifted how power is arranged. Entries record offices and works with settled dates, and state criticisms plainly where history has settled them. Living figures are recorded only when their offices are matters of settled public record.",
  },
  {
    id: "institutions",
    name: "Institutions",
    kind: "institution",
    group: "People & Institutions",
    kindLabel: "Institution",
    knowledge: "Practitioner System",
    scope:
      "This category records international and supranational institutions: the United Nations system, the European Union, treaty organisations and financial institutions. Each entry describes membership basis, governing organs and core function.",
  },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

export function categoryForKind(kind: EntityKind): CategoryMeta {
  const found = categories.find((c) => c.kind === kind);
  if (!found) throw new Error(`No category for kind: ${kind}`);
  return found;
}
