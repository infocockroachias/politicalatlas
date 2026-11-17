import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Political Atlas of India — Approaches to IAS",
  description:
    "An interactive atlas of Indian politics: state-wise election maps, Lok Sabha results (2014-2024), party directory, constitutional notes and practice quizzes — built for UPSC aspirants by Approaches to IAS.",
  keywords: [
    "UPSC", "Indian polity", "Lok Sabha 2024", "political atlas", "approaches to IAS",
    "elections India", "constitution notes", "UPSC quiz",
  ],
  authors: [{ name: "Approaches to IAS" }],
  openGraph: {
    title: "Political Atlas of India — Approaches to IAS",
    description:
      "Explore how power is arranged in the world's largest democracy — maps, results, parties, polity notes and quizzes for UPSC.",
    siteName: "Approaches to IAS",
    type: "website",
  },
};

const themeInit = `
try {
  var t = localStorage.getItem("atlas-theme");
  if (!t) t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  if (t === "dark") document.documentElement.classList.add("dark");
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
