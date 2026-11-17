"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/atlas/theme";
import { Nav } from "@/components/atlas/nav";
import { Footer } from "@/components/atlas/footer";
import { HomeView } from "@/components/atlas/views/home";
import { MapView } from "@/components/atlas/views/mapview";
import { ElectionsView } from "@/components/atlas/views/elections";
import { PartiesView } from "@/components/atlas/views/parties";
import { TimelineView } from "@/components/atlas/views/timeline";
import { PolityView } from "@/components/atlas/views/polity";
import { QuizView } from "@/components/atlas/views/quiz";
import { CompareView } from "@/components/atlas/views/compare";
import { AboutView } from "@/components/atlas/views/about";
import { parseHashFrom, subscribe, getSnapshot, getServerSnapshot } from "@/lib/router";

export default function Page() {
  // useSyncExternalStore renders the server snapshot ("home") during hydration,
  // then automatically re-syncs to the client's hash — no mounted flag needed.
  const hash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const route = parseHashFrom(hash);
  const view = route.view;

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main id="main" className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {view === "home" && <HomeView />}
              {view === "map" && <MapView param={route.param} />}
              {view === "elections" && <ElectionsView param={route.param} />}
              {view === "parties" && <PartiesView />}
              {view === "timeline" && <TimelineView />}
              {view === "polity" && <PolityView />}
              {view === "quiz" && <QuizView />}
              {view === "compare" && <CompareView />}
              {view === "about" && <AboutView />}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
