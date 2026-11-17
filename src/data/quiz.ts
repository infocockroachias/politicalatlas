// Original practice MCQs — written for this atlas, UPSC Prelims style with
// explanations. Answers keyed to the constitutional/statistical facts in the
// other data files.

export interface QuizQuestion {
  id: number;
  topic: "Polity" | "Elections" | "Current affairs";
  question: string;
  options: string[];
  answer: number; // index of correct option
  explanation: string;
}

export const QUIZ: QuizQuestion[] = [
  {
    id: 1, topic: "Polity",
    question: "Which Article of the Constitution provides for the imposition of President's Rule in a state?",
    options: ["Article 352", "Article 356", "Article 360", "Article 365"],
    answer: 1,
    explanation: "Article 356 covers failure of constitutional machinery. Article 352 is a National Emergency, 360 is Financial Emergency, and 365 adds that a state's non-compliance with Union directions may invite action under 356.",
  },
  {
    id: 2, topic: "Polity",
    question: "The Basic Structure doctrine was evolved by the Supreme Court in which case?",
    options: ["Golaknath v. State of Punjab (1967)", "Kesavananda Bharati v. State of Kerala (1973)", "Minerva Mills v. Union of India (1980)", "Shankari Prasad v. Union of India (1951)"],
    answer: 1,
    explanation: "Kesavananda Bharati (1973), by a 13-judge bench, held that Parliament's amending power under Article 368 cannot destroy the Constitution's basic structure. Minerva Mills (1980) later applied and refined it.",
  },
  {
    id: 3, topic: "Polity",
    question: "How many languages are listed in the Eighth Schedule of the Constitution?",
    options: ["18", "20", "22", "24"],
    answer: 2,
    explanation: "The 21st Amendment (1967) took the count to 19, the 71st (1992) to 18, and the 92nd (2003) to the current 22. English is not in the Eighth Schedule.",
  },
  {
    id: 4, topic: "Polity",
    question: "Which amendment lowered the voting age in Lok Sabha and Assembly elections from 21 to 18?",
    options: ["52nd Amendment", "61st Amendment", "69th Amendment", "86th Amendment"],
    answer: 1,
    explanation: "The 61st Amendment (1988) amended Article 326 to lower the voting age to 18. The 52nd added anti-defection; the 69th gave Delhi its Assembly (239AA); the 86th added the right to education.",
  },
  {
    id: 5, topic: "Polity",
    question: "Under which provision was the Delhi Assembly and Council of Ministers created?",
    options: ["Article 239", "Article 239A", "Article 239AA", "Article 243A"],
    answer: 2,
    explanation: "Article 239AA, inserted by the 69th Amendment (1991), created the legislative assembly and council of ministers for the NCT of Delhi, with exclusions on police, public order and land.",
  },
  {
    id: 6, topic: "Polity",
    question: "A Money Bill is certified by the Speaker under which Article, and which House must return it within 14 days?",
    options: ["Article 109; Rajya Sabha", "Article 110; Rajya Sabha", "Article 110; Lok Sabha", "Article 112; Rajya Sabha"],
    answer: 1,
    explanation: "Article 110 defines the Money Bill; only the Lok Sabha may introduce it, and the Rajya Sabha must return it within 14 days with or without recommendations (Article 109).",
  },
  {
    id: 7, topic: "Elections",
    question: "In the 2024 Lok Sabha election, which party won the second-largest number of seats?",
    options: ["Samajwadi Party (37)", "Indian National Congress (99)", "Trinamool Congress (29)", "Telugu Desam Party (16)"],
    answer: 1,
    explanation: "The Congress won 99 seats (21.19% votes) — the second-largest party and enough to claim the Leader of the Opposition post. SP (37) and TMC (29) followed, with TDP (16) leading the NDA's allies.",
  },
  {
    id: 8, topic: "Elections",
    question: "What was the Lok Sabha seat split for the alliances in 2024?",
    options: ["NDA 272 · INDIA 242 · Others 29", "NDA 293 · INDIA 234 · Others 16", "NDA 303 · INDIA 52 · Others 188", "NDA 282 · INDIA 44 · Others 217"],
    answer: 1,
    explanation: "NDA 293 (BJP 240), INDIA 234 (INC 99), Others 16 — the numbers sum exactly to 543. It was the first time since 1989 that no single party held a majority.",
  },
  {
    id: 9, topic: "Elections",
    question: "Which state sent the largest number of opposition (INDIA bloc) members to the 2024 Lok Sabha?",
    options: ["Maharashtra", "West Bengal", "Tamil Nadu", "Uttar Pradesh"],
    answer: 3,
    explanation: "Uttar Pradesh: SP 37 + Congress 6 = 43 of 80 for the INDIA bloc, against 36 for the NDA. Tamil Nadu also went 39-0 to the DMK front, but UP's delegation is the largest single-state opposition gain.",
  },
  {
    id: 10, topic: "Elections",
    question: "The first general election of the Republic (1951-52) was conducted under the supervision of which Chief Election Commissioner?",
    options: ["K.V.K. Sundaram", "Sukumar Sen", "S.P. Sen Verma", "T. Swaminathan"],
    answer: 1,
    explanation: "Sukumar Sen ran India's first two general elections (1951-52 and 1957) — an administrative feat of universal franchise for 173 million voters.",
  },
  {
    id: 11, topic: "Current affairs",
    question: "Who became the Chief Minister of Tamil Nadu in May 2026, ending six decades of Dravidian-party rule?",
    options: ["M.K. Stalin", "Edappadi K. Palaniswami", "C. Joseph Vijay", "Anbumani Ramadoss"],
    answer: 2,
    explanation: "TVK founder Joseph Vijay won 108 of 234 seats in the 2026 Assembly election and was sworn in as the state's 22nd Chief Minister on 10 May 2026.",
  },
  {
    id: 12, topic: "Current affairs",
    question: "Which party formed the government in West Bengal for the first time in 2026?",
    options: ["Trinamool Congress", "Bharatiya Janata Party", "Congress-Left alliance", "Independent front"],
    answer: 1,
    explanation: "The BJP won around 206 of 294 seats and Suvendu Adhikari became the state's first BJP Chief Minister, ending the TMC's 2011-2026 run and the Left's 1977-2011 era before it.",
  },
  {
    id: 13, topic: "Current affairs",
    question: "In February 2026, President's Rule was revoked in Manipur and a Chief Minister was elected by the revived Assembly. Who took oath?",
    options: ["N. Biren Singh", "Y. Khemchand Singh", "Nemcha Kipgen", "Losii Dikho"],
    answer: 1,
    explanation: "After Article 356 ran from 13 February 2025, the proclamation was withdrawn on 4 February 2026 and the suspended-assembly House chose BJP MLA Yumnam Khemchand Singh — with two Deputy Chief Ministers — as the 13th CM.",
  },
  {
    id: 14, topic: "Current affairs",
    question: "The November 2025 Bihar election produced which result?",
    options: ["NDA 122 · Mahagathbandhan 121", "NDA 202 · Mahagathbandhan 41", "NDA 160 · Mahagathbandhan 83", "Hung assembly, Nitish Kumar as kingmaker"],
    answer: 1,
    explanation: "The NDA won 202 of 243 seats — among the largest mandates in Bihar's history — and Nitish Kumar took oath as Chief Minister for a record tenth term on 20 November 2025.",
  },
  {
    id: 15, topic: "Current affairs",
    question: "Which front swept the 2026 Kerala Assembly election, and who became Chief Minister?",
    options: ["LDF; Pinarayi Vijayan", "UDF; V.D. Satheesan", "UDF; Ramesh Chennithala", "BJP-led NDA; K. Surendran"],
    answer: 1,
    explanation: "The UDF won 102 of 140 seats (LDF reduced to 35, BJP+ 3) and Congress leader V.D. Satheesan formed the ministry — ending the LDF's decade in power.",
  },
  {
    id: 16, topic: "Polity",
    question: "Which of these bodies is a constitutional body, not merely a statutory or executive creation?",
    options: ["NITI Aayog", "National Human Rights Commission", "Finance Commission", "Central Vigilance Commission"],
    answer: 2,
    explanation: "The Finance Commission is created under Article 280. NITI Aayog (2015) was set up by an executive resolution; the NHRC (1993) and CVC (2003) are statutory bodies.",
  },
  {
    id: 17, topic: "Polity",
    question: "The anti-defection law is contained in which Schedule, and which amendment added it?",
    options: ["Ninth Schedule; 1st Amendment", "Tenth Schedule; 52nd Amendment", "Eleventh Schedule; 73rd Amendment", "Twelfth Schedule; 74th Amendment"],
    answer: 1,
    explanation: "The 52nd Amendment (1985) added the Tenth Schedule. The 91st Amendment (2003) closed the 'split' loophole and capped Council of Ministers at 15% of the House.",
  },
  {
    id: 18, topic: "Elections",
    question: "The power to decide on the disqualification of a legislator under the Tenth Schedule rests with...",
    options: ["The President", "The Election Commission of India", "The Presiding Officer of the House", "The Governor"],
    answer: 2,
    explanation: "The Speaker/Chairman decides, subject to judicial review (Kihoto Hollohan, 1992). The ECI's role is advisory in certain references — not the deciding authority.",
  },
];
