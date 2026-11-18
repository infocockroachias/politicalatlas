"use client";

// Minimal hash router so the whole atlas works from a single static route.
// Format: #/view  or  #/view/param

export interface Route {
  view: string;
  param?: string;
  query: URLSearchParams;
}

const VIEWS = new Set([
  "home",
  "domains",
  "category",
  "atoz",
  "systems",
  "entry",
  "compare",
  "connections",
  "trails",
  "trail",
  "today",
  "quizzes",
  "quiz",
  "open-questions",
  "disputed",
  "cases",
  "corrections",
  "recently-added",
  "campaigns",
  "embed",
  "forum",
  "communities",
  "about",
  "account",
  "news",
  "faq",
  "subscribe",
  "newsletter",
  "privacy",
  "terms",
  "copyright",
  "accessibility",
  "reviewers",
  "contact",
  "follow",
]);

export function parseHashFrom(hash: string): Route {
  const raw = hash.replace(/^#\/?/, "");
  if (!raw) return { view: "home", query: new URLSearchParams() };
  const [pathPart, queryPart] = raw.split("?");
  const query = new URLSearchParams(queryPart ?? "");
  const [view, param] = pathPart.split("/");
  if (!view || !VIEWS.has(view)) return { view: "notfound", query };
  return { view, param: param ? decodeURIComponent(param) : undefined, query };
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
