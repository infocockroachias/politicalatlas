"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/atlas/theme";
import { Nav } from "@/components/atlas/nav";
import { Footer } from "@/components/atlas/footer";
import { HomeView } from "@/components/atlas/views/home";
import { DomainsView, AtoZView, AllSystemsView, CategoryView } from "@/components/atlas/views/directory";
import { EntryView } from "@/components/atlas/views/entry";
import { CompareView, ConnectionsView } from "@/components/atlas/views/tools";
import { TrailsView, TrailDetailView, TodayView, QuizzesView, QuizRunView } from "@/components/atlas/views/discover";
import {
  OpenQuestionsView,
  DisputedView,
  CasesView,
  CorrectionsView,
  RecentlyAddedView,
  CampaignsView,
  EmbedView,
  NewsView,
} from "@/components/atlas/views/editorial";
import {
  ForumView,
  CommunitiesView,
  AboutView,
  AccountView,
  FaqView,
  SubscribeView,
  NewsletterView,
  LegalView,
  NotFoundView,
} from "@/components/atlas/views/meta";
import { parseHashFrom, subscribe, getSnapshot, getServerSnapshot, type Route } from "@/lib/router";

export default function Page() {
  // useSyncExternalStore renders the server snapshot ("home") during hydration,
  // then automatically re-syncs to the client's hash — no mounted flag needed.
  const hash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const route: Route = parseHashFrom(hash);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main id="main" className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${route.view}/${route.param ?? ""}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              {route.view === "home" && <HomeView />}
              {route.view === "domains" && <DomainsView />}
              {route.view === "category" && <CategoryView categoryId={route.param ?? ""} />}
              {route.view === "atoz" && <AtoZView />}
              {route.view === "systems" && <AllSystemsView />}
              {route.view === "entry" && <EntryView id={route.param ?? ""} />}
              {route.view === "compare" && <CompareView param={route.param} />}
              {route.view === "connections" && <ConnectionsView query={route.query} />}
              {route.view === "trails" && <TrailsView />}
              {route.view === "trail" && <TrailDetailView id={route.param ?? ""} />}
              {route.view === "today" && <TodayView param={route.param} />}
              {route.view === "quizzes" && <QuizzesView />}
              {route.view === "quiz" && <QuizRunView id={route.param ?? ""} />}
              {route.view === "open-questions" && <OpenQuestionsView />}
              {route.view === "disputed" && <DisputedView />}
              {route.view === "cases" && <CasesView />}
              {route.view === "corrections" && <CorrectionsView />}
              {route.view === "recently-added" && <RecentlyAddedView />}
              {route.view === "campaigns" && <CampaignsView />}
              {route.view === "embed" && <EmbedView />}
              {route.view === "forum" && <ForumView />}
              {route.view === "communities" && <CommunitiesView />}
              {route.view === "about" && <AboutView />}
              {route.view === "account" && <AccountView />}
              {route.view === "news" && <NewsView />}
              {route.view === "faq" && <FaqView />}
              {route.view === "subscribe" && <SubscribeView />}
              {route.view === "newsletter" && <NewsletterView />}
              {["privacy", "terms", "copyright", "accessibility", "reviewers", "contact", "follow"].includes(route.view) && (
                <LegalView which={route.view} />
              )}
              {route.view === "notfound" && <NotFoundView />}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
