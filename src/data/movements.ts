import type { Entity } from "./types";

// Movements — organised political campaigns that changed institutions.

export const movements: Entity[] = [
  {
    id: "abolitionism",
    kind: "movement",
    name: "Abolitionism",
    status: "verified",
    lead:
      "Abolitionism organised against slavery itself — first among Quaker meetings in the eighteenth century, then as a transatlantic campaign of petitions, courts, presses and eventually legislatures. Britain abolished its slave trade in 1807 and slavery in 1833; the United States required its civil war; Haiti had already answered by revolution. The movement's methods — mass petition, testimony of the enslaved, boycotts — became the toolkit of every later rights campaign.",
    facts: [
      { label: "Active", value: "c. 1760s–1888 (Brazil, the last in the Americas)", attestation: "well-attested" },
      { label: "Heartlands", value: "Britain, the northern United States, France, Haiti", attestation: "well-attested" },
      { label: "Methods", value: "Mass petitions, lawsuits, pamphlets and newspapers, boycotts, parliamentary testimony", attestation: "well-attested" },
      { label: "Signature Achievements", value: "British Slave Trade Act 1807 and Slavery Abolition Act 1833; US Emancipation Proclamation and Thirteenth Amendment", attestation: "well-attested" },
      { label: "Leadership", value: "Granville Sharp, Thomas Clarkson, William Wilberforce, Frederick Douglass, Olaudah Equiano; Toussaint Louverture and the Haitian armies", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "The first mass movement to make enslaved people's testimony its centre", attestation: "well-attested" },
    ],
    relations: [
      { to: "haitian-revolution", kind: "participant-in" },
      { to: "suffrage-movement", kind: "spawned", note: "Organisers of abolition conventions built the women's rights campaign." },
      { to: "us-civil-rights-movement", kind: "precursor-of" },
      { to: "civil-liberties", kind: "shaped" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Abolitionism'", tier: 1 },
      { work: "Adam Hochschild — Bury the Chains", tier: 1 },
    ],
    addedOn: "2026-10-03",
  },
  {
    id: "chartism",
    kind: "movement",
    name: "Chartism",
    status: "verified",
    lead:
      "Chartism was Britain's first mass working-class political movement, organised around the six points of the People's Charter of 1838: universal male suffrage, the ballot, no property qualification, paid members of parliament, equal constituencies and annual parliaments. It failed as a movement — three great petitions rejected, uprisings suppressed — and succeeded as a programme: five of its six points became law within living memory. Its petition machinery prefigured the mass franchise politics of the century after.",
    facts: [
      { label: "Active", value: "1838–1857", attestation: "well-attested" },
      { label: "Heartlands", value: "Industrial Britain: Lancashire, Yorkshire, the Welsh valleys", attestation: "well-attested" },
      { label: "Methods", value: "Giant petitions, mass meetings, a National Charter Association, strikes and one general strike attempt", attestation: "well-attested" },
      { label: "Signature Achievements", value: "The Charter's points adopted by later Reform Acts (1967–1918); the six-point programme as a template", attestation: "well-attested" },
      { label: "Leadership", value: "Feargus O'Connor, William Lovett, Ernest Jones", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "Petitioning at national scale — the 1842 charter carried over three million signatures", attestation: "well-attested" },
    ],
    relations: [
      { to: "universal-suffrage", kind: "precursor-of" },
      { to: "labour-movement", kind: "precursor-of" },
      { to: "united-kingdom", kind: "shaped" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Chartism'", tier: 1 },
      { work: "Dorothy Thompson — The Chartists", tier: 1 },
    ],
    addedOn: "2026-10-04",
  },
  {
    id: "suffrage-movement",
    kind: "movement",
    name: "Suffrage Movement",
    status: "verified",
    lead:
      "The women's suffrage movement campaigned for the vote across seventy years, from Seneca Falls in 1848 through petitioning, civil disobedience and hunger strikes to the enfranchisements that followed the First World War — New Zealand first in 1893, then Britain, the United States and the new republics of Europe. Its strategies split into constitutionalist and militant wings, and its international alliance made enfranchisement a global measure of constitutional standing.",
    facts: [
      { label: "Active", value: "1848–1928 (British equal franchise); ongoing sequels worldwide", attestation: "well-attested" },
      { label: "Heartlands", value: "New Zealand, Britain, the United States, Scandinavia, India", attestation: "well-attested" },
      { label: "Methods", value: "Petition, litigation, mass demonstrations, civil disobedience, hunger striking, international congresses", attestation: "well-attested" },
      { label: "Signature Achievements", value: "New Zealand 1893; the 19th Amendment (US, 1920); equal British franchise 1928", attestation: "well-attested" },
      { label: "Leadership", value: "Elizabeth Cady Stanton, Susan B. Anthony, Millicent Fawcett, Emmeline Pankhurst, Kate Sheppard", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "The first movement to organise internationally on a single institutional demand", attestation: "well-attested" },
    ],
    relations: [
      { to: "universal-suffrage", kind: "spawned" },
      { to: "abolitionism", kind: "influenced-by", note: "Born of the abolition conventions of 1840." },
      { to: "feminism", kind: "precursor-of" },
      { to: "sirimavo-bandaranaike", kind: "cited-by", note: "Enfranchised colonies soon sent women to executive office." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Women's suffrage'", tier: 1 },
      { work: "Official text: Nineteenth Amendment to the US Constitution (1920)", tier: 1 },
    ],
    addedOn: "2026-10-05",
  },
  {
    id: "satyagraha",
    kind: "movement",
    name: "Satyagraha",
    status: "verified",
    lead:
      "Satyagraha — 'holding to truth' — is the method of non-violent resistance [[mahatma-gandhi]] built in South Africa between 1906 and 1914 and brought to India: mass violation of unjust laws, acceptance of penalty, and discipline against retaliation. It converted suffering into political argument, and its campaigns — the salt march of 1930 above all — made non-cooperation a technique of national scale. Its descendants run from Martin Luther King Jr. to the velvet revolutions.",
    facts: [
      { label: "Active", value: "1906 (Johannesburg) onward; formal campaigns in India 1917–1942", attestation: "well-attested" },
      { label: "Heartlands", value: "South Africa; Champaran, Kheda, Bardoli and the salt campaigns in India", attestation: "well-attested" },
      { label: "Methods", value: "Civil disobedience, non-cooperation, fasting, constructive programme, ashram discipline", attestation: "well-attested" },
      { label: "Signature Achievements", value: "The Champaran and Kheda campaigns; the Salt March of 1930; the Quit India movement of 1942", attestation: "well-attested" },
      { label: "Leadership", value: "Mahatma Gandhi; lieutenants including Vallabhbhai Patel and Jawaharlal Nehru", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "Penalty acceptance as argument — the campaigner invites the law's weight onto himself", attestation: "well-attested" },
    ],
    relations: [
      { to: "mahatma-gandhi", kind: "led" },
      { to: "indian-independence-movement", kind: "precursor-of" },
      { to: "us-civil-rights-movement", kind: "influenced", note: "King named it as his method." },
      { to: "gandhism", kind: "spawned" },
    ],
    sources: [
      { work: "Mahatma Gandhi — Hind Swaraj and Satyagraha in South Africa", tier: 1 },
      { work: "Encyclopædia Britannica — 'Satyagraha'", tier: 1 },
    ],
    addedOn: "2026-10-06",
  },
  {
    id: "indian-independence-movement",
    kind: "movement",
    name: "Indian Independence Movement",
    status: "verified",
    lead:
      "The movement that ended British rule in India ran from the congress politics of the 1880s through Gandhi's mass campaigns of the 1920s and 1930s to the Quit India demand of 1942 and the transfer of power of 1947. It combined constitutional negotiation, mass non-violence, and parallel currents — revolutionary, socialist, Muslim-league separatist — whose interactions shaped both the independence and the partition that came with it. Its leaders then wrote the constitution that carried the movement's claims into law.",
    facts: [
      { label: "Active", value: "1885 (Congress founded)–1947", attestation: "well-attested" },
      { label: "Heartlands", value: "British India: Bengal, Bombay, the United Provinces, Punjab, Madras", attestation: "well-attested" },
      { label: "Methods", value: "Congress negotiations, satyagraha campaigns, boycotts and swadeshi, mass mobilisation, constitutional round tables", attestation: "well-attested" },
      { label: "Signature Achievements", value: "The transfer of power of August 1947; a constitution with universal franchise", attestation: "well-attested" },
      { label: "Leadership", value: "Mahatma Gandhi, Jawaharlal Nehru, Vallabhbhai Patel, B. R. Ambedkar, Subhas Chandra Bose, Muhammad Ali Jinnah", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "A mass movement that became a constitution-making body without a break in continuity", attestation: "well-attested" },
    ],
    relations: [
      { to: "indian-independence", kind: "spawned" },
      { to: "satyagraha", kind: "uses" },
      { to: "mahatma-gandhi", kind: "led" },
      { to: "jawaharlal-nehru", kind: "led" },
      { to: "constitution-of-india", kind: "spawned" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'India'", tier: 1 },
      { work: "Bipan Chandra — India's Struggle for Independence", tier: 1 },
    ],
    addedOn: "2026-10-07",
  },
  {
    id: "labour-movement",
    kind: "movement",
    name: "Labour Movement",
    status: "verified",
    lead:
      "The labour movement organised wage workers into unions and then into parties, winning the eight-hour day, collective bargaining, workplace safety and the welfare state across the industrial world. It built institutions — trades councils, federations, cooperative societies, international secretariats — and its political wings became governing parties in Britain, Germany, Scandinavia and Australia. Its campaigns carried the franchise to working men and women alongside the suffrage and chartist movements.",
    facts: [
      { label: "Active", value: "From the 1830s (Grand National Consolidated Trades Union) onward", attestation: "well-attested" },
      { label: "Heartlands", value: "Britain, Germany, Scandinavia, the United States, Australia", attestation: "well-attested" },
      { label: "Methods", value: "Union organisation, strikes, collective bargaining, labour parties, international federations", attestation: "well-attested" },
      { label: "Signature Achievements", value: "Eight-hour day, minimum wage and safety law, unemployment insurance, the ILO's founding standards", attestation: "well-attested" },
      { label: "Leadership", value: "Keir Hardie, Sidney and Beatrice Webb, Samuel Gompers, August Bebel", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "The movement that converted industrial pressure into statutory rights", attestation: "well-attested" },
    ],
    relations: [
      { to: "international-labour-organization", kind: "founded" },
      { to: "chartism", kind: "influenced-by" },
      { to: "social-democracy", kind: "spawned" },
      { to: "syndicalism", kind: "spawned" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Labour movement'", tier: 1 },
      { work: "Official text: Treaty of Versailles, Part XIII (the ILO's founding constitution)", tier: 1 },
    ],
    addedOn: "2026-10-08",
  },
  {
    id: "us-civil-rights-movement",
    kind: "movement",
    name: "US Civil Rights Movement",
    status: "verified",
    lead:
      "The American civil rights movement of the 1950s and 1960s dismantled the legal segregation of the Jim Crow South through court cases, boycotts, freedom rides, sit-ins and mass marches. It won the Civil Rights Act of 1964 and the Voting Rights Act of 1965 — the century's decisive re-founding of American citizenship — under leaders whose discipline made white violence a national spectacle. Its constitutional claims rebuilt [[civil-liberties]] enforcement for every group that followed.",
    facts: [
      { label: "Active", value: "1954 (Brown)–1968 (Fair Housing Act era)", attestation: "well-attested" },
      { label: "Heartlands", value: "The American South; national churches, colleges and unions", attestation: "well-attested" },
      { label: "Methods", value: "Litigation, boycotts, non-violent direct action, mass marches, federal lobbying", attestation: "well-attested" },
      { label: "Signature Achievements", value: "Brown v. Board of Education (1954); Civil Rights Act 1964; Voting Rights Act 1965", attestation: "well-attested" },
      { label: "Leadership", value: "Martin Luther King Jr., Rosa Parks, John Lewis, Fannie Lou Hamer, Thurgood Marshall", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "Television made local brutality a federal question", attestation: "well-attested" },
    ],
    relations: [
      { to: "civil-rights-act-1964", kind: "spawned" },
      { to: "martin-luther-king-jr", kind: "led" },
      { to: "satyagraha", kind: "uses" },
      { to: "abolitionism", kind: "precursor-of" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'American civil rights movement'", tier: 1 },
      { work: "Taylor Branch — Parting the Waters", tier: 1 },
    ],
    addedOn: "2026-10-09",
  },
  {
    id: "anti-apartheid-movement",
    kind: "movement",
    name: "Anti-Apartheid Movement",
    status: "verified",
    lead:
      "The movement against South Africa's apartheid system combined internal resistance — unions, churches, the ANC and its armed wing, township uprisings — with an international campaign of boycotts, sports and cultural embargoes, divestment and UN sanctions. Sharpeville (1960) and Soweto (1976) turned opinion; the campaign made apartheid a global moral question and the reason South Africa's lenders and partners withdrew. Its negotiated end produced the world's most open modern constitution.",
    facts: [
      { label: "Active", value: "1959 (Boycott Movement)–1994 (democratic election)", attestation: "well-attested" },
      { label: "Heartlands", value: "South Africa; Britain and Scandinavia as campaign bases; the UN as forum", attestation: "well-attested" },
      { label: "Methods", value: "Boycotts and sanctions, divestment, armed resistance, internal union organising, underground press", attestation: "well-attested" },
      { label: "Signature Achievements", value: "The 1977 UN mandatory arms embargo; corporate and sports isolation; the 1990–94 negotiated transition", attestation: "well-attested" },
      { label: "Leadership", value: "Nelson Mandela, Oliver Tambo, Albert Luthuli, Steve Biko; Trevor Huddleston and Abdul Minty abroad", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "The fullest modern case of global pressure converging on internal change", attestation: "well-attested" },
    ],
    relations: [
      { to: "end-of-apartheid", kind: "spawned" },
      { to: "nelson-mandela", kind: "led" },
      { to: "constitution-of-south-africa", kind: "spawned" },
      { to: "african-union", kind: "cited-by", note: "Its successor organisations carried the movement's continental ideals." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Apartheid'", tier: 1 },
      { work: "United Nations General Assembly resolutions on apartheid", tier: 1 },
    ],
    addedOn: "2026-10-10",
  },
  {
    id: "solidarity-movement",
    kind: "movement",
    name: "Solidarity",
    status: "verified",
    lead:
      "Solidarity (Solidarność) was the free trade union born in the Gdańsk shipyard strikes of August 1980 — the first legal independent union in the Soviet bloc, ten million members within a year. Suppressed by martial law in 1981, it survived underground and negotiated Poland's 1989 round table that swept it to power and opened the bloc's end. Its self-limiting strategy — negotiation over revolution — became the eastern hemisphere's template for exit from communism.",
    facts: [
      { label: "Active", value: "August 1980–1989 (round table and election)", attestation: "well-attested" },
      { label: "Heartlands", value: "Poland's shipyards and industrial belt; the Catholic church as shelter", attestation: "well-attested" },
      { label: "Methods", value: "Occupation strikes, independent publication, underground organisation, round-table negotiation", attestation: "well-attested" },
      { label: "Signature Achievements", value: "The Gdańsk Agreement (1980); the June 1989 election that broke the party's monopoly", attestation: "well-attested" },
      { label: "Leadership", value: "Lech Wałęsa, Anna Walentynowicz, the strike committees; advisors including Jacek Kuroń", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "Self-limitation: a mass movement that insisted on legality until legality turned", attestation: "well-attested" },
    ],
    relations: [
      { to: "fall-of-berlin-wall", kind: "shaped" },
      { to: "poland", kind: "shaped" },
      { to: "democracy-movement-1989", kind: "precursor-of" },
      { to: "labour-movement", kind: "influenced-by" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Solidarity'", tier: 1 },
      { work: "Gdańsk Agreement (1980)", tier: 1 },
    ],
    addedOn: "2026-10-11",
  },
  {
    id: "velvet-revolution",
    kind: "movement",
    name: "Velvet Revolution",
    status: "verified",
    lead:
      "The velvet revolution of November–December 1989 overthrew Czechoslovakia's communist government with candlelight vigils, student marches and a general strike — no deaths, hence the name. Charter 77's dissident network supplied the leadership; within weeks Václav Havel was president and the party's constitutional monopoly gone. Its smoothness made 'velvet' the byword for negotiated exits, and its successor states kept the word in their divorce (the velvet divorce of 1993).",
    facts: [
      { label: "Active", value: "17 November 1989–29 December 1989 (Havel elected)", attestation: "well-attested" },
      { label: "Heartlands", value: "Prague, Bratislava, Brno", attestation: "well-attested" },
      { label: "Methods", value: "Student demonstrations, civic forums, petition and manifesto circulation, a two-hour general strike", attestation: "well-attested" },
      { label: "Signature Achievements", value: "The party's leading role struck from the constitution; Havel's presidency; the 1990 free election", attestation: "well-attested" },
      { label: "Leadership", value: "Václav Havel, the Civic Forum and Public Against Violence coordinators", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "Regime change with no fatalities — the counter-image to 1956 and 1968", attestation: "well-attested" },
    ],
    relations: [
      { to: "vaclav-havel", kind: "led" },
      { to: "democracy-movement-1989", kind: "participant-in" },
      { to: "civil-liberties", kind: "shaped", note: "Its dissident Charter 77 culture made civil rights the programme." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Velvet Revolution'", tier: 1 },
      { work: "Václav Havel — Summer Meditations", tier: 1 },
    ],
    addedOn: "2026-10-12",
  },
  {
    id: "democracy-movement-1989",
    kind: "movement",
    name: "Pro-Democracy Movements of 1989",
    status: "verified",
    lead:
      "Across 1989 the Soviet bloc's citizen movements — Poland's round table, Hungary's opened border, East Germany's exodus and crowds, Czechoslovakia's velvet, Bulgaria's transition, and the student movement in Beijing's Tiananmen Square — contested single-party rule. Poland, Hungary, Czechoslovakia and Bulgaria negotiated transitions; China's was suppressed on 4 June with decisive force. The year proved both that party monopolies could end without blood and that outcomes depended on the party's own choice of instruments.",
    facts: [
      { label: "Active", value: "4 June 1989 (Poland's vote) through the year", attestation: "well-attested" },
      { label: "Heartlands", value: "Poland, Hungary, East Germany, Czechoslovakia, Bulgaria; Beijing", attestation: "well-attested" },
      { label: "Methods", value: "Round tables, mass demonstrations, border openings, independent candidacies, hunger strikes", attestation: "well-attested" },
      { label: "Signature Achievements", value: "The Polish June election; Hungary's negotiated transition; the Berlin crossings; Czechoslovakia's government of national understanding", attestation: "well-attested" },
      { label: "Leadership", value: "Lech Wałęsa, Václav Havel, reform communists including Imre Pozsgay; student committees in Beijing", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "A single year carrying both the era's negotiation and its suppression", attestation: "well-attested" },
    ],
    relations: [
      { to: "fall-of-berlin-wall", kind: "participant-in" },
      { to: "solidarity-movement", kind: "influenced-by" },
      { to: "velvet-revolution", kind: "participant-in" },
      { to: "one-party-state", kind: "contrasts-with" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Revolutions of 1989'", tier: 1 },
      { work: "Timothy Garton Ash — The Magic Lantern", tier: 1 },
    ],
    addedOn: "2026-10-13",
  },
  {
    id: "environmental-movement",
    kind: "movement",
    name: "Environmental Movement",
    status: "verified",
    lead:
      "The environmental movement converted conservation societies, scientific alarm and local protest into a permanent policy force: silent-spring toxicology, earth-day mobilisation, anti-nuclear campaigns, and then the climate agenda. It produced ministries, assessment laws and treaty regimes — from the 1972 Stockholm conference through the 1987 Montreal Protocol to the Paris Agreement of 2015 — and its green parties entered parliaments across Europe. Its methods run from litigation and science advice to mass civil disobedience.",
    facts: [
      { label: "Active", value: "From the 1960s (modern phase) onward", attestation: "well-attested" },
      { label: "Heartlands", value: "North America, Western Europe, Australia; global networks since", attestation: "well-attested" },
      { label: "Methods", value: "Science-publication strategy, litigation, mass demonstrations, party politics, treaty campaigns", attestation: "well-attested" },
      { label: "Signature Achievements", value: "Montreal Protocol (1987); the Rio Earth Summit and treaty system; the Paris Agreement (2015)", attestation: "well-attested" },
      { label: "Leadership", value: "Rachel Carson (intellectual founding), Maurice Strong (institutional founding); party leaders in Germany and elsewhere", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "Science-to-treaty pipelines as its signature institutional form", attestation: "well-attested" },
    ],
    relations: [
      { to: "environmental-policy", kind: "shaped" },
      { to: "green-politics", kind: "spawned" },
      { to: "world-health-organization", kind: "part-of" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Environmentalism'", tier: 1 },
      { work: "Official text: Paris Agreement (2015)", tier: 1 },
    ],
    addedOn: "2026-10-14",
  },
  {
    id: "decolonisation-movement",
    kind: "movement",
    name: "Decolonisation Movement",
    status: "verified",
    lead:
      "Decolonisation dismantled the European empires between 1945 and 1975 — India's independence and partition in 1947, the Bandung conference of 1955 building the non-aligned bloc, the year of Africa in 1960, the UN trusteeship and mandate territories' liquidation. The movement worked through parties, negotiated conferences and wars of liberation, and its constitutional products — dozens of new states and their founding instruments — remade the UN General Assembly's arithmetic.",
    facts: [
      { label: "Active", value: "1945–1975 (principal phase); residues into the 1990s", attestation: "well-attested" },
      { label: "Heartlands", value: "India, Indonesia, Ghana, Algeria, and the UN's Asian-African bloc", attestation: "well-attested" },
      { label: "Methods", value: "Nationalist parties, negotiated transfers, liberation wars, UN pressure, non-aligned diplomacy", attestation: "well-attested" },
      { label: "Signature Achievements", value: "The 1960 Declaration on the Granting of Independence to Colonial Countries and Peoples; UN membership rising from 51 to 144", attestation: "well-attested" },
      { label: "Leadership", value: "Mahatma Gandhi, Jawaharlal Nehru, Kwame Nkrumah, Sukarno, Ho Chi Minh", attestation: "well-attested" },
      { label: "Distinctive Feature", value: "The first movement to change the composition of an international body itself", attestation: "well-attested" },
    ],
    relations: [
      { to: "self-determination", kind: "uses" },
      { to: "indian-independence", kind: "spawned" },
      { to: "kwame-nkrumah", kind: "participant-in" },
      { to: "united-nations", kind: "shaped" },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Decolonization'", tier: 1 },
      { work: "UN General Assembly Resolution 1514 (1960)", tier: 1 },
    ],
    addedOn: "2026-10-15",
  },
  {
    id: "digital-rights-movement",
    kind: "movement",
    name: "Digital Rights Movement",
    status: "developing",
    lead:
      "The digital rights movement organises for privacy, encryption, open access and free expression on the internet — from the 1990s cyber-liberties organisations through the access-to-knowledge and open-source campaigns to today's data-protection advocacy. Its institutional wins are statutory and treaty-based: Europe's General Data Protection Regulation (2018) and Convention 108, the world's first binding data-protection treaty, grew in its weather. Its methods are litigation, standards work and code itself.",
    facts: [
      { label: "Active", value: "From the 1990s onward", attestation: "well-attested" },
      { label: "Heartlands", value: "North America and Europe; global civil-society networks", attestation: "well-attested" },
      { label: "Methods", value: "Strategic litigation, standards and protocol advocacy, privacy-by-design campaigns, open-source contribution", attestation: "well-attested" },
      { label: "Signature Achievements", value: "GDPR (2018); Convention 108 and its modernised protocol (2018); access-to-knowledge treaty advocacy", attestation: "well-attested" },
      { label: "Leadership", value: "Cyber-liberties lawyers and technologists of the Electronic Frontier Foundation generation", attestation: "attested" },
      { label: "Distinctive Feature", value: "Its activism is partly technical: the code is the lobby", attestation: "well-attested" },
    ],
    relations: [
      { to: "data-governance-policy", kind: "shaped" },
      { to: "civil-liberties", kind: "part-of" },
      { to: "universal-declaration-of-human-rights", kind: "cited-by" },
    ],
    sources: [
      { work: "Official text: Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data (Convention 108, 1981, modernised 2018)", tier: 1 },
      { work: "Encyclopædia Britannica — 'Data protection'", tier: 2 },
    ],
    addedOn: "2026-10-16",
  },
];
