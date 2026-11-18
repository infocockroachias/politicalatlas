"use client";

import Link from "next/link";
import { PublisherLine } from "./brand";

const LEGAL = [
  { label: "Privacy", to: "privacy" },
  { label: "Terms", to: "terms" },
  { label: "Copyright", to: "copyright" },
  { label: "Accessibility", to: "accessibility" },
  { label: "Cases", to: "cases" },
  { label: "Reviewers", to: "reviewers" },
  { label: "News", to: "news" },
  { label: "Follow", to: "follow" },
  { label: "Contact", to: "contact" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/80 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <PublisherLine />
        <nav aria-label="Legal and Contact" className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL.map((l) => (
            <Link key={l.to} href={`#/${l.to}`} className="text-[0.8125rem] text-muted-foreground hover:text-brand hover:underline underline-offset-2">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-5 max-w-3xl text-[0.75rem] leading-relaxed text-muted-foreground">
          An independent educational atlas. Election results, constitutional provisions and historical
          events are facts, compiled from public reference works; every entry names its sources and
          marks what is contested. Party symbols and state emblems are not reproduced. Not affiliated
          with any government body.
        </p>
      </div>
    </footer>
  );
}
