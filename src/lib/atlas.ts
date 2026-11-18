// Core types and shared helpers for the Political Atlas.
// All data shown in the app lives in src/data/*.ts — no API calls, no backend.

export type Alliance = "NDA" | "INDIA" | "OTH";

export interface StateEntry {
  id: string;
  name: string;
  short: string; // tile label
  type: "state" | "ut"; // ut = union territory (incl. UTs with legislature)
  capital: string;
  region: "North" | "West" | "Central" | "East" | "South" | "Northeast" | "Islands";
  lsSeats: number;
  grid: { r: number; c: number };
  box: "main" | "ne" | "islands";
  ls2024: { nda: number; india: number; oth: number };
  topParties2024: string;
  assembly: {
    strength: number;
    ruling: string;
    alliance: Alliance;
    cm: string;
    cmSince: string;
    lastElection: string;
  } | null;
  note: string;
}

export interface PartyRow {
  abbr: string;
  name: string;
  alliance: Alliance;
  seats: number;
  voteShare?: number;
}

export interface ElectionYear {
  year: 2014 | 2019 | 2024;
  turnout: string;
  nda: number;
  india: number;
  others: number;
  winner: string;
  pm: string;
  summary: string;
  parties: PartyRow[];
}

export const ALLIANCE_COLORS: Record<Alliance, string> = {
  NDA: "var(--a-nda)",
  INDIA: "var(--a-india)",
  OTH: "var(--a-oth)",
};

export const ALLIANCE_LABEL: Record<Alliance, string> = {
  NDA: "NDA",
  INDIA: "INDIA bloc",
  OTH: "Others",
};

export function dominantAlliance(s: { nda: number; india: number; oth: number }): Alliance {
  if (s.nda >= s.india && s.nda >= s.oth) return "NDA";
  if (s.india >= s.nda && s.india >= s.oth) return "INDIA";
  return "OTH";
}

export function assemblyAlliance(a: StateEntry["assembly"]): Alliance {
  return a ? a.alliance : "OTH";
}

// Party colour chips (muted, semantic — data colours, not decoration)
export const PARTY_COLORS: Record<string, string> = {
  BJP: "var(--p-bjp)",
  INC: "var(--p-inc)",
  SP: "var(--p-sp)",
  AITC: "var(--p-aitc)",
  DMK: "var(--p-dmk)",
  TDP: "var(--p-tdp)",
  "JD(U)": "var(--p-jdu)",
  "SS (UBT)": "var(--p-ssubt)",
  "NCP-SP": "var(--p-ncpsp)",
  SS: "var(--p-ss)",
  NCP: "var(--p-ncpa)",
  YSRCP: "var(--p-ysrcp)",
  "CPI(M)": "var(--p-cpm)",
  "CPI(ML)L": "var(--p-cpi)",
  "AD(S)": "var(--p-ad)",
  JSP: "var(--p-jsp)",
  CPI: "var(--p-cpi)",
  JMM: "var(--p-jmm)",
  AAP: "var(--p-aap)",
  RJD: "var(--p-rjd)",
  "LJP (RV)": "var(--p-ljp)",
  "JD(S)": "var(--p-jds)",
  BSP: "var(--p-bsp)",
  AIMIM: "var(--p-aimim)",
  SAD: "var(--p-sad)",
  IND: "var(--p-ind)",
  TVK: "var(--p-tvk)",
  SKM: "var(--p-skm)",
  ZPM: "var(--p-zpm)",
  VPP: "var(--p-vpp)",
  NPP: "var(--p-npp)",
  JKNC: "var(--p-jknc)",
  AGP: "var(--p-agp)",
  AINRC: "var(--p-ainrc)",
};

export function partyColor(abbr: string): string {
  return PARTY_COLORS[abbr] ?? "var(--p-other)";
}
