// Milestones of Indian political history, 1947-2026. Facts only. Filters: "foundation" | "democracy" | "turning-points" | "recent".

export type TimelineEra = "foundation" | "democracy" | "turning-points" | "recent";

export interface TimelineEvent {
  year: number;
  date: string;
  era: TimelineEra;
  title: string;
  detail: string;
}

export const TIMELINE: TimelineEvent[] = [
  { year: 1950, date: "26 Jan 1950", era: "foundation", title: "The Constitution comes into force", detail: "The Constituent Assembly's draft — 395 Articles, 8 Schedules, adopted on 26 Nov 1949 — becomes law, creating the Republic of India." },
  { year: 1952, date: "1951-52", era: "foundation", title: "First general election", detail: "Universal adult franchise for 173 million voters; the Congress wins 364 of 489 Lok Sabha seats. Sukumar Sen becomes India's first Chief Election Commissioner." },
  { year: 1956, date: "1 Nov 1956", era: "foundation", title: "States Reorganisation Act", detail: "States redrawn on linguistic lines after the Potti Sriramulu fast and the Fazl Ali Commission; the 7th Amendment restructures the map." },
  { year: 1962, date: "1962", era: "foundation", title: "Third general election", detail: "Nehru's third consecutive majority; the year of the India-China war and the beginning of serious parliamentary scrutiny of defence policy." },
  { year: 1967, date: "1967", era: "turning-points", title: "The first non-Congress state governments", detail: "DMK wins Tamil Nadu — the first non-Congress state government; coalitions appear in several states, breaking single-party dominance." },
  { year: 1969, date: "1969", era: "turning-points", title: "First split in the Congress", detail: "The party divides over presidential candidacy and leadership; Indira Gandhi's Congress (R) versus the Organisation Congress reshapes national politics." },
  { year: 1971, date: "1971", era: "turning-points", title: "'Garibi Hatao' mandate", detail: "Indira Gandhi wins 352 Lok Sabha seats; the war that follows creates Bangladesh and cements Indian strategic primacy in South Asia." },
  { year: 1973, date: "24 Apr 1973", era: "turning-points", title: "Kesavananda Bharati judgment", detail: "A 13-judge bench evolves the Basic Structure doctrine — Parliament's amendment power (Article 368) cannot destroy the Constitution's core identity." },
  { year: 1975, date: "25 Jun 1975", era: "turning-points", title: "The Emergency", detail: "Article 352 is invoked amid the JP movement and the Allahabad High Court disqualification of Indira Gandhi; elections are postponed and fundamental rights curtailed." },
  { year: 1977, date: "Mar 1977", era: "turning-points", title: "Janata Party's victory", detail: "The first-ever defeat of the Congress at the Centre. The 44th Amendment (1978) later makes the Emergency nearly impossible to repeat." },
  { year: 1984, date: "Dec 1984", era: "democracy", title: "Rajiv Gandhi's 404-seat landslide", detail: "The largest Lok Sabha majority ever, after Indira Gandhi's assassination; the 52nd Amendment (1985) introduces the anti-defection law." },
  { year: 1989, date: "Dec 1989", era: "turning-points", title: "V.P. Singh and Mandal", detail: "A National Front government takes office; the implementation of the Mandal Commission report (27% OBC reservation) transforms India's caste politics." },
  { year: 1991, date: "1991", era: "turning-points", title: "P.V. Narasimha Rao and economic reform", detail: "A minority Congress government launches structural liberalisation while managing two First-Information impeachment-era crises — polity meets political economy." },
  { year: 1992, date: "Dec 1992", era: "turning-points", title: "Babri Masjid demolition; 73rd and 74th Amendments", detail: "A defining constitutional crisis is followed, in the same month, by the empowerment of panchayats and municipalities — local democracy becomes constitutional." },
  { year: 1993, date: "1993", era: "democracy", title: "Panchayati Raj takes effect", detail: "Three-tier panchayats with reservations for SCs, STs and women (not less than one-third) go live across the states." },
  { year: 1998, date: "1998", era: "democracy", title: "First NDA government; Pokhran-II", detail: "Atal Bihari Vajpayee's coalition begins the NDA era; India conducts nuclear tests and the coalition's National Agenda for Governance sets a new cooperative federalism tone." },
  { year: 1999, date: "Apr 1999", era: "turning-points", title: "Government falls by one vote", detail: "The Vajpayee government loses a confidence motion 270-268 — the narrowest parliamentary defeat in history — before returning to power later that year." },
  { year: 2000, date: "Nov 2000", era: "foundation", title: "Three new states", detail: "Chhattisgarh, Uttarakhand and Jharkhand are created — the most recent wave of state reorganisation under Articles 3-4." },
  { year: 2004, date: "2004", era: "democracy", title: "UPA-1 and coalition minimum programme", detail: "The Congress-led UPA forms government supported by the Left; the Common Minimum Programme and the Right to Information Act (2005) redefine citizen-state relations." },
  { year: 2009, date: "2009", era: "democracy", title: "UPA-2", detail: "The UPA returns without Left support; Manmohan Singh becomes the first PM since Nehru to complete two full terms (2014)." },
  { year: 2010, date: "2010", era: "democracy", title: "Right to Education Act", detail: "Gives effect to Article 21A added by the 86th Amendment (2002) — free and compulsory education for ages 6-14." },
  { year: 2013, date: "Sep 2013", era: "recent", title: "Lokpal and Lokayuktas Act", detail: "The anti-corruption movement produces a statutory Lokpal; the Aam Aadmi Party, born of the same movement, contests its first Delhi election months later." },
  { year: 2014, date: "May 2014", era: "recent", title: "Single-party majority returns", detail: "BJP wins 282 seats — the first single-party majority since 1984 — beginning the NDA's decade-long centre-right run." },
  { year: 2015, date: "2015", era: "recent", title: "100th Amendment; Land Boundary Agreement", detail: "Constitutional endorsement of the India-Bangladesh Land Boundary Agreement — a rare example of territory exchange by consent." },
  { year: 2016, date: "Jul 2016", era: "recent", title: "101st Amendment and GST", detail: "The Goods and Services Tax and the GST Council (Article 279A) create a new model of cooperative fiscal federalism." },
  { year: 2019, date: "May-Aug 2019", era: "recent", title: "Second landslide; EWS reservation; Article 370", detail: "BJP returns with 303 seats. The 103rd Amendment (10% EWS quota) is upheld in 2022; Article 370 is abrogated in August and the state is reorganised." },
  { year: 2020, date: "2020", era: "recent", title: "Farm laws and pandemic-era governance", detail: "Three farm Acts pass amid controversy; the Supreme Court's Madhyamam Broadcasting and other cases test emergency-style executive power." },
  { year: 2022, date: "Jul 2022", era: "recent", title: "Droupadi Murmu becomes President", detail: "The 15th President of India — the first tribal woman to hold the office." },
  { year: 2023, date: "Sep 2023", era: "recent", title: "106th Amendment — women's reservation", detail: "One-third of Lok Sabha and Assembly seats reserved for women, tied to delimitation after the next census. New Parliament building inaugurated." },
  { year: 2024, date: "Jun 2024", era: "recent", title: "Coalition government returns", detail: "BJP wins 240 and needs allies for a majority — the NDA governs at 293. Rahul Gandhi becomes Leader of the Opposition; the 18th Lok Sabha convenes." },
  { year: 2025, date: "Feb-Nov 2025", era: "recent", title: "President's Rule in Manipur; Bihar's landslide", detail: "Manipur goes under Article 356 in February after ethnic violence; the NDA sweeps Bihar in November — 202 of 243 — and Nitish Kumar takes his tenth oath." },
  { year: 2026, date: "Feb 2026", era: "recent", title: "Manipur's assembly revived", detail: "President's Rule is revoked and the suspended-assembly Legislature elects Y. Khemchand Singh as Chief Minister — a rare post-Emergency Article 356 revival." },
  { year: 2026, date: "Apr-May 2026", era: "recent", title: "The 2026 state verdicts", detail: "TVK storms Tamil Nadu (108 seats, Vijay as CM); West Bengal elects its first BJP government; Kerala's UDF sweeps 102 of 140; Assam's NDA retains 102 of 126." },
];
