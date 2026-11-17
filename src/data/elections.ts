import type { ElectionYear, PartyRow } from "@/lib/atlas";

// Lok Sabha results. 2024 figures are from the Election Commission's declared
// results (as published in the ECI/Wikipedia consolidated tables); 2014 and 2019
// figures are the officially declared seat counts and vote shares.

const e2024: PartyRow[] = [
  { abbr: "BJP", name: "Bharatiya Janata Party", alliance: "NDA", seats: 240, voteShare: 36.56 },
  { abbr: "INC", name: "Indian National Congress", alliance: "INDIA", seats: 99, voteShare: 21.19 },
  { abbr: "SP", name: "Samajwadi Party", alliance: "INDIA", seats: 37, voteShare: 4.58 },
  { abbr: "AITC", name: "All India Trinamool Congress", alliance: "INDIA", seats: 29, voteShare: 4.37 },
  { abbr: "DMK", name: "Dravida Munnetra Kazhagam", alliance: "INDIA", seats: 22, voteShare: 1.82 },
  { abbr: "TDP", name: "Telugu Desam Party", alliance: "NDA", seats: 16, voteShare: 1.98 },
  { abbr: "JD(U)", name: "Janata Dal (United)", alliance: "NDA", seats: 12, voteShare: 1.25 },
  { abbr: "SS", name: "Shiv Sena", alliance: "NDA", seats: 7, voteShare: 1.15 },
  { abbr: "SS (UBT)", name: "Shiv Sena (Uddhav Balasaheb Thackeray)", alliance: "INDIA", seats: 9, voteShare: 1.48 },
  { abbr: "NCP-SP", name: "NCP (Sharadchandra Pawar)", alliance: "INDIA", seats: 8, voteShare: 0.92 },
  { abbr: "LJP (RV)", name: "Lok Janshakti Party (Ram Vilas)", alliance: "NDA", seats: 5, voteShare: 0.44 },
  { abbr: "CPI(M)", name: "Communist Party of India (Marxist)", alliance: "INDIA", seats: 4, voteShare: 1.76 },
  { abbr: "YSRCP", name: "YSR Congress Party", alliance: "OTH", seats: 4, voteShare: 2.06 },
  { abbr: "RJD", name: "Rashtriya Janata Dal", alliance: "INDIA", seats: 4, voteShare: 1.57 },
  { abbr: "AAP", name: "Aam Aadmi Party", alliance: "INDIA", seats: 3, voteShare: 1.11 },
  { abbr: "JMM", name: "Jharkhand Mukti Morcha", alliance: "INDIA", seats: 3, voteShare: 0.41 },
  { abbr: "IUML", name: "Indian Union Muslim League", alliance: "INDIA", seats: 3, voteShare: 0.27 },
  { abbr: "CPI", name: "Communist Party of India", alliance: "INDIA", seats: 2, voteShare: 0.49 },
  { abbr: "CPI(ML)L", name: "CPI (Marxist-Leninist) Liberation", alliance: "INDIA", seats: 2, voteShare: 0.27 },
  { abbr: "JKNC", name: "J&K National Conference", alliance: "INDIA", seats: 2, voteShare: 0.18 },
  { abbr: "VCK", name: "Viduthalai Chiruthaigal Katchi", alliance: "INDIA", seats: 2, voteShare: 0.15 },
  { abbr: "JD(S)", name: "Janata Dal (Secular)", alliance: "NDA", seats: 2, voteShare: 0.34 },
  { abbr: "JSP", name: "Jana Sena Party", alliance: "NDA", seats: 2, voteShare: 0.23 },
  { abbr: "RLD", name: "Rashtriya Lok Dal", alliance: "NDA", seats: 2, voteShare: 0.14 },
  { abbr: "NCP", name: "Nationalist Congress Party", alliance: "NDA", seats: 1, voteShare: 0.32 },
  { abbr: "AGP", name: "Asom Gana Parishad", alliance: "NDA", seats: 1, voteShare: 0.2 },
  { abbr: "AD(S)", name: "Apna Dal (Soneylal)", alliance: "NDA", seats: 1, voteShare: 0.13 },
  { abbr: "HAM", name: "Hindustani Awam Morcha", alliance: "NDA", seats: 1, voteShare: 0.08 },
  { abbr: "UPPL", name: "United People's Party Liberal", alliance: "NDA", seats: 1, voteShare: 0.08 },
  { abbr: "AJSU", name: "All Jharkhand Students Union", alliance: "NDA", seats: 1, voteShare: 0.07 },
  { abbr: "SKM", name: "Sikkim Krantikari Morcha", alliance: "NDA", seats: 1, voteShare: 0.03 },
  { abbr: "BSP", name: "Bahujan Samaj Party", alliance: "OTH", seats: 0, voteShare: 2.04 },
  { abbr: "BRS", name: "Bharat Rashtra Samithi", alliance: "OTH", seats: 0, voteShare: 0.57 },
  { abbr: "BJD", name: "Biju Janata Dal", alliance: "OTH", seats: 0, voteShare: 1.46 },
  { abbr: "AIADMK", name: "All India Anna Dravida Munnetra Kazhagam", alliance: "OTH", seats: 0, voteShare: 1.39 },
  { abbr: "SAD", name: "Shiromani Akali Dal", alliance: "OTH", seats: 1, voteShare: 0.28 },
  { abbr: "AIMIM", name: "All India Majlis-e-Ittehadul Muslimeen", alliance: "OTH", seats: 1, voteShare: 0.22 },
  { abbr: "ASP(KR)", name: "Aazad Samaj Party (Kanshi Ram)", alliance: "OTH", seats: 1, voteShare: 0.11 },
  { abbr: "VOPP", name: "Voice of the People Party", alliance: "OTH", seats: 1, voteShare: 0.09 },
  { abbr: "ZPM", name: "Zoram People's Movement", alliance: "OTH", seats: 1, voteShare: 0.03 },
  { abbr: "IND", name: "Independents", alliance: "OTH", seats: 7 },
];

