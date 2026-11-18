import type { Quiz } from "./types";

export const quizzes: Quiz[] = [
  {
    id: "quiz-1",
    title: "Machinery of Government",
    subtitle: "Courts, chambers and the voters' levers",
    topic: "Governing Mechanisms",
    description:
      "A short check of the mechanisms that connect citizens, legislatures and courts: how laws are tested, governments challenged and officials removed.",
    difficulty: "Beginner",
    questions: [
      {
        prompt: "What does judicial review allow a court to do?",
        options: [
          "Test laws and executive acts against the constitution",
          "Appoint ministers to the cabinet",
          "Dissolve the legislature between elections",
          "Set the agenda of the upper chamber",
        ],
        answer: 0,
        explanation:
          "Judicial review is the power of courts to examine whether legislation and official action conform to the constitution, and to set aside what does not.",
      },
      {
        prompt: "A vote of no confidence is normally directed at:",
        options: [
          "The government of the day",
          "The family of the head of state",
          "Foreign ambassadors",
          "The electorate as a whole",
        ],
        answer: 0,
        explanation:
          "The motion tests whether the legislature still supports the ministry; losing it usually forces the government to resign or seek a fresh election.",
      },
      {
        prompt: "Which mechanism lets voters remove an elected official before the term ends?",
        options: ["Referendum", "Citizens' initiative", "Recall election", "Run-off ballot"],
        answer: 2,
        explanation:
          "A recall election asks the electorate mid-term whether to unseat an officeholder; referendums and initiatives decide policies, not terms.",
      },
      {
        prompt: "A bicameral legislature is one with:",
        options: [
          "Two chambers",
          "A single chamber",
          "Members appointed by the executive",
          "No committee system",
        ],
        answer: 0,
        explanation:
          "Bicameralism divides the legislature into two houses, typically with different methods of election or appointment, which slows and revises law-making.",
      },
      {
        prompt: "Which mechanism makes attendance at the polls a legal duty?",
        options: [
          "Universal suffrage",
          "Postal voting",
          "Open party lists",
          "Compulsory voting",
        ],
        answer: 3,
        explanation:
          "Compulsory voting obliges registered electors to vote, with a small fine or similar penalty for abstention, as in Australia since 1924.",
      },
    ],
  },
  {
    id: "quiz-2",
    title: "Constitutions of the World",
    subtitle: "Dates, texts and founding moments",
    topic: "World Constitutions",
    description:
      "Five questions on when and how the great constitutional texts came into force, from Tokyo to Cape Town.",
    difficulty: "Beginner",
    questions: [
      {
        prompt: "Which country's present constitution came into force on 3 May 1947?",
        options: ["Japan", "India", "France", "Germany"],
        answer: 0,
        explanation:
          "Japan's post-war constitution took effect under Allied occupation on 3 May 1947; its first article vests sovereignty in the people, with the emperor as symbol.",
      },
      {
        prompt: "The Constitution of India came into force on:",
        options: [
          "15 August 1947",
          "26 November 1949",
          "26 January 1950",
          "2 October 1950",
        ],
        answer: 2,
        explanation:
          "The constitution was adopted on 26 November 1949 and came into force on 26 January 1950, a date chosen to honour the 1930 declaration of purna swaraj.",
      },
      {
        prompt: "Poland's Constitution Day on 3 May commemorates a constitution adopted in:",
        options: ["1791", "1789", "1815", "1921"],
        answer: 0,
        explanation:
          "The Constitution of 3 May 1791 is often described as Europe's first modern written national constitution, though it lasted barely fifteen months.",
      },
      {
        prompt: "The Basic Law (Grundgesetz) is the constitutional foundation of:",
        options: ["Austria", "Germany", "Switzerland", "Netherlands"],
        answer: 1,
        explanation:
          "West Germany's Basic Law of 1949 became the constitution of the reunified Germany in 1990; it was drafted as a provisional charter that hardened into permanence.",
      },
      {
        prompt: "South Africa's present constitution was adopted in which year?",
        options: ["1910", "1961", "1996", "2010"],
        answer: 2,
        explanation:
          "The text agreed by the first fully democratic parliament was signed in December 1996 and came into force in February 1997, crowning the negotiated transition.",
      },
    ],
  },
  {
    id: "quiz-3",
    title: "Ideology Basics",
    subtitle: "Four families of political belief",
    topic: "Political Ideologies",
    description:
      "Four questions distinguishing the broad families of political thought by their core commitments.",
    difficulty: "Beginner",
    questions: [
      {
        prompt: "Which ideology calls for collective ownership of the means of production?",
        options: ["Liberalism", "Socialism", "Conservatism", "Libertarianism"],
        answer: 1,
        explanation:
          "Socialism places the economy's principal assets under collective or public ownership, holding that production should serve common needs rather than private profit.",
      },
      {
        prompt: "Which ideology takes its name from Karl Marx?",
        options: ["Liberalism", "Marxism", "Conservatism", "Anarchism"],
        answer: 1,
        explanation:
          "Marxism names the body of thought Marx developed with Engels, centred on historical materialism, class analysis and the critique of capitalism.",
      },
      {
        prompt: "Which ideology pairs civil liberty with a minimal economic role for the state?",
        options: ["Socialism", "Conservatism", "Libertarianism", "Fascism"],
        answer: 2,
        explanation:
          "Libertarianism extends the liberal stress on individual rights to a near-total rejection of state intervention in the economy.",
      },
      {
        prompt: "Green politics places which concern at the centre of its programme?",
        options: [
          "Environmental sustainability",
          "Monetary stability",
          "National greatness",
          "Class struggle",
        ],
        answer: 0,
        explanation:
          "Green politics emerged from the environmental movement of the 1970s, joining ecological limits to commitments on social justice and grassroots democracy.",
      },
    ],
  },
  {
    id: "quiz-4",
    title: "Founding Texts",
    subtitle: "Charters, declarations and manifestos",
    topic: "Founding Documents",
    description:
      "Four questions on the documents that anchor the atlas, from a meadow on the Thames to a manifesto in London.",
    difficulty: "Beginner",
    questions: [
      {
        prompt: "In which year did King John seal Magna Carta?",
        options: ["1066", "1215", "1265", "1297"],
        answer: 1,
        explanation:
          "The charter was sealed at Runnymede in June 1215; the 1297 reissue is the version still on the English statute book.",
      },
      {
        prompt: "In which year was the American Declaration of Independence adopted?",
        options: ["1774", "1775", "1776", "1781"],
        answer: 2,
        explanation:
          "The Second Continental Congress adopted the declaration on 4 July 1776, proclaiming the colonies free and independent states.",
      },
      {
        prompt: "Why were the Federalist Papers written?",
        options: [
          "To urge ratification of the proposed US Constitution",
          "To draft the Declaration of Independence",
          "To oppose the Bill of Rights outright",
          "To record the debates of the Philadelphia convention",
        ],
        answer: 0,
        explanation:
          "Hamilton, Madison and Jay published the essays in 1787–88 to persuade New York's ratifying convention, defending the proposed constitution point by point.",
      },
      {
        prompt: "In which year was the Communist Manifesto published?",
        options: ["1789", "1848", "1871", "1917"],
        answer: 1,
        explanation:
          "Marx and Engels issued the manifesto in London in February 1848, weeks before revolutions swept the continent.",
      },
    ],
  },
  {
    id: "quiz-5",
    title: "Minds Behind the State",
    subtitle: "From the Arthashastra to the drafting committee",
    topic: "Political Thinkers",
    description:
      "Six questions matching authors to works and ideas, spanning ancient India, Renaissance Florence and modern constitutional drafting.",
    difficulty: "Intermediate",
    questions: [
      {
        prompt: "Who wrote The Prince?",
        options: ["Machiavelli", "Hobbes", "Rousseau", "Burke"],
        answer: 0,
        explanation:
          "Machiavelli composed the short treatise around 1513; it was published in 1532, after his death, and became the classic study of power's acquisition and retention.",
      },
      {
        prompt: "Which thinker set out the separation of powers in The Spirit of the Laws (1748)?",
        options: ["Montesquieu", "John Locke", "Immanuel Kant", "Edmund Burke"],
        answer: 0,
        explanation:
          "Montesquieu's study of English practice argued that liberty requires the legislative, executive and judicial powers to be kept apart.",
      },
      {
        prompt: "Leviathan, published in 1651, is the work of:",
        options: ["Hobbes", "Locke", "Plato", "Cicero"],
        answer: 0,
        explanation:
          "Hobbes derived absolute sovereignty from a contract that rescues people from the state of nature, where life is 'solitary, poor, nasty, brutish and short'.",
      },
      {
        prompt: "The Arthashastra, an ancient treatise on statecraft and economy, is attributed to which adviser of the Maurya court?",
        options: ["Ashoka", "Kautilya", "Kalidasa", "Nagabhata"],
        answer: 1,
        explanation:
          "Kautilya, also known as Chanakya, is traditionally credited with the text, which analyses kingship, espionage, taxation and diplomacy with unsentimental clarity.",
      },
      {
        prompt: "Who chaired the drafting committee that produced the Constitution of India?",
        options: [
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "B. R. Ambedkar",
          "Rajendra Prasad",
        ],
        answer: 2,
        explanation:
          "Ambedkar, law minister in the first cabinet, guided the drafting committee through the assembly's debates and steered the text to adoption in 1949.",
      },
      {
        prompt: "The Muqaddimah, a sweeping study of the rise and fall of states, is the work of which fourteenth-century scholar?",
        options: ["Al-Farabi", "Ibn Khaldun", "Avicenna", "Al-Ghazali"],
        answer: 1,
        explanation:
          "Ibn Khaldun explained political change through asabiyyah — group solidarity — arguing that dynasties rise on cohesion and decline as it fades.",
      },
    ],
  },
  {
    id: "quiz-6",
    title: "How Votes Become Seats",
    subtitle: "Districts, lists and transfers",
    topic: "Elections & Voting Systems",
    description:
      "Five questions on electoral rules, the quiet engineering that decides who governs before any campaign begins.",
    difficulty: "Intermediate",
    questions: [
      {
        prompt: "Under first-past-the-post, the seat goes to:",
        options: [
          "The candidate with the most votes, even without a majority",
          "The candidate closest to the national vote share",
          "The candidate preferred by the outgoing member",
          "A recount between the top two in every case",
        ],
        answer: 0,
        explanation:
          "The plurality rule rewards whoever tops the district count; a winner may hold well under half the votes cast.",
      },
      {
        prompt: "Proportional representation aims to make the distribution of seats correspond to:",
        options: [
          "The geography of constituencies",
          "Each party's share of the vote",
          "The size of party treasuries",
          "The seniority of candidates",
        ],
        answer: 1,
        explanation:
          "PR systems allocate seats so that a party winning, say, thirty per cent of votes wins roughly thirty per cent of seats, usually through party lists or multi-member districts.",
      },
      {
        prompt: "In ranked-choice voting, what happens when no candidate wins a majority of first preferences?",
        options: [
          "The result is declared void",
          "The outgoing member chooses the winner",
          "The lowest candidate is eliminated and ballots transfer to the next choice",
          "The candidate with most first preferences wins regardless",
        ],
        answer: 2,
        explanation:
          "Eliminations and transfers continue until someone passes fifty per cent, which is why the method is also called instant-runoff voting.",
      },
      {
        prompt: "The lower house of which country's parliament is elected by single transferable vote?",
        options: ["Ireland", "France", "Canada", "United States"],
        answer: 0,
        explanation:
          "Ireland has used STV for Dáil elections since independence; Malta elects its parliament the same way, and Australia's Senate uses it for upper-house elections.",
      },
      {
        prompt: "Voting in federal elections is compulsory in which country?",
        options: ["Canada", "Australia", "United States", "Japan"],
        answer: 1,
        explanation:
          "Australia has required enrolment and attendance at the polls since 1924, and turnout has remained above ninety per cent ever since.",
      },
    ],
  },
  {
    id: "quiz-7",
    title: "Institutions Beyond the State",
    subtitle: "Councils, courts and courts of last resort",
    topic: "International Institutions",
    description:
      "Five questions on the organisations and treaties that structure relations between states.",
    difficulty: "Intermediate",
    questions: [
      {
        prompt: "How many permanent members does the UN Security Council have?",
        options: ["Three", "Five", "Seven", "Ten"],
        answer: 1,
        explanation:
          "China, France, Russia, the United Kingdom and the United States hold permanent seats, each with a veto over substantive resolutions.",
      },
      {
        prompt: "The International Court of Justice sits in:",
        options: ["Geneva", "New York", "The Hague", "Vienna"],
        answer: 2,
        explanation:
          "The principal judicial organ of the United Nations has sat at the Peace Palace in The Hague since 1946, in its predecessor the Permanent Court's rooms.",
      },
      {
        prompt: "Which treaty established the European Economic Community in 1957?",
        options: [
          "The Treaty of Versailles",
          "The Treaty of Rome",
          "The Maastricht Treaty",
          "The Lisbon Treaty",
        ],
        answer: 1,
        explanation:
          "Six states signed the Treaty of Rome in March 1957, creating the common market; the Lisbon Treaty of 2007 later revised the same legal order.",
      },
      {
        prompt: "NATO was founded in which year?",
        options: ["1945", "1949", "1955", "1967"],
        answer: 1,
        explanation:
          "The North Atlantic Treaty was signed in Washington in April 1949 by twelve states, resting collective defence on the famous Article 5.",
      },
      {
        prompt: "The headquarters of ASEAN is in:",
        options: ["Bangkok", "Jakarta", "Manila", "Singapore"],
        answer: 1,
        explanation:
          "The Association of Southeast Asian Nations, founded in Bangkok in 1967, established its secretariat in Jakarta, Indonesia.",
      },
    ],
  },
  {
    id: "quiz-8",
    title: "Revolutions and the Movements Behind Them",
    subtitle: "Bastilles, salt marches and shipyards",
    topic: "Revolutions & Movements",
    description:
      "Six questions on the upheavals and campaigns that remade states, from 1688 to 1989.",
    difficulty: "Intermediate",
    questions: [
      {
        prompt: "The storming of the Bastille on 14 July 1789 belongs to which revolution?",
        options: [
          "The American Revolution",
          "The French Revolution",
          "The Haitian Revolution",
          "The Russian Revolution",
        ],
        answer: 1,
        explanation:
          "The fortress-prison's fall in Paris marks the French Revolution's decisive turn, and the date is France's national day.",
      },
      {
        prompt: "The Glorious Revolution of 1688 deposed which monarch?",
        options: ["James II", "Charles I", "George III", "Charles II"],
        answer: 0,
        explanation:
          "James II fled after William of Orange's landing; Parliament's settlement of 1689 then limited the crown and secured parliamentary privilege.",
      },
      {
        prompt: "Which revolution, beginning in 1791, ended with an independent state in 1804?",
        options: [
          "The American Revolution",
          "The French Revolution",
          "The Haitian Revolution",
          "The Mexican Revolution",
        ],
        answer: 2,
        explanation:
          "The enslaved population of Saint-Domingue rose, defeated the colonial armies sent against them, and founded Haiti, the first state born of a successful slave revolt.",
      },
      {
        prompt: "Which method of resistance did the Salt March of 1930 exemplify?",
        options: [
          "Satyagraha — non-violent civil resistance",
          "Armed uprising",
          "Parliamentary lobbying alone",
          "Guerrilla warfare",
        ],
        answer: 0,
        explanation:
          "Gandhi's march to the sea to gather salt illegally turned a minor tax into a national test of conscience, the signature method of the Indian independence movement.",
      },
      {
        prompt: "The Solidarity trade union movement arose in which country in 1980?",
        options: ["Poland", "Hungary", "Czechoslovakia", "East Germany"],
        answer: 0,
        explanation:
          "Strikes at the Gdańsk shipyard produced Solidarity, the first independent trade union in the Soviet bloc, which led the transition a decade later.",
      },
      {
        prompt: "Which figure became president of Czechoslovakia in December 1989 after the Velvet Revolution?",
        options: ["Václav Havel", "Mikhail Gorbachev", "Lech Walesa", "Václav Klaus"],
        answer: 0,
        explanation:
          "The playwright and dissident Havel was elected president within weeks of the peaceful demonstrations that ended one-party rule.",
      },
    ],
  },
  {
    id: "quiz-9",
    title: "Rights at the Limit",
    subtitle: "Writs, conventions and amendments",
    topic: "Rights & Liberties",
    description:
      "Five harder questions on the instruments that protect liberties, and on the distinctions readers most often blur.",
    difficulty: "Expert",
    questions: [
      {
        prompt:
          "Which instrument did the UN General Assembly adopt on 9 December 1948, the day before the Universal Declaration of Human Rights?",
        options: [
          "The Geneva Conventions",
          "The European Convention on Human Rights",
          "The Convention on the Prevention and Punishment of the Crime of Genocide",
          "The Helsinki Final Act",
        ],
        answer: 2,
        explanation:
          "The Genocide Convention was the first human rights treaty of the modern era, adopted on 9 December 1948; the Universal Declaration followed a day later.",
      },
      {
        prompt: "The writ of habeas corpus chiefly protects against:",
        options: [
          "Unlawful detention",
          "Double taxation",
          "Censorship of the press",
          "Expropriation of property",
        ],
        answer: 0,
        explanation:
          "The writ compels a detaining authority to produce the prisoner before a court and justify the detention, making it the oldest procedural guard against arbitrary imprisonment.",
      },
      {
        prompt: "The European Convention on Human Rights was drafted within which organisation?",
        options: [
          "The European Union",
          "The Council of Europe",
          "The United Nations",
          "NATO",
        ],
        answer: 1,
        explanation:
          "The Council of Europe, a wider human rights body distinct from the European Union, opened the convention for signature in 1950 and its court sits in Strasbourg.",
      },
      {
        prompt:
          "The Civil Rights Act of 1964, outlawing discrimination in employment and public accommodation, was enacted in which country?",
        options: ["United Kingdom", "Canada", "United States", "Australia"],
        answer: 2,
        explanation:
          "The Act, passed after the longest Senate debate of the twentieth century, became the legal backbone of the American civil rights settlement.",
      },
      {
        prompt: "In the United States, freedom of speech, press and religion are secured by which amendment?",
        options: ["The First Amendment", "The Fifth Amendment", "The Tenth Amendment", "The Fourteenth Amendment"],
        answer: 0,
        explanation:
          "The First Amendment of 1791 bars Congress from making laws abridging speech, press, religion, assembly and petition.",
      },
    ],
  },
  {
    id: "quiz-10",
    title: "Systems Under Stress",
    subtitle: "Presidents, councils and power-sharing",
    topic: "Political Systems",
    description:
      "Five expert questions on how states distribute executive power, including the hybrids textbooks tend to skip.",
    difficulty: "Expert",
    questions: [
      {
        prompt:
          "Which state vests executive power in a seven-member council whose presidency rotates annually among its members?",
        options: ["Netherlands", "Switzerland", "Denmark", "Belgium"],
        answer: 1,
        explanation:
          "Switzerland's Federal Council governs collectively, deliberately denying any member — including the rotating president — primus inter pares beyond chairing duties.",
      },
      {
        prompt:
          "Which term describes an executive split between an elected president and a prime minister responsible to the legislature?",
        options: [
          "Presidential system",
          "Parliamentary system",
          "Semi-presidential system",
          "Directorial system",
        ],
        answer: 2,
        explanation:
          "France's Fifth Republic is the type case: the president commands foreign and defence policy while the government answers to the National Assembly.",
      },
      {
        prompt: "In which state does a Guardian Council vet legislation for conformity with Islamic law?",
        options: ["Turkey", "Egypt", "Iran", "Pakistan"],
        answer: 2,
        explanation:
          "Iran's constitution of 1979 gives the twelve-member Guardian Council a veto over legislation and a role in screening candidates, fusing clerical review with elected institutions.",
      },
      {
        prompt:
          "Which term describes a democracy stabilised by power-sharing among the elites of distinct religious or linguistic communities?",
        options: [
          "Majoritarianism",
          "Consociationalism",
          "Populism",
          "Syndicalism",
        ],
        answer: 1,
        explanation:
          "Consociational theory, developed from cases such as the Netherlands and Belgium, holds that segmental divides can be managed by grand coalitions, proportionality and mutual vetoes.",
      },
      {
        prompt:
          "Which form of government keeps a hereditary head of state whose powers are exercised on the advice of ministers responsible to an elected legislature?",
        options: [
          "Constitutional monarchy",
          "Absolute monarchy",
          "Presidential system",
          "Theocracy",
        ],
        answer: 0,
        explanation:
          "In a constitutional monarchy the crown reigns but does not rule; effective power rests with the cabinet, as in Japan, Sweden or the United Kingdom.",
      },
    ],
  },
];
