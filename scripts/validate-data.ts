// Validates the atlas data: dangling relations, dangling [[links]], bad relation kinds.
// Run: npx tsx scripts/validate-data.ts
import * as fs from "fs";
import * as path from "path";

const dir = path.join(process.cwd(), "src", "data");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "types.ts" && f !== "categories.ts");

// collect ids
const ids = new Set<string>();
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  for (const m of src.matchAll(/^\s+id:\s*"([a-z0-9-]+)",/gm)) ids.add(m[1]);
}

const kinds = new Set([
  "influenced", "influenced-by", "produced", "governs", "founded", "led", "member-of",
  "participant-in", "precursor-of", "spawned", "exemplifies", "uses", "contrasts-with",
  "cited-by", "shaped", "established", "part-of",
]);

let problems = 0;
const report = (f: string, line: number, msg: string) => {
  problems++;
  console.log(`  ${path.basename(f)}:${line}  ${msg}`);
};

for (const f of files) {
  const full = path.join(dir, f);
  const src = fs.readFileSync(full, "utf8");
  const lines = src.split("\n");
  lines.forEach((line, i) => {
    const rel = [...line.matchAll(/\bto:\s*"([^"]+)"/g)];
    for (const m of rel) {
      if (!ids.has(m[1])) report(full, i + 1, `dangling relation target "${m[1]}"`);
    }
    const lk = [...line.matchAll(/\[\[([a-z0-9-]+)/g)];
    for (const m of lk) {
      if (!ids.has(m[1])) report(full, i + 1, `dangling [[link]] "${m[1]}"`);
    }
  });
}

// relation kinds checked only inside relations blocks (heuristic: lines containing both to: and kind:)
for (const f of files) {
  const full = path.join(dir, f);
  const src = fs.readFileSync(full, "utf8");
  const lines = src.split("\n");
  lines.forEach((line, i) => {
    if (line.includes("to:") && line.includes("kind:")) {
      const m = line.match(/kind:\s*"([a-z-]+)"/);
      if (m && !kinds.has(m[1])) report(full, i + 1, `bad relation kind "${m[1]}"`);
    }
  });
}

console.log(problems === 0 ? "ALL CLEAN" : `${problems} problem(s)`);
