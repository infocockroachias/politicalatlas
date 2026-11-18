import type { Entity } from "./types";

// East, South and Mainland Southeast Asia. Compiled from public reference
// works; office titles only, positions described structurally.

export const countriesAsiaA: Entity[] = [
  {
    id: "china",
    kind: "country",
    name: "China",
    status: "verified",
    lead:
      "China, formally the People's Republic of China, is a one-party state in East Asia governed by the Communist Party under a [[one-party-state]] in which the party leads state, army and law. The world's most populous state for most of the twentieth century, it abandoned revolutionary economics after 1978 for the party-guided market system built under [[deng-xiaoping]], while keeping Leninist party structures intact. Its constitutional text promises a succession of rights, and its practice subordinates each of them to party leadership — the [[mandate-of-heaven]] of emperors reappearing, in secular dress, as the party's claim to embody the nation's destiny.",
    facts: [
      { label: "Founding Year", value: "1949", attestation: "well-attested", note: "The People's Republic was proclaimed on 1 October 1949 after the communist victory in the civil war; the Republic of China it succeeded dates its founding to 1912." },
      { label: "Capital", value: "Beijing", attestation: "well-attested" },
      { label: "Head of State", value: "President", attestation: "well-attested", note: "A state presidency formally elected by the National People's Congress; real authority rests with the party's general secretaryship." },
      { label: "Head of Government", value: "Premier", attestation: "well-attested" },
      { label: "Legislature", value: "Unicameral", note: "The National People's Congress, the largest legislature in the world, meets briefly each year; a Standing Committee legislates between sessions." },
      { label: "Electoral System", value: "Indirect and party-managed", note: "Direct ballots elect local people's congresses; higher tiers are elected by the tier below, all within the party's candidate control." },
    ],
    extras: {
      capital: "Beijing", foundingYear: 1949, headOfState: "President", headOfGovernment: "Premier",
      legislature: "Unicameral", electoralSystem: "Indirect and party-managed",
      freedomStatus: "Not Free", democracyBand: "Authoritarian regime", foundingEra: "20th century",
      governmentType: "Unitary one-party socialist republic", worldRegion: "East Asia",
    },
    relations: [
      { to: "one-party-state", kind: "exemplifies" },
      { to: "mao-zedong", kind: "founded", note: "Proclaimed the People's Republic in 1949." },
      { to: "deng-xiaoping", kind: "shaped", note: "His reforms after 1978 remade the economy without pluralising politics." },
      { to: "chinese-communist-revolution", kind: "spawned" },
      { to: "mandate-of-heaven", kind: "influenced-by", note: "Dynastic ideas of righteous rule echo in the party's claim to national destiny." },
      { to: "marxism-leninism", kind: "uses" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'China'", tier: 1 },
      { work: "Official text: Constitution of the People's Republic of China (1982, amended)", tier: 1 },
      { work: "CIA World Factbook archive — China", tier: 2 },
    ],
    history: [
      { year: 1949, headline: "The People's Republic proclaimed", lead: "The communist victory in the civil war brought a Leninist party-state to the mainland; the republic's government withdrew to Taiwan.", facts: [ { label: "System", value: "One-party socialist state" }, { label: "Party", value: "Communist Party of China" } ] },
      { year: 1954, headline: "First constitution", lead: "The 1954 constitution created the National People's Congress and the state council structure.", facts: [ { label: "Legislature", value: "National People's Congress" } ] },
      { year: 1982, headline: "The present constitution", lead: "Adopted after the reform turn began, it remains in force through five amendments, including the 2018 removal of presidential term limits.", facts: [ { label: "Still In Force", value: "Yes, as amended" } ] },
    ],
    addedOn: "2026-10-02",
  },
  {
    id: "japan",
    kind: "country",
    name: "Japan",
    status: "verified",
    lead:
      "Japan is a unitary parliamentary constitutional monarchy in East Asia whose present order rests on the 1947 constitution drafted under Allied occupation. The emperor, once sovereign, now \"shall not possess powers related to government\"; executive trust belongs to a [[parliamentary-system]] cabinet answerable to the Diet. The [[meiji-restoration]] had earlier recast the samurai order into a modern centralised state, and the post-war settlement renounced war in Article 2 of the constitution's famous ninth article.",
    facts: [
      { label: "Founding Year", value: "660 BCE (traditional); 1947 (present constitution)", attestation: "well-attested", note: "The present constitutional order dates from the constitution in force on 3 May 1947." },
      { label: "Capital", value: "Tokyo", attestation: "well-attested" },
      { label: "Head of State", value: "Emperor", attestation: "well-attested", note: "A ceremonial head of state under the present constitution, defined as the symbol of the state." },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested", note: "Designated by the Diet from its members; the office dates from 1885." },
      { label: "Legislature", value: "Bicameral", note: "The Diet: a House of Representatives, which prevails in most deadlocks, and a House of Councillors." },
      { label: "Electoral System", value: "Parallel voting", note: "Mixed member: single-member districts plus proportional party lists for each house." },
    ],
    extras: {
      capital: "Tokyo", foundingYear: 1947, headOfState: "Emperor", headOfGovernment: "Prime Minister",
      legislature: "Bicameral", electoralSystem: "Parallel voting",
      freedomStatus: "Free", democracyBand: "Full democracy", foundingEra: "Ancient",
      governmentType: "Unitary parliamentary constitutional monarchy", worldRegion: "East Asia",
    },
    relations: [
      { to: "parliamentary-system", kind: "exemplifies" },
      { to: "constitutional-monarchy", kind: "exemplifies" },
      { to: "meiji-restoration", kind: "shaped", note: "Built the modern Japanese state after 1868." },
      { to: "no-confidence-motion", kind: "uses" },
      { to: "judicial-review", kind: "uses", note: "The Supreme Court may review laws, though it rarely strikes them down." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Japan'", tier: 1 },
      { work: "Official text: Constitution of Japan (1946)", tier: 1 },
      { work: "CIA World Factbook archive — Japan", tier: 2 },
    ],
    history: [
      { year: 1889, headline: "Meiji constitution", lead: "The Imperial Diet was created under a Prussian-style constitution with sovereignty in the emperor.", facts: [ { label: "Sovereignty", value: "Vested in the emperor" } ] },
      { year: 1947, headline: "Post-war constitutional democracy", lead: "The new constitution took effect under Allied occupation and renounces war.", facts: [ { label: "Head of State", value: "Emperor (ceremonial)" }, { label: "Sovereignty", value: "Resting with the people" } ] },
    ],
    addedOn: "2026-10-03",
  },
  {
    id: "pakistan",
    kind: "country",
    name: "Pakistan",
    status: "reviewed",
    lead:
      "Pakistan is a federal parliamentary republic in South Asia created in 1947 from the partition of British India. Its constitutional history is a succession of drafts and interruptions: three constitutions (1956, 1962, 1973), long stretches of military rule, and a [[federal-republic]] settlement in the 1973 constitution that combines a strong lower house with provincial devolution deepened in 2010. The state's founding ideology — a homeland for South Asia's Muslims — keeps religion entangled with constitutional office in ways the text itself acknowledges.",
    facts: [
      { label: "Founding Year", value: "1947", attestation: "well-attested", note: "Independence on 14 August 1947; the present constitution took effect on 14 August 1973." },
      { label: "Capital", value: "Islamabad", attestation: "well-attested" },
      { label: "Head of State", value: "President", attestation: "well-attested" },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested" },
      { label: "Legislature", value: "Bicameral", note: "The Parliament: a National Assembly and a Senate that gives each province equal representation." },
      { label: "Electoral System", value: "First-past-the-post", note: "Single-member constituencies for the National Assembly; senators elected by provincial assemblies with reserved seats." },
    ],
    extras: {
      capital: "Islamabad", foundingYear: 1947, headOfState: "President", headOfGovernment: "Prime Minister",
      legislature: "Bicameral", electoralSystem: "First-past-the-post",
      freedomStatus: "Partly Free", democracyBand: "Hybrid regime", foundingEra: "20th century",
      governmentType: "Federal parliamentary republic", worldRegion: "South Asia",
    },
    relations: [
      { to: "federal-republic", kind: "exemplifies" },
      { to: "indian-independence", kind: "participant-in", note: "Independence came with the partition of British India in August 1947." },
      { to: "constitution-of-india", kind: "influenced-by", note: "The 1973 constitution parallels India's parliamentary form, with different religious safeguards." },
      { to: "military-dictatorship", kind: "influenced-by", note: "Extended military rule in 1958–71, 1977–85 and 1999–2002 shaped its institutions." },
      { to: "parliamentary-system", kind: "exemplifies" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Pakistan'", tier: 1 },
      { work: "Official text: Constitution of the Islamic Republic of Pakistan (1973, amended)", tier: 1 },
      { work: "CIA World Factbook archive — Pakistan", tier: 2 },
    ],
    history: [
      { year: 1956, headline: "First republic", lead: "The 1956 constitution declared an Islamic republic; it lasted two years before military rule.", facts: [ { label: "System", value: "Islamic republic" } ] },
      { year: 1973, headline: "The present constitution", lead: "A consensual federal parliamentary settlement, twice suspended and repeatedly amended, notably by the 18th Amendment of 2010 which deepened provincial devolution.", facts: [ { label: "System", value: "Federal parliamentary republic" } ] },
    ],
    addedOn: "2026-10-04",
  },
  {
    id: "bangladesh",
    kind: "country",
    name: "Bangladesh",
    status: "reviewed",
    lead:
      "Bangladesh is a unitary parliamentary republic in the Bengal delta, formed in 1971 out of East Pakistan after a war of independence fought in the name of Bengali language and nationhood. Its constitution of 1972 opened with the four founding principles — nationalism, socialism, democracy and secularism — later twice renegotiated, and its [[parliamentary-system]] was restored in 1991 after sixteen years of presidential rule. It is among the world's most densely populated states.",
    facts: [
      { label: "Founding Year", value: "1971", attestation: "well-attested", note: "Independence declared 26 March 1971 and secured in December 1971; the constitution took effect 16 December 1972." },
      { label: "Capital", value: "Dhaka", attestation: "well-attested" },
      { label: "Head of State", value: "President", attestation: "well-attested" },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested" },
      { label: "Legislature", value: "Unicameral", note: "The Jatiya Sangsad, or House of the Nation." },
      { label: "Electoral System", value: "First-past-the-post", note: "300 single-member constituencies, with reserved seats for women distributed by party strength." },
    ],
    extras: {
      capital: "Dhaka", foundingYear: 1971, headOfState: "President", headOfGovernment: "Prime Minister",
      legislature: "Unicameral", electoralSystem: "First-past-the-post",
      freedomStatus: "Partly Free", democracyBand: "Hybrid regime", foundingEra: "20th century",
      governmentType: "Unitary parliamentary republic", worldRegion: "South Asia",
    },
    relations: [
      { to: "parliamentary-system", kind: "exemplifies" },
      { to: "pakistan", kind: "spawned", note: "Formed from East Pakistan after the 1971 war." },
      { to: "decolonisation-movement", kind: "influenced-by", note: "Its liberation war drew on the language-and-nation politics the partition era left unresolved." },
      { to: "secularism", kind: "uses", note: "Secularism was a founding principle, twice amended and later restored." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Bangladesh'", tier: 1 },
      { work: "Official text: Constitution of the People's Republic of Bangladesh (1972, amended)", tier: 1 },
    ],
    history: [
      { year: 1972, headline: "Founding constitution", lead: "A Westminster-style parliamentary text with four founding principles.", facts: [ { label: "System", value: "Parliamentary republic" } ] },
      { year: 1991, headline: "Parliamentary restoration", lead: "The twelfth amendment restored the parliamentary form after sixteen years of presidential rule.", facts: [ { label: "System", value: "Restored parliamentary form" } ] },
    ],
    addedOn: "2026-10-05",
  },
  {
    id: "sri-lanka",
    kind: "country",
    name: "Sri Lanka",
    status: "reviewed",
    lead:
      "Sri Lanka is an island republic in the Indian Ocean whose political history turns on two constitutions: the Westminster-style text of 1948 under which Ceylon gained independence, and the 1978 constitution which created a powerful executive presidency on a French-influenced model. Universal suffrage came to the island in 1931, among the first in Asia, and [[sirimavo-bandaranaike]] became the world's first woman prime minister here in 1960. Long civil war between the state and Tamil separatists ended in 2009; the twentieth amendment of 2020 and the twenty-first of 2022 have repeatedly redrawn presidential power.",
    facts: [
      { label: "Founding Year", value: "1948", attestation: "well-attested", note: "Independence from Britain on 4 February 1948; the present constitution dates from 1978." },
      { label: "Capital", value: "Sri Jayawardenepura Kotte (legislative), Colombo (commercial)", attestation: "well-attested" },
      { label: "Head of State", value: "President", attestation: "well-attested", note: "An elected executive president since 1978." },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested" },
      { label: "Legislature", value: "Unicameral", note: "The Parliament of Sri Lanka." },
      { label: "Electoral System", value: "Proportional representation", note: "Open-list proportional representation in multi-member districts." },
    ],
    extras: {
      capital: "Sri Jayawardenepura Kotte", foundingYear: 1948, headOfState: "President", headOfGovernment: "Prime Minister",
      legislature: "Unicameral", electoralSystem: "Proportional representation",
      freedomStatus: "Partly Free", democracyBand: "Flawed democracy", foundingEra: "20th century",
      governmentType: "Unitary semi-presidential republic", worldRegion: "South Asia",
    },
    relations: [
      { to: "sirimavo-bandaranaike", kind: "founded", note: "The world's first woman prime minister led its governments three times." },
      { to: "semi-presidential-system", kind: "exemplifies", note: "The 1978 constitution installed an elected executive president beside a prime minister." },
      { to: "decolonisation-movement", kind: "participant-in", note: "Independence came by negotiated transfer in 1948." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Sri Lanka'", tier: 1 },
      { work: "Official text: Constitution of the Democratic Socialist Republic of Sri Lanka (1978, amended)", tier: 1 },
    ],
    history: [
      { year: 1931, headline: "Universal suffrage", lead: "The Donoughmore constitution gave the island universal adult suffrage, among the first in Asia.", facts: [ { label: "Franchise", value: "Universal adult suffrage" } ] },
      { year: 1978, headline: "Executive presidency", lead: "The second republican constitution created an elected executive presidency.", facts: [ { label: "Head of State", value: "Executive President" } ] },
    ],
    addedOn: "2026-10-06",
  },
  {
    id: "nepal",
    kind: "country",
    name: "Nepal",
    status: "reviewed",
    lead:
      "Nepal is a federal parliamentary republic in the Himalaya that abolished its 240-year-old monarchy in 2008 after a decade-long civil war and a people's movement. The constitution of 2015 — the fifth since 1948 — settled the country as a secular [[federal-republic]] of seven provinces with a unicameral federal parliament and an explicitly proportional electoral design. Its politics remain a contest among communist, congress and monarchical inheritances carried through an unusually young democratic order.",
    facts: [
      { label: "Founding Year", value: "1768 (unification); 2008 (republic)", attestation: "well-attested", note: "The republic was declared on 28 May 2008; the present constitution took effect 20 September 2015." },
      { label: "Capital", value: "Kathmandu", attestation: "well-attested" },
      { label: "Head of State", value: "President", attestation: "well-attested" },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested" },
      { label: "Legislature", value: "Bicameral", note: "The Federal Parliament: a House of Representatives and a National Assembly." },
      { label: "Electoral System", value: "Mixed (parallel)", note: "First-past-the-post seats alongside fully proportional list seats." },
    ],
    extras: {
      capital: "Kathmandu", foundingYear: 2008, headOfState: "President", headOfGovernment: "Prime Minister",
      legislature: "Bicameral", electoralSystem: "Mixed (parallel)",
      freedomStatus: "Partly Free", democracyBand: "Flawed democracy", foundingEra: "21st century",
      governmentType: "Federal parliamentary republic", worldRegion: "South Asia",
    },
    relations: [
      { to: "federal-republic", kind: "exemplifies" },
      { to: "parliamentary-system", kind: "exemplifies" },
      { to: "india", kind: "influenced-by", note: "The 2015 constitution follows India's federal parliamentary design closely.", },
      { to: "military-dictatorship", kind: "influenced-by", note: "Direct royal rule 2002–2006 galvanised the movement that ended the monarchy." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Nepal'", tier: 1 },
      { work: "Official text: Constitution of Nepal (2015)", tier: 1 },
    ],
    history: [
      { year: 1990, headline: "Constitutional monarchy", lead: "The people's movement of 1990 ended the panchayat party-less system and restored a parliamentary monarchy.", facts: [ { label: "System", value: "Constitutional monarchy" } ] },
      { year: 2008, headline: "Republic declared", lead: "The first constituent assembly voted to abolish the monarchy.", facts: [ { label: "Head of State", value: "President" } ] },
    ],
    addedOn: "2026-10-07",
  },
  {
    id: "bhutan",
    kind: "country",
    name: "Bhutan",
    status: "developing",
    lead:
      "Bhutan is a Himalayan constitutional monarchy that chose democracy from above: the fourth king devolved his own absolute power, initiating elections in 2008 under a constitution that makes the king head of state while a [[parliamentary-system]] government holds office. Its state philosophy of Gross National Happiness is written into the constitution's development goal, and the two-house parliament sits in Thimphu.",
    facts: [
      { label: "Founding Year", value: "1616 (state); 2008 (constitutional monarchy)", attestation: "well-attested", note: "The constitution took effect 18 July 2008." },
      { label: "Capital", value: "Thimphu", attestation: "well-attested" },
      { label: "Head of State", value: "King (Druk Gyalpo)", attestation: "well-attested" },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested" },
      { label: "Legislature", value: "Bicameral", note: "A National Council and a National Assembly." },
      { label: "Electoral System", value: "Mixed (two rounds)", note: "Primary and general rounds between registered parties, with constituency seats." },
    ],
    extras: {
      capital: "Thimphu", foundingYear: 2008, headOfState: "King (Druk Gyalpo)", headOfGovernment: "Prime Minister",
      legislature: "Bicameral", electoralSystem: "Mixed (two rounds)",
      freedomStatus: "Partly Free", democracyBand: "Hybrid regime", foundingEra: "21st century",
      governmentType: "Unitary parliamentary constitutional monarchy", worldRegion: "South Asia",
    },
    relations: [
      { to: "constitutional-monarchy", kind: "exemplifies" },
      { to: "parliamentary-system", kind: "exemplifies" },
      { to: "india", kind: "influenced-by", note: "Its parliamentary design parallels India's, with a two-round party system." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Bhutan'", tier: 1 },
      { work: "Official text: Constitution of the Kingdom of Bhutan (2008)", tier: 1 },
    ],
    addedOn: "2026-10-08",
  },
  {
    id: "myanmar",
    kind: "country",
    name: "Myanmar",
    status: "developing",
    lead:
      "Myanmar is a republic in mainland Southeast Asia whose constitutional record is dominated by the military. Independence from Britain in 1948 began parliamentary rule; coups in 1962, 1988 and 2021 each remade the state. The 2008 constitution, drafted under military supervision, reserved a quarter of parliamentary seats for the armed forces and gave them control of security ministries; the elected governments of 2011–2021 worked within that settlement until the February 2021 coup removed them.",
    facts: [
      { label: "Founding Year", value: "1948", attestation: "well-attested", note: "Independence from Britain on 4 January 1948; the 2008 constitution is the present text." },
      { label: "Capital", value: "Naypyidaw", attestation: "well-attested" },
      { label: "Head of State", value: "President", attestation: "attested", note: "Under the 2021 coup, executive authority has been exercised by a military council." },
      { label: "Head of Government", value: "Prime Minister / military council chair", attestation: "attested" },
      { label: "Legislature", value: "Bicameral", note: "The Union Assembly (Pyidaungsu Hluttaw) with two chambers, a quarter of whose seats are reserved for the military." },
      { label: "Electoral System", value: "First-past-the-post", note: "For the elected seats; a bloc of seats is appointed from the armed forces." },
    ],
    extras: {
      capital: "Naypyidaw", foundingYear: 1948, headOfState: "President", headOfGovernment: "Prime Minister",
      legislature: "Bicameral", electoralSystem: "First-past-the-post",
      freedomStatus: "Not Free", democracyBand: "Authoritarian regime", foundingEra: "20th century",
      governmentType: "Unitary republic under military-dominated constitution", worldRegion: "Southeast Asia",
    },
    relations: [
      { to: "military-dictatorship", kind: "influenced-by", note: "Military rule 1962–2011 and again from 2021." },
      { to: "decolonisation-movement", kind: "participant-in", note: "Independence followed the anti-colonial struggle of the 1930s and 1940s." },
      { to: "first-past-the-post", kind: "uses" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Myanmar'", tier: 1 },
      { work: "Official text: Constitution of the Republic of the Union of Myanmar (2008)", tier: 1 },
    ],
    history: [
      { year: 1948, headline: "Parliamentary independence", lead: "A Westminster-style union began in 1948; it fell to the first coup in 1962.", facts: [ { label: "System", value: "Parliamentary union" } ] },
      { year: 2008, headline: "Military-drafted constitution", lead: "The present text reserves military seats and offices and was approved under military rule.", facts: [ { label: "Military share", value: "25% of parliamentary seats" } ] },
    ],
    addedOn: "2026-10-09",
  },
  {
    id: "thailand",
    kind: "country",
    name: "Thailand",
    status: "reviewed",
    lead:
      "Thailand is a constitutional monarchy in mainland Southeast Asia whose politics have alternated between elected government and military intervention since the 1932 revolution ended absolute monarchy. The country has lived under some twenty constitutions; the 2017 text, drafted under military rule, appointed a fully nominated senate and shaped the elected governments that followed. A [[parliamentary-system]] cabinet answerable to an elected House of Representatives sits beside a palace institution whose political weight the constitution itself shields.",
    facts: [
      { label: "Founding Year", value: "1231 (traditional); 1932 (constitutional order)", attestation: "well-attested", note: "The constitutional monarchy dates from the revolution of 24 June 1932." },
      { label: "Capital", value: "Bangkok", attestation: "well-attested" },
      { label: "Head of State", value: "King", attestation: "well-attested" },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested" },
      { label: "Legislature", value: "Bicameral", note: "A House of Representatives and a Senate; under the 2017 constitution the senate was initially appointed." },
      { label: "Electoral System", value: "Mixed", note: "Constituency seats plus proportional list seats under the 2017 rules." },
    ],
    extras: {
      capital: "Bangkok", foundingYear: 1932, headOfState: "King", headOfGovernment: "Prime Minister",
      legislature: "Bicameral", electoralSystem: "Mixed",
      freedomStatus: "Partly Free", democracyBand: "Hybrid regime", foundingEra: "Medieval",
      governmentType: "Unitary parliamentary constitutional monarchy", worldRegion: "Southeast Asia",
    },
    relations: [
      { to: "constitutional-monarchy", kind: "exemplifies" },
      { to: "military-dictatorship", kind: "influenced-by", note: "Repeated military governments shaped the constitutional sequence." },
      { to: "parliamentary-system", kind: "exemplifies" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Thailand'", tier: 1 },
      { work: "Official text: Constitution of the Kingdom of Thailand (2017)", tier: 1 },
    ],
    history: [
      { year: 1932, headline: "Constitutional revolution", lead: "A small group of officials and officers ended the absolute monarchy.", facts: [ { label: "System", value: "Constitutional monarchy" } ] },
      { year: 2017, headline: "Military-era constitution", lead: "The present text was drafted under, and for a time implemented by, a military council.", facts: [ { label: "Senate", value: "Initially appointed" } ] },
    ],
    addedOn: "2026-10-10",
  },
  {
    id: "vietnam",
    kind: "country",
    name: "Vietnam",
    status: "reviewed",
    lead:
      "Vietnam is a unitary one-party republic on the eastern rim of mainland Southeast Asia, governed by the Communist Party of Vietnam under a [[one-party-state]] modelled on Leninist lines. Independence was declared in 1945; the country was divided at the 17th parallel in 1954 and reunified in 1976 under the present republic. Renovation policies from 1986 opened the economy to markets while the party retained its constitutional monopoly on political leadership.",
    facts: [
      { label: "Founding Year", value: "1945 (declaration); 1976 (reunified republic)", attestation: "well-attested", note: "Independence was declared 2 September 1945; reunification completed in 1976." },
      { label: "Capital", value: "Hanoi", attestation: "well-attested" },
      { label: "Head of State", value: "President", attestation: "well-attested" },
      { label: "Head of Government", value: "Prime Minister", attestation: "well-attested" },
      { label: "Legislature", value: "Unicameral", note: "The National Assembly, the only body with constitutional and legislative power under the constitution." },
      { label: "Electoral System", value: "Party-vetted candidacy", note: "Elections by constituency ballot from a candidate list substantially controlled by the party's Fatherland Front." },
    ],
    extras: {
      capital: "Hanoi", foundingYear: 1976, headOfState: "President", headOfGovernment: "Prime Minister",
      legislature: "Unicameral", electoralSystem: "Party-vetted candidacy",
      freedomStatus: "Not Free", democracyBand: "Authoritarian regime", foundingEra: "20th century",
      governmentType: "Unitary one-party socialist republic", worldRegion: "Southeast Asia",
    },
    relations: [
      { to: "one-party-state", kind: "exemplifies" },
      { to: "decolonisation-movement", kind: "participant-in", note: "Independence declared at the end of the Second World War against French rule." },
      { to: "ho-chi-minh", kind: "founded", note: "Declared independence in 1945 and led the state until 1969." },
      { to: "marxism-leninism", kind: "uses" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Vietnam'", tier: 1 },
      { work: "Official text: Constitution of the Socialist Republic of Vietnam (2013)", tier: 1 },
    ],
    history: [
      { year: 1945, headline: "Independence declared", lead: "The Democratic Republic of Vietnam was proclaimed in Hanoi.", facts: [ { label: "System", value: "Declared republic" } ] },
      { year: 1976, headline: "Reunification", lead: "North and south merged into the Socialist Republic after 1975.", facts: [ { label: "System", value: "One-party socialist republic" } ] },
    ],
    addedOn: "2026-10-11",
  },
];
