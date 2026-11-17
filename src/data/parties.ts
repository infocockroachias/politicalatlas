// Political party directory. Facts only: founding, founders, current national
// footprint. Party symbols are ECI-owned artworks and are deliberately NOT used.

export interface PartyEntry {
  abbr: string;
  name: string;
  status: "National" | "State";
  founded: string;
  founder: string;
  base: string;
  ls2024: number;
  blurb: string;
}

export const NATIONAL_PARTIES: PartyEntry[] = [
  {
    abbr: "BJP", name: "Bharatiya Janata Party", status: "National",
    founded: "1980", founder: "Atal Bihari Vajpayee, L.K. Advani",
    base: "Pan-India", ls2024: 240,
    blurb: "Grew out of the Jana Sangh tradition (1951). Centrist-right, built on Hindutva ideology and a development agenda; ruled nationally since 2014.",
  },
  {
    abbr: "INC", name: "Indian National Congress", status: "National",
    founded: "1885", founder: "Founding session at Bombay (W.C. Bonnerjee, president)",
    base: "Pan-India", ls2024: 99,
    blurb: "The party of the freedom movement and India's oldest political organisation; dominated the first four decades of the Republic and now leads the INDIA bloc.",
  },
  {
    abbr: "BSP", name: "Bahujan Samaj Party", status: "National",
    founded: "1984", founder: "Kanshi Ram",
    base: "Uttar Pradesh", ls2024: 0,
    blurb: "Founded to unite Bahujan communities; Kanshi Ram's social engineering and Mayawati's four UP terms made Dalit politics a central force.",
  },
  {
    abbr: "CPI(M)", name: "Communist Party of India (Marxist)", status: "National",
    founded: "1964", founder: "Split from the CPI (E.M.S. Namboodiripad, Jyoti Basu and others)",
    base: "Kerala, West Bengal (historical), Tripura (historical)", ls2024: 4,
    blurb: "Formed in the CPI's ideological split; ruled West Bengal 1977-2011 and remains a Kerala anchor of the Left Front.",
  },
  {
    abbr: "AAP", name: "Aam Aadmi Party", status: "National",
    founded: "2012", founder: "Arvind Kejriwal",
    base: "Delhi, Punjab", ls2024: 3,
    blurb: "Born of the 2011-12 anti-corruption movement; governed Delhi from 2015 and won Punjab in 2022. Recognised as a national party in 2023.",
  },
  {
    abbr: "NPP", name: "National People's Party", status: "National",
    founded: "2012", founder: "P.A. Sangma",
    base: "Meghalaya, Northeast", ls2024: 0,
    blurb: "The first party from Northeast India to get national-party recognition (2019); leads Meghalaya's MDA coalition under Conrad Sangma.",
  },
];

