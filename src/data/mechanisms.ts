// ─── Political Atlas — Governing Mechanisms (22 entries) ────────────────────
// Authored per SPEC.md: original prose, settled facts only, British English.

import type { Entity } from "./types";

export const mechanisms: Entity[] = [
  {
    id: "judicial-review",
    kind: "mechanism",
    name: "Judicial Review",
    status: "verified",
    lead:
      "Judicial review is the authority of courts to test legislation and executive action against a constitution and to refuse effect to what fails. The doctrine became consequential in [[united-states]] courts with Marbury v. Madison in 1803, and it now anchors constitutional adjudication from Germany's Federal Constitutional Court to Canada's Supreme Court. It gives the judiciary its share of the checking and balancing that [[separation-of-powers]] promises. Its defenders call it the guarantee that supreme law stays supreme; its critics reply that it hands the last word to judges nobody elected.",
    facts: [
      { label: "What It Does", value: "Lets courts strike down statutes and official acts that conflict with the constitution", attestation: "well-attested", note: "In most systems the court merely refuses to apply the offending measure; in others it strikes it from the statute book outright." },
      { label: "First Widespread Use", value: "United States courts from Marbury v. Madison (1803)", attestation: "well-attested" },
      { label: "Typical Home", value: "Constitutional and supreme courts in the United States, Germany, Canada and Australia", attestation: "well-attested" },
      { label: "Variants", value: "Decentralised review by any court versus centralised review by a dedicated constitutional court", attestation: "well-attested", note: "The American model is diffuse; the Kelsenian model concentrates the power in one tribunal." },
      { label: "Signature Case", value: "Marbury v. Madison, 5 U.S. 137 (1803)", attestation: "well-attested" },
      { label: "Also Known As", value: "Constitutional review; constitutional adjudication" },
      { label: "Distinctive Weakness", value: "The counter-majoritarian difficulty: unelected judges overturning choices made by elected legislatures", attestation: "attested", note: "The phrase is Alexander Bickel's, from The Least Dangerous Branch (1962)." },
    ],
    relations: [
      { to: "separation-of-powers", kind: "exemplifies", note: "It is the judiciary's share of the checking and balancing the doctrine promises." },
      { to: "federalist-papers", kind: "influenced-by", note: "Federalist No. 78 argued that courts must treat the constitution as fundamental law." },
      { to: "united-states", kind: "shaped", note: "Entrenched by Marbury v. Madison (1803) and central to American constitutional practice since." },
      { to: "germany", kind: "shaped", note: "The Federal Constitutional Court, seated at Karlsruhe since 1951, made review central to German public law." },
      { to: "canada", kind: "shaped", note: "The Charter of Rights and Freedoms (1982) made Canadian courts arbiters of the constitution." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Judicial review'", tier: 1 },
      { work: "Alexander Bickel — The Least Dangerous Branch (1962)", tier: 1 },
      { work: "Official text: Marbury v. Madison, 5 U.S. 137 (1803)", tier: 1 },
    ],
    addedOn: "2026-10-01",
  },

  {
    id: "universal-suffrage",
    kind: "mechanism",
    name: "Universal Suffrage",
    status: "verified",
    lead:
      "Universal suffrage opens the vote to every adult citizen regardless of property, sex, race or literacy. Two centuries of campaigning by the [[suffrage-movement]] and its allies dismantled the property-qualified franchises of the eighteenth and nineteenth centuries — [[new-zealand]] admitted all adult women in 1893, and most established democracies reached full adult suffrage by the middle of the twentieth. The franchise is the working premise of [[popular-sovereignty]]: a state cannot claim to rest upon the people while most of the people are barred from the polls.",
    facts: [
      { label: "What It Does", value: "Opens the vote to every adult citizen, save narrow exclusions of age, registration or detention", attestation: "well-attested" },
      { label: "First Widespread Use", value: "New Zealand (1893) and Australia (1902) led; most Western democracies followed by the mid-twentieth century", attestation: "well-attested" },
      { label: "Typical Home", value: "Every established democracy — France, Germany, Sweden and Canada among them", attestation: "well-attested", note: "Timing varied widely: French women voted from 1944, Swiss women federally only from 1971." },
      { label: "Variants", value: "Universal male suffrage first, full adult suffrage later; equal and weighted vote systems", attestation: "attested", note: "'One person, one vote' is the equal-weight principle the long reform struggle settled on." },
      { label: "Signature Case", value: "New Zealand's Electoral Act 1893", attestation: "well-attested", note: "It made the country the first to enfranchise all adult women." },
      { label: "Distinctive Weakness", value: "A broad franchise alone guarantees little where elections are unfree or votes unequally weighted", attestation: "attested" },
    ],
    relations: [
      { to: "suffrage-movement", kind: "influenced-by", note: "Nineteenth- and twentieth-century suffrage campaigns forced the franchise open." },
      { to: "chartism", kind: "influenced-by", note: "The Chartists' six points of 1838 put universal male suffrage at the centre of British politics." },
      { to: "popular-sovereignty", kind: "exemplifies", note: "The franchise is how the people's authorship of government is exercised." },
      { to: "new-zealand", kind: "shaped", note: "The 1893 Act made the country the first to enfranchise all adult women." },
      { to: "australia", kind: "shaped", note: "The Commonwealth Franchise Act 1902 set a broad federal franchise from the start, though it excluded most Aboriginal Australians until 1962." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Suffrage'", tier: 1 },
      { work: "New Zealand History — 'Women and the vote'", tier: 2 },
      { work: "International IDEA — Voter Turnout Database", tier: 2 },
    ],
    addedOn: "2026-10-02",
  },

  {
    id: "proportional-representation",
    kind: "mechanism",
    name: "Proportional Representation",
    status: "verified",
    lead:
      "Proportional representation translates votes into seats in close proportion, so that a party polling forty per cent wins roughly forty per cent of the seats. Multi-member districts and vote pooling make it the parent of [[party-list-pr]] and [[single-transferable-vote]], the two families that put it into practice. Belgium adopted it in 1899 and much of continental Europe followed after the First World War; its champions defend it as fair to smaller parties and minorities, its critics blame it for fragmented parliaments and slow government formation.",
    facts: [
      { label: "What It Does", value: "Translates votes into seats in near proportion to each party's share", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Belgium from 1899; much of continental Europe after 1918", attestation: "well-attested" },
      { label: "Typical Home", value: "The Netherlands, Belgium, Sweden and Germany, among much of continental Europe", attestation: "well-attested" },
      { label: "Variants", value: "Party lists, the single transferable vote and mixed-member systems", attestation: "well-attested" },
      { label: "Signature Case", value: "The Tweede Kamer in the Netherlands, among the most proportional chambers in Europe", attestation: "attested" },
      { label: "Distinctive Weakness", value: "Few single-party majorities, and prolonged coalition bargaining after elections", attestation: "attested" },
    ],
    relations: [
      { to: "first-past-the-post", kind: "contrasts-with", note: "Plurality rule distorts vote-to-seat translation; proportional methods correct it." },
      { to: "coalition-government", kind: "produced", note: "Proportional chambers rarely hand one party a majority, so coalition cabinets are the norm." },
      { to: "single-transferable-vote", kind: "produced", note: "Thomas Hare's 1857 scheme was the first fully worked-out proportional method." },
      { to: "representation", kind: "exemplifies", note: "It is the fullest attempt to mirror the electorate in the chamber." },
      { to: "netherlands", kind: "shaped", note: "Dutch elections return a dozen or more parties from a single national vote." },
    ],
    sources: [
      { work: "David M. Farrell — Electoral Systems: A Comparative Introduction", tier: 1 },
      { work: "Encyclopædia Britannica — 'Proportional representation'", tier: 1 },
      { work: "ACE Project — Electoral Knowledge Network", tier: 2 },
    ],
    addedOn: "2026-10-04",
  },

  {
    id: "first-past-the-post",
    kind: "mechanism",
    name: "First Past the Post",
    status: "verified",
    lead:
      "First past the post awards every single-member district to the candidate with the most votes, majority or not. It is the historic method of the [[united-kingdom]], the United States and Canada, and it converts pluralities into working majorities: small swings of vote between the two leading parties produce large swings of seats. Defenders prize that decisiveness; critics answer that votes cast for losing candidates count for nothing and that seat totals can diverge wildly from vote shares.",
    facts: [
      { label: "What It Does", value: "Awards each single-member district to the candidate with the most votes, majority or not", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Nineteenth-century Britain and its settler colonies", attestation: "well-attested" },
      { label: "Typical Home", value: "United Kingdom, United States, Canada and Nigeria", attestation: "well-attested" },
      { label: "Variants", value: "Multi-member block voting is its nearest relative; the alternative vote is its principal reform rival", attestation: "attested" },
      { label: "Signature Case", value: "United Kingdom general elections, where small nationwide vote leads become large majorities", attestation: "attested" },
      { label: "Distinctive Weakness", value: "Wasted votes for losing candidates, and seats divorced from vote shares", attestation: "attested" },
    ],
    relations: [
      { to: "proportional-representation", kind: "contrasts-with", note: "The two families dispute whether seats should reward breadth of support or mirror vote shares." },
      { to: "ranked-choice-voting", kind: "contrasts-with", note: "Australia replaced first past the post with preferential ballots for its House of Representatives in 1918." },
      { to: "united-kingdom", kind: "shaped", note: "It underwrites single-party Westminster majorities built on pluralities of the vote." },
      { to: "canada", kind: "shaped", note: "Canadian elections routinely produce seat swings far larger than vote swings." },
    ],
    sources: [
      { work: "Arend Lijphart — Patterns of Democracy (1999)", tier: 1 },
      { work: "David M. Farrell — Electoral Systems: A Comparative Introduction", tier: 1 },
      { work: "ACE Project — Electoral Knowledge Network", tier: 2 },
    ],
    addedOn: "2026-10-06",
  },

  {
    id: "single-transferable-vote",
    kind: "mechanism",
    name: "Single Transferable Vote",
    status: "reviewed",
    lead:
      "The single transferable vote fills multi-member districts from ranked ballots, transferring each elected candidate's surplus to later preferences until every seat is taken. Thomas Hare sketched the scheme in the 1850s and John Stuart Mill commended it as the great improvement in representative theory, though comparatively few legislatures have adopted it. It endures most strongly in Ireland, Malta and the Australian Senate, and remains the most candidate-centred form of [[proportional-representation]].",
    facts: [
      { label: "What It Does", value: "Fills multi-member seats by transferring surpluses and eliminating low-ranked candidates", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Tasmania from 1909; Ireland and Malta from 1921", attestation: "well-attested" },
      { label: "Typical Home", value: "Ireland, Malta and the Australian Senate", attestation: "well-attested" },
      { label: "Variants", value: "Hare-Clark in Tasmania; the single-winner instant-runoff form", attestation: "attested" },
      { label: "Signature Case", value: "Ireland's Dáil elections", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Quota arithmetic and recounts are slow, and opaque to ordinary voters", attestation: "attested" },
    ],
    relations: [
      { to: "proportional-representation", kind: "exemplifies", note: "The quota-and-transfer count gives parties and independents seats in rough proportion to votes." },
      { to: "party-list-pr", kind: "contrasts-with", note: "Voters rank candidates, not parties; the ballot works for independents and cross-party tickets." },
      { to: "first-past-the-post", kind: "contrasts-with", note: "The scheme was designed in Victorian Britain as a rival to plurality voting in single seats." },
      { to: "australia", kind: "shaped", note: "The Australian Senate has used the method since 1949." },
    ],
    sources: [
      { work: "Thomas Hare — The Machinery of Representation (1857)", tier: 1 },
      { work: "John Stuart Mill — Considerations on Representative Government (1861)", tier: 1 },
      { work: "Encyclopædia Britannica — 'Proportional representation'", tier: 1 },
    ],
    addedOn: "2026-10-08",
  },

  {
    id: "party-list-pr",
    kind: "mechanism",
    name: "Party-List Proportional Representation",
    status: "reviewed",
    lead:
      "Party-list systems award seats from lists that parties submit before polling day, filling them in proportion to the votes each list wins. They are the most widely used realisation of [[proportional-representation]], standard across Scandinavia, the Low Countries and much of Latin America. Where lists are closed the party leadership fixes the order of entry to parliament; where they are open, voters may promote particular candidates on the list.",
    facts: [
      { label: "What It Does", value: "Allocates seats among party lists in proportion to votes, then to candidates down each list", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Belgium (1899) and the Nordic countries in the early twentieth century", attestation: "well-attested" },
      { label: "Typical Home", value: "Sweden, the Netherlands, Spain, Portugal, Brazil and South Africa", attestation: "well-attested" },
      { label: "Variants", value: "Closed, open and flexible lists; D'Hondt and Sainte-Laguë seat formulas", attestation: "well-attested" },
      { label: "Signature Case", value: "Sweden's Riksdag, elected from regional lists with a preference vote", attestation: "attested" },
      { label: "Distinctive Weakness", value: "Closed lists concentrate power over parliamentary entry in party leaderships", attestation: "attested" },
    ],
    relations: [
      { to: "proportional-representation", kind: "exemplifies", note: "The list is the plainest machine for proportional seat allocation." },
      { to: "single-transferable-vote", kind: "contrasts-with", note: "List systems are party-centred; the transferable vote lets voters sort candidates for themselves." },
      { to: "first-past-the-post", kind: "contrasts-with", note: "Adopted across continental Europe partly as the opposite of British plurality races." },
      { to: "sweden", kind: "shaped", note: "Riksdag elections run on regional lists with a preference vote." },
      { to: "brazil", kind: "shaped", note: "Open-list proportional elections are central to Brazilian politics." },
    ],
    sources: [
      { work: "David M. Farrell — Electoral Systems: A Comparative Introduction", tier: 1 },
      { work: "Arend Lijphart — Patterns of Democracy (1999)", tier: 1 },
      { work: "ACE Project — Electoral Knowledge Network", tier: 2 },
    ],
    addedOn: "2026-10-10",
  },

  {
    id: "ranked-choice-voting",
    kind: "mechanism",
    name: "Ranked-Choice Voting",
    status: "developing",
    lead:
      "Ranked-choice voting lets voters order candidates by preference; in single-seat contests the lowest-ranked candidates are eliminated in turn and their ballots redistributed until someone commands a majority. [[australia]] has used preferential ballots for its House of Representatives since 1918, and American cities have adopted the single-winner form — commonly called instant-runoff voting — for local elections since the 2000s, with Maine the first state to take it up for statewide office. Its promise is winners with broad support; its recurring problem is ballot exhaustion, when a voter's list runs out before the final round.",
    facts: [
      { label: "What It Does", value: "Eliminates last-placed candidates in rounds, redistributing their ballots by later preferences", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Australia's House of Representatives from 1918", attestation: "well-attested" },
      { label: "Typical Home", value: "Australia, and city and state elections in the United States", attestation: "attested" },
      { label: "Variants", value: "Instant runoff for single seats; the single transferable vote for multi-seat bodies", attestation: "well-attested" },
      { label: "Signature Case", value: "Australia's federal House of Representatives", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Ballot exhaustion removes voters from the deciding rounds", attestation: "attested" },
    ],
    relations: [
      { to: "single-transferable-vote", kind: "influenced-by", note: "Instant-runoff voting is the single-member form of the same preferential counting family." },
      { to: "first-past-the-post", kind: "contrasts-with", note: "A majority of ballots rather than a plurality decides the seat." },
      { to: "proportional-representation", kind: "contrasts-with", note: "Preferential single-seat elections produce majorities, not proportional seat shares." },
      { to: "australia", kind: "shaped", note: "Preferential voting for the House of Representatives dates from 1918." },
    ],
    sources: [
      { work: "Official text: Commonwealth Electoral Act 1918 (Australia)", tier: 1 },
      { work: "Official ballot measure: Maine Question 5 (2016)", tier: 1 },
      { work: "FairVote — ranked-choice voting research", tier: 2 },
    ],
    addedOn: "2026-10-12",
  },

  {
    id: "referendum",
    kind: "mechanism",
    name: "Referendum",
    status: "verified",
    lead:
      "A referendum puts a law, a repeal or a constitutional change directly to the electorate for a yes-or-no answer. Switzerland has held federal referendums since 1848 and made them obligatory for constitutional amendment in 1874, while Australia and Ireland ratify constitutional change by popular vote as a matter of course. The device turned [[direct-democracy]] from an Athenian memory into a routine part of modern government, though it decides only the question put, and campaigns can turn on fear as easily as reason.",
    facts: [
      { label: "What It Does", value: "Submits a law, repeal or constitutional change to voters for direct approval", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Switzerland after 1848, obligatory for constitutional amendments from 1874", attestation: "well-attested" },
      { label: "Typical Home", value: "Switzerland, Australia, Ireland and Italy", attestation: "well-attested" },
      { label: "Variants", value: "Obligatory, optional and citizens-initiated; binding or advisory", attestation: "well-attested" },
      { label: "Signature Case", value: "Switzerland's federal referendums, held several times a year", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Complex measures reduced to a single binary question", attestation: "attested" },
    ],
    relations: [
      { to: "direct-democracy", kind: "exemplifies", note: "It is the mass device: the whole electorate as legislator for a day." },
      { to: "popular-sovereignty", kind: "exemplifies", note: "The people ratify, repeal or advise directly rather than through representatives." },
      { to: "switzerland", kind: "shaped", note: "Federal referendums have been part of Swiss government since 1848." },
      { to: "australia", kind: "shaped", note: "Constitutional change has required a national referendum vote since 1901." },
      { to: "french-revolution", kind: "influenced-by", note: "Revolutionary France ratified its 1793 constitution by popular vote, the first national plebiscite of the modern sort." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Referendum'", tier: 1 },
      { work: "Official text: Constitution of Switzerland", tier: 1 },
      { work: "International IDEA — Direct Democracy Database", tier: 2 },
    ],
    addedOn: "2026-10-14",
  },

  {
    id: "citizens-initiative",
    kind: "mechanism",
    name: "Citizens' Initiative",
    status: "reviewed",
    lead:
      "The citizens' initiative lets a body of voters propose a measure themselves and force it onto the ballot or the legislative agenda once a signature threshold is met. Switzerland's constitutional initiative, complete from 1891, is the classic model, and the American states opened their own doors to it in the Progressive Era from South Dakota in 1898. Where a bare [[referendum]] merely answers questions posed from above, the initiative hands agenda-setting power to the people — the sharpest popular check that [[direct-democracy]] offers.",
    facts: [
      { label: "What It Does", value: "Lets citizens propose measures by petition and force a vote or a legislative debate", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Switzerland from 1891; the American states from South Dakota (1898)", attestation: "well-attested" },
      { label: "Typical Home", value: "Switzerland, the American states and Italy", attestation: "well-attested", note: "Italy's abrogative referendum needs 500,000 voter signatures to qualify." },
      { label: "Variants", value: "Direct, indirect and agenda initiatives", attestation: "well-attested" },
      { label: "Signature Case", value: "Switzerland's constitutional initiative, requiring 100,000 signatures", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Signature drives favour organised, well-funded campaigns", attestation: "attested" },
    ],
    relations: [
      { to: "referendum", kind: "uses", note: "A qualified initiative usually culminates in a nationwide vote." },
      { to: "direct-democracy", kind: "part-of", note: "It supplies the agenda-setting half that a bare referendum lacks." },
      { to: "popular-sovereignty", kind: "exemplifies", note: "Citizens, not legislators, write the question." },
      { to: "switzerland", kind: "shaped", note: "The constitutional initiative, complete from 1891, needs 100,000 signatures." },
      { to: "united-states", kind: "shaped", note: "South Dakota opened statewide initiative use in 1898; Oregon followed in 1902." },
      { to: "rousseau", kind: "influenced-by", note: "Rousseau insisted that a free people make its own laws; the initiative is the nearest modern instrument." },
    ],
    sources: [
      { work: "Official text: Constitution of Switzerland", tier: 1 },
      { work: "National Conference of State Legislatures — 'Initiative and Referendum'", tier: 2 },
      { work: "International IDEA — Direct Democracy Database", tier: 2 },
    ],
    addedOn: "2026-10-16",
  },

  {
    id: "recall-election",
    kind: "mechanism",
    name: "Recall Election",
    status: "developing",
    lead:
      "A recall election lets voters dismiss an elected officeholder before the term ends, normally once a petition clears a signature threshold. The American states adopted it in the Progressive Era — Los Angeles in 1903 and Oregon statewide in 1908 — and California's removal of its sitting governor in 2003 remains the best-known use. Britain added a deliberately high-bar recall of members of parliament by petition in 2015; the device is a [[direct-democracy]] instrument aimed at persons rather than laws.",
    facts: [
      { label: "What It Does", value: "Removes an elected officeholder mid-term through a petition-triggered vote", attestation: "well-attested" },
      { label: "First Widespread Use", value: "United States — Los Angeles (1903), Oregon statewide (1908)", attestation: "well-attested" },
      { label: "Typical Home", value: "American states, notably California, and parts of Latin America", attestation: "attested" },
      { label: "Signature Case", value: "California's gubernatorial recall of 2003", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Invites repeated, factional petition drives against unpopular officeholders", attestation: "attested" },
    ],
    relations: [
      { to: "direct-democracy", kind: "part-of", note: "The recall extends direct democracy from laws to officeholders." },
      { to: "united-states", kind: "shaped", note: "Los Angeles adopted the recall in 1903; Oregon statewide in 1908." },
      { to: "impeachment", kind: "contrasts-with", note: "Impeachment removes through the legislature; the recall removes through the voters." },
      { to: "popular-sovereignty", kind: "exemplifies", note: "Mandate-holders answer to the electorate between elections, not only at them." },
    ],
    sources: [
      { work: "Official text: Recall of MPs Act 2015 (United Kingdom)", tier: 1 },
      { work: "National Conference of State Legislatures — 'Recall of State Officials'", tier: 2 },
    ],
    addedOn: "2026-10-18",
  },

  {
    id: "bicameralism",
    kind: "mechanism",
    name: "Bicameralism",
    status: "verified",
    lead:
      "Bicameralism divides the legislature into two chambers, each with its own composition, procedure and share of legislative power. The pattern runs from the Lords and Commons of the [[united-kingdom]] to the two houses at Washington, and federal systems usually give their regions a chamber of their own, as the United States, Germany and Australia do. Defenders value the second look a second chamber gives hasty legislation; critics ask why an elected majority should be checked by a house most voters could not name.",
    facts: [
      { label: "What It Does", value: "Splits the legislature into two chambers that must both pass legislation", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Medieval England; fixed in writing by the United States Constitution (1787)", attestation: "well-attested" },
      { label: "Typical Home", value: "United Kingdom, United States, Germany, Australia and Japan", attestation: "well-attested" },
      { label: "Variants", value: "Appointed, elected and federally constituted second chambers", attestation: "well-attested" },
      { label: "Signature Case", value: "The United States Senate: two seats per state regardless of size", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Duplicated work, and deadlock between the chambers", attestation: "attested" },
    ],
    relations: [
      { to: "unicameralism", kind: "contrasts-with", note: "Rival answers to how many chambers a legislature needs." },
      { to: "separation-of-powers", kind: "exemplifies", note: "A second chamber is an internal check on the legislature itself." },
      { to: "montesquieu", kind: "influenced-by", note: "Montesquieu admired the English two-house arrangement as a guard against hasty law." },
      { to: "federal-republic", kind: "part-of", note: "Federal second chambers seat the regions — the United States, Germany and Australia among them." },
      { to: "united-kingdom", kind: "shaped", note: "Lords and Commons have legislated together since the late middle ages." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Bicameral system'", tier: 1 },
      { work: "Walter Bagehot — The English Constitution (1867)", tier: 1 },
      { work: "Arend Lijphart — Patterns of Democracy (1999)", tier: 1 },
    ],
    addedOn: "2026-10-20",
  },

  {
    id: "unicameralism",
    kind: "mechanism",
    name: "Unicameralism",
    status: "reviewed",
    lead:
      "Unicameralism concentrates legislative power in a single chamber and dispenses with the second house. New Zealand, Denmark and Sweden abolished their upper chambers in 1951, 1953 and 1971 respectively, Nebraska became the only American state with one chamber in 1934, and most small states have never had a second. The case is economy and clarity of accountability; the case for [[bicameralism]] is the revising scrutiny that a single chamber tends to rush.",
    facts: [
      { label: "What It Does", value: "Concentrates all legislative business in one elected chamber", attestation: "well-attested" },
      { label: "First Widespread Use", value: "A post-1945 wave of second-chamber abolition: New Zealand (1951), Denmark (1953), Sweden (1971)", attestation: "well-attested" },
      { label: "Typical Home", value: "The Nordic countries, New Zealand and most small unitary states", attestation: "well-attested" },
      { label: "Variants", value: "Fully elected single chambers; Norway's former two-section Storting", attestation: "attested" },
      { label: "Signature Case", value: "Sweden's single-chamber Riksdag since 1971", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Fewer chances to catch flawed bills before passage", attestation: "attested" },
    ],
    relations: [
      { to: "bicameralism", kind: "contrasts-with", note: "Its case is economy and clarity; the second chamber's case is revision." },
      { to: "sweden", kind: "shaped", note: "Sweden collapsed its two chambers into one Riksdag in 1971." },
      { to: "new-zealand", kind: "shaped", note: "New Zealand abolished its Legislative Council in 1951." },
      { to: "unitary-republic", kind: "part-of", note: "Single chambers are the default where no federal regions need a separate house." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Unicameral system'", tier: 1 },
      { work: "Arend Lijphart — Patterns of Democracy (1999)", tier: 1 },
    ],
    addedOn: "2026-10-22",
  },

  {
    id: "impeachment",
    kind: "mechanism",
    name: "Impeachment",
    status: "reviewed",
    lead:
      "Impeachment is the formal charging of a senior officeholder for grave misconduct, followed by trial and, on conviction, removal from office. The [[united-states]] constitution places the charge in the House of Representatives and the trial in the Senate, an arrangement the framers adapted from English parliamentary practice. Most presidential republics keep some analogue, from Brazil's Congress to South Africa's National Assembly, while parliamentary systems usually dismiss governments by vote of no confidence instead.",
    facts: [
      { label: "What It Does", value: "Charges, tries and removes officeholders for treason, bribery or other grave misconduct", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Seventeenth-century England; written into the United States Constitution (1787)", attestation: "well-attested" },
      { label: "Typical Home", value: "United States, Brazil, South Africa and the Philippines", attestation: "well-attested" },
      { label: "Variants", value: "Charge by one house and trial by another (United States); removal by legislative supermajority (Brazil)", attestation: "attested" },
      { label: "Signature Case", value: "The United States Senate's impeachment trials, where conviction needs two-thirds", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "A political trial: outcomes track partisan arithmetic as much as guilt", attestation: "attested" },
    ],
    relations: [
      { to: "us-constitution", kind: "part-of", note: "Articles I and II fix the charge in the House and the trial in the Senate." },
      { to: "no-confidence-motion", kind: "contrasts-with", note: "Impeachment punishes misconduct; a confidence vote tests political support." },
      { to: "recall-election", kind: "contrasts-with", note: "The legislature, not the electorate, sits as judge here." },
      { to: "separation-of-powers", kind: "exemplifies", note: "One branch charges, another tries — a designed sharing of the removal power." },
      { to: "united-states", kind: "shaped", note: "The arrangement was settled at Philadelphia in 1787 and has been used against presidents, judges and a cabinet secretary since." },
    ],
    sources: [
      { work: "Encyclopædia Britannica — 'Impeachment'", tier: 1 },
      { work: "Official text: Constitution of the United States", tier: 1 },
      { work: "William Blackstone — Commentaries on the Laws of England (1765–69)", tier: 1 },
    ],
    addedOn: "2026-10-24",
  },

  {
    id: "constitutional-amendment",
    kind: "mechanism",
    name: "Constitutional Amendment",
    status: "reviewed",
    lead:
      "Constitutional amendment is the procedure by which a constitution's own text is formally changed, usually through supermajorities, referendums or repeated votes that ordinary legislation never needs. Article V of the [[us-constitution]] requires two-thirds of each house plus ratification by three-quarters of the states; Germany's Basic Law declares its federal order and human dignity beyond amendment; Switzerland sends every amendment to a mandatory [[referendum]]. The difficulty is calibration — procedures loose enough to let a constitution adapt, tight enough to keep it protected.",
    facts: [
      { label: "What It Does", value: "Prescribes how a constitution's text may be formally changed", attestation: "well-attested" },
      { label: "First Widespread Use", value: "The United States from 1789 — twenty-seven amendments to date", attestation: "well-attested" },
      { label: "Typical Home", value: "Every written constitution — the United States, Germany, Switzerland and Australia among them", attestation: "well-attested" },
      { label: "Variants", value: "Legislative supermajority, referendum ratification, constituent assembly and unamendable clauses", attestation: "well-attested" },
      { label: "Signature Case", value: "Article V of the United States Constitution", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Rigidity can strand a constitution while its society moves on", attestation: "attested" },
    ],
    relations: [
      { to: "us-constitution", kind: "part-of", note: "Article V supplies the amending formula, used twenty-seven times." },
      { to: "referendum", kind: "uses", note: "Switzerland and Australia ratify amendments by popular vote." },
      { to: "popular-sovereignty", kind: "exemplifies", note: "The amending power formally belongs to the people, not to the ordinary legislature." },
      { to: "united-states", kind: "shaped", note: "Twenty-seven amendments — from the Bill of Rights (1791) to the Twenty-Seventh (1992) — mark the constitution's path." },
    ],
    sources: [
      { work: "Official text: Constitution of the United States", tier: 1 },
      { work: "Official text: Basic Law for the Federal Republic of Germany", tier: 1 },
      { work: "Encyclopædia Britannica — 'Constitution'", tier: 1 },
    ],
    addedOn: "2026-10-26",
  },

  {
    id: "head-of-state-veto",
    kind: "mechanism",
    name: "Head-of-State Veto",
    status: "reviewed",
    lead:
      "The head-of-state veto lets a president refuse assent to a bill the legislature has passed, blocking it outright or suspending it pending supermajority repassage. The American president's qualified veto dates from 1787, and Congress can override it by two-thirds of each house, while in British [[constitutional-monarchy]] the royal veto has not been withheld since Queen Anne's reign. The device is the executive's principal written check on the legislature, and lives chiefly in [[presidential-system]] constitutions; its suspensive variants slow laws down rather than kill them.",
    facts: [
      { label: "What It Does", value: "Blocks or delays a bill by withholding formal assent", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Written into the United States Constitution in 1787; the last British royal veto fell in 1708", attestation: "well-attested" },
      { label: "Typical Home", value: "United States, Brazil and Chile, with weaker suspensive forms elsewhere", attestation: "attested" },
      { label: "Variants", value: "Absolute, qualified and suspensive vetoes; package and line-item vetoes", attestation: "well-attested" },
      { label: "Signature Case", value: "The two-thirds override of the United States Congress", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "High override thresholds can entrench gridlock in divided government", attestation: "attested" },
    ],
    relations: [
      { to: "presidential-system", kind: "part-of", note: "The veto is the classic executive check on the legislature in presidential constitutions." },
      { to: "us-constitution", kind: "part-of", note: "Article I, section 7 grants the qualified veto and its two-thirds override." },
      { to: "no-confidence-motion", kind: "contrasts-with", note: "The veto checks the legislature from the executive; the confidence motion checks the executive from the legislature." },
      { to: "separation-of-powers", kind: "exemplifies", note: "It divides the legislative power between the two branches." },
      { to: "united-states", kind: "shaped", note: "Veto politics and override votes are a settled part of congressional practice." },
    ],
    sources: [
      { work: "Official text: Constitution of the United States", tier: 1 },
      { work: "Encyclopædia Britannica — 'Veto'", tier: 1 },
      { work: "The Federalist Papers", tier: 1, note: "Federalist No. 73 defends the qualified veto." },
    ],
    addedOn: "2026-10-28",
  },

  {
    id: "no-confidence-motion",
    kind: "mechanism",
    name: "No-Confidence Motion",
    status: "reviewed",
    lead:
      "A vote of no confidence lets a parliament withdraw its support from the government, obliging the ministry to resign or face a fresh election. It is the hinge of the [[parliamentary-system]]: governments in the United Kingdom and Japan stand only while the lower house keeps faith with them. Germany's Basic Law answered the motion's churn with a constructive variant that must elect a successor before it can depose a chancellor.",
    facts: [
      { label: "What It Does", value: "Brings down a government that has lost the lower house's support", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Nineteenth-century Britain, as collective cabinet responsibility hardened", attestation: "well-attested" },
      { label: "Typical Home", value: "United Kingdom, Japan, Germany and Canada", attestation: "well-attested" },
      { label: "Variants", value: "Explicit and implicit confidence votes; Germany's constructive vote of no confidence", attestation: "well-attested" },
      { label: "Signature Case", value: "Germany's constructive vote under Article 67 of the Basic Law", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "A game of parliamentary numbers, unavailable to the voters themselves", attestation: "attested" },
    ],
    relations: [
      { to: "parliamentary-system", kind: "part-of", note: "Governments exist at the pleasure of the lower house — the confidence rule is the mechanism." },
      { to: "united-kingdom", kind: "shaped", note: "Nineteenth-century practice turned defeat on confidence into resignation." },
      { to: "japan", kind: "shaped", note: "Article 69 of the 1947 constitution imports the confidence rule." },
      { to: "head-of-state-veto", kind: "contrasts-with", note: "One is the legislature's weapon against the executive; the other is the executive's against the legislature." },
    ],
    sources: [
      { work: "A. V. Dicey — Introduction to the Study of the Law of the Constitution (1885)", tier: 1 },
      { work: "Walter Bagehot — The English Constitution (1867)", tier: 1 },
      { work: "Official text: Basic Law for the Federal Republic of Germany", tier: 1 },
    ],
    addedOn: "2026-10-30",
  },

  {
    id: "coalition-government",
    kind: "mechanism",
    name: "Coalition Government",
    status: "reviewed",
    lead:
      "A coalition government is a cabinet drawn from more than one party, formed when no single party commands a legislative majority. It is the normal consequence of [[proportional-representation]]: German federal governments have rested on coalitions for nearly the whole post-war period, while the Netherlands and Belgium rarely govern any other way. Negotiated programmes, shared ministries and written coalition agreements make coalition-building a craft of its own.",
    facts: [
      { label: "What It Does", value: "Joins two or more parties in a shared cabinet and programme", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Post-1918 Europe, where proportional systems multiplied hung parliaments", attestation: "well-attested" },
      { label: "Typical Home", value: "Germany, the Netherlands, Belgium and New Zealand", attestation: "well-attested" },
      { label: "Variants", value: "Grand, minimum-winning and minority cabinets supported vote by vote", attestation: "attested" },
      { label: "Signature Case", value: "Germany's post-war grand coalitions (1966–69, 2005–09, 2013–21)", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Compromise programmes, and cabinet churn when partners quarrel", attestation: "attested" },
    ],
    relations: [
      { to: "proportional-representation", kind: "influenced-by", note: "Proportional chambers of many parties make coalitions the standard governing form." },
      { to: "parliamentary-system", kind: "part-of", note: "Coalition formation and confidence are woven into parliamentary practice." },
      { to: "consociationalism", kind: "exemplifies", note: "Grand coalitions across ideological blocs are a consociational signature, as in the Low Countries." },
      { to: "germany", kind: "shaped", note: "Post-war German governments have nearly always been coalitions of two parties or blocs." },
      { to: "netherlands", kind: "shaped", note: "Dutch cabinet formation is a proverbially lengthy coalition negotiation." },
    ],
    sources: [
      { work: "Arend Lijphart — Patterns of Democracy (1999)", tier: 1 },
      { work: "Encyclopædia Britannica — 'Coalition government'", tier: 1 },
      { work: "Kaare Strøm, Wolfgang C. Müller and Torbjörn Bergman — Delegation and Accountability in Parliamentary Democracies (2003)", tier: 1 },
    ],
    addedOn: "2026-11-01",
  },

  {
    id: "emergency-powers",
    kind: "mechanism",
    name: "Emergency Powers",
    status: "reviewed",
    lead:
      "Emergency powers let a government override ordinary legal limits during war, insurrection or catastrophe, on the understanding that the exception ends when the emergency does. Article 48 of the [[weimar-constitution]] showed how such clauses can be worn smooth by constant use, and West Germany answered in 1968 by requiring parliamentary consent for any state of defence. The device sits in permanent tension with [[rule-of-law]], since it legalises departures from the very law it claims to protect.",
    facts: [
      { label: "What It Does", value: "Authorises governments to override ordinary law during grave crises", attestation: "well-attested" },
      { label: "First Widespread Use", value: "The Roman dictatorship in antiquity; written emergency clauses spread after 1918", attestation: "well-attested" },
      { label: "Typical Home", value: "France, Germany and Turkey, in different constitutional forms", attestation: "attested" },
      { label: "Variants", value: "States of siege, martial law, states of emergency and sunset-clause delegation", attestation: "well-attested" },
      { label: "Signature Case", value: "Article 48 of the Weimar Constitution", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Powers built for rare crises are easily made routine", attestation: "attested" },
    ],
    relations: [
      { to: "rule-of-law", kind: "contrasts-with", note: "The emergency clause authorises departures from ordinary law, then promises their end." },
      { to: "civil-liberties", kind: "contrasts-with", note: "Emergency declarations typically suspend the very liberties the constitution guarantees." },
      { to: "weimar-constitution", kind: "part-of", note: "Article 48 vested emergency decree power in the president — and was worn smooth by use after 1930." },
      { to: "germany", kind: "shaped", note: "West Germany's 1968 emergency provisions require parliamentary consent for a state of defence." },
    ],
    sources: [
      { work: "Official text: Weimar Constitution (1919)", tier: 1 },
      { work: "Official text: Basic Law for the Federal Republic of Germany", tier: 1 },
      { work: "Clinton Rossiter — Constitutional Dictatorship (1948)", tier: 1 },
    ],
    addedOn: "2026-11-03",
  },

  {
    id: "devolution",
    kind: "mechanism",
    name: "Devolution",
    status: "reviewed",
    lead:
      "Devolution transfers law-making and administration from a central government to elected regional bodies without federalising the state. Scotland and Wales voted for their own assemblies in 1997 and opened them in 1999 inside the Westminster sovereignty of the [[united-kingdom]], while Spain's autonomous communities and Italy's regions walk the same road with powers set by statute rather than a shared constitutional floor. The settlement is revocable by the centre — which is precisely the difference between devolution and the entrenched regions of a [[federal-republic]].",
    facts: [
      { label: "What It Does", value: "Hands powers to elected regional assemblies without federalising the state", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Spain from 1979; the United Kingdom after the 1997 referendums", attestation: "well-attested" },
      { label: "Typical Home", value: "United Kingdom, Spain and Italy", attestation: "well-attested" },
      { label: "Variants", value: "Legislative, executive and asymmetrical devolution", attestation: "well-attested" },
      { label: "Signature Case", value: "The Scottish Parliament, opened in 1999 after the 1997 referendum", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Devolved powers rest on statute and can be recalled by the centre", attestation: "attested" },
    ],
    relations: [
      { to: "united-kingdom", kind: "shaped", note: "The 1997–99 settlements created Edinburgh's parliament and Cardiff's assembly inside Westminster sovereignty." },
      { to: "spain", kind: "shaped", note: "The 1978 constitution built seventeen autonomous communities with statutes of varying power." },
      { to: "federal-republic", kind: "contrasts-with", note: "A federal constitution entrenches regional powers; devolution leaves them revocable." },
      { to: "referendum", kind: "uses", note: "Scotland and Wales ratified their assemblies in the 1997 referendums." },
    ],
    sources: [
      { work: "Official text: Scotland Act 1998", tier: 1 },
      { work: "Official text: Spanish Constitution of 1978", tier: 1 },
      { work: "Encyclopædia Britannica — 'Devolution'", tier: 1 },
    ],
    addedOn: "2026-11-05",
  },

  {
    id: "habeas-corpus",
    kind: "mechanism",
    name: "Habeas Corpus",
    status: "verified",
    lead:
      "Habeas corpus is the writ that compels whoever detains a person to produce them before a court and justify the detention. Rooted in English practice, hardened by the Habeas Corpus Act 1679 and conscious of clause 39 of [[magna-carta]], it spread through the common-law world as the principal safeguard against arbitrary imprisonment. Its suspension — by President Lincoln during the American Civil War, or by Britain in moments of crisis — marks the outer edge of what even [[emergency-powers]] may lawfully do.",
    facts: [
      { label: "What It Does", value: "Forces the state to justify any detention before a judge", attestation: "well-attested" },
      { label: "First Widespread Use", value: "England, regularised by the Habeas Corpus Act 1679", attestation: "well-attested" },
      { label: "Typical Home", value: "Common-law countries — the United Kingdom, United States, Canada and Australia", attestation: "well-attested" },
      { label: "Variants", value: "The writ ad subjiciendum and its statutory descendants", attestation: "attested" },
      { label: "Signature Case", value: "The Habeas Corpus Act 1679", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Little protection against secret detention and emergency suspension of the writ", attestation: "attested" },
    ],
    relations: [
      { to: "magna-carta", kind: "influenced-by", note: "Clause 39 of 1215 — no imprisonment save by lawful judgment — is the writ's distant root." },
      { to: "civil-liberties", kind: "precursor-of", note: "It is the oldest enforceable guarantee of personal liberty in the common-law world." },
      { to: "emergency-powers", kind: "contrasts-with", note: "Suspension of the writ is the emergency power of last resort, and the most telling one." },
      { to: "united-kingdom", kind: "shaped", note: "The 1679 Act regularised the writ and made delay before a judge unlawful." },
    ],
    sources: [
      { work: "Official text: Habeas Corpus Act 1679", tier: 1 },
      { work: "William Blackstone — Commentaries on the Laws of England (1765–69)", tier: 1 },
      { work: "Encyclopædia Britannica — 'Habeas corpus'", tier: 1 },
    ],
    addedOn: "2026-11-07",
  },

  {
    id: "electoral-college",
    kind: "mechanism",
    name: "Electoral College",
    status: "reviewed",
    lead:
      "The electoral college elects the United States president through electors chosen in each state, who meet weeks after the popular poll to cast the decisive votes. Article II of the [[us-constitution]] fixed the design, and the Twelfth Amendment separated the ballots for president and vice-president after the deadlocked election of 1800. Twice in recent memory, in 2000 and 2016, the college has elevated a candidate who trailed the national popular vote, which is why it remains the most criticised feature of [[united-states]] presidential elections.",
    facts: [
      { label: "What It Does", value: "Transfers the presidential choice from voters to state-based electors", attestation: "well-attested" },
      { label: "First Widespread Use", value: "United States, first used for the presidential election of 1788–89", attestation: "well-attested" },
      { label: "Typical Home", value: "The United States, alone among major democracies", attestation: "well-attested" },
      { label: "Variants", value: "Winner-take-all statewide electors, now the norm, against the district methods of Maine and Nebraska", attestation: "well-attested" },
      { label: "Signature Case", value: "The presidential elections of 2000 and 2016, both won by popular-vote losers", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "A candidate who loses the national popular vote can still take the presidency", attestation: "well-attested" },
    ],
    relations: [
      { to: "united-states", kind: "part-of", note: "The college has chosen every American president since 1788–89." },
      { to: "us-constitution", kind: "part-of", note: "Article II vests the choice in electors; the Twelfth Amendment set the modern ballot rules." },
      { to: "federalist-papers", kind: "influenced-by", note: "Hamilton's Federalist No. 68 defended the design as a filter against faction." },
      { to: "direct-democracy", kind: "contrasts-with", note: "It interposes electors between the voters and the choice of president." },
    ],
    sources: [
      { work: "Official text: Constitution of the United States", tier: 1 },
      { work: "The Federalist Papers", tier: 1, note: "Federalist No. 68 defends the college's design." },
      { work: "US National Archives — 'Electoral College'", tier: 2 },
    ],
    addedOn: "2026-11-09",
  },

  {
    id: "compulsory-voting",
    kind: "mechanism",
    name: "Compulsory Voting",
    status: "developing",
    lead:
      "Compulsory voting obliges enrolled citizens to attend the polls, enforcing the duty through fines or comparable penalties. Belgium legislated it in 1893 and Australia made it federal law in 1924, and Australian turnout has stayed above ninety per cent since enforcement began. It turns the right won by [[universal-suffrage]] into an enforceable duty. Advocates read that duty as a civic obligation like jury service; opponents answer that it compels the indifferent to vote and inflates the count of ballots cast at random.",
    facts: [
      { label: "What It Does", value: "Makes electoral attendance a legal duty, backed by fines", attestation: "well-attested" },
      { label: "First Widespread Use", value: "Belgium (1893); Australia federally from 1924", attestation: "well-attested" },
      { label: "Typical Home", value: "Australia, Belgium, Brazil and Argentina", attestation: "well-attested" },
      { label: "Signature Case", value: "Australia's federal elections, with turnout above ninety per cent since 1925", attestation: "well-attested" },
      { label: "Distinctive Weakness", value: "Counts reluctant or protest votes alongside considered ones", attestation: "attested" },
    ],
    relations: [
      { to: "australia", kind: "part-of", note: "Compulsory enrolment and attendance have governed Australian federal elections since 1924." },
      { to: "belgium", kind: "influenced-by", note: "Belgium legislated compulsory attendance in 1893, the model copied abroad." },
      { to: "universal-suffrage", kind: "influenced-by", note: "The duty presupposes a broad franchise; it extends suffrage's logic from right to obligation." },
      { to: "popular-sovereignty", kind: "exemplifies", note: "Advocates cast the duty as the people speaking with its full voice." },
    ],
    sources: [
      { work: "Official text: Commonwealth Electoral Act 1918 (Australia)", tier: 1 },
      { work: "Australian Electoral Commission — 'Compulsory voting'", tier: 2 },
      { work: "International IDEA — Compulsory voting resources", tier: 2 },
    ],
    addedOn: "2026-11-10",
  },
];
