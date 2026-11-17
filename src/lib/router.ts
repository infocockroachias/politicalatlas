"use client";

// Minimal hash router so the whole atlas works from a single static route.
// Format: #/view  or  #/view/param   (e.g. #/map/KA)

export interface Route {
  view: string;
  param?: string;
}

const VALID_VIEWS = ["home", "map", "elections", "parties", "timeline", "polity", "quiz", "compare", "about"];

export function parseHashFrom(hash: string): Route {
  const h = hash.replace(/^#\/?/, "");
  if (!h) return { view: "home" };
  const [view, param] = h.split("/");
  if (!view || !VALID_VIEWS.includes(view)) return { view: "home" };
  return { view, param: param || undefined };
}

export function navigate(to: string) {
  if (typeof window === "undefined") return;
  window.location.hash = to.startsWith("#") ? to : `#/${to.replace(/^\//, "")}`;
}

/** Store subscription + snapshots for useSyncExternalStore. */
export function subscribe(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

export function getSnapshot(): string {
  return window.location.hash;
}

export function getServerSnapshot(): string {
  return "";
}
