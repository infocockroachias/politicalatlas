"use client";

export function AboutView() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="rule-tick" />
      <p className="eyebrow mt-6">About</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">An atlas for the exam room</h1>

      <div className="mt-8 space-y-10">
        <section>
          <h2 className="display text-2xl">What this is</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            The Political Atlas of India is an interactive study companion built by{" "}
            <span className="font-medium text-foreground">Approaches to IAS</span> — a UPSC
            preparation platform. Indian politics rewards a map-brain: seats, alliances, assemblies
            and constitutional provisions that all move together. This atlas joins them in one
            interface — a tile map of 36 states and UTs, three Lok Sabhas (2014-2024), a party
            directory, a timeline of turning points, 34 polity notes and a practice quiz.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">How to use it for UPSC</h2>
          <ul className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
            <li><span className="font-medium text-foreground">Prelims:</span> the map tiles and polity note &ldquo;exam hints&rdquo; are written for recall — pairs, counts and dates that get asked directly.</li>
            <li><span className="font-medium text-foreground">Mains:</span> every state card carries a UPSC lens — use them as hooks for federalism, Article 356, Women&apos;s Reservation or GST Council answers.</li>
            <li><span className="font-medium text-foreground">Interview:</span> the timeline and 2026 verdict cards give you a compressed, factual narrative of the Republic&apos;s most recent chapter.</li>
            <li><span className="font-medium text-foreground">Revision loops:</span> trails on the home page chain three sections into one sitting; the quiz shuffles each attempt.</li>
          </ul>
        </section>

        <section>
          <h2 className="display text-2xl">Data sources & accuracy</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            Election figures come from the officially declared results of the Election Commission
            of India (Lok Sabha 2014, 2019, 2024 — party-wise seats and vote shares, state-wise
            alliance totals). Assembly positions reflect elections and government formation up to
            May 2026 and are stated &ldquo;as of November 2026&rdquo;. Where a number could be
            misattributed (small-party splits within an alliance), the atlas shows the alliance
            total instead of inventing detail. Constitutional text follows the bare Act and the
            settled case law; where an issue is live (Article 200 timelines, Ladakh statehood, ECI
            appointment rules), the note says so explicitly.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Copyright & originality</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            Everything here is original: the design language, the tile-map concept, the prose, and
            all quiz questions. Election results, constitutional articles and historical events are
            facts, and facts belong to no one. Two deliberate exclusions keep the atlas clean:
            <span className="font-medium text-foreground"> no party symbols</span> (they are
            official ECI-owned artworks) and{" "}
            <span className="font-medium text-foreground">no third-party images</span>. This site is
            an independent educational project by Approaches to IAS and is not affiliated with any
            government body or other platform.
          </p>
        </section>

        <section>
          <h2 className="display text-2xl">Under the hood</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            A fully static Next.js application. Every fact lives in local TypeScript data tables
            that ship with the app — <span className="font-medium text-foreground">no API calls, no
            database, no analytics</span>. The map tiles are CSS grid positions rather than
            geographic boundaries, a deliberate choice: schematic, fast, and free of any boundary
            representation concerns. Theme, section and state selections persist in your browser
            via hash routes and local storage.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <div className="eyebrow">Approaches to IAS</div>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
            approachestoias.com — structured, exam-first resources for UPSC preparation. This
            atlas is one of its open study tools. Suggestions and corrections are welcome; the
            data tables are designed to be updated election-by-election.
          </p>
        </section>
      </div>
    </div>
  );
}
