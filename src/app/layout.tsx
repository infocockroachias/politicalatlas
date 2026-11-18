import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Political Atlas — The Shape of Power | Approaches to IAS",
  description:
    "A cross-referenced atlas of government and political thought: 56 countries, systems of government, ideologies, founding documents, mechanisms, figures, movements and institutions — every fact locally sourced and every page free to read.",
  keywords: [
    "political atlas", "systems of government", "constitutions", "political ideologies",
    "comparative politics", "approaches to IAS", "interactive atlas", "political encyclopedia",
  ],
  authors: [{ name: "Approaches to IAS" }],
  openGraph: {
    title: "Political Atlas — The Shape of Power",
    description:
      "Every system of power, one connected map of rule. A cross-referenced encyclopedia of government and political thought, published by Approaches to IAS.",
    siteName: "Approaches to IAS",
    type: "website",
  },
};

const settingsInit = `
try {
  var t = localStorage.getItem("atlas-theme") || "system";
  var dark = t === "dark" || (t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (dark) document.documentElement.classList.add("dark");
  var s = localStorage.getItem("atlas-text-scale");
  if (s) document.documentElement.style.setProperty("--atlas-text-scale", s + "%");
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
        <script dangerouslySetInnerHTML={{ __html: settingsInit }} />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
