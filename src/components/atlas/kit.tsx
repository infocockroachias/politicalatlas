"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Entity, Attestation } from "@/data/types";
import { parseLead, categoryForKind } from "@/data";

// ─── Links ──────────────────────────────────────────────────────────────────

export function ViewLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={`#/${to}`} className={className} onClick={() => window.scrollTo(0, 0)}>
      {children}
    </Link>
  );
}

export function EntityLink({
  id,
  label,
  children,
}: {
  id: string;
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <ViewLink to={`entry/${id}`} className="">
      {children ?? label ?? id}
    </ViewLink>
  );
}

// ─── Breadcrumbs ────────────────────────────────────────────────────────────

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-muted-foreground">
      {trail.map((t, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden>›</span>}
          {t.to ? (
            <ViewLink to={t.to} className="hover:text-foreground hover:underline underline-offset-2">
              {t.label}
            </ViewLink>
          ) : (
            <span>{t.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

// ─── Badges & pills ─────────────────────────────────────────────────────────

export function AttestBadge({ attestation }: { attestation?: Attestation }) {
  if (!attestation) return null;
  const label = attestation === "well-attested" ? "Well-attested" : attestation === "attested" ? "Attested" : "Disputed";
  return <span className="pill pill-attest">{label}</span>;
}

export function StatusBadge({ status }: { status: Entity["status"] }) {
  const label = status === "verified" ? "Verified" : status === "reviewed" ? "Reviewed" : "Developing";
  return <span className={status === "verified" ? "pill pill-attest" : "pill"}>{label}</span>;
}

export function KindPill({ kind }: { kind: Entity["kind"] }) {
  return <span className="pill">{categoryForKind(kind).kindLabel}</span>;
}

// ─── Section header with the "−" toggle ─────────────────────────────────────

export function SectionHeader({
  id,
  title,
  count,
  defaultOpen = true,
  children,
}: {
  id?: string;
  title: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="scroll-mt-24">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex items-baseline gap-2 text-left"
      >
        <span className="section-toggle text-[0.95rem]" aria-hidden>
          {open ? "−" : "+"}
        </span>
        <h2 className="font-display text-[1.3rem] font-bold tracking-tight group-hover:text-brand">{title}</h2>
        {count != null && <span className="text-sm text-muted-foreground">({count})</span>}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mt-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── Lead paragraph renderer ([[links]] + footnote superscripts) ────────────

export function LeadText({ lead }: { lead: string }) {
  const tokens = parseLead(lead);
  return (
    <p className="entry-prose max-w-[46rem]">
      {tokens.map((t, i) =>
        t.type === "link" ? (
          <ViewLink key={i} to={`entry/${t.target}`}>
            {t.text}
          </ViewLink>
        ) : (
          <span key={i}>{t.text}</span>
        ),
      )}
    </p>
  );
}

/** Lead as plain text (for card previews) — resolves [[ids]] to names */
export function leadPlain(lead: string): string {
  return parseLead(lead)
    .map((t) => t.text)
    .join("");
}

// ─── Entity card (directory grids, featured rails) ─────────────────────────

export function EntityCard({ e, showKind = true }: { e: Entity; showKind?: boolean }) {
  const cat = categoryForKind(e.kind);
  return (
    <ViewLink to={`entry/${e.id}`} className="block">
      <article className="card-warm hover-lift h-full p-4">
        {showKind && <div className="eyebrow mb-2 text-[0.625rem]">{cat.kindLabel}</div>}
        <h3 className="font-display text-[1.0625rem] font-bold leading-snug">{e.name}</h3>
        <p className="mt-2 line-clamp-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
          {leadPlain(e.lead)}
        </p>
      </article>
    </ViewLink>
  );
}

// ─── Collapsible source row ─────────────────────────────────────────────────

export function SourceRow({
  n,
  work,
  tier,
  note,
}: {
  n: number;
  work: string;
  tier: 1 | 2 | 3;
  note?: string;
}) {
  const [open, setOpen] = useState(false);
  const tierLabel = tier === 1 ? "Tier 1: scholarly reference or official text" : tier === 2 ? "Tier 2: reputable secondary reference" : "Tier 3: news of record";
  return (
    <div className="border-b border-border/70 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 py-3 text-left"
      >
        <span className="section-toggle mt-0.5 text-[0.8rem]" aria-hidden>
          {open ? "−" : "+"}
        </span>
        <span className="flex-1 text-[0.9375rem] font-semibold">{n}. {work}</span>
        <span className="pill mt-0.5 hidden sm:inline-flex">{`Tier ${tier}`}</span>
      </button>
      {open && (
        <p className="pb-3 pl-7 text-[0.8125rem] leading-relaxed text-muted-foreground">
          {note ? `${note} ` : ""}
          {tierLabel}. The tier classifies where the work comes from, not whether it holds up; the claim rests on the entry's own reasoning.
        </p>
      )}
    </div>
  );
}

// ─── Page shell: eyebrow + H1 + action buttons ──────────────────────────────

export function PageHeader({
  eyebrow,
  title,
  trail,
  badges,
  actions = true,
  children,
}: {
  eyebrow: string;
  title: string;
  trail: { label: string; to?: string }[];
  badges?: React.ReactNode;
  actions?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-8">
      <Breadcrumbs trail={trail} />
      <div className="eyebrow mt-5">{eyebrow}</div>
      <div className="mt-1 flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-[2.375rem] font-bold leading-tight tracking-tight">{title}</h1>
        {actions && <EntryActions title={title} />}
      </div>
      {badges && <div className="mt-3 flex flex-wrap items-center gap-2">{badges}</div>}
      {children}
    </header>
  );
}

// ─── Entry actions: save (localStorage), read aloud, copy share link ───────

function iconButton(label: string, onClick: () => void, active = false) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
        active ? "border-brand/60 bg-brand-soft text-brand" : "border-border bg-card hover:bg-secondary"
      }`}
    >
      {label === "Save to this browser" && (
        <svg viewBox="0 0 20 20" className="h-[1.05rem] w-[1.05rem]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
          <path d="M10 1.8l2.5 5.2 5.7.7-4.2 4 1.1 5.6L10 14.6 4.9 17.3 6 11.7 1.8 7.7l5.7-.7z" />
        </svg>
      )}
      {label === "Copy Share Link" && (
        <svg viewBox="0 0 20 20" className="h-[1.05rem] w-[1.05rem]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M8 12a4 4 0 015.7 0l2 2a4 4 0 01-5.7 5.7l-1-1" transform="translate(-2 -4)" />
          <path d="M12 8a4 4 0 01-5.7 0l-2-2a4 4 0 015.7-5.7l1 1" transform="translate(2 4)" />
        </svg>
      )}
      {label === "Read This Page Aloud" && (
        <svg viewBox="0 0 20 20" className="h-[1.05rem] w-[1.05rem]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 8v4h3l4 3.5v-11L6 8H3z" fill="currentColor" stroke="none" />
          <path d="M13 6.5a4.5 4.5 0 010 7M15.5 4a8 8 0 010 12" />
        </svg>
      )}
    </button>
  );
}

export function EntryActions({ title }: { title: string }) {
  const [saved, setSaved] = useState(false);
  const [spoken, setSpoken] = useState(false);

  const toggleSave = () => {
    try {
      const raw = JSON.parse(localStorage.getItem("atlas-saved") ?? "[]") as string[];
      const has = raw.includes(title);
      const next = has ? raw.filter((x) => x !== title) : [...raw, title];
      localStorage.setItem("atlas-saved", JSON.stringify(next));
      setSaved(!has);
    } catch {}
  };

  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (spoken) {
      window.speechSynthesis.cancel();
      setSpoken(false);
      return;
    }
    const el = document.querySelector("main");
    if (!el) return;
    const u = new SpeechSynthesisUtterance(el.textContent?.slice(0, 6000) ?? title);
    u.rate = 1;
    u.onend = () => setSpoken(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    setSpoken(true);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {}
  };

  return (
    <div className="flex items-center gap-2">
      {iconButton("Save to this browser", toggleSave, saved)}
      {iconButton("Read This Page Aloud", speak, spoken)}
      {iconButton("Copy Share Link", copy)}
    </div>
  );
}

// ─── Empty state ────────────────────────────────────────────────────────────

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-warm p-8 text-center">
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
