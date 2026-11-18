"use client";

import { useState } from "react";
import Link from "next/link";
import { communities, forumThreads, newsletter, stats } from "@/data";
import { PageHeader, SectionHeader, EmptyState, ViewLink } from "../kit";
import { ApproachesMark } from "../brand";

// ─── Forum ──────────────────────────────────────────────────────────────────

export function ForumView() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Interact"
        title="Forum"
        trail={[{ label: "Home", to: "home" }, { label: "Forum" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          A reading room for the atlas: threads about entries, disputes and decisions. This
          static edition carries a curated set of sample threads to read; posting is part of the
          account experience on the publisher's site, and everything here is served without a
          backend.
        </p>
      </PageHeader>
      <div className="space-y-5">
        {forumThreads.map((t) => (
          <div key={t.id} className="card-warm p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-[1.15rem] font-bold">{t.title}</h3>
              <span className="text-[0.8125rem] text-muted-foreground">{t.when}</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[0.8125rem] text-muted-foreground">
              <span className="font-semibold text-foreground/80">{t.author}</span>
              {t.tags.map((tag) => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
            <div className="mt-4 space-y-3 border-l-2 border-brand/25 pl-4">
              {t.replies.map((r, i) => (
                <div key={i}>
                  <div className="flex items-baseline gap-2 text-[0.8125rem]">
                    <span className="font-semibold">{r.author}</span>
                    <span className="text-muted-foreground">{r.when}</span>
                  </div>
                  <p className="mt-1 text-[0.9rem] leading-relaxed text-muted-foreground">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Communities ────────────────────────────────────────────────────────────

export function CommunitiesView() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Interact"
        title="Communities"
        trail={[{ label: "Home", to: "home" }, { label: "Communities" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Reading groups that form around a territory of the atlas. Each community has its own
          thread set and reading list; membership runs through the publisher's accounts.
        </p>
      </PageHeader>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {communities.map((c) => (
          <div key={c.id} className="card-warm hover-lift p-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-[1.1rem] font-bold">{c.name}</h3>
              <span className="pill">{c.members.toLocaleString()} members</span>
            </div>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">{c.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── About ──────────────────────────────────────────────────────────────────

export function AboutView() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="How This Atlas Works"
        trail={[{ label: "Home", to: "home" }, { label: "About" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Political Atlas: the shape of power. This page states what the atlas is, how it decides
          what to record, and where it still falls short.
        </p>
      </PageHeader>

      <div className="space-y-10">
        <SectionHeader title="What This Atlas Holds">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            A directory of {stats.entries.toLocaleString()} entries with the links between them
            made explicit, built to a stated method. Systems of government lead; countries under
            their present constitutional orders belong here. The voice is mechanisms and
            arrangements, never advocacy, and a canonically disputed question — such as an
            electoral system's real effects — is recorded as disputed rather than resolved for
            the reader's comfort.
          </p>
          <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            Every entry is linked to what it touches, in both directions, so following one
            connection leads naturally to the next. Reading the atlas is free, and nothing on the
            browsing side of the site is behind a payment or an account.
          </p>
        </SectionHeader>

        <SectionHeader title="Contested Claims Are Named, Not Settled">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            Where specialists disagree, the entry says so and stops. The editorial layer keeps
            three ledgers of uncertainty: disputed statements (claims with competing scholarly
            positions or a debunking record), open questions (gaps kept deliberately, with the
            expertise needed to close them), and cases (formal challenges, decided in public with
            any dissent recorded).
          </p>
        </SectionHeader>

        <SectionHeader title="Sources Are Tiered">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            Every entry names the works behind it. Tier 1 is the canon: scholarly references,
            official texts, the constitutions themselves. Tier 2 is reputable secondary work —
            established reference books and archives. Tier 3 is news of record, used sparingly
            and only for recent fact. The tier classifies where a work comes from, not whether it
            holds up; that case is made in the entry's own reasoning.
          </p>
        </SectionHeader>

        <SectionHeader title="Where This Atlas Is Still Thin">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            The collection covers its territory unevenly. Some regions and traditions are thinner
            than they should be; some relations are recorded on one side and not yet the other;
            some entries carry the status "developing" precisely because their record is short of
            the standard the rest of the atlas holds. Status badges are shown on every entry
            rather than hidden, so a reader always knows how much weight a page asks to carry.
          </p>
        </SectionHeader>

        <SectionHeader title="How an Error Gets Fixed">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            Errors are raised through the publisher's contact page, logged as cases, and decided
            on the record. When a fact changes, the correction log records what the entry said,
            what it says now, and when it changed — because an atlas that corrects silently is
            asking to be trusted twice.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <ViewLink to="cases" className="btn-ghost">Open cases</ViewLink>
            <ViewLink to="corrections" className="btn-ghost">Correction log</ViewLink>
            <ViewLink to="disputed" className="btn-ghost">Disputed statements</ViewLink>
          </div>
        </SectionHeader>

        <SectionHeader title="A Note on Independence">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            The atlas is published by Approaches to IAS, an academy for the UPSC journey — but
            this atlas is a general reference, not an examination aid. Nothing here addresses
            syllabi, marking or preparation. Election results, constitutional provisions and
            historical events are facts compiled from public reference works; party symbols and
            state emblems are deliberately not reproduced; and the atlas is not affiliated with
            any government body or platform.
          </p>
        </SectionHeader>
      </div>
    </div>
  );
}

// ─── Why Create an Account ──────────────────────────────────────────────────

export function AccountView() {
  const perks = [
    { title: "Starred entries", body: "Keep your own shelf of entries across visits, instead of one browser's memory." },
    { title: "Quiz scores", body: "Scores and attempt history saved to your account rather than this browser." },
    { title: "Following a topic", body: "Follow a country, an institution or a movement, and see what changes under it." },
    { title: "Forum posting", body: "Read the forum without an account; post and reply with one." },
    { title: "Raising disputes", body: "Challenge a claim under your own name and have it weighed in a public case." },
    { title: "The newsletter", body: "The atlas's letter, which anyone can read in the archive, delivered when it lands." },
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="About"
        title="Why Create an Account"
        trail={[{ label: "Home", to: "home" }, { label: "Why Create an Account" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Reading never needs an account. Every entry, search, comparison and quiz is free with
          no sign-in. An account adds the things that are yours — and it lives on the publisher's
          site, because this atlas itself stores nothing about you anywhere at all.
        </p>
      </PageHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        {perks.map((p) => (
          <div key={p.title} className="card-warm p-5">
            <h3 className="font-display font-bold">{p.title}</h3>
            <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="card-warm mt-8 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
        <ApproachesMark className="h-10 w-10 shrink-0" />
        <p className="flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
          Accounts are served by the publisher at approachestoias.com. This atlas remains a
          static, local, logged-nothing edition.
        </p>
        <a href="https://www.approachestoias.com" target="_blank" rel="noreferrer" className="btn-brand shrink-0">
          Publisher's site
        </a>
      </div>
    </div>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What is Political Atlas?",
    a: "A cross-referenced encyclopedia of government and political thought: countries under their present constitutional orders, the systems and mechanisms that arrange power, the ideologies and documents that argue about it, and the people, events, movements and institutions that carried it. The voice is mechanisms and arrangements, never advocacy.",
  },
  {
    q: "Do I need an account?",
    a: "No. Every entry, search, comparison, trail and quiz is free to read with no account and no paywall. An account adds the things that are yours: starred entries, saved scores, forum posting and disputes raised under your own name.",
  },
  {
    q: "How are facts sourced and checked?",
    a: "Every entry names its sources in a tiered list — scholarly references and official texts first, reputable secondary works next, news of record sparingly. Contested claims are named, not settled: the disputed statements ledger and the public cases carry the reasoning.",
  },
  {
    q: "Does this site call any server?",
    a: "No. The whole atlas — all " + stats.entries.toLocaleString() + " entries and every fact — is bundled into the page you downloaded. Search, comparison, path-finding and quizzes are computed in your browser. Your notes and quiz scores are kept in your browser's own storage.",
  },
  {
    q: "Is anything here professional advice?",
    a: "No. The atlas is an educational reference about how power is arranged. It states facts with sources and marks what is disputed; it does not advise, endorse or recommend.",
  },
  {
    q: "How do I report an error?",
    a: "Through the publisher's contact page. Errors that are formally challenged become cases, decided on the record with any dissent noted; when a fact changes, the correction log records what was and what is.",
  },
];

export function FaqView() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Political Atlas"
        title="Questions"
        trail={[{ label: "Home", to: "home" }, { label: "FAQ" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          What Political Atlas is, and what is and is not being claimed. For the editorial method
          behind the entries, see <ViewLink to="about" className="font-semibold text-brand hover:underline">How This Atlas Works</ViewLink>.
        </p>
      </PageHeader>
      <div className="space-y-6">
        {FAQS.map((f, i) => (
          <div key={i}>
            <h2 className="font-display text-[1.25rem] font-bold">{f.q}</h2>
            <p className="mt-2 max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Subscribe ──────────────────────────────────────────────────────────────

export function SubscribeView() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="About"
        title="Subscribe"
        trail={[{ label: "Home", to: "home" }, { label: "Subscribe" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          The atlas's letter: new entries, trails worth taking, disputes decided, and the
          occasional open question worth staring at. It lands when there is something to say.
        </p>
      </PageHeader>
      {done ? (
        <EmptyState
          title="One more step"
          body="This static edition keeps no addresses. Subscription runs through the publisher's list — continue on approachestoias.com to complete it."
        />
      ) : (
        <form
          className="card-warm flex flex-col gap-3 p-6 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.includes("@")) setDone(true);
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-input bg-card px-4 py-2.5 text-[0.9375rem] outline-none focus:ring-2 focus:ring-ring/40"
          />
          <button type="submit" className="btn-brand">Subscribe</button>
        </form>
      )}
      <p className="mt-4 text-[0.8125rem] text-muted-foreground">
        Past editions are open to everyone: <ViewLink to="newsletter" className="font-semibold text-brand hover:underline">the newsletter archive</ViewLink>.
      </p>
    </div>
  );
}

// ─── Newsletter Editions ────────────────────────────────────────────────────

export function NewsletterView() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="About"
        title="Newsletter Editions"
        trail={[{ label: "Home", to: "home" }, { label: "Newsletter Editions" }]}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          Every edition, open to read without subscribing.
        </p>
      </PageHeader>
      <div className="space-y-5">
        {newsletter.map((ed) => (
          <article key={ed.id} className="card-warm p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-[1.25rem] font-bold">{ed.title}</h3>
              <span className="text-[0.8125rem] text-muted-foreground">{ed.date}</span>
            </div>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{ed.summary}</p>
            <ul className="mt-3 space-y-1.5">
              {ed.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-[0.875rem] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

// ─── Legal & contact pages ──────────────────────────────────────────────────

interface LegalSpec {
  eyebrow: string;
  title: string;
  trail: string;
  intro: string;
  sections: { title: string; body: string }[];
}

const LEGAL_PAGES: Record<string, LegalSpec> = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy",
    trail: "Privacy",
    intro:
      "This atlas calls no server, sets no cookies for tracking, and stores nothing about you anywhere except your own browser. What follows is the whole of the privacy story, stated plainly.",
    sections: [
      { title: "What the site stores", body: "Your theme, text size, saved entries, quiz scores and any notes you write are kept in your browser's local storage on your device. Clearing your browser storage erases all of it, permanently and completely." },
      { title: "What the site sends", body: "Nothing. Search, comparison, path-finding and quizzes are computed locally. There are no analytics scripts, no ad networks, no embedded trackers, and no third-party requests after the page loads." },
      { title: "What the publisher keeps", body: "If you create an account on the publisher's site, that relationship is governed by the publisher's own policy there. This atlas has no access to it and receives nothing from it." },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms",
    trail: "Terms",
    intro:
      "The atlas is offered for reading and study. These terms state what that offer includes and what it does not.",
    sections: [
      { title: "Use", body: "You may read, quote from with attribution, and link to any entry. The code of the site is open under its licence; the entries are licensed for use with credit to Political Atlas." },
      { title: "No warranty", body: "The atlas is provided as a reference work, without warranty of any kind. Facts are sourced and disputed claims are marked, but the user remains responsible for what they do with the record." },
      { title: "Changes", body: "Entries are corrected openly through the correction log and the public cases. The site itself may change; its no-backend, no-tracking commitments do not." },
    ],
  },
  copyright: {
    eyebrow: "Legal",
    title: "Copyright",
    trail: "Copyright",
    intro:
      "The atlas's design, code and original prose are the publisher's work, offered under an open licence. Everything else is named.",
    sections: [
      { title: "Original work", body: "All prose on this site was written for it. No passage is reproduced from any encyclopaedia, website or publication." },
      { title: "Facts and data", body: "Election results, constitutional provisions, treaty texts and historical events are facts, compiled from public reference works that each entry names. Facts carry no copyright." },
      { title: "Marks and symbols", body: "Party symbols, state emblems and third-party trademarks are deliberately not reproduced. The Approaches name and mark belong to the publisher." },
    ],
  },
  accessibility: {
    eyebrow: "Legal",
    title: "Accessibility",
    trail: "Accessibility",
    intro:
      "The atlas is built to be read by everyone, with the standards it can meet stated here rather than claimed quietly.",
    sections: [
      { title: "Built in", body: "Semantic headings and landmarks, keyboard-reachable controls, visible focus, breadcrumb and contents navigation on every entry, a text-size control from 90% to 125%, light and dark themes, and reduced-motion support throughout." },
      { title: "Reading aloud", body: "Every entry page carries a read-aloud control using your browser's own speech synthesis, where the browser provides it." },
      { title: "Known gaps", body: "Some data tables on the India entry are dense on small screens; horizontal scroll is provided. The atlas treats accessibility as a practice, not a badge, and gaps are fixed as they are found." },
    ],
  },
  reviewers: {
    eyebrow: "Political Atlas",
    title: "Reviewers",
    trail: "Reviewers",
    intro:
      "Entries are checked by readers before they harden into reference. This page records how review works and who has it.",
    sections: [
      { title: "How review works", body: "A new entry enters the atlas as 'developing' or 'reviewed'. Claims are checked against the sources the entry names; status rises to 'verified' only when the entry's facts, relations and sources have all been checked against the record." },
      { title: "Becoming a reviewer", body: "Review runs through the publisher's site, where readers with an account can propose themselves against a territory of the collection." },
      { title: "The public ledger", body: "Every correction and challenge is logged publicly — see Cases and Recent Corrections — so review happens on the record or not at all." },
    ],
  },
  contact: {
    eyebrow: "Political Atlas",
    title: "Contact",
    trail: "Contact",
    intro:
      "Errors, challenges and proposals are all welcome, and all go through the publisher.",
    sections: [
      { title: "Reporting an error", body: "Write to the publisher through approachestoias.com's contact page, naming the entry and the fact at issue. Errors that are formally challenged become public cases." },
      { title: "Proposing an entry", body: "Proposals are read against the atlas's scope: countries, systems, mechanisms, policies, ideologies, documents, concepts, events, movements, figures and institutions. If it belongs, it will be written to the stated method." },
      { title: "Everything else", body: "Permissions, press and platform matters also run through the publisher's site." },
    ],
  },
  follow: {
    eyebrow: "Political Atlas",
    title: "Follow",
    trail: "Follow",
    intro:
      "The atlas announces new entries, decisions and editions through the publisher's channels.",
    sections: [
      { title: "The newsletter", body: "The atlas's own letter, archived openly under Newsletter Editions and delivered through the publisher's list." },
      { title: "The publisher", body: "Approaches to IAS publishes the atlas and writes about it alongside the academy's own work on approachestoias.com." },
      { title: "The feed", body: "Recently Added is the atlas's live edge; it is a page, not a feed, and it updates as the collection grows." },
    ],
  },
};

export function LegalView({ which }: { which: string }) {
  const spec = LEGAL_PAGES[which];
  if (!spec) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <EmptyState title="Page not found" body={`No page called “${which}” lives here.`} />
        <div className="mt-6 text-center"><Link href="#/home" className="btn-ghost">Return home</Link></div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow={spec.eyebrow}
        title={spec.title}
        trail={[{ label: "Home", to: "home" }, { label: spec.trail }]}
        actions={false}
      >
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">{spec.intro}</p>
      </PageHeader>
      <div className="space-y-8">
        {spec.sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-[1.3rem] font-bold">{s.title}</h2>
            <p className="mt-2 max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

// ─── 404 ────────────────────────────────────────────────────────────────────

export function NotFoundView() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <div className="eyebrow">404 · Page not found</div>
      <h1 className="font-display mt-3 text-[2.2rem] font-bold leading-tight">
        Something got lost while counting the votes.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
        The page you were looking for is not here. It may have been moved, or the link may be
        incomplete. Follow one of the links below to find your way back.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button onClick={() => history.back()} className="btn-ghost">Go Back</button>
        <Link href="#/home" className="btn-brand">Return Home</Link>
        <Link href="#/systems" className="btn-ghost">Browse the Directory</Link>
      </div>
      <p className="mt-10 text-[0.8125rem] italic text-muted-foreground">A recount is underway.</p>
    </div>
  );
}
