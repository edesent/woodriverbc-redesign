const SOURCE_BASE = "https://www.ccel.org/s/spurgeon/morn_eve";

export type ReadingPeriod = "morning" | "evening";

export type MorningEveningEntry = {
  dateKey: string;
  period: ReadingPeriod;
  scripture: string;
  reference: string;
  paragraphs: string[];
};

function decodeHtml(value: string) {
  const entities: Record<string, string> = {
    amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " ",
    ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’", mdash: "—", ndash: "–",
  };
  return value
    .replace(/&#(\d+);/g, (_, number: string) => String.fromCharCode(Number(number)))
    .replace(/&([a-z]+);/gi, (match, name: string) => entities[name.toLowerCase()] ?? match);
}

function htmlToText(html: string) {
  const pre = html.match(/<pre[^>]*>([\s\S]*?)<\/pre>/i)?.[1] ?? html;
  return decodeHtml(pre.replace(/<br\s*\/?\s*>/gi, "\n").replace(/<[^>]+>/g, "").replace(/\r/g, ""));
}

function normalizeParagraphs(lines: string[]) {
  const paragraphs: string[] = [];
  let current = "";
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      if (current) { paragraphs.push(current.replace(/\s+/g, " ").trim()); current = ""; }
      continue;
    }
    current += `${current ? " " : ""}${line}`;
  }
  if (current) paragraphs.push(current.replace(/\s+/g, " ").trim());
  return paragraphs;
}

export function parseMorningEveningMonth(html: string, month: string, period: ReadingPeriod) {
  const text = htmlToText(html);
  const suffix = period === "morning" ? "AM" : "PM";
  const pattern = new RegExp(`^\\s*\\*?\\s*(${month}\\/\\d{2}\\/${suffix})\\s*$`, "gm");
  const matches = [...text.matchAll(pattern)];
  const entries = new Map<string, MorningEveningEntry>();

  matches.forEach((match, index) => {
    const blockStart = (match.index ?? 0) + match[0].length;
    const blockEnd = matches[index + 1]?.index ?? text.length;
    const lines = text.slice(blockStart, blockEnd).trim().split("\n");
    const scriptureLines: string[] = [];
    let reference = "";
    let bodyStart = 0;

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      const trimmed = lines[lineIndex].trim();
      if (!trimmed) continue;
      if (/^--/.test(trimmed)) {
        reference = trimmed.replace(/^--\s*/, "").trim();
        bodyStart = lineIndex + 1;
        break;
      }
      scriptureLines.push(trimmed);
    }

    const day = match[1].slice(3, 5);
    const dateKey = `${month}-${day}`;
    const scripture = scriptureLines.join(" ").replace(/\s+/g, " ").trim();
    const paragraphs = normalizeParagraphs(lines.slice(bodyStart));
    if (scripture && reference && paragraphs.length) {
      entries.set(dateKey, { dateKey, period, scripture, reference, paragraphs });
    }
  });
  return entries;
}

export async function getMorningEveningEntry(dateKey: string, period: ReadingPeriod) {
  const month = dateKey.slice(0, 2);
  const suffix = period === "morning" ? "AM" : "PM";
  const response = await fetch(`${SOURCE_BASE}/ME${month}${suffix}.html`, { next: { revalidate: 86400 } });
  if (!response.ok) throw new Error("Unable to load Spurgeon's Morning and Evening text.");
  return parseMorningEveningMonth(await response.text(), month, period).get(dateKey);
}

export function getEasternDateAndPeriod(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York", month: "2-digit", day: "2-digit", hour: "2-digit", hour12: false,
  }).formatToParts(date);
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return {
    dateKey: `${value("month")}-${value("day")}`,
    period: (Number(value("hour")) < 12 ? "morning" : "evening") as ReadingPeriod,
  };
}

export function formatMorningEveningDate(dateKey: string) {
  const [month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", timeZone: "UTC" })
    .format(new Date(Date.UTC(2024, month - 1, day)));
}

export function adjacentMorningEveningDate(dateKey: string, amount: number) {
  const [month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(2024, month - 1, day));
  date.setUTCDate(date.getUTCDate() + amount);
  return `${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
}