export const STATE_PARTIES: PartyEntry[] = [
  {
    abbr: "AITC", name: "All India Trinamool Congress", status: "State",
    founded: "1998", founder: "Mamata Banerjee",
    base: "West Bengal", ls2024: 29,
    blurb: "Broke from Congress over alliance politics, ended 34 years of Left rule in 2011, and ruled Bengal until the 2026 verdict.",
  },
  {
    abbr: "DMK", name: "Dravida Munnetra Kazhagam", status: "State",
    founded: "1949", founder: "C.N. Annadurai",
    base: "Tamil Nadu", ls2024: 22,
    blurb: "Grew from the Dravidian movement; led Tamil Nadu for six decades until the 2026 TVK surge changed the state's political map.",
  },
  {
    abbr: "AIADMK", name: "All India Anna Dravida Munnetra Kazhagam", status: "State",
    founded: "1972", founder: "M.G. Ramachandran",
    base: "Tamil Nadu", ls2024: 0,
    blurb: "MGR's breakaway from the DMK; Jayalalithaa's era made it a national heavyweight. Drawn blank in 2024 and swept aside by TVK in 2026.",
  },
  {
    abbr: "TVK", name: "Tamilaga Vettri Kazhagam", status: "State",
    founded: "2024", founder: "Joseph Vijay",
    base: "Tamil Nadu", ls2024: 0,
    blurb: "The film star's party contested its first Assembly election in 2026 and won 108 of 234 seats — the largest debut mandate in Indian state politics.",
  },
  {
    abbr: "TDP", name: "Telugu Desam Party", status: "State",
    founded: "1982", founder: "N.T. Rama Rao",
    base: "Andhra Pradesh", ls2024: 16,
    blurb: "First regional party to lead a national coalition bloc (1989); back at the centre of power as the NDA's second-largest partner after 2024.",
  },
  {
    abbr: "YSRCP", name: "YSR Congress Party", status: "State",
    founded: "2011", founder: "Y.S. Jagan Mohan Reddy",
    base: "Andhra Pradesh", ls2024: 4,
    blurb: "Swept AP in 2019 but lost power to the TDP-led NDA in 2024, retaining only a rump of Lok Sabha seats.",
  },
  {
    abbr: "BRS", name: "Bharat Rashtra Samithi (formerly TRS)", status: "State",
    founded: "2001", founder: "K. Chandrashekar Rao",
    base: "Telangana", ls2024: 0,
    blurb: "Led the Telangana statehood movement and ruled the new state 2014-2023; lost both the Assembly (2023) and every Lok Sabha seat (2024).",
  },
  {
    abbr: "JD(U)", name: "Janata Dal (United)", status: "State",
    founded: "1999 (unified 2003)", founder: "Sharad Yadav (with Nitish Kumar's Samata Party merger)",
    base: "Bihar", ls2024: 12,
    blurb: "The party of Nitish Kumar's ten chief-ministerial terms; its switch of alliances has repeatedly decided who rules at the Centre.",
  },
  {
    abbr: "SP", name: "Samajwadi Party", status: "State",
    founded: "1992", founder: "Mulayam Singh Yadav",
    base: "Uttar Pradesh", ls2024: 37,
    blurb: "Rooted in the socialist Lohia tradition and Yadav-backward mobilisation; Akhilesh Yadav's 37 seats in 2024 made it the third-largest party in the Lok Sabha.",
  },
  {
    abbr: "RJD", name: "Rashtriya Janata Dal", status: "State",
    founded: "1997", founder: "Lalu Prasad Yadav",
    base: "Bihar", ls2024: 4,
    blurb: "Formed out of the JD; dominated Bihar through the 1990s-2000s and remains the main opposition force in the state.",
  },
  {
    abbr: "SS", name: "Shiv Sena", status: "State",
    founded: "1966", founder: "Balasaheb Thackeray",
    base: "Maharashtra", ls2024: 7,
    blurb: "Founded as a regional nativist movement; after the 2022 split, the Eknath Shinde faction retained the party and the original symbol.",
  },
  {
    abbr: "NCP", name: "Nationalist Congress Party", status: "State",
    founded: "1999", founder: "Sharad Pawar",
    base: "Maharashtra", ls2024: 1,
    blurb: "Pawar's post-split party; the 2023-24 Ajit Pawar vs Sharad Pawar rival-claims dispute is the leading casebook example of the Symbols Order in action.",
  },
  {
    abbr: "LJP (RV)", name: "Lok Janshakti Party (Ram Vilas)", status: "State",
    founded: "2000", founder: "Ram Vilas Paswan",
    base: "Bihar", ls2024: 5,
    blurb: "Chirag Paswan's faction kept the party name and symbol after the family split; a steady NDA ally in Bihar.",
  },
  {
    abbr: "JMM", name: "Jharkhand Mukti Morcha", status: "State",
    founded: "1973", founder: "Birsa-associated tribal movement leaders (Binod Bihari Mahto, Shibu Soren)",
    base: "Jharkhand", ls2024: 3,
    blurb: "The party of the Jharkhand statehood movement; Hemant Soren led it back to power in the state in November 2024.",
  },
  {
    abbr: "JKNC", name: "Jammu & Kashmir National Conference", status: "State",
    founded: "1939", founder: "Sheikh Mohammad Abdullah",
    base: "Jammu & Kashmir", ls2024: 2,
    blurb: "The oldest Kashmiri party; Omar Abdullah became the first Chief Minister of the reorganised UT after the 2024 Assembly election.",
  },
  {
    abbr: "SAD", name: "Shiromani Akali Dal", status: "State",
    founded: "1920", founder: "Gurdwara reform leadership (Master Tara Singh era)",
    base: "Punjab", ls2024: 1,
    blurb: "India's oldest regional party, born of the Gurdwara Reform Movement; pioneered minority-regional coalition politics at the Centre.",
  },
  {
    abbr: "AGP", name: "Asom Gana Parishad", status: "State",
    founded: "1985", founder: "Prafulla Kumar Mahanta (post-Assam Accord movement)",
    base: "Assam", ls2024: 1,
    blurb: "Rose directly out of the Assam Agitation; first regional party to defeat a national party in a state after 1977.",
  },
  {
    abbr: "SKM", name: "Sikkim Krantikari Morcha", status: "State",
    founded: "2018", founder: "Prem Singh Tamang",
    base: "Sikkim", ls2024: 1,
    blurb: "Ended the Pawan Chamling era in Sikkim in 2019 and retained power in 2024; the NDA's small Himalayan partner.",
  },
  {
    abbr: "ZPM", name: "Zoram People's Movement", status: "State",
    founded: "2017", founder: "Lalduhoma",
    base: "Mizoram", ls2024: 1,
    blurb: "A coalition-turned-party that won Mizoram in 2023; its independent-route Lok Sabha seat (2024) made it a national talking point.",
  },
  {
    abbr: "VPP", name: "Voice of the People Party", status: "State",
    founded: "2021", founder: "Ricky Andrew J. Syngkon",
    base: "Meghalaya", ls2024: 1,
    blurb: "A young Khasi-Jaintia party that stunned the establishment by winning the Shillong Lok Sabha seat in 2024.",
  },
  {
    abbr: "AIMIM", name: "All India Majlis-e-Ittehadul Muslimeen", status: "State",
    founded: "1957 (roots in the 1927 Majlis)", founder: "Abdul Wahed Owaisi",
    base: "Telangana (Hyderabad)", ls2024: 1,
    blurb: "Owaisi-led party that has held Hyderabad continuously since 1984; Asaduddin Owaisi is its longest-serving face in Parliament.",
  },
  {
    abbr: "IUML", name: "Indian Union Muslim League", status: "State",
    founded: "1948", founder: "Successors of the pre-Partition Muslim League in India",
    base: "Kerala", ls2024: 3,
    blurb: "A Kerala UDF anchor; a rare case of a religious-community party operating inside a long-standing coalition system.",
  },
  {
    abbr: "JD(S)", name: "Janata Dal (Secular)", status: "State",
    founded: "1999", founder: "H.D. Deve Gowda",
    base: "Karnataka", ls2024: 2,
    blurb: "Deve Gowda's party, a perennial third force in Karnataka; joined the NDA after 2023-24 and won two Lok Sabha seats.",
  },
  {
    abbr: "BJD", name: "Biju Janata Dal", status: "State",
    founded: "1997", founder: "Naveen Patnaik",
    base: "Odisha", ls2024: 0,
    blurb: "Naveen Patnaik's regional platform governed Odisha for 24 years until the 2024 sweep — the era's most durable regional rule.",
  },
];
