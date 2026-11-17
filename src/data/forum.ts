import type { ForumThread } from "./types";

export const forumThreads: ForumThread[] = [
  {
    id: "ft-1",
    title: "Is the Electoral College entry fair to the founding debates?",
    author: "Priya",
    when: "2026-10-18 10:05",
    tags: ["electoral-college", "united-states", "founding history"],
    replies: [
      {
        author: "Tomas",
        when: "2026-10-18 11:40",
        body:
          "The disputed statement is right to mark the slavery question as debated. I checked the convention notes the entry cites: the college appears late, after direct election failed twice on questions of viability, not only on sectional grounds. Both readings fit the record, and 'designed to' is doing a lot of work in some accounts.",
      },
      {
        author: "Amara",
        when: "2026-10-18 13:15",
        body:
          "Can we add the arithmetic to the reasoning? The three-fifths rule changed the weight of southern electors regardless of what anyone intended. Effect is provable; intent may stay debated forever, and the entry should say so explicitly rather than blending the two.",
      },
      {
        author: "Yusuf",
        when: "2026-10-19 09:20",
        body:
          "Agreed, and the entry already separates them. What I would add is the early contingency lesson — the college produced tied and multi-candidate outcomes in 1800 and 1824 almost immediately, which suggests the framers did not expect stable two-candidate contests. That cuts against any single clean design story.",
      },
    ],
  },
  {
    id: "ft-2",
    title: "Case closed: how we settled Ghana's founding dates",
    author: "Elin",
    when: "2026-10-11 15:40",
    tags: ["ghana", "case desk"],
    replies: [
      {
        author: "Marco",
        when: "2026-10-11 17:05",
        body:
          "The decision reads well: 1957 for founding, with the 1960 republic as a change of constitutional status. Independence changed who held sovereignty; the republic only altered the office at the top. That distinction is worth generalising across the country entries.",
      },
      {
        author: "Nadia",
        when: "2026-10-12 08:30",
        body:
          "One caution for the log: independence day and republic day fall on different dates in Ghana's calendar, unlike Kenya, where both anniversaries share 12 December. The calendar entries should carry a note so readers do not transpose the pattern between the two countries.",
      },
    ],
  },
  {
    id: "ft-3",
    title: "The 'to get rich is glorious' verdict — sourcing notes",
    author: "Ravi",
    when: "2026-10-19 08:30",
    tags: ["deng-xiaoping", "case-1", "attribution"],
    replies: [
      {
        author: "Mei",
        when: "2026-10-19 10:02",
        body:
          "The decision matches what I could find: no dated record of the slogan in official collections, with the earliest hits in Western reporting. The documented cousin — letting some people get rich first — does appear in his recorded speeches, so we cite that and mark the slogan unattributed.",
      },
      {
        author: "Tomas",
        when: "2026-10-19 12:45",
        body:
          "I still think 'close paraphrase' was the better label, and my dissent in case-1 stands. Publishing the reasoning either way is the right move; a reader can now see both labels argued.",
      },
      {
        author: "Hana",
        when: "2026-10-20 09:10",
        body:
          "The disputed statement links to the case and to the entry, so a reader gets all three views in two clicks. That structure is the quiet win here.",
      },
      {
        author: "Leo",
        when: "2026-10-20 15:25",
        body:
          "Suggestion for the pattern: whenever we debunk an attribution, record the earliest known date of circulation in the reasoning. That single fact usually does the most work, and it is easy to check later.",
      },
    ],
  },
  {
    id: "ft-4",
    title: "Quiz check: single transferable vote — the Malta problem",
    author: "Ines",
    when: "2026-10-24 19:15",
    tags: ["quiz-6", "single-transferable-vote"],
    replies: [
      {
        author: "Dev",
        when: "2026-10-24 20:00",
        body:
          "The Ireland question is fine because Malta is not among the options, but two countries elect national parliaments this way, so the explanation should not imply uniqueness. A one-line addition fixes it.",
      },
      {
        author: "Samira",
        when: "2026-10-25 07:45",
        body:
          "Good catch. I have added that Malta elects its parliament the same way, and noted that Australia's Senate uses STV for an upper house — which is why the question is scoped to lower houses. The explanation now teaches the exception instead of hiding it.",
      },
    ],
  },
  {
    id: "ft-5",
    title: "Proposed disputed statement: Versailles and the Second World War",
    author: "Jonas",
    when: "2026-11-05 12:00",
    tags: ["treaty-of-versailles", "disputed statements"],
    replies: [
      {
        author: "Farah",
        when: "2026-11-05 13:30",
        body:
          "Debated seems right. The reparations-and-humiliation story has a long pedigree, but the treaty compared mildly with the peace Germany imposed at Brest-Litovsk, and the depression did more causal work than any clause.",
      },
      {
        author: "Priya",
        when: "2026-11-05 16:10",
        body:
          "Please word the statement narrowly: 'the treaty caused the war', not 'contributed to'. The narrow form is falsifiable and interesting; the broad form is a truism that no one holds.",
      },
      {
        author: "Ola",
        when: "2026-11-06 09:00",
        body:
          "Seconding Priya. I would also point the reasoning at the military clauses, which most historians treat as consequential, and let the revisionist school speak on reparations. Both positions then have their strongest form in the text.",
      },
    ],
  },
  {
    id: "ft-6",
    title: "Where would Cicero fit in the thinkers trail?",
    author: "Hana",
    when: "2026-11-02 17:25",
    tags: ["trails", "cicero", "aristotle"],
    replies: [
      {
        author: "Leo",
        when: "2026-11-02 19:00",
        body:
          "Between Aristotle and al-Farabi, surely. Cicero carried Greek political vocabulary into Roman law and wrote on the mixed constitution, and the trail's argument would survive intact: practice as the test of theory.",
      },
      {
        author: "Mei",
        when: "2026-11-03 08:55",
        body:
          "Alternatively leave him out. The trail sits at ten stops, and the al-Farabi stop already explains how the Greek inheritance travelled east. Adding Cicero means trimming elsewhere or stretching the cap, and I am not sure he is the one to cut.",
      },
    ],
  },
  {
    id: "ft-7",
    title: "Keeping Constitution Day blurbs neutral",
    author: "Marco",
    when: "2026-11-09 09:10",
    tags: ["calendar", "observances", "style"],
    replies: [
      {
        author: "Nadia",
        when: "2026-11-09 10:00",
        body:
          "The rule that has worked for me: state the event, the date and where the atlas treats it — never the official meaning a government attaches to it. 'Freedom Day' for South Africa works because the 1994 elections are the fact, not the festival.",
      },
      {
        author: "Amara",
        when: "2026-11-09 11:35",
        body:
          "Watch the royal days, too. We describe accessions without naming the reigning monarch, which keeps the text stable when reigns change. The morocco and netherlands blurbs already follow that pattern.",
      },
      {
        author: "Dev",
        when: "2026-11-09 14:20",
        body:
          "Also avoid 'celebrates' for contested days; 'marks' does the same work without taking sides. I swept the calendar draft and changed eleven instances before publication.",
      },
    ],
  },
  {
    id: "ft-8",
    title: "Does 'Women Who Led Governments' need more stops?",
    author: "Farah",
    when: "2026-10-30 14:45",
    tags: ["trails", "feminism", "representation"],
    replies: [
      {
        author: "Elin",
        when: "2026-10-30 16:00",
        body:
          "The trail argues from franchise to office, which is why the suffrage stops come first. But four leaders across eighty years undersells the pattern — can we open the stops to movements as well as figures?",
      },
      {
        author: "Jonas",
        when: "2026-10-30 17:30",
        body:
          "Careful with the registry: trail stops must be atlas entries, and the pool of women leaders among the figures is fixed. Adding suffrage-movement and universal-suffrage as the opening stops was already the available fix, and it works.",
      },
      {
        author: "Samira",
        when: "2026-10-31 09:15",
        body:
          "Then the framing should be explicit: this trail is an argument about firsts, not a census. The representation stop at the end makes that point, and I would keep it rather than pad the middle.",
      },
      {
        author: "Ravi",
        when: "2026-10-31 12:40",
        body:
          "Agreed. A census of women leaders belongs in the community's reading list, not the trail. The trail's job is the causal chain from vote to office, and four figures plus two movement stops carry it cleanly.",
      },
    ],
  },
];
