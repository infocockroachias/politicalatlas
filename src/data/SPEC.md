# Political Atlas — Data Authoring Specification

You are authoring local TypeScript data tables for a political-science atlas
branded by **Approaches to IAS** (approachestoias.com). Everything runs on the
frontend: there is no API, no backend, no database — only these data files.

Read `src/data/types.ts` first: it is the exact TypeScript contract you must
compile against.

## The five rules

1. **Original prose only.** Every sentence you write must be your own. Never
   copy sentences from Wikipedia, Britannica, or any website. Facts are free;
   wording is not. Write short, factual, encyclopedic prose.
2. **Settled facts only.** Record constitutional structure, founding dates,
   institutional membership, treaty dates, and historically settled events.
   **Never name current officeholders** — use office titles ("President",
   "Prime Minister", "Chancellor"). Historical officeholders are fine when the
   history is settled (e.g. "First Prime Minister: Jawaharlal Nehru").
   If you are not sure of a date or value, omit the fact entirely.
3. **No exam content.** The atlas is a general reference. Never mention
   exams, syllabi, prelims, mains, UPSC, study tips or preparation.
4. **No invented values.** Better a thinner entry than a wrong one.
5. **British English.** Neutral encyclopedic voice. No advocacy, no
   "obviously", no editorialising; contested matters are recorded as disputed
   (that is handled by the editorial layer, not by you).

## Entity shape

```ts
import type { Entity } from "./types";

export const countriesAsia: Entity[] = [
  {
    id: "japan",
    kind: "country",
    name: "Japan",
    status: "verified",            // "verified" | "reviewed" | "developing"
    lead:
      "Japan is a unitary parliamentary constitutional monarchy in East Asia. [[meiji-restoration]] recast the old samurai order into a modern centralised state, and the 1947 constitution — drafted under Allied occupation — renounces war and reposes executive trust in a [[parliamentary-system]] under an emperor who \"shall not possess powers related to government\".",
    facts: [
      { label: "Founding Year", value: "660 BCE (traditional); 1947 (present constitution)", attestation: "well-attested", note: "The present constitutional order dates from the post-war constitution in force on 3 May 1947." },
      { label: "Capital", value: "Tokyo" },
      { label: "Head of State", value: "Emperor", attestation: "well-attested", note: "A ceremonial head of state under the present constitution." },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested" },
      { label: "Legislature", value: "Bicameral", note: "The Diet: a House of Representatives and a House of Councillors." },
      { label: "Electoral System", value: "Parallel voting", note: "Mixed member: single-member districts plus proportional party lists." },
    ],
    extras: {
      capital: "Tokyo",
      foundingYear: 1947,
      headOfState: "Emperor",
      headOfGovernment: "Prime Minister",
      legislature: "Bicameral",
      electoralSystem: "Parallel voting",
      freedomStatus: "Free",
      democracyBand: "Full democracy",
      foundingEra: "Ancient",
      governmentType: "Unitary parliamentary constitutional monarchy",
      worldRegion: "East Asia",
    },
    relations: [
      { to: "meiji-restoration", kind: "shaped", note: "The restoration built the modern Japanese state." },
      { to: "parliamentary-system", kind: "exemplifies" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Japan'", tier: 1 },
      { work: "CIA World Factbook archive — Japan", tier: 2 },
    ],
    history: [
      {
        year: 1947,
        headline: "Post-war constitutional democracy",
        lead: "The new constitution took effect under Allied occupation.",
        facts: [
          { label: "Head of State", value: "Emperor (ceremonial)" },
          { label: "Sovereignty", value: "Resting with the people, Article 1" },
        ],
      },
    ],
    addedOn: "2026-10-14",
  },
];
```

### Notes on the shape

- `lead` — 2–5 sentences. You may embed cross-links with `[[entity-id]]`
  markup (only ids that exist in the registry below). 1–3 links per lead is
  ideal; never more than 4.
- `facts` — 4–8 facts for most kinds; countries use the six standard labels
  shown above, in that order: **Founding Year, Capital, Head of State, Head of
  Government, Legislature, Electoral System**. Keep `extras` fields in sync
  with the matching facts (same values).
- `extras.freedomStatus` — use exactly "Free", "Partly Free" or "Not Free".
  `extras.democracyBand` — exactly one of "Full democracy", "Flawed
  democracy", "Hybrid regime", "Authoritarian regime". These are coarse,
  widely used classifications; assign them from each country's well-known
  general standing, and keep them conservative.
