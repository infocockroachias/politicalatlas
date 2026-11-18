import type { Entity } from "./types";

// The flagship country entry. This page also carries the atlas's deepest
// country modules (state map, election explorer, party directory, timeline),
// composed in the entry view when id === "india".

export const countriesIndia: Entity[] = [
  {
    id: "india",
    kind: "country",
    name: "India",
    status: "verified",
    lead:
      "India, formally the Republic of India, is a [[federal-republic]] in South Asia and the world's most populous state, organised since 1950 as a parliamentary [[parliamentary-system|parliamentary democracy]] with a bicameral legislature and a ceremonial president. Independence from British rule on 15 August 1947 produced two years of dominion government before the constitution — drafted by a Constituent Assembly chaired in committee by [[br-ambedkar]] — came into force on 26 January 1950, founding a republic with universal adult franchise from its first election. The atlas keeps the conventional 1947 founding date and narrates the two-year gap to republican constitutional government, as it does for the United States; the republic's constitutional record spans a federal union deepened in 1956 and 2010, an Emergency from 1975 to 1977 whose lesson is recorded in the constitution's own amendment history, market-reform federalism from 1991, and the devolution era since.",
    facts: [
      { label: "Founding Year", value: "1947", attestation: "well-attested", note: "Independence from British rule, the conventional founding date and the national day. The republican constitutional government independence promised took over two years to arrive, reaching practice on 26 January 1950. This entry keeps the conventional 1947 date and narrates the gap." },
      { label: "Capital", value: "New Delhi", attestation: "well-attested" },
      { label: "Head of State", value: "President", attestation: "well-attested", note: "An elected ceremonial head of state chosen by an electoral college of the two houses and the state assemblies." },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested", note: "The council of ministers is collectively responsible to the lower house, the Lok Sabha." },
      { label: "Legislature", value: "Bicameral", note: "Parliament: the Lok Sabha (House of the People), directly elected for five years, and the Rajya Sabha (Council of States), elected by the state legislatures." },
      { label: "Electoral System", value: "First-past-the-post", note: "Single-member constituencies for the Lok Sabha; single transferable vote for the presidency and Rajya Sabha." },
    ],
    extras: {
      capital: "New Delhi",
      foundingYear: 1947,
      headOfState: "President",
      headOfGovernment: "Prime Minister",
      legislature: "Bicameral",
      electoralSystem: "First-past-the-post",
      freedomStatus: "Partly Free",
      democracyBand: "Flawed democracy",
      foundingEra: "20th century",
      governmentType: "Federal parliamentary republic",
      worldRegion: "South Asia",
    },
    relations: [
      { to: "constitution-of-india", kind: "governs" },
      { to: "parliamentary-system", kind: "exemplifies" },
      { to: "federal-republic", kind: "exemplifies" },
      { to: "indian-independence", kind: "founded" },
      { to: "mahatma-gandhi", kind: "influenced-by" },
      { to: "judicial-review", kind: "uses" },
      { to: "first-past-the-post", kind: "uses" },
      { to: "universal-suffrage", kind: "uses", note: "Universal adult franchise from the first general election of 1951–52." },
    ],
    sources: [
      { work: "Official text: Constitution of India (1950, as amended)", tier: 1 },
      { work: "Encyclopædia Britannica — 'India'", tier: 1 },
      { work: "Granville Austin — The Indian Constitution: Cornerstone of a Nation", tier: 1 },
      { work: "Election Commission of India — declared results archive", tier: 2 },
    ],
    history: [
      {
        year: 1950,
        headline: "The republic founded",
        lead: "The constitution came into force on 26 January 1950, converting the dominion into a sovereign democratic republic.",
        facts: [
          { label: "Head of State", value: "President (elected, ceremonial)" },
          { label: "Legislature", value: "Bicameral after 1952; provisional parliament until then" },
          { label: "Franchise", value: "Universal adult franchise from age 21" },
        ],
      },
      {
        year: 1976,
        headline: "The Emergency years",
        lead: "A state of internal emergency proclaimed in June 1975 suspended the normal working of the federal constitution; the 42nd amendment of 1976 centralised powers and rewrote the preamble's description of the republic.",
        facts: [
          { label: "State", value: "Internal emergency in force" },
          { label: "Amendment", value: "The 42nd (1976) — later partly reversed by the 44th (1978)" },
        ],
      },
      {
        year: 1991,
        headline: "Market-reform federalism",
        lead: "The balance-of-payments crisis opened the reform era: industrial licensing dismantled, trade opened, and coalition politics began its long turn in the union government.",
        facts: [
          { label: "Economy", value: "Liberalisation begun" },
          { label: "Party system", value: "Coalition era opening" },
        ],
      },
      {
        year: 2019,
        headline: "Majoritarian Lok Sabha",
        lead: "The general election returned a single-party majority for the second consecutive time; the state of Jammu and Kashmir's special constitutional status was read down by presidential order and the state was reorganised as union territories.",
        facts: [
          { label: "Constitutional change", value: "Article 370 abrogated; J&K reorganised" },
        ],
      },
      {
        year: 2026,
        headline: "The union at present",
        lead: "The 18th Lok Sabha sits with a National Democratic Alliance majority; state assemblies answer to their own verdicts recorded in the atlas's state map and election tables, as of November 2026.",
        facts: [
          { label: "Legislature", value: "18th Lok Sabha" },
          { label: "Federal composition", value: "28 states and 8 union territories" },
        ],
      },
    ],
    addedOn: "2026-10-01",
  },
];
