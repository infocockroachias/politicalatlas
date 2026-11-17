import type { Campaign } from "./types";

export const campaigns: Campaign[] = [
  {
    id: "campaign-1",
    title: "Read the Founding Documents",
    blurb:
      "A slow reading of twelve charters, declarations and constitutions that founded or refounded states, taken one text a fortnight. Each entry pairs the document's story with the argument it still settles or unsettles.",
    entries: [
      "magna-carta",
      "english-bill-of-rights",
      "declaration-of-independence",
      "us-constitution",
      "us-bill-of-rights",
      "rights-of-man",
      "french-constitution-1791",
      "weimar-constitution",
      "constitution-of-india",
      "constitution-of-south-africa",
      "un-charter",
      "universal-declaration-of-human-rights",
    ],
  },
  {
    id: "campaign-2",
    title: "Twelve Systems of Government",
    blurb:
      "One month, twelve systems: from presidential to directorial, each week pairs two entries and the states that exemplify them. The campaign asks where executive power sits and whom it answers to.",
    entries: [
      "presidential-system",
      "parliamentary-system",
      "semi-presidential-system",
      "directorial-system",
      "constitutional-monarchy",
      "absolute-monarchy",
      "theocracy",
      "one-party-state",
      "military-dictatorship",
      "federal-republic",
      "unitary-republic",
      "direct-democracy",
    ],
  },
  {
    id: "campaign-3",
    title: "The Season of Revolutions",
    blurb:
      "Twelve upheavals in twelve weeks, from 1688 to the fall of the Berlin Wall, read for what each started and what each left unfinished. Revolutions are compared as outcomes, not merely as events.",
    entries: [
      "glorious-revolution",
      "american-revolution",
      "french-revolution",
      "haitian-revolution",
      "revolutions-of-1848",
      "meiji-restoration",
      "russian-revolution",
      "chinese-communist-revolution",
      "iranian-revolution",
      "velvet-revolution",
      "fall-of-berlin-wall",
      "end-of-apartheid",
    ],
  },
  {
    id: "campaign-4",
    title: "Institutions That Bind the World",
    blurb:
      "Twelve organisations that stand between states and above them, from the Security Council to the criminal court. Each entry tracks what the institution can compel, and what it can only persuade.",
    entries: [
      "united-nations",
      "un-security-council",
      "un-general-assembly",
      "international-court-of-justice",
      "european-union",
      "nato",
      "asean",
      "african-union",
      "international-monetary-fund",
      "world-bank",
      "world-trade-organization",
      "international-criminal-court",
    ],
  },
];
