// ─── Political Atlas — Concepts (14 entries) ────────────────────────────────
// Authored per SPEC.md: original prose, settled facts only, British English.

import type { Entity } from "./types";

export const concepts: Entity[] = [
  {
    id: "sovereignty",
    kind: "concept",
    name: "Sovereignty",
    status: "verified",
    lead:
      "Sovereignty is the claim that a political body holds supreme authority within its territory, answerable to no higher temporal power. Jean Bodin gave the idea its classical shape in 1576, holding sovereignty to be absolute and indivisible, and [[hobbes]] later made such an authority the price of escaping the state of nature. Where that supremacy properly resides — with a monarch, a parliament or the people — is the quarrel that produced [[popular-sovereignty]] and its rivals, and the modern order of equal states rests on it through [[un-charter]].",
    facts: [
      { label: "Core Claim", value: "Supreme authority over a territory and its people, answerable to no higher temporal power", attestation: "well-attested" },
      { label: "First Articulated", value: "Jean Bodin, Six Books of the Commonwealth (1576)", attestation: "well-attested", note: "Bodin defined sovereignty as absolute and indivisible; Hobbes's Leviathan (1651) radicalised the account." },
      { label: "Canonical Thinkers", value: "Jean Bodin, Thomas Hobbes, Max Weber", attestation: "well-attested", note: "Weber defined the modern state by its claim to a monopoly of legitimate force within a territory." },
      { label: "Where It Lives In Practice", value: "Article 2(1) of the United Nations Charter — the sovereign equality of members", attestation: "well-attested", note: "The Montevideo Convention (1933) lists the standard capacities of the sovereign state in international law." },
      { label: "Classic Contest", value: "Divisible or indivisible? Federal unions split authority between levels of government, against the classical doctrine", attestation: "well-attested", note: "The quarrel runs from Bodin through the American founding debates to modern federal theory." },
      { label: "Distinguishing Feature", value: "Legal supremacy rather than mere strength — a sovereign may be weak yet still answer to none" },
    ],
    relations: [
      { to: "popular-sovereignty", kind: "precursor-of", note: "The classical doctrine located supremacy in the ruler's person; later writers moved it to the people." },
      { to: "divine-right-of-kings", kind: "influenced", note: "Bodin's indivisible, absolute authority supplied the vocabulary of royalist claims in England and France." },
      { to: "un-charter", kind: "cited-by", note: "Article 2(1) rests the organisation on the sovereign equality of its members." },
      { to: "magna-carta", kind: "contrasts-with", note: "The Charter of 1215 fenced supreme authority in with law; Bodin later defined that authority as absolute." },
    ],
    sources: [
      { work: "Stanford Encyclopedia of Philosophy — 'Sovereignty'", tier: 1 },
      { work: "Encyclopædia Britannica — 'Sovereignty'", tier: 1 },
      { work: "Jean Bodin — Six Books of the Commonwealth (1576)", tier: 1 },
    ],
    addedOn: "2026-10-01",
  },

  {
    id: "popular-sovereignty",
    kind: "concept",
    name: "Popular Sovereignty",
    status: "reviewed",
    lead:
      "Popular sovereignty holds that supreme political authority rests with the people, who lend it to governments and may take it back. [[john-locke]] argued that rulers hold power on trust and forfeit it on breach, and [[rousseau]] that legitimate law can only express the people's own general will. The doctrine keeps [[sovereignty]]'s central question but changes its answer: supremacy remains, yet its seat moves from crown to citizen body.",
    facts: [
      { label: "Core Claim", value: "The people are the source of political authority, which government holds on trust and may forfeit", attestation: "well-attested" },
      { label: "First Articulated", value: "John Locke, Two Treatises of Government (1689)", attestation: "attested", note: "Consent theories circulated earlier in the seventeenth century; Locke gave the doctrine its classic statement." },
      { label: "Canonical Thinkers", value: "John Locke, Jean-Jacques Rousseau, Thomas Paine", attestation: "well-attested" },
      { label: "Where It Lives In Practice", value: "Preamble of the United States Constitution ('We the People'); Article 3 of the French Declaration of the Rights of Man (1789)", attestation: "well-attested", note: "Article 3 places the principle of all sovereignty 'essentially in the nation'." },
      { label: "Classic Contest", value: "Direct or mediated? Whether 'the people' can rule themselves or only through elected representatives", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Locates authority in a corporate people rather than in any office or person" },
    ],
    relations: [
      { to: "divine-right-of-kings", kind: "contrasts-with", note: "Opposite answers to the question of where supreme authority resides." },
      { to: "declaration-of-independence", kind: "cited-by", note: "The Declaration derives governments' just powers from the consent of the governed." },
      { to: "us-constitution", kind: "shaped", note: "'We the People' writes the doctrine into the founding instrument." },
      { to: "social-contract", kind: "influenced-by", note: "Contract theory's consent logic matured into the claim that the people themselves are sovereign." },
      { to: "french-revolution", kind: "shaped", note: "The Declaration of the Rights of Man made national sovereignty the revolution's principle." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Popular sovereignty'", tier: 1 },
      { work: "John Locke — Two Treatises of Government (1689)", tier: 1 },
      { work: "Official text: Constitution of the United States", tier: 1 },
    ],
    addedOn: "2026-10-03",
  },

  {
    id: "legitimacy",
    kind: "concept",
    name: "Legitimacy",
    status: "reviewed",
    lead:
      "Legitimacy is the belief that a regime's power is rightful, so that obedience follows from conviction rather than fear. Max Weber sorted its grounds into traditional, charismatic and legal-rational authority, and modern states mostly stand on the last, tying their claim to [[rule-of-law]] and to consent. [[popular-sovereignty]] supplies today's answer to what deserves acceptance, while older doctrines — sacral kingship, the [[mandate-of-heaven]] — show that the question long predates the ballot.",
    facts: [
      { label: "Core Claim", value: "Power is rightful when those subject to it accept it as such; authority rests on belief, not force alone", attestation: "well-attested" },
      { label: "First Articulated", value: "Max Weber's typology of traditional, charismatic and legal-rational authority, published in Economy and Society (1922)", attestation: "well-attested", note: "Weber systematised the sociology of legitimate domination." },
      { label: "Canonical Thinkers", value: "Max Weber, David Hume, Niccolò Machiavelli", attestation: "well-attested", note: "Hume's essay 'Of the Original Contract' (1748) argued that governments rest on opinion as much as consent." },
      { label: "Where It Lives In Practice", value: "Constitutional preambles announce their own authority's source, from 'We the People' to the French people's solemn proclamation of 1958", attestation: "well-attested" },
      { label: "Classic Contest", value: "Sociological versus normative: what people accept, versus what they ought to accept", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Exists only in the eyes of the governed — legality can be proved in court; legitimacy cannot" },
    ],
    relations: [
      { to: "popular-sovereignty", kind: "influenced-by", note: "The consent doctrine is the modern West's dominant answer to what makes rule rightful." },
      { to: "divine-right-of-kings", kind: "influenced-by", note: "Sacral kingship is one of the oldest claims to rightful rule." },
      { to: "rule-of-law", kind: "influenced-by", note: "Legal-rational authority grounds legitimacy in procedure rather than person." },
      { to: "referendum", kind: "uses", note: "Plebiscites seek the governed's assent directly." },
    ],
    sources: [
      { work: "Stanford Encyclopedia of Philosophy — 'Political Legitimacy'", tier: 1 },
      { work: "Max Weber — Economy and Society (1922)", tier: 1 },
      { work: "David Hume — 'Of the Original Contract' (1748)", tier: 1 },
    ],
    addedOn: "2026-10-06",
  },

  {
    id: "separation-of-powers",
    kind: "concept",
    name: "Separation of Powers",
    status: "reviewed",
    lead:
      "The separation of powers distributes legislative, executive and judicial functions among distinct branches, each equipped to check the others. [[montesquieu]] systematised the doctrine in 1748, warning that the concentration of power breeds oppression, and the framers of the [[us-constitution]] built it into the republic's architecture. In Publius's essays the doctrine became 'checks and balances': the [[federalist-papers]] accepted that some blending of functions is the practical price of mutual control.",
    facts: [
      { label: "Core Claim", value: "Legislative, executive and judicial functions should sit in separate hands, each checking the others", attestation: "well-attested" },
      { label: "First Articulated", value: "Montesquieu, De l'esprit des lois (1748)", attestation: "well-attested", note: "Polybius had praised Rome's mixed constitution and Locke divided legislative from executive; Montesquieu added the judicial as a distinct power." },
      { label: "Canonical Thinkers", value: "Montesquieu, John Locke, James Madison", attestation: "well-attested" },
      { label: "Where It Lives In Practice", value: "Articles I–III of the United States Constitution", attestation: "well-attested", note: "Three articles, three branches — the doctrine's most famous institutional form." },
      { label: "Classic Contest", value: "Pure separation versus checks and balances; the Federalist accepted that some blending of departments is unavoidable", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Organises the machinery of state by function, expecting ambition to counteract ambition" },
    ],
    relations: [
      { to: "montesquieu", kind: "influenced-by", note: "De l'esprit des lois (1748) gave the tripartite doctrine its classic form." },
      { to: "john-locke", kind: "influenced-by", note: "Locke's division of legislative and executive functions preceded Montesquieu's fuller account." },
      { to: "us-constitution", kind: "shaped", note: "Articles I–III give the doctrine its most famous institutional form." },
      { to: "federalist-papers", kind: "cited-by", note: "Federalist No. 47 and No. 51 defend the division as the safeguard of liberty." },
      { to: "parliamentary-system", kind: "contrasts-with", note: "Parliamentary government fuses legislature and executive; the doctrine expects them apart." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Separation of powers'", tier: 1 },
      { work: "Montesquieu — De l'esprit des lois (1748)", tier: 1 },
      { work: "The Federalist Papers (1787–1788)", tier: 1 },
    ],
    addedOn: "2026-10-08",
  },

  {
    id: "rule-of-law",
    kind: "concept",
    name: "Rule of Law",
    status: "verified",
    lead:
      "The rule of law requires that power be exercised through general, published, prospective rules applied equally by independent courts — government bound by law, not merely wielding it. Its roots reach to [[magna-carta]], and A.V. Dicey's classic account wove it from [[habeas-corpus]], equality before the law and the absence of wide discretionary power. Because the doctrine disciplines the manner of rule rather than its source, the standing quarrel runs between formal compliance and thicker demands that law also secure rights and justice.",
    facts: [
      { label: "Core Claim", value: "Government must act through general, prospective, public rules applied equally by independent courts", attestation: "well-attested" },
      { label: "First Articulated", value: "Samuel Rutherford's Lex, Rex (1644) used the phrase; A.V. Dicey fixed the modern doctrine (1885)", attestation: "attested", note: "The claim that law binds the king runs back to Magna Carta (1215) and the medieval jurists." },
      { label: "Canonical Thinkers", value: "A.V. Dicey, Edward Coke, Joseph Raz", attestation: "well-attested", note: "Coke called law the 'golden metwand' by which all causes are tried; Raz offered the modern formalist checklist." },
      { label: "Where It Lives In Practice", value: "Writs such as habeas corpus; Article 6 of the European Convention on Human Rights; the basic-structure doctrine of Indian constitutional law", attestation: "well-attested", note: "India's Supreme Court has treated the rule of law as part of the unamendable basic structure since Kesavananda Bharati (1973)." },
      { label: "Classic Contest", value: "Formal versus substantive: is compliance with procedure enough, or must law also secure rights and justice?", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Disciplines the manner of rule, whoever rules — compatible in principle with monarchy or republic" },
    ],
    relations: [
      { to: "magna-carta", kind: "cited-by", note: "The Charter of 1215 — law above the king — is the tradition's founding citation." },
      { to: "habeas-corpus", kind: "uses", note: "The writ against arbitrary detention is the doctrine's most concrete working tool." },
      { to: "divine-right-of-kings", kind: "contrasts-with", note: "Rule by law against rule by the king's personal will — Coke's stand against James I." },
      { to: "european-convention-on-human-rights", kind: "cited-by", note: "Article 6 guarantees a fair and public hearing within a reasonable time." },
      { to: "constitution-of-india", kind: "cited-by", note: "Indian courts read the rule of law into the Constitution's unamendable basic structure." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Rule of law'", tier: 1 },
      { work: "A.V. Dicey — Introduction to the Study of the Law of the Constitution (1885)", tier: 1 },
      { work: "World Justice Project — Rule of Law Index", tier: 2 },
    ],
    addedOn: "2026-10-11",
  },

  {
    id: "social-contract",
    kind: "concept",
    name: "Social Contract",
    status: "reviewed",
    lead:
      "Social contract theories justify political authority by consent: individuals leave a hypothetical state of nature and agree to live under common rules. [[hobbes]] traded near-absolute obedience for peace, [[john-locke]] limited government to a revocable trust, and [[rousseau]] made obedience to the general will an act of collective self-rule. The doctrine's logic flows into [[popular-sovereignty]] and gave the revolutionary age its founding vocabulary.",
    facts: [
      { label: "Core Claim", value: "Authority is justified by agreement: individuals consent to form a commonwealth and be bound by its rules", attestation: "well-attested" },
      { label: "First Articulated", value: "Thomas Hobbes, Leviathan (1651)", attestation: "well-attested", note: "Locke's Two Treatises (1689) and Rousseau's Du contrat social (1762) completed the classic trio." },
      { label: "Canonical Thinkers", value: "Thomas Hobbes, John Locke, Jean-Jacques Rousseau", attestation: "well-attested" },
      { label: "Where It Lives In Practice", value: "The Declaration of Independence (1776) grounds government in the consent of the governed", attestation: "well-attested" },
      { label: "Classic Contest", value: "How much is surrendered? Hobbes transfers nearly all judgement to the sovereign; Locke keeps a trust revocable on breach", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Justifies rule by consent rather than by tradition, divine appointment or conquest" },
    ],
    relations: [
      { to: "hobbes", kind: "influenced-by", note: "Leviathan (1651) grounds peace in a covenant that institutes an absolute sovereign." },
      { to: "john-locke", kind: "influenced-by", note: "Locke's government by trust, dissolvable on breach, is the contract's moderate wing." },
      { to: "rousseau", kind: "influenced-by", note: "Du contrat social (1762) makes the general will the contract's engine." },
      { to: "divine-right-of-kings", kind: "contrasts-with", note: "Contract justifies rule by consent; divine right justifies it by Heaven's appointment." },
      { to: "popular-sovereignty", kind: "produced", note: "Consent theory matured into the claim that the people themselves are sovereign." },
    ],
    sources: [
      { work: "Stanford Encyclopedia of Philosophy — 'Contractarianism'", tier: 1 },
      { work: "Thomas Hobbes — Leviathan (1651)", tier: 1 },
      { work: "Jean-Jacques Rousseau — Du contrat social (1762)", tier: 1 },
    ],
    addedOn: "2026-10-14",
  },

  {
    id: "self-determination",
    kind: "concept",
    name: "Self-Determination",
    status: "reviewed",
    lead:
      "Self-determination is the principle that a people may freely choose its political status and pursue its own development. Woodrow Wilson carried the phrase onto the world stage in 1918, the [[un-charter]] wrote it into positive law, and it became the legal engine of the [[decolonisation-movement]]. Its sharpest edge remains the tension with the territorial integrity of existing states — the very shield of [[sovereignty]].",
    facts: [
      { label: "Core Claim", value: "A people may freely determine its political status and pursue its economic, social and cultural development", attestation: "well-attested" },
      { label: "First Articulated", value: "Woodrow Wilson's Fourteen Points (January 1918)", attestation: "attested", note: "The term circulated earlier among socialist writers, including Lenin, before Wilson globalised it." },
      { label: "Canonical Thinkers", value: "Woodrow Wilson, Vladimir Lenin", attestation: "well-attested", note: "Rival champions: Wilson spoke for nations under empires, Lenin for nations under capitalist domination." },
      { label: "Where It Lives In Practice", value: "Article 1(2) of the United Nations Charter; common Article 1 of the two 1966 human rights covenants", attestation: "well-attested", note: "General Assembly Resolution 1514 (1960) carried the principle into the decolonisation era." },
      { label: "Classic Contest", value: "Peoples' self-determination against the territorial integrity of existing states", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "A principle of peoples rather than of governments — it can unsettle the very states sovereignty protects" },
    ],
    relations: [
      { to: "decolonisation-movement", kind: "spawned", note: "The principle supplied the movement's legal vocabulary, from Resolution 1514 (1960) onward." },
      { to: "un-charter", kind: "cited-by", note: "Article 1(2) names friendly relations among nations based on equal rights and self-determination of peoples." },
      { to: "nationalism", kind: "influenced-by", note: "Nineteenth-century nationalist thought prepared the claims the principle later legalised." },
      { to: "indian-independence", kind: "shaped", note: "The independence demand was framed in the principle's language." },
      { to: "treaty-of-versailles", kind: "shaped", note: "The 1919 settlement redrew Central European borders in the principle's name, though unevenly applied." },
    ],
    sources: [
      { work: "Official text: Charter of the United Nations (1945)", tier: 1 },
      { work: "UN General Assembly — Resolution 1514 (1960)", tier: 1 },
      { work: "Antonio Cassese — Self-Determination of Peoples: A Legal Reappraisal (1995)", tier: 1 },
    ],
    addedOn: "2026-10-16",
  },

  {
    id: "mandate-of-heaven",
    kind: "concept",
    name: "Mandate of Heaven",
    status: "reviewed",
    lead:
      "The mandate of heaven is the classical Chinese doctrine that Heaven grants the right to rule to the virtuous and withdraws it from the corrupt. The Zhou dynasty proclaimed it about 1046 BCE to justify its conquest of the Shang, and [[confucius]] and Mencius elaborated it into a standing licence for judgement: good rule proves the grant, and rebellion against a dynasty that has forfeited its virtue becomes lawful. Unlike European [[divine-right-of-kings]], the mandate is conditional and transferable, and it framed dynastic change in [[china]] for three millennia.",
    facts: [
      { label: "Core Claim", value: "Heaven grants the right to rule to the virtuous and withdraws it from the corrupt; dynastic change is therefore lawful", attestation: "well-attested" },
      { label: "First Articulated", value: "The Zhou conquest of the Shang, c. 1046 BCE", attestation: "attested", note: "The Zhou justified the conquest as Heaven's transfer of the mandate; the doctrine recurs across the dynastic histories to 1912." },
      { label: "Canonical Thinkers", value: "Confucius, Mencius, Dong Zhongshu", attestation: "well-attested", note: "Mencius read Heaven's verdict in the people's reception of a ruler." },
      { label: "Where It Lives In Practice", value: "Imperial statecraft from the Zhou to the Qing (c. 1046 BCE–1912)", attestation: "well-attested", note: "Rebellions and dynastic falls were read after the fact as Heaven's revocation." },
      { label: "Classic Contest", value: "Can the mandate be known in advance, or only after success? Mencius pointed to the people's acceptance as the evidence", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Conditional and transferable legitimacy — the grant depends on virtue, not on blood" },
    ],
    relations: [
      { to: "confucius", kind: "influenced-by", note: "Confucian teaching made the ruler's virtue the pivot of Heaven's favour." },
      { to: "divine-right-of-kings", kind: "contrasts-with", note: "Both sacralise rule; the mandate revokes on vice, divine right never does." },
      { to: "china", kind: "shaped", note: "The doctrine framed dynastic succession, rebellion and legitimacy in China for three millennia." },
      { to: "legitimacy", kind: "part-of", note: "The mandate is China's classical account of what makes rule rightful." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Mandate of Heaven'", tier: 1 },
      { work: "Mencius — Mencius (compiled c. 3rd century BCE)", tier: 1 },
      { work: "Book of Documents (Shujing) — classical Chinese text", tier: 1 },
    ],
    addedOn: "2026-10-19",
  },

  {
    id: "divine-right-of-kings",
    kind: "concept",
    name: "Divine Right of Kings",
    status: "reviewed",
    lead:
      "The divine right of kings holds that monarchs receive authority directly from God and answer to no earthly institution. James VI of Scotland and I of England pressed the doctrine in print, and Bishop Bossuet preached its French form; both leaned on the new language of [[sovereignty]] to argue that royal power, like divine power, is indivisible. The [[glorious-revolution]] and the [[english-bill-of-rights]] settled the English argument the other way, subordinating the crown to Parliament.",
    facts: [
      { label: "Core Claim", value: "Monarchs receive authority directly from God and answer to no earthly institution", attestation: "well-attested" },
      { label: "First Articulated", value: "James VI of Scotland and I of England, The Trew Law of Free Monarchies (1598)", attestation: "well-attested", note: "Bishop Jacques-Bénigne Bossuet's Politics Drawn from the Very Words of Holy Scripture gave the French version." },
      { label: "Canonical Thinkers", value: "James VI and I, Robert Filmer, Jacques-Bénigne Bossuet", attestation: "well-attested" },
      { label: "Where It Lives In Practice", value: "Coronation rites — anointing, acclamation and oath in England and France", attestation: "attested", note: "The ritual grammar of sacral kingship long predates the doctrine's early modern statement." },
      { label: "Classic Contest", value: "Romans 13: did scripture forbid all resistance, or only resistance to godly rulers? Reformation resisters chose the second reading", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Hereditary, unconditional, unaccountable — the mirror image of the mandate of heaven" },
    ],
    relations: [
      { to: "social-contract", kind: "contrasts-with", note: "Divine appointment versus human consent as the source of authority." },
      { to: "sovereignty", kind: "influenced-by", note: "Bodin's indivisible sovereignty gave royalist writers a legal vocabulary for absolute power." },
      { to: "absolute-monarchy", kind: "influenced", note: "The doctrine supplied Europe's absolute monarchies their public justification." },
      { to: "english-bill-of-rights", kind: "contrasts-with", note: "The 1689 settlement made Parliament, not Heaven's anointed, master of the succession." },
      { to: "mandate-of-heaven", kind: "contrasts-with", note: "Both sacralise rule; the Chinese grant is conditional and revocable, the European claim is not." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Divine right of kings'", tier: 1 },
      { work: "Robert Filmer — Patriarcha (1680)", tier: 1 },
      { work: "James VI and I — The Trew Law of Free Monarchies (1598)", tier: 1 },
    ],
    addedOn: "2026-10-21",
  },

  {
    id: "shura",
    kind: "concept",
    name: "Shura",
    status: "reviewed",
    lead:
      "Shura is the Qur'anic principle that communities settle their affairs by mutual consultation. Practised by the Prophet and the early caliphs and made a duty of rulers by classical jurists, it now anchors consultative institutions from [[saudi-arabia]]'s Majlis al-Shura to Article 7 of [[iran]]'s constitution. Whether consultation binds a ruler as an election would, or merely advises him, is the live quarrel — and it keeps shura in conversation with, though not identical to, [[popular-sovereignty]].",
    facts: [
      { label: "Core Claim", value: "Public affairs should be conducted by mutual consultation, as the Qur'an directs", attestation: "well-attested" },
      { label: "First Articulated", value: "The Qur'an (7th century), verses 3:159 and 42:38", attestation: "well-attested", note: "One verse urges the Prophet to consult the community; the other praises those who settle their affairs by consultation." },
      { label: "Canonical Thinkers", value: "Al-Mawardi, Ibn Taymiyya, Rashid Rida", attestation: "attested", note: "Al-Mawardi codified the classical duties of rulers; Rida pressed shura into modern constitutional argument." },
      { label: "Where It Lives In Practice", value: "Saudi Arabia's Majlis al-Shura under the 1992 Basic Law; Article 7 of Iran's 1979 Constitution", attestation: "well-attested", note: "Both name the Qur'anic duty of consultation — one in an appointed council, one in the state's organising principle." },
      { label: "Classic Contest", value: "Binding or advisory? Classical jurists made consultation recommendatory; modern reformers read it as a duty the ruler cannot refuse", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Consultation as religious duty rather than popular sovereignty — authority remains God's while rulers must listen" },
    ],
    relations: [
      { to: "popular-sovereignty", kind: "contrasts-with", note: "Consultation obliges rulers to listen; popular sovereignty lets subjects rule." },
      { to: "saudi-arabia", kind: "shaped", note: "The 1992 Basic Law names consultation a duty of the ruler and provides an appointed Majlis al-Shura." },
      { to: "iran", kind: "shaped", note: "Article 7 of the 1979 Constitution rests the state's organs on the Qur'anic verse of consultation." },
      { to: "representation", kind: "contrasts-with", note: "Classical shura advises a ruler who already holds authority; representation creates authority through election." },
    ],
    sources: [
      { work: "Qur'an — verses 3:159 and 42:38", tier: 1 },
      { work: "Al-Mawardi — The Ordinances of Government (11th century)", tier: 1 },
      { work: "Encyclopædia Britannica — 'Saudi Arabia'", tier: 2 },
    ],
    addedOn: "2026-10-24",
  },

  {
    id: "consociationalism",
    kind: "concept",
    name: "Consociationalism",
    status: "reviewed",
    lead:
      "Consociationalism is a design for democracy in deeply divided societies: grand coalitions of segmental elites, proportional shares of office and resources, autonomy for each community and mutual vetoes to calm fear. Arend Lijphart built the model on the Netherlands' pillarised politics and tested it against cases such as [[belgium]] and Lebanon. It accepts division as permanent where majoritarian designs, exemplified by [[first-past-the-post]], hope to dissolve it — and its machinery survives in power-sharing settlements from Brussels to Belfast.",
    facts: [
      { label: "Core Claim", value: "Deeply divided societies can govern stably through elite grand coalitions, proportionality, segmental autonomy and mutual vetoes", attestation: "well-attested" },
      { label: "First Articulated", value: "Arend Lijphart, The Politics of Accommodation (1968)", attestation: "well-attested", note: "Democracy in Plural Societies (1977) generalised the model beyond the Dutch case." },
      { label: "Canonical Thinkers", value: "Arend Lijphart, Gerhard Lehmbruch", attestation: "well-attested", note: "Lehmbruch developed the parallel idea of 'Proporzdemokratie'." },
      { label: "Where It Lives In Practice", value: "Belgium's community and region reforms from 1970; Lebanon's confessional distribution of offices under the 1943 National Pact; Northern Ireland's Good Friday Agreement (1998)", attestation: "well-attested" },
      { label: "Classic Contest", value: "Consociation versus integration: Lijphart kept segments apart, Horowitz demanded incentives that make moderation pay", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Works with division rather than against it — stability is engineered among elites, not grown from below" },
    ],
    relations: [
      { to: "netherlands", kind: "influenced-by", note: "Lijphart built the model on Dutch pillarisation (verzuiling)." },
      { to: "proportional-representation", kind: "uses", note: "Proportionality is one of the doctrine's four defining devices." },
      { to: "belgium", kind: "shaped", note: "Belgium's community-based reforms from 1970 reorganised the state along consociational lines." },
      { to: "first-past-the-post", kind: "contrasts-with", note: "Winner-take-all majoritarianism is the doctrine's declared rival." },
      { to: "multiculturalism", kind: "contrasts-with", note: "One shares state power among institutionalised segments; the other asks the wider public culture to accommodate difference." },
    ],
    sources: [
      { work: "Arend Lijphart — Democracy in Plural Societies (1977)", tier: 1 },
      { work: "Arend Lijphart — Patterns of Democracy (1999)", tier: 1 },
      { work: "John McGarry and Brendan O'Leary — The Politics of Ethnic Conflict Regulation (1993)", tier: 2 },
    ],
    addedOn: "2026-10-27",
  },

  {
    id: "civil-liberties",
    kind: "concept",
    name: "Civil Liberties",
    status: "reviewed",
    lead:
      "Civil liberties are the freedoms individuals hold against the state — expression, conscience, assembly and fair process chief among them — enforceable in law rather than left to official grace. English charters seeded the tradition, the [[us-bill-of-rights]] fixed its famous list, and the [[european-convention-on-human-rights]] made the liberties justiciable across a continent. They belong to the wider inheritance of [[liberalism]], and their boundary against the state's duties of order and equality is the standing quarrel of free societies.",
    facts: [
      { label: "Core Claim", value: "Individuals hold freedoms the state may not invade — expression, conscience, assembly and fair process chief among them", attestation: "well-attested" },
      { label: "First Articulated", value: "From Magna Carta (1215) through the English Bill of Rights (1689) to the Virginia Declaration of Rights (1776)", attestation: "well-attested", note: "The United States Bill of Rights (1791) fixed the modern list." },
      { label: "Canonical Thinkers", value: "John Locke, John Stuart Mill", attestation: "well-attested", note: "Mill's On Liberty (1859) drew the boundary against the tyranny of the majority." },
      { label: "Where It Lives In Practice", value: "First Amendment to the United States Constitution; Articles 8–11 of the European Convention on Human Rights; Articles 18–20 of the Universal Declaration of Human Rights", attestation: "well-attested" },
      { label: "Classic Contest", value: "Liberty against order and equality: when may expression be limited, and who decides?", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Rights held against the state — distinct from civil rights, which claim equal treatment within it" },
    ],
    relations: [
      { to: "us-bill-of-rights", kind: "cited-by", note: "The first ten amendments are the doctrine's best-known codification." },
      { to: "european-convention-on-human-rights", kind: "cited-by", note: "Articles 8–11 list the liberties and allow individuals to sue states for breach." },
      { to: "liberalism", kind: "part-of", note: "Freedom from state intrusion is liberalism's core demand." },
      { to: "habeas-corpus", kind: "uses", note: "Due-process liberties work through writs such as habeas corpus." },
      { to: "us-civil-rights-movement", kind: "influenced", note: "Expression and assembly protections carried the movement, which in turn enlarged the liberties' meaning." },
    ],
    sources: [
      { work: "Official text: Universal Declaration of Human Rights (1948)", tier: 1 },
      { work: "Council of Europe — European Convention on Human Rights (1950)", tier: 1 },
      { work: "Stanford Encyclopedia of Philosophy — 'Rights'", tier: 1 },
    ],
    addedOn: "2026-10-31",
  },

  {
    id: "representation",
    kind: "concept",
    name: "Representation",
    status: "reviewed",
    lead:
      "Representation is the practice of one body acting for another: citizens choose agents who legislate on their behalf and answer for it at the next election. [[edmund-burke]] fixed the classic dilemma in 1774 — a member owes his constituents his judgement, not obedience to their instructions — and Hanna Pitkin later mapped the term's many senses. The machinery varies, from [[first-past-the-post]] districts to [[proportional-representation]] lists, but the durable question is the same: accountable to whom, and for what?",
    facts: [
      { label: "Core Claim", value: "One body of persons acts for another, authorised by election and answerable to the represented", attestation: "well-attested" },
      { label: "First Articulated", value: "Medieval parliaments sent elected proxies to the crown; Edmund Burke's Speech to the Electors of Bristol (1774) fixed the modern vocabulary", attestation: "attested", note: "Burke told the Bristol voters that his judgement outranked their instructions." },
      { label: "Canonical Thinkers", value: "Edmund Burke, John Stuart Mill, Hanna Pitkin", attestation: "well-attested", note: "Pitkin's The Concept of Representation (1967) mapped the term's many senses." },
      { label: "Where It Lives In Practice", value: "Article I, Section 2 of the United States Constitution; the European Parliament, directly elected since 1979", attestation: "well-attested" },
      { label: "Classic Contest", value: "Trustee or delegate? Burke chose judgement; the Chartist movement demanded the vote that would enforce instructions", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Runs on authorisation and accountability rather than resemblance, though 'descriptive representation' argues that similarity matters" },
    ],
    relations: [
      { to: "edmund-burke", kind: "influenced-by", note: "Burke's Bristol speech fixed the trustee–delegate vocabulary." },
      { to: "universal-suffrage", kind: "influenced-by", note: "The widening franchise transformed whom representatives must answer to." },
      { to: "proportional-representation", kind: "uses", note: "PR seeks to mirror the electorate's party preferences in the assembly." },
      { to: "first-past-the-post", kind: "uses", note: "Single-member districts tie each representative to a place." },
      { to: "chartism", kind: "shaped", note: "The People's Charter (1838) pressed the demand that Parliament answer to votes broadly held." },
    ],
    sources: [
      { work: "Stanford Encyclopedia of Philosophy — 'Political Representation'", tier: 1 },
      { work: "Hanna Pitkin — The Concept of Representation (1967)", tier: 1 },
      { work: "Edmund Burke — Speech to the Electors of Bristol (1774)", tier: 1 },
    ],
    addedOn: "2026-11-04",
  },

  {
    id: "republicanism",
    kind: "concept",
    name: "Republicanism",
    status: "reviewed",
    lead:
      "Republicanism holds that power belongs to the res publica — the public thing — and must be exercised for the citizens' benefit rather than as a ruler's private patrimony. Cicero gave the Roman version its voice, Machiavelli taught how republics decay, and the founders of the [[united-states]] wrote the doctrine into their constitutional design. It is defined against monarchy rather than against [[representation]]: a republic may govern wholly through representatives, so long as no office is hereditary property.",
    facts: [
      { label: "Core Claim", value: "Authority belongs to the res publica — the public thing — and must be exercised for the citizens' benefit, never as private patrimony", attestation: "well-attested" },
      { label: "First Articulated", value: "Cicero, De re publica (54–51 BCE)", attestation: "well-attested", note: "The Roman republic's institutions gave the doctrine its name and its fear of corruption." },
      { label: "Canonical Thinkers", value: "Cicero, Niccolò Machiavelli, James Madison", attestation: "well-attested", note: "Machiavelli's Discourses (1531) taught how republics survive corruption; Publius adapted the tradition to an extended republic." },
      { label: "Where It Lives In Practice", value: "Article IV, Section 4 of the United States Constitution guarantees every state 'a republican form of government'", attestation: "well-attested" },
      { label: "Classic Contest", value: "Civic virtue versus institutional design: classical writers trusted educated citizens; Federalist No. 10 trusted scale and representation", attestation: "well-attested" },
      { label: "Distinguishing Feature", value: "Anti-monarchical by definition, yet not necessarily democratic — the Roman republic governed through an elective aristocracy" },
    ],
    relations: [
      { to: "cicero", kind: "influenced-by", note: "De re publica supplied the doctrine's Roman name and vocabulary." },
      { to: "machiavelli", kind: "influenced-by", note: "The Discourses read Livy to teach how republics resist corruption." },
      { to: "united-states", kind: "shaped", note: "The founders drew on republican writers; Publius argued an extended republic could tame faction." },
      { to: "french-revolution", kind: "shaped", note: "The monarchy's abolition in September 1792 wrote the doctrine into France." },
      { to: "federalist-papers", kind: "cited-by", note: "Federalist No. 10 redefined the extended republic as a cure for faction." },
      { to: "constitutional-monarchy", kind: "contrasts-with", note: "Republics refuse hereditary office even when the crown is ceremonial." },
    ],
    sources: [
      { work: "Stanford Encyclopedia of Philosophy — 'Republicanism'", tier: 1 },
      { work: "Encyclopædia Britannica — 'Republic'", tier: 1 },
      { work: "Niccolò Machiavelli — Discourses on Livy (1531)", tier: 1 },
    ],
    addedOn: "2026-11-10",
  },
];
