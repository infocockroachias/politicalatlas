// The Approaches brand: the A-arch mark and the atlas wordmark block.
// The mark recreates the approachestoias.com logotype (rounded arch "A"
// with a circular counter and a doorway) as an original inline SVG.

export function ApproachesMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Approaches to IAS mark">
      {/* rounded A/arch silhouette */}
      <path
        d="M50 4 C54 4 57 6 60 12 L92 82 C96 90 92 96 83 96 L17 96 C8 96 4 90 8 82 L40 12 C43 6 46 4 50 4 Z"
        fill="var(--brand)"
      />
      {/* circular counter */}
      <circle cx="50" cy="45" r="13.5" fill="var(--card)" />
      {/* arched doorway */}
      <path
        d="M38 96 L38 74 A12 12 0 0 1 62 74 L62 96 Z"
        fill="var(--card)"
      />
    </svg>
  );
}

export function BrandBlock({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <ApproachesMark className={compact ? "h-7 w-7" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span className="flex items-baseline gap-2">
          <span className="font-display text-[1.05rem] font-bold tracking-tight">Political Atlas</span>
        </span>
        <span
          className="mt-1 text-[0.5875rem] font-bold uppercase tracking-[0.16em]"
          style={{ color: "var(--brand)" }}
        >
          The Shape of Power
        </span>
      </span>
    </span>
  );
}

/** Footer brand: atlas + publisher line */
export function PublisherLine() {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <ApproachesMark className="h-5 w-5" />
      <span>
        An <a className="underline decoration-brand/40 underline-offset-2 hover:decoration-brand" href="https://www.approachestoias.com" target="_blank" rel="noreferrer">Approaches to IAS</a> atlas — <em>for those who refused to quit.</em>
      </span>
    </span>
  );
}
