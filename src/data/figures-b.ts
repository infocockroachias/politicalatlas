import type { Entity } from "./types";

// Modern political figures (all historical). Compiled from public reference
// works; offices stated with settled years, criticisms recorded as settled
// history.

export const figuresB: Entity[] = [
  {
    id: "jawaharlal-nehru",
    kind: "figure",
    name: "Jawaharlal Nehru",
    status: "verified",
    lead:
      "Jawaharlal Nehru (1889–1964) was India's first prime minister and, with [[mahatma-gandhi]], the leading architect of its democratic inheritance. A disciple of Gandhi and heir of the [[indian-independence-movement]], he took office on 15 August 1947 and held it for seventeen years, building a secular federal republic on the frame [[br-ambedkar]] drafted. His speeches at the midnight of independence fixed the terms — tryst with destiny, non-alignment, unity in diversity — by which modern India still argues with itself.",
    facts: [
      { label: "Born", value: "14 November 1889, Allahabad", attestation: "well-attested" },
      { label: "Died", value: "27 May 1964, New Delhi", attestation: "well-attested" },
      { label: "Offices Held", value: "Prime Minister of India, 1947–1964; President of the Indian National Congress, 1929, 1936–37, 1946, 1951–54", attestation: "well-attested" },
      { label: "Known For", value: "Leading independent India's founding decades; the non-aligned movement's co-founding", attestation: "well-attested" },
      { label: "Signature Decision", value: "Adopting the 1950 constitution's secular federal parliamentary order and mixed-economy planning", attestation: "well-attested" },
      { label: "Legacy", value: "The institutions of the republic — Parliament, planning, non-alignment — bear his imprint; his dynasty's later dominance is a separate history", attestation: "attested" },
    ],
    relations: [
      { to: "indian-independence-movement", kind: "led" },
      { to: "indian-independence", kind: "participant-in" },
      { to: "constitution-of-india", kind: "shaped" },
      { to: "mahatma-gandhi", kind: "influenced-by" },
      { to: "united-nations", kind: "founded", note: "India was a founder member, and Nehru's non-alignment shaped its diplomacy." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Jawaharlal Nehru'", tier: 1 },
      { work: "Judith M. Brown — Nehru: A Political Life", tier: 1 },
    ],
    addedOn: "2026-10-12",
  },
  {
    id: "br-ambedkar",
    kind: "figure",
    name: "B. R. Ambedkar",
    status: "verified",
    lead:
      "Bhimrao Ramji Ambedkar (1891–1956) was the principal draftsman of [[constitution-of-india]] and the twentieth century's most consequential voice against caste. Born into a Mahar family treated as untouchable, he became a barrister and economist, led campaigns for temple entry and water access, and as law minister chaired the constitution's drafting committee. He converted to Buddhism weeks before his death, and his Annihilation of Caste remains the canonical argument that political liberty is empty without social liberty.",
    facts: [
      { label: "Born", value: "14 April 1891, Mhow", attestation: "well-attested" },
      { label: "Died", value: "6 December 1956, New Delhi", attestation: "well-attested" },
      { label: "Offices Held", value: "Chairman, Drafting Committee of the Constituent Assembly, 1947–1950; Law Minister of India, 1947–1951", attestation: "well-attested" },
      { label: "Known For", value: "Drafting the Indian constitution; campaigns against untouchability", attestation: "well-attested" },
      { label: "Signature Work", value: "Annihilation of Caste (1936), an undelivered address published as a self-argued case against the caste order", attestation: "well-attested" },
      { label: "Legacy", value: "Constitutional safeguards for scheduled castes and tribes; a mass Buddhist conversion movement", attestation: "well-attested" },
    ],
    relations: [
      { to: "constitution-of-india", kind: "produced", note: "Chaired the drafting committee that wrote it." },
      { to: "civil-liberties", kind: "shaped" },
      { to: "mahatma-gandhi", kind: "contrasts-with", note: "They cooperated on joint electorates and clashed on caste strategy; the Poona Pact of 1932 settled their dispute." },
      { to: "rule-of-law", kind: "shaped" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'B. R. Ambedkar'", tier: 1 },
      { work: "B. R. Ambedkar — Annihilation of Caste", tier: 1 },
    ],
    addedOn: "2026-10-12",
  },
  {
    id: "winston-churchill",
    kind: "figure",
    name: "Winston Churchill",
    status: "verified",
    lead:
      "Winston Churchill (1874–1965) led Britain through the Second World War as prime minister from 1940 to 1945 and again from 1951 to 1955, and ranks among the century's defining orators. A career spanning the Boer War to the hydrogen bomb, he also presided over policies — the Bengal famine of 1943, resistance to Indian self-rule — that history weighs against his wartime record. He received the Nobel Prize in Literature in 1953.",
    facts: [
      { label: "Born", value: "30 November 1874, Woodstock", attestation: "well-attested" },
      { label: "Died", value: "24 January 1965, London", attestation: "well-attested" },
      { label: "Offices Held", value: "Prime Minister of the United Kingdom, 1940–1945 and 1951–1955; First Lord of the Admiralty, 1911–1915 and 1939–1940", attestation: "well-attested" },
      { label: "Known For", value: "Wartime leadership of Britain in the Second World War", attestation: "well-attested" },
      { label: "Signature Decision", value: "Refusing negotiation with Hitler's Germany in 1940", attestation: "well-attested" },
      { label: "Legacy", value: "A contested colossus: wartime resolve and imperial policies recorded together", attestation: "attested" },
    ],
    relations: [
      { to: "world-war-i", kind: "participant-in", note: "As First Lord of the Admiralty until the Gallipoli setback." },
      { to: "united-kingdom", kind: "led" },
      { to: "dissolution-of-ussr", kind: "cited-by", note: "His 1946 'iron curtain' speech named the division that ended in 1991." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Winston Churchill'", tier: 1 },
      { work: "Andrew Roberts — Churchill: Walking with Destiny", tier: 1 },
    ],
    addedOn: "2026-10-13",
  },
  {
    id: "franklin-d-roosevelt",
    kind: "figure",
    name: "Franklin D. Roosevelt",
    status: "verified",
    lead:
      "Franklin Delano Roosevelt (1882–1945), the only American president elected four times, rebuilt the United States through depression and war. His New Deal recast the federal government's role in economic life, and his wartime diplomacy — from the Atlantic Charter to the [[un-charter]]'s design — shaped the post-war order. He died in office in April 1945, weeks before Germany's surrender.",
    facts: [
      { label: "Born", value: "30 January 1882, Hyde Park, New York", attestation: "well-attested" },
      { label: "Died", value: "12 April 1945, Warm Springs, Georgia", attestation: "well-attested" },
      { label: "Offices Held", value: "President of the United States, 1933–1945; Governor of New York, 1929–1932", attestation: "well-attested" },
      { label: "Known For", value: "The New Deal and leadership through the Second World War", attestation: "well-attested" },
      { label: "Signature Decision", value: "The 1933–38 New Deal programme; the Four Freedoms framing of the Allied cause", attestation: "well-attested" },
      { label: "Legacy", value: "The modern American state and the United Nations both carry his imprint; the twenty-second amendment caps presidents at two terms in reaction", attestation: "attested" },
    ],
    relations: [
      { to: "un-charter", kind: "shaped" },
      { to: "united-states", kind: "led" },
      { to: "us-constitution", kind: "cited-by", note: "His stretched presidency prompted the two-term amendment." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Franklin D. Roosevelt'", tier: 1 },
      { work: "David M. Kennedy — Freedom from Fear", tier: 1 },
    ],
    addedOn: "2026-10-14",
  },
  {
    id: "charles-de-gaulle",
    kind: "figure",
    name: "Charles de Gaulle",
    status: "verified",
    lead:
      "Charles de Gaulle (1890–1970) refused France's surrender in 1940, founded Free France from exile, and returned in 1958 to write the Fifth Republic's constitution around a strong elected presidency. He founded and led the [[semi-presidential-system]] that France still uses, granted Algeria independence in 1962, and resigned when his 1969 referendum failed — a habit of betting his office on the electorate that became his signature.",
    facts: [
      { label: "Born", value: "22 November 1890, Lille", attestation: "well-attested" },
      { label: "Died", value: "9 November 1970, Colombey-les-Deux-Églises", attestation: "well-attested" },
      { label: "Offices Held", value: "President of France, 1959–1969; President of the Council of Ministers, 1958–1959; chair of the French National Committee (Free France), 1940–1944", attestation: "well-attested" },
      { label: "Known For", value: "Free France in the war; founding the Fifth Republic", attestation: "well-attested" },
      { label: "Signature Decision", value: "The 1958 constitution and the 1962 move to direct presidential election; Algerian independence", attestation: "well-attested" },
      { label: "Legacy", value: "Gaullism — a presidency above parties, an independent nuclear France — remains the republic's organising grammar", attestation: "well-attested" },
    ],
    relations: [
      { to: "france", kind: "led" },
      { to: "semi-presidential-system", kind: "founded" },
      { to: "french-revolution", kind: "cited-by", note: "He invoked the revolution's legitimacy while rejecting its parliamentary inheritance." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Charles de Gaulle'", tier: 1 },
      { work: "Julian Jackson — De Gaulle", tier: 1 },
    ],
    addedOn: "2026-10-15",
  },
  {
    id: "mao-zedong",
    kind: "figure",
    name: "Mao Zedong",
    status: "verified",
    lead:
      "Mao Zedong (1893–1976) founded the People's Republic of China in 1949 and ruled it until his death, remaking both the state and the Marxist doctrine that bore his name. Land reform unified the country and lifted early literacy and life expectancy; his Great Leap Forward produced the largest famine in recorded history and the Cultural Revolution convulsed the party he led. Post-1978 China officially scores him seventy good, thirty bad.",
    facts: [
      { label: "Born", value: "26 December 1893, Shaoshan", attestation: "well-attested" },
      { label: "Died", value: "9 September 1976, Beijing", attestation: "well-attested" },
      { label: "Offices Held", value: "Chairman of the Chinese Communist Party, 1935/1945–1976; Chairman of the People's Republic, 1949–1959", attestation: "well-attested" },
      { label: "Known For", value: "Founding the People's Republic; the Great Leap Forward and the Cultural Revolution", attestation: "well-attested" },
      { label: "Signature Work", value: "On Practice, On Contradiction, and guerrilla-warfare writings adapted Marxism to a peasant country", attestation: "well-attested" },
      { label: "Legacy", value: "Party rule consolidated and dynasty-scale transformation achieved; the famine of 1959–61 and the Cultural Revolution stand as the century's gravest state-made disasters", attestation: "well-attested" },
    ],
    relations: [
      { to: "chinese-communist-revolution", kind: "led" },
      { to: "china", kind: "founded" },
      { to: "maoism", kind: "founded" },
      { to: "deng-xiaoping", kind: "influenced", note: "Deng served him, was twice purged by him, and inherited his party without his economics." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Mao Zedong'", tier: 1 },
      { work: "Frank Dikötter — Mao's Great Famine", tier: 1 },
    ],
    addedOn: "2026-10-16",
  },
  {
    id: "ho-chi-minh",
    kind: "figure",
    name: "Ho Chi Minh",
    status: "verified",
    lead:
      "Ho Chi Minh (1890–1969) declared Vietnam's independence in 1945 and led the long wars — against France, then against the United States and its southern ally — that unified the country under communist rule by 1976. A founding member of the French Communist Party and the Vietnamese independence movement's indispensable organiser, he blended nationalism and Marxism-Leninism into a doctrine his country still calls Ho Chi Minh Thought.",
    facts: [
      { label: "Born", value: "19 May 1890, Nghệ An province", attestation: "well-attested" },
      { label: "Died", value: "2 September 1969, Hanoi", attestation: "well-attested" },
      { label: "Offices Held", value: "President of the Democratic Republic of Vietnam, 1945–1969; founding leader of the Vietnamese communist movement", attestation: "well-attested" },
      { label: "Known For", value: "Declaring Vietnamese independence in 1945; leading the wars of unification", attestation: "well-attested" },
      { label: "Signature Decision", value: "The 1945 Declaration of Independence at Hanoi's Ba Đình Square", attestation: "well-attested" },
      { label: "Legacy", value: "A unified Vietnam under party rule; his cult of personality remains official doctrine", attestation: "attested" },
    ],
    relations: [
      { to: "vietnam", kind: "founded" },
      { to: "decolonisation-movement", kind: "participant-in" },
      { to: "marxism-leninism", kind: "uses" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Ho Chi Minh'", tier: 1 },
      { work: "Pierre Brocheux & Daniel Hémery — Ho Chi Minh: A Biography", tier: 1 },
    ],
    addedOn: "2026-10-17",
  },
  {
    id: "kwame-nkrumah",
    kind: "figure",
    name: "Kwame Nkrumah",
    status: "verified",
    lead:
      "Kwame Nkrumah (1909–1972) led the Gold Coast to independence as Ghana in 1957 — the first British African colony to go — and made [[pan-africanism]] a state policy, hosting the movement's defining conferences and aiding liberation struggles across the continent. Declared president-for-life in 1964, he was overthrown in 1966 while abroad; his one-party turn shadowed the promise of his early decade.",
    facts: [
      { label: "Born", value: "21 September 1909, Nkroful", attestation: "well-attested" },
      { label: "Died", value: "27 April 1972, Bucharest", attestation: "well-attested" },
      { label: "Offices Held", value: "Prime Minister of Ghana, 1957–1960; President of Ghana, 1960–1966", attestation: "well-attested" },
      { label: "Known For", value: "Ghana's independence; continental pan-African organising", attestation: "well-attested" },
      { label: "Signature Work", value: "Neo-Colonialism: The Last Stage of Imperialism (1965) gave the era its critical vocabulary", attestation: "well-attested" },
      { label: "Legacy", value: "The independence wave's symbol; the one-party turn he chose became the cautionary lesson", attestation: "attested" },
    ],
    relations: [
      { to: "ghana", kind: "founded" },
      { to: "pan-africanism", kind: "shaped" },
      { to: "decolonisation-movement", kind: "led" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Kwame Nkrumah'", tier: 1 },
      { work: "David Birmingham — Kwame Nkrumah: The Father of African Nationalism", tier: 1 },
    ],
    addedOn: "2026-10-18",
  },
  {
    id: "nelson-mandela",
    kind: "figure",
    name: "Nelson Mandela",
    status: "verified",
    lead:
      "Nelson Mandela (1918–2013) spent twenty-seven years in prison for leading resistance to apartheid, emerged in 1990 to negotiate its end, and became South Africa's first president elected by all its people in 1994. His single term chose reconciliation — truth over trials, one constitution for all — and then set the precedent of leaving after it. The constitution adopted in 1996 under his presidency wrote the settlement he negotiated into law.",
    facts: [
      { label: "Born", value: "18 July 1918, Mvezo", attestation: "well-attested" },
      { label: "Died", value: "5 December 2013, Johannesburg", attestation: "well-attested" },
      { label: "Offices Held", value: "President of South Africa, 1994–1999; President of the African National Congress, 1991–1997", attestation: "well-attested" },
      { label: "Known For", value: "Negotiating the end of apartheid from prison and presidency", attestation: "well-attested" },
      { label: "Signature Decision", value: "Choosing negotiation and a Truth and Reconciliation Commission over retribution; serving one term", attestation: "well-attested" },
      { label: "Legacy", value: "The constitutional settlement of 1996; a global byword for political forgiveness with limits", attestation: "well-attested" },
    ],
    relations: [
      { to: "anti-apartheid-movement", kind: "led" },
      { to: "end-of-apartheid", kind: "participant-in" },
      { to: "constitution-of-south-africa", kind: "shaped" },
      { to: "south-africa", kind: "led" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Nelson Mandela'", tier: 1 },
      { work: "Nelson Mandela — Long Walk to Freedom", tier: 1 },
    ],
    addedOn: "2026-10-19",
  },
  {
    id: "martin-luther-king-jr",
    kind: "figure",
    name: "Martin Luther King Jr.",
    status: "verified",
    lead:
      "Martin Luther King Jr. (1929–1968) led the American civil rights movement from the Montgomery bus boycott of 1955–56 to the voting-rights victory of 1965, welding Gandhian non-violence to Christian preaching. The [[us-civil-rights-movement]] he led won the Civil Rights Act of 1964 and the Voting Rights Act of 1965; he was murdered in Memphis in April 1968, and the holiday in his name falls near his January birthday.",
    facts: [
      { label: "Born", value: "15 January 1929, Atlanta", attestation: "well-attested" },
      { label: "Died", value: "4 April 1968, Memphis", attestation: "well-attested" },
      { label: "Offices Held", value: "Pastor, Dexter Avenue Baptist Church, 1954–1960; first president, Southern Christian Leadership Conference, 1957–1968", attestation: "well-attested" },
      { label: "Known For", value: "Leading the civil rights movement's non-violent campaigns", attestation: "well-attested" },
      { label: "Signature Work", value: "The 1963 \"I Have a Dream\" address and Letter from Birmingham Jail", attestation: "well-attested" },
      { label: "Legacy", value: "The 1964–65 federal rights statutes; a constitutional understanding of equality remade by protest", attestation: "well-attested" },
    ],
    relations: [
      { to: "us-civil-rights-movement", kind: "led" },
      { to: "civil-rights-act-1964", kind: "spawned", note: "The movement he led drove the statute." },
      { to: "satyagraha", kind: "influenced-by", note: "He named Gandhi's method as his template after 1950." },
      { to: "mahatma-gandhi", kind: "influenced-by" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Martin Luther King Jr.'", tier: 1 },
      { work: "Taylor Branch — America in the King Years trilogy", tier: 1 },
    ],
    addedOn: "2026-10-20",
  },
  {
    id: "gamal-abdel-nasser",
    kind: "figure",
    name: "Gamal Abdel Nasser",
    status: "verified",
    lead:
      "Gamal Abdel Nasser (1918–1970) led Egypt's 1952 revolution, became its president in 1956, and made Arab nationalism a continental force before military defeat at Israel's hands in 1967 broke the spell. He nationalised the Suez Canal and survived the invasion it provoked, united Egypt briefly with Syria, and built a pan-Arab media and doctrine that outlived him. His successor, Anwar Sadat, reversed his socialist and Soviet alignments.",
    facts: [
      { label: "Born", value: "15 January 1918, Alexandria", attestation: "well-attested" },
      { label: "Died", value: "28 September 1970, Cairo", attestation: "well-attested" },
      { label: "Offices Held", value: "President of Egypt, 1956–1970; Prime Minister, 1954–1956 and 1962–1964", attestation: "well-attested" },
      { label: "Known For", value: "Pan-Arab leadership; the Suez nationalisation of 1956", attestation: "well-attested" },
      { label: "Signature Decision", value: "Nationalising the Suez Canal Company in July 1956", attestation: "well-attested" },
      { label: "Legacy", value: "Egypt as the Arab world's cultural capital; the 1967 defeat as the movement's wound; a state-directed economy partly reversed after him", attestation: "attested" },
    ],
    relations: [
      { to: "egypt", kind: "led" },
      { to: "pan-arabism", kind: "shaped" },
      { to: "military-dictatorship", kind: "influenced-by", note: "His rule grew from the Free Officers' coup and rested on military institutions." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Gamal Abdel Nasser'", tier: 1 },
      { work: "Joel Gordon — Nasser's Blessed Movement", tier: 1 },
    ],
    addedOn: "2026-10-21",
  },
  {
    id: "indira-gandhi",
    kind: "figure",
    name: "Indira Gandhi",
    status: "verified",
    lead:
      "Indira Gandhi (1917–1984), Jawaharlal Nehru's daughter, was prime minister of India for sixteen years across two spells, centralising her party and winning the 1971 war that created Bangladesh. In 1975, after a court voided her seat, she imposed the Emergency: press censorship, mass arrests of opponents, and suspension of constitutional guarantees for twenty-one months — the republic's gravest self-inflicted wound, repudiated by the voters in 1977. She was assassinated by her Sikh bodyguards in 1984 after the army's storming of the Golden Temple.",
    facts: [
      { label: "Born", value: "19 November 1917, Allahabad", attestation: "well-attested" },
      { label: "Died", value: "31 October 1984, New Delhi", attestation: "well-attested" },
      { label: "Offices Held", value: "Prime Minister of India, 1966–1977 and 1980–1984; Minister of External Affairs, 1967–1969", attestation: "well-attested" },
      { label: "Known For", value: "The 1971 Bangladesh war; the Emergency of 1975–1977; bank nationalisation", attestation: "well-attested" },
      { label: "Signature Decision", value: "Declaring the Emergency on 25 June 1975", attestation: "well-attested" },
      { label: "Legacy", value: "A stronger central state and a weakened party democracy; the Emergency stands as the constitution's lesson in what must never be repeated", attestation: "well-attested" },
    ],
    relations: [
      { to: "emergency-powers", kind: "uses", note: "Her Emergency invoked constitutional emergency provisions against the polity itself." },
      { to: "jawaharlal-nehru", kind: "influenced-by" },
      { to: "bangladesh", kind: "founded", note: "Her government's 1971 intervention secured Bangladesh's independence." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Indira Gandhi'", tier: 1 },
      { work: "Sankarshan Thakur / Granville Austin on the Emergency era", tier: 2 },
    ],
    addedOn: "2026-10-22",
  },
  {
    id: "deng-xiaoping",
    kind: "figure",
    name: "Deng Xiaoping",
    status: "verified",
    lead:
      "Deng Xiaoping (1904–1997) twice purged under [[mao-zedong]], became China's paramount leader by 1978 and rebuilt the economy his mentor had shattered. The reforms associated with his name — special economic zones, household farming, opening to foreign capital — moved hundreds of millions out of poverty while the party's political monopoly stayed untouched, a formula later summarised as socialism with Chinese characteristics. He retired from offices before his death, ruling through protégés instead.",
    facts: [
      { label: "Born", value: "22 August 1904, Guang'an", attestation: "well-attested" },
      { label: "Died", value: "19 February 1997, Beijing", attestation: "well-attested" },
      { label: "Offices Held", value: "Chairman of the Central Military Commission, 1981–1989; chief of the party's practical leadership, 1978–1992 (never state president)", attestation: "well-attested" },
      { label: "Known For", value: "The reform and opening programme after 1978", attestation: "well-attested" },
      { label: "Signature Decision", value: "The third plenum of December 1978, turning the party from class struggle to economic development", attestation: "well-attested" },
      { label: "Legacy", value: "The world's fastest large-scale enrichment; the Tiananmen repression of 1989 under his final authority stands in the same ledger", attestation: "well-attested" },
    ],
    relations: [
      { to: "china", kind: "led" },
      { to: "mao-zedong", kind: "contrasts-with", note: "He inherited the party and reversed the economics." },
      { to: "maoism", kind: "contrasts-with" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Deng Xiaoping'", tier: 1 },
      { work: "Ezra Vogel — Deng Xiaoping and the Transformation of China", tier: 1 },
    ],
    addedOn: "2026-10-23",
  },
  {
    id: "margaret-thatcher",
    kind: "figure",
    name: "Margaret Thatcher",
    status: "verified",
    lead:
      "Margaret Thatcher (1925–2013) was Britain's first woman prime minister and, across eleven years from 1979, its most transformative peacetime leader. She broke the post-war consensus she inherited — privatising state industries, breaking the coal miners' union in 1984–85, reorienting the economy toward markets — and left a label, Thatcherism, that her successors spent decades negotiating. The century's longest continuously served British premiership ended when her party removed her in 1990.",
    facts: [
      { label: "Born", value: "13 October 1925, Grantham", attestation: "well-attested" },
      { label: "Died", value: "8 April 2013, London", attestation: "well-attested" },
      { label: "Offices Held", value: "Prime Minister of the United Kingdom, 1979–1990; Leader of the Conservative Party, 1975–1990", attestation: "well-attested" },
      { label: "Known For", value: "Privatisation, union reform, the Falklands war, the poll tax", attestation: "well-attested" },
      { label: "Signature Decision", value: "The 1984–85 defeat of the National Union of Mineworkers' strike; the Big Bang deregulation of 1986", attestation: "well-attested" },
      { label: "Legacy", value: "A market-oriented Britain and a divided memory: deindustrialised regions and a globally imitated reform template", attestation: "well-attested" },
    ],
    relations: [
      { to: "neoliberalism", kind: "shaped" },
      { to: "united-kingdom", kind: "led" },
      { to: "sirimavo-bandaranaike", kind: "contrasts-with", note: "Both first women in their offices, with opposite political doctrines." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Margaret Thatcher'", tier: 1 },
      { work: "Charles Moore — Margaret Thatcher: The Authorized Biography", tier: 1 },
    ],
    addedOn: "2026-10-24",
  },
  {
    id: "mikhail-gorbachev",
    kind: "figure",
    name: "Mikhail Gorbachev",
    status: "verified",
    lead:
      "Mikhail Gorbachev (1931–2022) was the last leader of the Soviet Union and the only one to end it: his policies of glasnost (openness) and perestroika (restructuring) liberalised a system built on control, and by refusing to defend it by force in 1989–91 he let the Eastern European regimes fall and the union dissolve. He won the Nobel Peace Prize in 1990; at home his country's collapse made him a figure of ambivalence to its end.",
    facts: [
      { label: "Born", value: "2 March 1931, Privolnoye", attestation: "well-attested" },
      { label: "Died", value: "30 August 2022, Moscow", attestation: "well-attested" },
      { label: "Offices Held", value: "General Secretary of the CPSU, 1985–1991; President of the USSR, 1990–1991", attestation: "well-attested" },
      { label: "Known For", value: "Glasnost and perestroika; ending the cold war without bloodshed", attestation: "well-attested" },
      { label: "Signature Decision", value: "Declining to use force against the 1989 revolutions; accepting the union's dissolution in December 1991", attestation: "well-attested" },
      { label: "Legacy", value: "The bloodless end of the cold war; at home, the contested memory of a superpower's collapse", attestation: "well-attested" },
    ],
    relations: [
      { to: "fall-of-berlin-wall", kind: "participant-in", note: "His non-intervention made the wall's fall possible." },
      { to: "dissolution-of-ussr", kind: "participant-in" },
      { to: "russian-revolution", kind: "cited-by", note: "His reforms were framed as rescuing the revolution's promise, then abandoned its forms." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Mikhail Gorbachev'", tier: 1 },
      { work: "William Taubman — Gorbachev: His Life and Times", tier: 1 },
    ],
    addedOn: "2026-10-25",
  },
  {
    id: "lee-kuan-yew",
    kind: "figure",
    name: "Lee Kuan Yew",
    status: "verified",
    lead:
      "Lee Kuan Yew (1923–2015) led Singapore from self-government in 1959 through its forced exit from Malaysia in 1965 to first-world prosperity, as the city-state's founding prime minister for thirty-one years. His People's Action Party made Singapore the century's most-cited case of guided democracy: clean administration and radical growth with restricted opposition and press. The model he built is studied everywhere; the liberties it traded are part of the study.",
    facts: [
      { label: "Born", value: "16 September 1923, Singapore", attestation: "well-attested" },
      { label: "Died", value: "23 March 2015, Singapore", attestation: "well-attested" },
      { label: "Offices Held", value: "Prime Minister of Singapore, 1959–1990; Senior Minister, 1991–2004; Minister Mentor, 2004–2011", attestation: "well-attested" },
      { label: "Known For", value: "Building the Singaporean state; the 'Singapore model' of governance", attestation: "well-attested" },
      { label: "Signature Decision", value: "Leading Singapore's separation from Malaysia in 1965 and its subsequent development strategy", attestation: "well-attested" },
      { label: "Legacy", value: "A first-world city-state with an unbroken governing party; the trade-off between growth and pluralism is the model's permanent debate", attestation: "well-attested" },
    ],
    relations: [
      { to: "singapore", kind: "founded" },
      { to: "malaysia", kind: "participant-in", note: "His government led Singapore out of the 1963–65 federation." },
      { to: "one-party-state", kind: "contrasts-with", note: "Singapore holds contested elections; its dominance is engineered, not decreed." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Lee Kuan Yew'", tier: 1 },
      { work: "Lee Kuan Yew — From Third World to First", tier: 1 },
    ],
    addedOn: "2026-10-26",
  },
  {
    id: "angela-merkel",
    kind: "figure",
    name: "Angela Merkel",
    status: "verified",
    lead:
      "Angela Merkel (born 1954) was chancellor of Germany from 2005 to 2021, the European Union's longest-serving head of government of her era and its steadiest crisis manager — the euro bailouts, the 2015 refugee decision, the pandemic. A physicist from East Germany and the first woman in the office, she led through consensus-seeking rather than doctrine, leaving a style — step by step, no drama — more often invoked than imitated.",
    facts: [
      { label: "Born", value: "17 July 1954, Hamburg", attestation: "well-attested" },
      { label: "Died", value: "— (living)", attestation: "well-attested" },
      { label: "Offices Held", value: "Chancellor of Germany, 2005–2021; Leader of the Christian Democratic Union, 2000–2018; Federal Minister for the Environment, 1994–1998", attestation: "well-attested" },
      { label: "Known For", value: "Crisis management across euro, refugee and pandemic shocks; European cohesion", attestation: "well-attested" },
      { label: "Signature Decision", value: "Opening Germany's borders in the 2015 refugee summer; phasing out nuclear power after Fukushima", attestation: "well-attested" },
      { label: "Legacy", value: "The EU's anchor through a decade of shocks; her party's post-2021 slide frames the debate on what her centrism cost", attestation: "attested" },
    ],
    relations: [
      { to: "germany", kind: "led" },
      { to: "european-union", kind: "led", note: "The EU's de facto leader through the 2010s crises." },
      { to: "dissolution-of-ussr", kind: "participant-in", note: "Her political life began in the East German transition she then represented." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Angela Merkel'", tier: 1 },
      { work: "Kati Marton — The Chancellor", tier: 2 },
    ],
    addedOn: "2026-10-27",
  },
  {
    id: "sirimavo-bandaranaike",
    kind: "figure",
    name: "Sirimavo Bandaranaike",
    status: "verified",
    lead:
      "Sirimavo Bandaranaike (1916–2000) became the world's first woman prime minister in 1960, leading Ceylon — now Sri Lanka — after her husband's assassination transformed his party into her mandate. She nationalised key industries, made Sinhala the sole official language with consequences her country still carries, and served three terms across four decades; her daughter Chandrika later held the presidency.",
    facts: [
      { label: "Born", value: "17 April 1916, Ratnapura", attestation: "well-attested" },
      { label: "Died", value: "10 October 2000, Colombo", attestation: "well-attested" },
      { label: "Offices Held", value: "Prime Minister of Ceylon/Sri Lanka, 1960–1965, 1970–1977 and 1994–2000", attestation: "well-attested" },
      { label: "Known For", value: "The world's first woman prime minister", attestation: "well-attested" },
      { label: "Signature Decision", value: "The 1972 republican constitution and the Sinhala Only language policy of her 1956-era coalition", attestation: "well-attested" },
      { label: "Legacy", value: "A global first for women in executive office; the language policy's costs are part of the same record", attestation: "attested" },
    ],
    relations: [
      { to: "sri-lanka", kind: "led" },
      { to: "suffrage-movement", kind: "cited-by", note: "Ceylon's early universal suffrage made her rise possible." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Sirimavo Bandaranaike'", tier: 1 },
      { work: "Encyclopædia Britannica — 'Sri Lanka'", tier: 1 },
    ],
    addedOn: "2026-10-28",
  },
  {
    id: "vaclav-havel",
    kind: "figure",
    name: "Václav Havel",
    status: "verified",
    lead:
      "Václav Havel (1936–2011) was a playwright who became Czechoslovakia's leading dissident — Charter 77's most famous signatory, author of the 'power of the powerless' argument — and then its president, elected in the [[velvet-revolution]] he helped summon. He led Czechoslovakia through its 1993 divorce into two states and was the Czech Republic's first president, defending civil society abroad with a novelist's suspicion of settled power.",
    facts: [
      { label: "Born", value: "5 October 1936, Prague", attestation: "well-attested" },
      { label: "Died", value: "18 December 2011, Hrádeček", attestation: "well-attested" },
      { label: "Offices Held", value: "President of Czechoslovakia, 1989–1992; President of the Czech Republic, 1993–2003", attestation: "well-attested" },
      { label: "Known For", value: "Dissident essays and plays; the velvet revolution's moral leadership", attestation: "well-attested" },
      { label: "Signature Work", value: "The Power of the Powerless (1978), the era's defining case that living in truth dissolves ritual dictatorship", attestation: "well-attested" },
      { label: "Legacy", value: "The proof that a dissident culture can become a state; Charter 77's civil-society legacy shaped Central Europe's transitions", attestation: "well-attested" },
    ],
    relations: [
      { to: "velvet-revolution", kind: "led" },
      { to: "democracy-movement-1989", kind: "participant-in" },
      { to: "civil-liberties", kind: "shaped" },
      { to: "solidarity-movement", kind: "influenced-by", note: "Polish Solidarity's workers' example shaped his civil-society strategy." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Václav Havel'", tier: 1 },
      { work: "Václav Havel — The Power of the Powerless", tier: 1 },
    ],
    addedOn: "2026-10-29",
  },
  {
    id: "kofi-annan",
    kind: "figure",
    name: "Kofi Annan",
    status: "verified",
    lead:
      "Kofi Annan (1938–2018) was the first secretary-general of the [[united-nations]] to rise from its own staff, serving 1997–2006. He made humanitarian intervention doctrine his own — the Responsibility to Protect was negotiated under him — launched the Global Compact with business, and shared the 2001 Nobel Peace Prize with the organisation he led. The Rwanda and Srebrenica failures that shadowed his earlier peacekeeping tenure became, in his own telling, the reason for that doctrine.",
    facts: [
      { label: "Born", value: "8 April 1938, Kumasi", attestation: "well-attested" },
      { label: "Died", value: "18 August 2018, Bern", attestation: "well-attested" },
      { label: "Offices Held", value: "Secretary-General of the United Nations, 1997–2006; Under-Secretary-General for Peacekeeping, 1993–1997", attestation: "well-attested" },
      { label: "Known For", value: "UN reform, the Global Fund and Millennium Development Goals era, the Responsibility to Protect doctrine", attestation: "well-attested" },
      { label: "Signature Decision", value: "The 2005 World Summit's adoption of responsibility-to-protection language; post-election mediation in Kenya (2008)", attestation: "well-attested" },
      { label: "Legacy", value: "A more intervention-minded UN and the doctrine named for the gap he lived through", attestation: "attested" },
    ],
    relations: [
      { to: "united-nations", kind: "led" },
      { to: "un-security-council", kind: "participant-in", note: "His office served at the council's pleasure and its deadlock defined it." },
      { to: "universal-declaration-of-human-rights", kind: "cited-by" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Kofi Annan'", tier: 1 },
      { work: "Kofi Annan — Interventions: A Life in War and Peace", tier: 1 },
    ],
    addedOn: "2026-10-30",
  },
];
