// ─── Political Atlas — Policy Domains (12 entries) ───────────────────────────
// Authored per SPEC.md: original prose, settled facts only, British English.

import type { Entity } from "./types";

export const policies: Entity[] = [
  {
    id: "foreign-policy",
    kind: "policy",
    name: "Foreign Policy",
    status: "verified",
    lead:
      "Foreign policy is a state's organised conduct of its external relations — diplomacy, alliance, treaty-making and, in the last resort, war. It is the outward exercise of [[sovereignty]], directed in nearly every state from a foreign ministry under executive authority. The machinery of resident embassies and regular great-power consultation consolidated in Europe after the [[congress-of-vienna]], whose Concert system regularised nineteenth-century diplomacy. Since 1945 much of the practice has moved inside the [[united-nations]], whose Charter restrains the use of force and channels disputes toward negotiation.",
    facts: [
      { label: "Policy Domain", value: "External relations — diplomacy, alliances, treaties, sanctions, aid and the use of force", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Resident embassies and consulates, treaties and conventions, diplomatic recognition, summitry, sanctions, development aid", attestation: "well-attested", note: "Diplomatic recognition — deciding which governments to deal with — remains among the sharpest of these tools." },
      { label: "Who Decides", value: "The executive through a foreign ministry — the Foreign, Commonwealth & Development Office in the United Kingdom, the Quai d'Orsay in France — with legislatures ratifying major treaties", attestation: "well-attested", note: "In the United States the Senate consents to treaties by a two-thirds vote." },
      { label: "Distinctive Tool", value: "The resident embassy, a Renaissance Italian invention that had become general European practice by the nineteenth century", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Executive discretion against legislative oversight; alliance commitments against national independence; declared values against declared interests", attestation: "attested", note: "These tensions recur wherever foreign ministries answer to elected chambers." },
      { label: "Where It Bites", value: "In treaty ratifications, at the UN Security Council — where five permanent members hold vetoes — and wherever borders, seas and citizens abroad are contested", attestation: "well-attested" },
    ],
    relations: [
      { to: "sovereignty", kind: "exemplifies", note: "Freedom from external direction is the classical test of a sovereign state's foreign policy." },
      { to: "congress-of-vienna", kind: "influenced-by", note: "The Vienna settlement and the Concert of Europe regularised consultation among the great powers." },
      { to: "united-nations", kind: "participant-in", note: "States channel much of their diplomacy through the UN and its Security Council." },
      { to: "kautilya", kind: "influenced-by", note: "Kautilya's Arthashastra set out an early doctrine of alliances, enmity and circle-of-states diplomacy in ancient India." },
      { to: "machiavelli", kind: "influenced-by", note: "Florentine statecraft of the Renaissance first analysed interstate relations as interest rather than faith." },
      { to: "defence-policy", kind: "contrasts-with", note: "Foreign policy chooses aims abroad; defence policy builds the forces meant to secure them." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Diplomacy'", tier: 1 },
      { work: "Encyclopædia Britannica — 'International relations'", tier: 1 },
      { work: "Official text: Charter of the United Nations", tier: 1 },
    ],
    addedOn: "2026-10-01",
  },

  {
    id: "trade-policy",
    kind: "policy",
    name: "Trade Policy",
    status: "verified",
    lead:
      "Trade policy is the set of rules a state applies to goods and services crossing its borders: tariffs, quotas, subsidies, standards and the treaties that bind them. Doctrine has long swung between [[mercantilism]], which prized protected markets and surpluses, and the free-trade case pressed by [[classical-liberalism]]. Since 1995 the multilateral frame has been the [[world-trade-organization]], which administers agreed commitments and hears disputes between members.",
    facts: [
      { label: "Policy Domain", value: "Cross-border exchange — import tariffs, quotas, subsidies, rules of origin, services and investment rules", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Bound tariff schedules, import quotas and licensing, anti-dumping and countervailing duties, export controls, preferential trade agreements", attestation: "well-attested", note: "A bound tariff is a legal ceiling lodged with the WTO; applied rates usually sit below it." },
      { label: "Who Decides", value: "Trade ministries and legislatures domestically — the United States Congress holds direct authority over tariffs — and, multilaterally, the WTO's Ministerial Conference and dispute-settlement system", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "The dispute-settlement mechanism, which lets members challenge one another's measures before adjudicating panels", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Cheap imports for consumers against protection for producers; multilateral rules against bilateral bargains; national standards against harmonisation", attestation: "attested" },
      { label: "Landmark Law", value: "The General Agreement on Tariffs and Trade (in force 1948), carried forward by the Marrakesh Agreement establishing the World Trade Organization (1995)", attestation: "well-attested" },
      { label: "Where It Bites", value: "At customs posts and in negotiating rounds — the Doha Round, launched in 2001, was never formally concluded", attestation: "well-attested" },
    ],
    relations: [
      { to: "world-trade-organization", kind: "uses", note: "Members lodge tariff commitments and settle disputes through the WTO." },
      { to: "mercantilism", kind: "contrasts-with", note: "Mercantilist doctrine protected home markets; liberal trade policy lowers barriers by agreement." },
      { to: "classical-liberalism", kind: "influenced-by", note: "The free-trade argument of the classical economists underwrote the repeal of Britain's Corn Laws in 1846 and later liberalisations." },
      { to: "treaty-of-rome", kind: "influenced-by", note: "The 1957 Treaty of Rome founded a customs union that grew into the European single market." },
      { to: "foreign-policy", kind: "part-of", note: "Trade diplomacy is one arm of a state's external relations." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'International trade'", tier: 1 },
      { work: "Official text: General Agreement on Tariffs and Trade (1947)", tier: 1 },
      { work: "World Trade Organization — 'Understanding the WTO'", tier: 2 },
    ],
    addedOn: "2026-10-04",
  },

  {
    id: "immigration-policy",
    kind: "policy",
    name: "Immigration Policy",
    status: "reviewed",
    lead:
      "Immigration policy sets who may enter a state, on what terms they may stay and work, and when they may become citizens. Its instruments run from points-based selection, as used in Australia and Canada, to asylum procedures, family-reunification rules and removal systems. Because migration touches labour markets, identity and [[civil-liberties]], it is among the most contested fields of domestic governance. International commitments — Article 14 of the [[universal-declaration-of-human-rights]] recognises a right to seek asylum — limit state discretion, while debates over settlement run between assimilation and [[multiculturalism]].",
    facts: [
      { label: "Policy Domain", value: "Admission and residence of non-citizens — labour migration, family reunification, asylum, removal and naturalisation", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Visa categories and points tests, asylum procedures, detention and removal, integration and language requirements, regularisation programmes", attestation: "well-attested" },
      { label: "Who Decides", value: "Interior and home ministries — the Home Office in the United Kingdom, the Department of Homeland Security in the United States — with courts hearing individual cases", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "The visa regime, administered through consulates and, increasingly, electronic travel authorisations", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Labour demand against public pressure on numbers; humanitarian duty against border control; security screening against openness", attestation: "attested" },
      { label: "Landmark Law", value: "The United States Immigration and Nationality Act of 1965, which abolished the national-origin quota system", attestation: "well-attested", note: "It replaced a system that had allocated admission quotas by country of origin since the 1920s." },
      { label: "Where It Bites", value: "At borders and ports, in asylum hearings and removals, and in the workplaces and universities that recruit internationally", attestation: "well-attested" },
    ],
    relations: [
      { to: "sovereignty", kind: "exemplifies", note: "Admitting and expelling non-members is a core attribute of state sovereignty." },
      { to: "universal-declaration-of-human-rights", kind: "influenced-by", note: "Article 14's right to seek asylum prepared the ground for the 1951 Refugee Convention." },
      { to: "european-union", kind: "influenced-by", note: "EU law gives workers free movement between member states, pooling part of each state's admission control." },
      { to: "us-civil-rights-movement", kind: "influenced-by", note: "The civil-rights era carried the 1965 act that ended national-origin quotas in the United States." },
      { to: "multiculturalism", kind: "influenced-by", note: "Canada made multiculturalism official settlement policy in 1971, a model others followed in part." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Human migration'", tier: 1 },
      { work: "Official text: Convention Relating to the Status of Refugees (1951)", tier: 1 },
      { work: "Official text: Universal Declaration of Human Rights", tier: 1 },
    ],
    addedOn: "2026-10-08",
  },

  {
    id: "public-health-policy",
    kind: "policy",
    name: "Public Health Policy",
    status: "verified",
    lead:
      "Public health policy is the state's organised effort to prevent disease and lengthen life across whole populations, rather than to treat patients one at a time. Its classic tools — sanitation, vaccination, quarantine and health education — were forged by the sanitary reforms of the nineteenth century, when cholera drove cities from London to Hamburg to rebuild their water systems. Internationally, the [[world-health-organization]], founded in 1948, coordinates standards and outbreak reporting, and its campaign certified smallpox eradicated in 1980. Epidemic response still rests on [[emergency-powers]] — isolation, quarantine, compulsory notification — whose reach against individual liberty is the field's defining tension.",
    facts: [
      { label: "Policy Domain", value: "Population health — sanitation, vaccination, disease surveillance, food and drug safety, health education", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Vaccination programmes, notifiable-disease reporting, quarantine and isolation powers, water and food standards, tobacco and alcohol regulation", attestation: "well-attested" },
      { label: "Who Decides", value: "Health ministries and their agencies — the Centers for Disease Control and Prevention in the United States, the United Kingdom Health Security Agency — with local authorities running inspections", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "Compulsory notification of notifiable diseases, the surveillance spine of every modern health system", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Collective protection against individual liberty — sharpest over quarantine and vaccine mandates; national control against global coordination", attestation: "attested" },
      { label: "Landmark Law", value: "The International Health Regulations (2005), under which WHO members must report public-health emergencies of international concern", attestation: "well-attested" },
      { label: "Where It Bites", value: "In drains and waterworks, slaughterhouses and clinics — and, in epidemics, in the curtailment of movement itself", attestation: "well-attested" },
    ],
    relations: [
      { to: "world-health-organization", kind: "participant-in", note: "States report outbreaks and coordinate responses through the WHO." },
      { to: "emergency-powers", kind: "uses", note: "Epidemic control draws on quarantine, curfew and requisition powers." },
      { to: "social-contract", kind: "exemplifies", note: "Vaccination and isolation ask individuals to accept limits for collective protection — social-contract reasoning in practice." },
      { to: "social-democracy", kind: "influenced-by", note: "Universal health systems — Britain's National Health Service from 1948 — grew from the post-war settlement." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Public health'", tier: 1 },
      { work: "Official text: Constitution of the World Health Organization (1946)", tier: 1 },
      { work: "World Health Organization — 'International Health Regulations (2005)'", tier: 1 },
    ],
    addedOn: "2026-10-11",
  },

  {
    id: "education-policy",
    kind: "policy",
    name: "Education Policy",
    status: "reviewed",
    lead:
      "Education policy arranges how a state schools its people: what is taught, who may teach, who pays and who must attend. Universal state schooling spread through the nineteenth century; [[meiji-restoration]] Japan built a national school system from 1872, and Prussia's was long an influential model. Systems now range from centralised curricula as in France to strongly local control as in the United States, and disputes over religion and [[secularism]] still mark school politics from France to Turkey.",
    facts: [
      { label: "Policy Domain", value: "Schooling and skills — curriculum, teacher supply, funding, admissions, inspection and school-leaving qualifications", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Compulsory-attendance laws, national or framework curricula, public examinations, teacher certification, grants and school meals", attestation: "well-attested" },
      { label: "Who Decides", value: "Education ministries, and in federal systems states or provinces — Germany's Länder run their own schools, while France keeps a centralised curriculum", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "The public examination — the French baccalauréat, China's gaokao, school-leaving certificates generally — which standardises what schooling certifies", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "National standards against local control; state schools against religious and private schooling; selection by ability against comprehensive intake", attestation: "attested" },
      { label: "Landmark Law", value: "Japan's Fundamental Code of Education (1872), among the earliest attempts at universal schooling", attestation: "well-attested", note: "It set attendance as an ideal for every child and created a national network of schools." },
      { label: "Where It Bites", value: "In classroom hours and teacher pay, at the school-leaving age, and in university admissions that sort whole cohorts", attestation: "well-attested" },
    ],
    relations: [
      { to: "secularism", kind: "influenced-by", note: "French laïcité bars confessional instruction in state schools." },
      { to: "devolution", kind: "uses", note: "Many systems assign schools to provinces, Länder or municipalities." },
      { to: "br-ambedkar", kind: "influenced-by", note: "Ambedkar framed constitutional safeguards for educational opportunity in India." },
      { to: "meiji-restoration", kind: "influenced-by", note: "The Meiji reforms built one of the first national school systems, from 1872." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Education'", tier: 1 },
      { work: "UNESCO — 'Global Education Monitoring Report'", tier: 2 },
    ],
    addedOn: "2026-10-15",
  },

  {
    id: "environmental-policy",
    kind: "policy",
    name: "Environmental Policy",
    status: "reviewed",
    lead:
      "Environmental policy turns law, taxation and public spending against pollution, habitat loss and resource depletion. Its modern form dates to the 1960s and 1970s, when [[environmental-movement]] pressure produced statutes such as the United States Clean Air Act of 1970 and the first UN environment conference, held at Stockholm in 1972. Climate change now organises the field: the 2015 Paris Agreement gathers national pledges around a shared temperature goal, and [[green-politics]] carries the issues into elections. Because emissions ignore borders, most of the significant instruments — from emissions trading to treaty commitments — operate across states.",
    facts: [
      { label: "Policy Domain", value: "Pollution control, nature and habitat protection, waste and water, and climate mitigation and adaptation", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Emission limits and permits, environmental-impact assessment, pollution taxes and emissions trading, protected areas, chemical and waste regulation", attestation: "well-attested" },
      { label: "Who Decides", value: "Environment ministries and agencies — the United States Environmental Protection Agency (created 1970), Germany's Federal Environment Agency — under treaty frameworks such as the UN climate convention", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "Cap-and-trade emissions trading, pioneered against sulphur dioxide in the United States and applied to greenhouse gases by the European Union from 2005", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Growth against conservation; sovereign choice against the global commons; regulatory cost against regulatory capture", attestation: "attested" },
      { label: "Landmark Law", value: "The Paris Agreement (2015), which commits parties to hold warming well below 2 °C and to review pledges five-yearly", attestation: "well-attested" },
      { label: "Where It Bites", value: "On power stations, vehicles and farms; in planning inquiries; and at treaty conferences from Kyoto in 1997 to Paris in 2015", attestation: "well-attested" },
    ],
    relations: [
      { to: "environmental-movement", kind: "influenced-by", note: "Modern environmental statutes followed the movement's rise in the 1960s and 1970s." },
      { to: "green-politics", kind: "influenced-by", note: "Green parties press environmental aims inside legislatures across Europe and beyond." },
      { to: "united-nations", kind: "participant-in", note: "UN frameworks — Stockholm (1972), Rio (1992), the climate convention — carry most global environmental agreements." },
      { to: "energy-policy", kind: "influenced", note: "Emissions commitments have reoriented energy policy toward low-carbon generation." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Environmentalism'", tier: 1 },
      { work: "Official text: United Nations Framework Convention on Climate Change (1992)", tier: 1 },
      { work: "Official text: Paris Agreement (2015)", tier: 1 },
    ],
    addedOn: "2026-10-19",
  },

  {
    id: "energy-policy",
    kind: "policy",
    name: "Energy Policy",
    status: "developing",
    lead:
      "Energy policy is the state's arrangement of fuel and power: which sources are licensed and subsidised, which taxed, and how grids and prices are governed. Governments balance secure supply, affordable energy and, increasingly, low-carbon generation under [[environmental-policy]] commitments. The liberalisation wave of the 1980s and 1990s, associated with [[neoliberalism]], opened electricity and gas markets to competition, with Britain privatising first. Instruments now range from renewable auctions and feed-in tariffs to strategic reserves, nuclear licensing and independent regulators such as Ofgem in Great Britain.",
    facts: [
      { label: "Policy Domain", value: "Electricity, heat and fuels — security of supply, price and decarbonisation", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Grid regulation and licensing, renewable auctions and feed-in tariffs, fuel taxation, strategic reserves, nuclear safety regulation", attestation: "well-attested" },
      { label: "Who Decides", value: "Energy ministries with independent regulators — Ofgem in Great Britain, the Federal Energy Regulatory Commission in the United States — with the International Energy Agency coordinating members' data and reserves", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Cheap energy against climate targets; centralised grids against distributed generation; the place of nuclear power, contested since Chernobyl (1986) and reconsidered in Japan after 2011", attestation: "attested" },
      { label: "Where It Bites", value: "In household bills and petrol prices, in plant closures and grid extensions, and in the diplomacy of pipelines and fuel exports", attestation: "well-attested" },
    ],
    relations: [
      { to: "environmental-policy", kind: "influenced-by", note: "Emissions targets have pushed power systems toward renewables and away from coal." },
      { to: "neoliberalism", kind: "influenced-by", note: "From the 1980s electricity and gas were liberalised and, in Britain, privatised — a template the European Union spread through its internal-market directives." },
      { to: "fiscal-policy", kind: "uses", note: "Fuel duties, subsidies and tax reliefs run through the budget." },
      { to: "emergency-powers", kind: "uses", note: "Supply crises trigger reserve releases, rationing powers and price caps." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Public utility'", tier: 1 },
      { work: "Official text: Treaty establishing the European Atomic Energy Community (1957)", tier: 1 },
      { work: "International Energy Agency — 'World Energy Outlook'", tier: 2 },
    ],
    addedOn: "2026-10-23",
  },

  {
    id: "defence-policy",
    kind: "policy",
    name: "Defence Policy",
    status: "reviewed",
    lead:
      "Defence policy organises armed forces — their size, structure, equipment, doctrine and the conditions under which they are committed. In democracies it rests on civilian control: legislatures vote the budget, executives direct operations, and officers answer to constitutional authority. Alliances extend national reach, with [[nato]] members pooling deterrence under Article 5, while the [[united-nations]] Charter confines war to self-defence or [[un-security-council]] authorisation. The permanent questions are familiar: enough force to deter, at a price taxpayers will bear, under rules that civilians can command.",
    facts: [
      { label: "Policy Domain", value: "Armed forces and security — force structure, procurement, doctrine, alliances and the conditions for using force", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Defence budgets and white papers, conscription or all-volunteer recruitment, procurement programmes, alliance treaties, arms-export licensing", attestation: "well-attested" },
      { label: "Who Decides", value: "The executive as commander-in-chief, with legislatures voting budgets and, in some states, authorising war — the United States Congress holds the power to declare war", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "The defence white paper, a public periodic statement of threat assessment and force plans", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Civilian control against military autonomy; expeditionary reach against homeland defence; alliance commitment against national independence", attestation: "attested" },
      { label: "Where It Bites", value: "In bases, shipyards and recruiting offices, and at allied headquarters — NATO's Supreme Headquarters Allied Powers Europe sits at Mons in Belgium", attestation: "well-attested" },
    ],
    relations: [
      { to: "nato", kind: "participant-in", note: "Collective defence under Article 5 anchors members' security planning." },
      { to: "un-charter", kind: "influenced-by", note: "The Charter confines lawful force to self-defence or Security Council authorisation." },
      { to: "emergency-powers", kind: "uses", note: "War and mobilisation run on emergency powers — requisition, rationing, industrial direction." },
      { to: "military-dictatorship", kind: "contrasts-with", note: "Civilian control is the constitutional norm; military rule is its collapse." },
      { to: "world-war-i", kind: "influenced-by", note: "The world wars made defence policy whole-economy work — general staffs, conscription, industrial mobilisation." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'War'", tier: 1 },
      { work: "Official text: North Atlantic Treaty (1949)", tier: 1 },
      { work: "Stockholm International Peace Research Institute — 'Military Expenditure Database'", tier: 2 },
    ],
    addedOn: "2026-10-27",
  },

  {
    id: "fiscal-policy",
    kind: "policy",
    name: "Fiscal Policy",
    status: "verified",
    lead:
      "Fiscal policy is the use of taxation, spending and borrowing to fund the state and to steady the economy. Depression-era experience — above all the New Deal of [[franklin-d-roosevelt]] — made deficit spending a standard downturn tool; the tax-cutting turn later associated with [[margaret-thatcher]] pressed the other way. Treasuries and finance ministries draft budgets, legislatures amend and pass them, and audit offices afterwards examine what was done. The standing question is where stimulus ends and unsustainable debt begins.",
    facts: [
      { label: "Policy Domain", value: "Government revenue and expenditure — taxation, transfers, public investment, borrowing and debt management", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Income, corporate and consumption taxes, customs duties, subsidies and transfers, public works, government bonds", attestation: "well-attested" },
      { label: "Who Decides", value: "Finance ministries — the United Kingdom Treasury, Japan's Ministry of Finance — with legislatures passing budgets annually; Eurozone members also work within the Stability and Growth Pact", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "The annual budget, the constitutional staple by which the British House of Commons came to control supply", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Stimulus against debt sustainability; universal services against lower taxation; central redistribution against local tax autonomy", attestation: "attested" },
      { label: "Where It Bites", value: "In every payslip and till receipt, in public payrolls, pensions and road programmes", attestation: "well-attested" },
    ],
    relations: [
      { to: "monetary-policy", kind: "contrasts-with", note: "Fiscal policy acts through tax and spending; monetary policy through interest rates and money." },
      { to: "us-constitution", kind: "influenced-by", note: "Article I vests the taxing power in Congress — the purse as the legislature's check on the executive." },
      { to: "social-democracy", kind: "influenced-by", note: "The post-war settlement made taxation the base of universal services." },
      { to: "neoliberalism", kind: "contrasts-with", note: "Neoliberal programmes pressed lower direct taxes and leaner budgets." },
      { to: "international-monetary-fund", kind: "participant-in", note: "IMF lending programmes condition fiscal adjustment in balance-of-payments crises." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Fiscal policy'", tier: 1 },
      { work: "Official text: Constitution of the United States, Article I", tier: 1 },
      { work: "OECD — 'Revenue Statistics'", tier: 2 },
    ],
    addedOn: "2026-10-31",
  },

  {
    id: "monetary-policy",
    kind: "policy",
    name: "Monetary Policy",
    status: "verified",
    lead:
      "Monetary policy manages the quantity of money and the price of credit, chiefly through a central bank's interest-rate decisions and balance-sheet operations. Many states delegate it to independent central banks charged with price stability: New Zealand adopted inflation targeting in 1990, the Bank of England gained operational independence in 1997, and the European Central Bank issues the euro for its members. Delegation withdraws money from immediate political command, qualifying the [[sovereignty]] of states that share a currency. Its instruments work alongside [[fiscal-policy]], through markets rather than the budget.",
    facts: [
      { label: "Policy Domain", value: "Money and credit — interest rates, money supply, exchange rates and financial stability", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Policy interest rates, open-market operations, reserve requirements, forward guidance, large-scale asset purchases", attestation: "well-attested" },
      { label: "Who Decides", value: "Central-bank committees — the Federal Open Market Committee in the United States, the Governing Council of the European Central Bank, the Bank of Japan's Policy Board", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "The short-term policy rate, transmitted through banks into mortgages, business loans and currency values", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "Price stability against employment and growth; independence against democratic accountability; domestic goals against exchange-rate targets", attestation: "attested", note: "Memory of the German hyperinflation of 1923 still colours European monetary thinking." },
      { label: "Where It Bites", value: "In mortgage and lending rates, in currency values, and in the consumer prices that every household notices", attestation: "well-attested" },
    ],
    relations: [
      { to: "fiscal-policy", kind: "contrasts-with", note: "Tax and spending move the budget; monetary policy moves credit and prices." },
      { to: "european-union", kind: "part-of", note: "Euro-area monetary policy is exercised by the European Central Bank inside the EU treaties." },
      { to: "international-monetary-fund", kind: "participant-in", note: "The Fund, created at Bretton Woods in 1944, surveils members' monetary and exchange-rate policies." },
      { to: "sovereignty", kind: "contrasts-with", note: "Independent or common currencies remove money from immediate political command." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Monetary policy'", tier: 1 },
      { work: "Official text: Articles of Agreement of the International Monetary Fund (1944)", tier: 1 },
      { work: "Bank for International Settlements — 'Annual Economic Report'", tier: 2 },
    ],
    addedOn: "2026-11-03",
  },

  {
    id: "housing-policy",
    kind: "policy",
    name: "Housing Policy",
    status: "reviewed",
    lead:
      "Housing policy is what governments do to shelter their populations: land-use planning, building standards, rent regulation, social housing and support for buyers. Two twentieth-century models stand out — Vienna's municipal housing programme, building continuously since the 1920s, and owner-occupation promoted through subsidised mortgage finance in the United States and Britain. [[social-democracy]] made housing a public service across much of post-war Europe, while the older sanitary link with [[public-health-policy]] survives in overcrowding and building standards. Scarcity in growing cities keeps the field contentious.",
    facts: [
      { label: "Policy Domain", value: "Shelter and land use — housing supply, tenancy regulation, homelessness and urban planning", attestation: "well-attested" },
      { label: "Typical Instruments", value: "Zoning and planning permission, municipal and social housing, housing allowances and vouchers, rent regulation, mortgage guarantees", attestation: "well-attested" },
      { label: "Who Decides", value: "Housing ministries with municipalities — Vienna's council has built social housing continuously since the 1920s, and most of Singapore's residents live in flats of the Housing and Development Board", attestation: "well-attested" },
      { label: "Distinctive Tool", value: "The planning system, which determines where building may happen and at what density", attestation: "well-attested" },
      { label: "Characteristic Tensions", value: "New supply against neighbourhood preservation; tenant security against landlords' incentives; social housing against owner-occupancy", attestation: "attested" },
      { label: "Where It Bites", value: "In rents and house prices, in homelessness services, and in the planning committees of fast-growing cities", attestation: "well-attested" },
    ],
    relations: [
      { to: "social-democracy", kind: "influenced-by", note: "Red Vienna and the post-war welfare states made housing a public service." },
      { to: "public-health-policy", kind: "influenced-by", note: "Nineteenth-century sanitary codes treated overcrowded housing as a health hazard and set building standards." },
      { to: "fiscal-policy", kind: "uses", note: "Housing allowances, mortgage reliefs and grant programmes run through the budget." },
      { to: "devolution", kind: "uses", note: "Planning and delivery sit mostly with municipalities and regions." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Urban planning'", tier: 1 },
      { work: "UN-Habitat — 'World Cities Report'", tier: 2 },
      { work: "OECD — 'Affordable Housing Database'", tier: 2 },
    ],
    addedOn: "2026-11-06",
  },

  {
    id: "data-governance-policy",
    kind: "policy",
    name: "Data Governance Policy",
    status: "developing",
    lead:
      "Data governance policy is the newest of the policy domains: the rules for collecting, storing, trading and protecting personal and public data. The European Union's General Data Protection Regulation, applicable from May 2018, became a reference point worldwide, while states divide over whether data is a private asset, a public resource or a matter of state security. Because data flows cross borders, the field sits where [[trade-policy]] meets [[civil-liberties]], with [[digital-rights-movement]] advocacy pressing the case for privacy.",
    facts: [
      { label: "Policy Domain", value: "Collection, storage, exchange and protection of personal and public data, including cross-border flows", attestation: "attested" },
      { label: "Typical Instruments", value: "Data-protection statutes, breach-notification duties, data-localisation rules, open-data mandates, oversight of automated decision-making", attestation: "attested" },
      { label: "Who Decides", value: "Data-protection authorities — Ireland's Data Protection Commission handles several large technology firms' European operations — alongside legislatures and standards bodies", attestation: "attested" },
      { label: "Distinctive Tool", value: "The consent-and-purpose rule: personal data may be processed only for declared, lawful purposes", attestation: "attested" },
      { label: "Characteristic Tensions", value: "Innovation against privacy; security access against civil liberties; national control of data flows against the open internet", attestation: "attested" },
      { label: "Landmark Law", value: "The Council of Europe's Convention 108 (1981) and the European Union's General Data Protection Regulation (applicable 2018)", attestation: "well-attested" },
      { label: "Where It Bites", value: "In mobile apps and online advertising, in credit scoring, and in state registries from censuses to India's biometric Aadhaar system", attestation: "attested" },
    ],
    relations: [
      { to: "digital-rights-movement", kind: "influenced-by", note: "Privacy campaigning shaped statutes from Convention 108 to the GDPR." },
      { to: "civil-liberties", kind: "influenced-by", note: "Data protection extends the older grammar of privacy and due process into digital systems." },
      { to: "trade-policy", kind: "part-of", note: "Cross-border data flows are now a standing chapter of trade agreements." },
      { to: "european-union", kind: "influenced-by", note: "The EU's 2018 regulation became a template copied or adapted in many jurisdictions." },
    ],
    sources: [
      { work: "Official text: Regulation (EU) 2016/679 (General Data Protection Regulation)", tier: 1 },
      { work: "Official text: Convention 108 for the Protection of Individuals with regard to Automatic Processing of Personal Data (1981)", tier: 1 },
      { work: "OECD — 'Guidelines on the Protection of Privacy and Transborder Flows of Personal Data' (1980)", tier: 1 },
    ],
    addedOn: "2026-11-10",
  },
];