const e2019: PartyRow[] = [
  { abbr: "BJP", name: "Bharatiya Janata Party", alliance: "NDA", seats: 303, voteShare: 37.36 },
  { abbr: "INC", name: "Indian National Congress", alliance: "INDIA", seats: 52, voteShare: 19.49 },
  { abbr: "DMK", name: "Dravida Munnetra Kazhagam", alliance: "INDIA", seats: 23 },
  { abbr: "AITC", name: "All India Trinamool Congress", alliance: "INDIA", seats: 22 },
  { abbr: "YSRCP", name: "YSR Congress Party", alliance: "OTH", seats: 25 },
  { abbr: "SS", name: "Shiv Sena", alliance: "NDA", seats: 18 },
  { abbr: "JD(U)", name: "Janata Dal (United)", alliance: "NDA", seats: 16 },
  { abbr: "BJD", name: "Biju Janata Dal", alliance: "OTH", seats: 12 },
  { abbr: "BSP", name: "Bahujan Samaj Party", alliance: "OTH", seats: 10 },
  { abbr: "BRS", name: "Bharat Rashtra Samithi (then TRS)", alliance: "OTH", seats: 9 },
  { abbr: "SP", name: "Samajwadi Party", alliance: "INDIA", seats: 5 },
  { abbr: "CPI(M)", name: "Communist Party of India (Marxist)", alliance: "INDIA", seats: 3 },
  { abbr: "TDP", name: "Telugu Desam Party", alliance: "OTH", seats: 3 },
  { abbr: "NCP", name: "Nationalist Congress Party", alliance: "INDIA", seats: 1 },
  { abbr: "RJD", name: "Rashtriya Janata Dal", alliance: "INDIA", seats: 0 },
  { abbr: "IND", name: "Independents & others", alliance: "OTH", seats: 37 },
];

const e2014: PartyRow[] = [
  { abbr: "BJP", name: "Bharatiya Janata Party", alliance: "NDA", seats: 282, voteShare: 31.0 },
  { abbr: "INC", name: "Indian National Congress", alliance: "INDIA", seats: 44, voteShare: 19.31 },
  { abbr: "AIADMK", name: "All India Anna Dravida Munnetra Kazhagam", alliance: "OTH", seats: 37 },
  { abbr: "AITC", name: "All India Trinamool Congress", alliance: "INDIA", seats: 34 },
  { abbr: "SP", name: "Samajwadi Party", alliance: "INDIA", seats: 22 },
  { abbr: "BJD", name: "Biju Janata Dal", alliance: "OTH", seats: 20 },
  { abbr: "SS", name: "Shiv Sena", alliance: "NDA", seats: 18 },
  { abbr: "TDP", name: "Telugu Desam Party", alliance: "NDA", seats: 16 },
  { abbr: "BRS", name: "Bharat Rashtra Samithi (then TRS)", alliance: "OTH", seats: 11 },
  { abbr: "CPI(M)", name: "Communist Party of India (Marxist)", alliance: "INDIA", seats: 9 },
  { abbr: "YSRCP", name: "YSR Congress Party", alliance: "OTH", seats: 9 },
  { abbr: "LJP (RV)", name: "Lok Janshakti Party", alliance: "NDA", seats: 6 },
  { abbr: "AAP", name: "Aam Aadmi Party", alliance: "INDIA", seats: 4 },
  { abbr: "IND", name: "Independents & others", alliance: "OTH", seats: 54 },
];

export const ELECTIONS: ElectionYear[] = [
  {
    year: 2024,
    turnout: "65.79%",
    nda: 293,
    india: 234,
    others: 16,
    winner: "BJP 240 — coalition government",
    pm: "Narendra Modi (3rd term)",
    summary:
      "The 18th Lok Sabha. BJP fell to 240 and lost its single-party majority; the NDA crossed the line only with TDP and JD(U) support. The INDIA bloc rebounded to 234 with big gains in UP, Maharashtra and Tamil Nadu — a return to genuine coalition politics at the Centre.",
    parties: e2024,
  },
  {
    year: 2019,
    turnout: "67.4%",
    nda: 352,
    india: 91,
    others: 100,
    winner: "BJP 303 — single-party majority",
    pm: "Narendra Modi (2nd term)",
    summary:
      "The 17th Lok Sabha delivered the BJP's second landslide: 303 seats and the largest vote share since 1984 (37.36%). The Congress was reduced to 52 — short of even the official Leader of Opposition threshold (10% of seats).",
    parties: e2019,
  },
  {
    year: 2014,
    turnout: "66.44%",
    nda: 336,
    india: 59,
    others: 148,
    winner: "BJP 282 — first single-party majority since 1984",
    pm: "Narendra Modi (1st term)",
    summary:
      "The 16th Lok Sabha ended coalition-era drift: the BJP won a single-party majority for the first time in 30 years, the Congress fell to 44, and a new national two-front pattern crystallised around the NDA.",
    parties: e2014,
  },
];

// State-wise alliance totals for 2024 (verified sum: 293 + 234 + 16 = 543).
// Consumed by the Map view and the Elections state table.
export const STATE_LS_2024_TOTALS = { nda: 293, india: 234, others: 16 };
