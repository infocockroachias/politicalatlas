import type { Trail } from "./types";

export const trails: Trail[] = [
  {
    id: "trail-1",
    title: "Ten Leaders Who Remade Their States",
    blurb:
      "From Lincoln to Gorbachev, ten leaders who rebuilt, unified or released the states they led — each stop arguing its way to the next.",
    stops: [
      {
        entry: "abraham-lincoln",
        why:
          "The opening stop: Lincoln held the American union together through civil war and remade it in law, pushing through the Thirteenth Amendment before his death in 1865.",
      },
      {
        entry: "otto-von-bismarck",
        why:
          "Where Lincoln preserved a union, Bismarck assembled one — unifying Germany between 1864 and 1871 — and then pioneered the social insurance schemes that first enlarged the state's economic role.",
      },
      {
        entry: "franklin-d-roosevelt",
        why:
          "Roosevelt took that enlarged role further in the New Deal, answering economic collapse by rebuilding the American state's reach at home — the pattern every later leader here had to answer.",
      },
      {
        entry: "charles-de-gaulle",
        why:
          "De Gaulle answered it institutionally: recalled to power in 1958, he founded the Fifth Republic around a strong presidency, refounding a state his countrymen had thought finished.",
      },
      {
        entry: "mao-zedong",
        why:
          "From refounded republics to founded ones: Mao proclaimed the People's Republic of China in 1949, building a one-party state that remade society from the centre.",
      },
      {
        entry: "deng-xiaoping",
        why:
          "Deng inherited Mao's state and reversed its economics, launching reform and opening from 1978 — proof that remaking a state can mean dismantling a predecessor's work.",
      },
      {
        entry: "lee-kuan-yew",
        why:
          "Deng looked at Southeast Asia for models, and Singapore's development state under Lee showed how a small, poor country could be remade through administrative discipline.",
      },
      {
        entry: "kwame-nkrumah",
        why:
          "Lee's city-state chose pragmatic order; Nkrumah took newly independent Ghana in 1957 toward pan-African ambition, remaking a state by giving an entire continent a political idea.",
      },
      {
        entry: "nelson-mandela",
        why:
          "Where Nkrumah's project later hardened, Mandela negotiated South Africa out of apartheid and chose a single presidential term — remaking a state by conceding limits.",
      },
      {
        entry: "mikhail-gorbachev",
        why:
          "The closing stop: Gorbachev's glasnost and perestroika were meant to reform the Soviet state, and ended by accepting its peaceful dissolution in 1991 — remaking a state by letting it go.",
      },
    ],
  },
  {
    id: "trail-2",
    title: "From Confucius to Ambedkar: Thinkers of the State",
    blurb:
      "Twenty-five centuries of thinking about the state, from Confucius' ethics of rule to Ambedkar's constitutional drafting, read as one continuous argument.",
    stops: [
      {
        entry: "confucius",
        why:
          "The opening: Confucius grounded good government in virtue and example, insisting that rulers are obeyed well only when they are first worth obeying.",
      },
      {
        entry: "kautilya",
        why:
          "Kautilya accepted the same office and stripped out the sermon: the Arthashastra treats power as a science, advising the king on taxation, espionage and diplomacy without moral preamble.",
      },
      {
        entry: "plato",
        why:
          "Both wrote for patrons; Plato asked instead what justice is and who should rule, answering with the philosopher-king and the ideal city of the Republic.",
      },
      {
        entry: "aristotle",
        why:
          "Plato's pupil tested the ideal against evidence, surveying the constitutions of Greek cities and sorting regimes into the comparative typology that founds political science.",
      },
      {
        entry: "al-farabi",
        why:
          "Aristotle's typology travelled east: al-Farabi recast Greek philosophy for Islamic thought, describing the virtuous city in terms that made the two traditions speak to each other.",
      },
      {
        entry: "ibn-khaldun",
        why:
          "Where al-Farabi idealised the city, Ibn Khaldun explained its life cycle, arguing that states rise on asabiyyah — group solidarity — and decay as that cohesion wears out.",
      },
      {
        entry: "machiavelli",
        why:
          "Machiavelli took the cycle as given and advised the prince on surviving it, shifting political writing from what rulers ought to be to what power actually requires.",
      },
      {
        entry: "hobbes",
        why:
          "Hobbes went a level deeper: rather than advising a ruler, he derived the ruler's authority from a contract that rescues people from the terrors of the state of nature.",
      },
      {
        entry: "rousseau",
        why:
          "Rousseau kept the contract but moved the sovereign downward — legitimacy rests in the people and their general will, not in the Leviathan above them.",
      },
      {
        entry: "br-ambedkar",
        why:
          "The closing stop: Rousseau's popular sovereignty reached constitutional practice when Ambedkar chaired the drafting of India's constitution, turning two millennia of argument into legal text.",
      },
    ],
  },
  {
    id: "trail-3",
    title: "Who Holds Executive Power",
    blurb:
      "Nine stops on the question every constitution must answer: where executive power sits, and whom it answers to.",
    stops: [
      {
        entry: "presidential-system",
        why:
          "The opening stop: the American model separates origin and survival, electing a president apart from the legislature so that neither can dismiss the other at will.",
      },
      {
        entry: "parliamentary-system",
        why:
          "The parliamentary system fuses what the presidential system divides: the cabinet sits in the legislature and falls if it loses its confidence, as at Westminster.",
      },
      {
        entry: "semi-presidential-system",
        why:
          "France refuses to choose: a popularly elected president shares the executive with a prime minister who answers to the assembly, producing alternating patterns of power.",
      },
      {
        entry: "directorial-system",
        why:
          "Switzerland avoids a single executive altogether — seven councillors govern collectively, rotating the presidency so that no one accumulates it.",
      },
      {
        entry: "constitutional-monarchy",
        why:
          "Other states keep a hereditary figure above the executive but strip the office of power: the monarch reigns while ministers accountable to parliament govern.",
      },
      {
        entry: "absolute-monarchy",
        why:
          "Where the crown never lost those powers, monarchy remains the executive itself, with ministers serving at royal discretion.",
      },
      {
        entry: "theocracy",
        why:
          "Saudi law draws on religious authority; in Iran the clerical class holds ultimate power directly, with elected institutions subject to a Guardian Council's veto.",
      },
      {
        entry: "one-party-state",
        why:
          "Iran mixes clerical supremacy with elections; a one-party state resolves the competition differently, by ending it — the party is the state's permanent executive.",
      },
      {
        entry: "military-dictatorship",
        why:
          "The closing stop: where civilian control fails altogether, the armed forces govern — as Myanmar's history since 1962 has repeatedly shown, power can pass back to the barracks.",
      },
    ],
  },
  {
    id: "trail-4",
    title: "Constitutions That Founded Modern States",
    blurb:
      "A chronological walk through the charters that founded or refounded modern states, ending where authority outgrew the nation-state.",
    stops: [
      {
        entry: "magna-carta",
        why:
          "The opening: in 1215 rebellious barons forced King John to concede that even the king is bound by law — the seed from which written constitutionalism grew.",
      },
      {
        entry: "petition-of-right",
        why:
          "Four centuries on, Parliament compelled Charles I to accept in 1628 that taxation and imprisonment required due process, reviving Magna Carta as statute.",
      },
      {
        entry: "english-bill-of-rights",
        why:
          "The Glorious Revolution's settlement of 1689 then wrote the limits into permanent law, barring royal suspension of statutes and securing parliamentary privilege.",
      },
      {
        entry: "us-constitution",
        why:
          "Those precedents crossed the Atlantic: the constitution of 1787 made the people, not parliament, the source of written authority, with amendment as the built-in corrective.",
      },
      {
        entry: "french-constitution-1791",
        why:
          "France's 1791 constitution carried the same movement further in a single year, subordinating the king to an elected national assembly.",
      },
      {
        entry: "weimar-constitution",
        why:
          "Germany's 1919 constitution showed that founding texts can also fail: its strengths and weaknesses together became the cautionary tale later drafters studied.",
      },
      {
        entry: "constitution-of-india",
        why:
          "India's assembly learned from all of them — the 1950 constitution drew openly on British, American and Irish models while adding directives that spoke to Indian conditions.",
      },
      {
        entry: "constitution-of-south-africa",
        why:
          "South Africa's 1996 constitution closed another arc, turning a negotiated transition from apartheid into one of the most rights-forward texts in force.",
      },
      {
        entry: "european-convention-on-human-rights",
        why:
          "Rights then escaped the nation-state: the 1950 convention created a court in Strasbourg whose judgments bind states that once answered to no external tribunal.",
      },
      {
        entry: "lisbon-treaty",
        why:
          "The closing stop: the Lisbon Treaty of 2007 gave the European Union its own constitutional machinery — the furthest the tradition of founding documents has travelled from Runnymede.",
      },
    ],
  },
  {
    id: "trail-5",
    title: "Paths to Independence",
    blurb:
      "Independence was won by revolt, by mass movement, by negotiation and by imperial collapse. This trail reads each route in turn.",
    stops: [
      {
        entry: "american-revolution",
        why:
          "The opening: in 1776 settler colonies first showed that a people could found a state by revolt, though their independence kept slavery intact.",
      },
      {
        entry: "haitian-revolution",
        why:
          "Haiti's enslaved population proved the claim universal, fighting from 1791 to 1804 to found a state where every prior independence had assumed their exclusion.",
      },
      {
        entry: "indian-independence-movement",
        why:
          "The next great path ran through organised mass movements: India's struggle, spanning petitions, boycotts and prison, taught the century's anticolonial campaigns their repertoire.",
      },
      {
        entry: "satyagraha",
        why:
          "Within that movement, Gandhi's satyagraha supplied the method — non-violent pressure applied to conscience and economy alike, rehearsed in the Salt March of 1930.",
      },
      {
        entry: "indian-independence",
        why:
          "The method helped bring transfer of power in 1947, within two years of the war's end, when negotiation and mass pressure finally converged.",
      },
      {
        entry: "ghana",
        why:
          "Ghana followed in 1957 as the first colony in sub-Saharan Africa to win independence, a signal that empire in Africa had entered its last act.",
      },
      {
        entry: "kwame-nkrumah",
        why:
          "Nkrumah, who led that campaign, then pressed pan-Africanism as independence's wider promise — one state's freedom was argued to require the continent's.",
      },
      {
        entry: "decolonisation-movement",
        why:
          "Across Asia and Africa the movement became a system: within a generation most of the empires had been dismantled, by ballot where possible and by war where not.",
      },
      {
        entry: "vietnam",
        why:
          "Vietnam shows the hard edge of that rule — independence declared in 1945 was secured only through decades of war against France and then the United States.",
      },
      {
        entry: "dissolution-of-ussr",
        why:
          "The closing stop: the last great imperial unwind came quietly, when the Soviet Union dissolved in 1991 and fifteen states emerged by agreement rather than by war.",
      },
    ],
  },
  {
    id: "trail-6",
    title: "Women Who Led Governments",
    blurb:
      "From the vote to the executive: how women moved from campaigning for the franchise to leading governments.",
    stops: [
      {
        entry: "suffrage-movement",
        why:
          "The opening: before women could govern, they had to vote — the movement campaigned across the nineteenth and early twentieth centuries for a franchise that excluded them.",
      },
      {
        entry: "universal-suffrage",
        why:
          "Universal suffrage wrote the principle into law, though in many states women's exercise of it lagged the principle by decades.",
      },
      {
        entry: "sirimavo-bandaranaike",
        why:
          "The breakthrough came in Ceylon in 1960, where Sirimavo Bandaranaike became the world's first woman prime minister, elected under the universal franchise her country adopted early.",
      },
      {
        entry: "indira-gandhi",
        why:
          "Six years later Indira Gandhi led India, the world's most populous democracy, showing that the breakthrough was a pattern rather than an accident.",
      },
      {
        entry: "margaret-thatcher",
        why:
          "In 1979 Margaret Thatcher took Britain's premiership and held it for eleven years, leading a major power through war and economic transformation.",
      },
      {
        entry: "angela-merkel",
        why:
          "Merkel's sixteen years leading Germany from 2005 made the idea unremarkable — the final stage at which a breakthrough becomes ordinary in Europe's largest economy.",
      },
      {
        entry: "feminism",
        why:
          "These careers answered an argument feminism had made for a century: that public power is not male by nature, only by convention.",
      },
      {
        entry: "representation",
        why:
          "The closing stop is the live question: how to turn individual firsts into something closer to equal representation of women in legislatures everywhere.",
      },
    ],
  },
  {
    id: "trail-7",
    title: "Documents of Liberty",
    blurb:
      "Ten documents, one argument: each liberty text made the next thinkable, from Runnymede to the digital frontier.",
    stops: [
      {
        entry: "magna-carta",
        why:
          "The opening: in 1215 Magna Carta bound a king to law, at least in principle — the clause count matters less than the precedent that rulers can be made to sign limits.",
      },
      {
        entry: "habeas-corpus",
        why:
          "The writ of habeas corpus turned that principle into procedure: no detention is lawful unless a court has heard the reason for it.",
      },
      {
        entry: "english-bill-of-rights",
        why:
          "The 1689 declaration then made limits on the crown statutory, pairing them with parliamentary privilege and the right to petition.",
      },
      {
        entry: "declaration-of-independence",
        why:
          "In 1776 the American declaration grounded liberty in natural rights that no government may cancel — a claim aimed at independence but written for the world.",
      },
      {
        entry: "rights-of-man",
        why:
          "Revolutionary France agreed in 1789, declaring that men are born and remain free and equal in rights, and that sovereignty lives in the nation.",
      },
      {
        entry: "us-bill-of-rights",
        why:
          "The same decade produced the 1791 Bill of Rights, guarantees the new federal government could not breach — the first general charter of its kind attached to a founding constitution.",
      },
      {
        entry: "universal-declaration-of-human-rights",
        why:
          "After 1945 the claims went global: the 1948 Universal Declaration made rights a matter of international principle rather than domestic charity.",
      },
      {
        entry: "european-convention-on-human-rights",
        why:
          "The 1950 European Convention gave those principles legal teeth, allowing individuals to take their own states to an international court.",
      },
      {
        entry: "civil-rights-act-1964",
        why:
          "Domestic law caught up as well: the 1964 Act outlawed discrimination across American public life, converting declared rights into enforceable ones.",
      },
      {
        entry: "digital-rights-movement",
        why:
          "The closing stop: the frontier has moved again, to privacy, expression and access online — the argument each earlier document started is not yet finished.",
      },
    ],
  },
  {
    id: "trail-8",
    title: "Ideologies in Power and in Opposition",
    blurb:
      "What happens when an ideology takes office — and what happens to the one that never does. Ten stops from liberalism to anarchism.",
    stops: [
      {
        entry: "liberalism",
        why:
          "The opening: liberalism built the constitutional state — rights, elections, the rule of law — and its great test is what happens when its rivals inherit that machinery.",
      },
      {
        entry: "conservatism",
        why:
          "The first rival accepted the liberal state but counselled continuity: Burke argued that institutions survive by evolving, not by being redesigned.",
      },
      {
        entry: "socialism",
        why:
          "A deeper challenge held the liberal settlement too thin: votes without economic power, socialists argued, leave the decisive inequalities untouched.",
      },
      {
        entry: "communism",
        why:
          "Communism drew the revolutionary conclusion — the liberal state should not be reformed but replaced, with the means of production in common hands.",
      },
      {
        entry: "russian-revolution",
        why:
          "In 1917 the argument became fact: the Russian Revolution created the first state organised on communist lines, and every later dispute about the ideology refers back to it.",
      },
      {
        entry: "marxism-leninism",
        why:
          "That state codified its doctrine as Marxism–Leninism and exported it, so that for most of the twentieth century 'communism in power' meant this specific Soviet form.",
      },
      {
        entry: "fascism",
        why:
          "Interwar Europe produced a rival that despised liberalism and communism alike: fascism sought total political mobilisation around nation and leader.",
      },
      {
        entry: "nazism",
        why:
          "Its German variant, nazism, drove that mobilisation to genocidal and imperial ends, and its destruction in 1945 fixed the limits every later ideology must acknowledge.",
      },
      {
        entry: "social-democracy",
        why:
          "The democratic left answered with social democracy: socialist ends pursued through elections, welfare states and mixed economies — ideology in power by consent.",
      },
      {
        entry: "anarchism",
        why:
          "The closing stop has never taken a state: anarchism holds that the state itself is the problem, and remains the tradition of permanent, principled opposition.",
      },
    ],
  },
];