- `extras.foundingEra` — exactly one of "Ancient", "Medieval", "Early modern",
  "19th century", "20th century", "21st century" (use the era of the present
  state's founding, not of ancient roots).
- `extras.worldRegion` — short region name: e.g. "East Asia", "South Asia",
  "Southeast Asia", "Central Asia", "Middle East", "Western Europe", "Northern
  Europe", "Southern Europe", "Eastern Europe", "North America", "South
  America", "West Africa", "East Africa", "North Africa", "Southern Africa",
  "Oceania".
- `relations` — 3–6 per entry; `to` must be an id from the registry. Kinds:
  influenced, influenced-by, produced, governs, founded, led, member-of,
  participant-in, precursor-of, spawned, exemplifies, uses, contrasts-with,
  cited-by, shaped, established, part-of.
- `sources` — 2–4 real public reference works, e.g. "Encyclopædia Britannica —
  'France'" (tier 1), "CIA World Factbook archive — France" (tier 2), "Official
  text: Constitution of France" (tier 1). Tier 1 = scholarly/canonical or
  official text; tier 2 = reputable secondary reference; tier 3 = news of
  record.
- `history` — optional; for countries give 1–4 snapshots of how the record
  looked at a past year (constitutional moments: founding, regime change,
  adoption of the present constitution). Do not include living-officeholder
  names.
- `addedOn` — ISO date between 2026-10-01 and 2026-11-10; stagger them.
- `status` — give "verified" to major, uncontroversial entries; "reviewed" to
  most; "developing" to a few thinner ones.

## Registry — ids already assigned

These are the only valid `to` targets and `[[...]]` links. Do not invent ids.

**Countries (56)** — india (authored separately, do not write it);
asia: china, japan, pakistan, bangladesh, sri-lanka, nepal, bhutan, myanmar,
thailand, vietnam, indonesia, malaysia, singapore, philippines, south-korea,
north-korea, afghanistan, iran, saudi-arabia, israel, turkey, kazakhstan;
europe: united-kingdom, france, germany, italy, spain, portugal, netherlands,
belgium, switzerland, sweden, norway, denmark, poland, russia, ukraine, greece;
americas/africa/oceania: united-states, canada, mexico, brazil, argentina,
chile, colombia, cuba, nigeria, south-africa, kenya, ghana, egypt, ethiopia,
morocco, australia, new-zealand.

**Ideologies (28)** — liberalism, classical-liberalism, conservatism,
socialism, communism, marxism, marxism-leninism, maoism, social-democracy,
democratic-socialism, fascism, nazism, nationalism, anarchism, libertarianism,
populism, green-politics, feminism, pan-africanism, pan-arabism, zionism,
gandhism, secularism, multiculturalism, neoliberalism, mercantilism,
distributism, syndicalism.

**Concepts (14)** — sovereignty, popular-sovereignty, legitimacy,
separation-of-powers, rule-of-law, social-contract, self-determination,
mandate-of-heaven, divine-right-of-kings, shura, consociationalism,
civil-liberties, representation, republicanism.

**Systems of government (12)** — parliamentary-system, presidential-system,
semi-presidential-system, constitutional-monarchy, absolute-monarchy,
one-party-state, military-dictatorship, theocracy, federal-republic,
unitary-republic, direct-democracy, directorial-system.

**Mechanisms (22)** — judicial-review, universal-suffrage,
proportional-representation, first-past-the-post, single-transferable-vote,
party-list-pr, ranked-choice-voting, referendum, citizens-initiative,
recall-election, bicameralism, unicameralism, impeachment,
constitutional-amendment, head-of-state-veto, no-confidence-motion,
coalition-government, emergency-powers, devolution, habeas-corpus,
electoral-college, compulsory-voting.

**Policies (12)** — foreign-policy, trade-policy, immigration-policy,
public-health-policy, education-policy, environmental-policy, energy-policy,
defence-policy, fiscal-policy, monetary-policy, housing-policy,
data-governance-policy.

**Documents (26)** — code-of-hammurabi, magna-carta, petition-of-right,
english-bill-of-rights, declaration-of-independence, us-constitution,
us-bill-of-rights, federalist-papers, rights-of-man, french-constitution-1791,
napoleonic-code, congress-of-vienna-act, communist-manifesto,
balfour-declaration, treaty-of-versailles, weimar-constitution, un-charter,
universal-declaration-of-human-rights, geneva-conventions,
constitution-of-india, european-convention-on-human-rights, treaty-of-rome,
civil-rights-act-1964, helsinki-final-act, constitution-of-south-africa,
lisbon-treaty.

**Institutions (20)** — united-nations, un-security-council,
un-general-assembly, international-court-of-justice, european-union,
european-parliament, european-commission, nato, asean, african-union,
international-monetary-fund, world-bank, world-trade-organization,
international-criminal-court, international-labour-organization,
world-health-organization, commonwealth-of-nations,
organization-of-american-states, saarc, interpol.

**Figures (44)** — confucius, plato, aristotle, cicero, kautilya, ashoka,
al-farabi, ibn-khaldun, machiavelli, hobbes, john-locke, montesquieu, rousseau,
edmund-burke, thomas-paine, immanuel-kant, james-madison, alexander-hamilton,
abraham-lincoln, otto-von-bismarck, karl-marx, friedrich-engels,
vladimir-lenin, mahatma-gandhi, jawaharlal-nehru, br-ambedkar,
winston-churchill, franklin-d-roosevelt, charles-de-gaulle, mao-zedong,
ho-chi-minh, kwame-nkrumah, nelson-mandela, martin-luther-king-jr,
gamal-abdel-nasser, indira-gandhi, deng-xiaoping, margaret-thatcher,
mikhail-gorbachev, lee-kuan-yew, angela-merkel, sirimavo-bandaranaike,
vaclav-havel, kofi-annan.

**Events (18)** — cleisthenes-reforms, glorious-revolution,
american-revolution, french-revolution, haitian-revolution,
congress-of-vienna, revolutions-of-1848, meiji-restoration, world-war-i,
russian-revolution, indian-independence, chinese-communist-revolution,
cuban-missile-crisis, iranian-revolution, fall-of-berlin-wall,
dissolution-of-ussr, end-of-apartheid, arab-spring.

**Movements (14)** — abolitionism, chartism, suffrage-movement, satyagraha,
indian-independence-movement, labour-movement, us-civil-rights-movement,
anti-apartheid-movement, solidarity-movement, velvet-revolution,
democracy-movement-1989, environmental-movement, decolonisation-movement,
digital-rights-movement.

## Deliverable

Write your assigned file(s) with `export const <name>: Entity[] = [...]`,
valid TypeScript, no imports except `./types`. Match the exemplar's shape
exactly. Return a one-paragraph summary of what you wrote.
