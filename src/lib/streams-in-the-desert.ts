const SOURCE_URLS = [
  "https://archive.org/download/streamsinthedesert_202004/Streams%20in%20the%20Desert_djvu.txt",
  "https://ia802904.us.archive.org/18/items/streamsinthedesert_202004/Streams%20in%20the%20Desert_djvu.txt",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const MONTH_TO_NUMBER = new Map(
  MONTHS.map((month, index) => [month.toLowerCase(), String(index + 1).padStart(2, "0")]),
);

const DATE_HEADING = new RegExp(
  `(?:^|\\n)\\s*(${MONTHS.join("|")})\\s+(\\d{1,2})(?:st|nd|rd|th)?\\.?\\s*(?=\\n)`,
  "gi",
);

export type StreamsInTheDesertEntry = {
  dateKey: string;
  title: string;
  scripture?: string;
  paragraphs: string[];
};

function normalizeText(text: string): string {
  return text
    .replace(/\r/g, "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

function cleanEntryText(text: string): string {
  return text
    .replace(/\n\s*Digitized by Google\s*\n/gi, "\n")
    .replace(/\n\s*Original from\s+.+?\s*\n/gi, "\n")
    .replace(/\n\s*UNIVERSITY OF [A-Z ]+\s*\n/gi, "\n")
    .replace(/\n\s*PUBLIC LIBRARY\s*\n/gi, "\n")
    .replace(/\n\s*STREAMS IN THE DESERT\s*\n/gi, "\n")
    .replace(/\n\s*\d+\s*\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitParagraphs(text: string): string[] {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const paragraphs: string[] = [];
  let current = "";

  for (const line of lines) {
    if (!current) {
      current = line;
      continue;
    }

    const previousEndsSentence = /[.!?;:'\")\]]$/.test(current);
    const startsNewThought = /^[A-Z0-9"'“”]/.test(line) && previousEndsSentence;

    if (startsNewThought && current.length > 160) {
      paragraphs.push(current);
      current = line;
    } else {
      current += ` ${line}`;
    }
  }

  if (current) {
    paragraphs.push(current);
  }

  return paragraphs
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter((paragraph) => paragraph.length > 1);
}

function looksLikeScripture(line: string): boolean {
  return /\b(?:Gen|Ex|Lev|Num|Deut|Josh|Judg|Ruth|Sam|Kings|Chron|Ezra|Neh|Esth|Job|Ps|Psalm|Prov|Eccl|Song|Isa|Jer|Lam|Ezek|Dan|Hos|Joel|Amos|Obad|Jonah|Mic|Nah|Hab|Zeph|Hag|Zech|Mal|Matt|Mark|Luke|John|Acts|Rom|Cor|Gal|Eph|Phil|Col|Thess|Tim|Titus|Philem|Heb|James|Pet|Jude|Rev)\.?\s+\d/i.test(line)
    || /\b\d+\s+(?:Samuel|Kings|Chronicles|Corinthians|Thessalonians|Timothy|Peter|John)\s+\d/i.test(line);
}

function getTitleAndScripture(paragraphs: string[]) {
  let title = "Streams in the Desert";
  let scripture: string | undefined;
  let body = [...paragraphs];

  const first = body[0];
  const second = body[1];

  if (first && first.length < 90 && first === first.toUpperCase() && /[A-Z]/.test(first)) {
    title = first.replace(/\s+/g, " ");
    body = body.slice(1);
  }

  const possibleScripture = body[0];
  if (possibleScripture && (looksLikeScripture(possibleScripture) || possibleScripture.length < 180)) {
    scripture = possibleScripture;
    body = body.slice(1);
  } else if (second && looksLikeScripture(second)) {
    scripture = second;
  }

  return { title, scripture, body };
}

export function parseStreamsInTheDesert(text: string): Map<string, StreamsInTheDesertEntry> {
  const normalized = normalizeText(text);
  const matches = [...normalized.matchAll(DATE_HEADING)];
  const entries = new Map<string, StreamsInTheDesertEntry>();

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const month = match[1];
    const day = match[2];
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? normalized.length;
    const monthNumber = MONTH_TO_NUMBER.get(month.toLowerCase());

    if (!monthNumber) continue;

    const dateKey = `${monthNumber}-${day.padStart(2, "0")}`;
    const rawEntry = cleanEntryText(normalized.slice(start, end));
    const paragraphs = splitParagraphs(rawEntry);

    if (paragraphs.length === 0) continue;

    const { title, scripture, body } = getTitleAndScripture(paragraphs);

    entries.set(dateKey, {
      dateKey,
      title,
      scripture,
      paragraphs: body.length > 0 ? body : paragraphs,
    });
  }

  return entries;
}

export async function getStreamsInTheDesertEntries(): Promise<Map<string, StreamsInTheDesertEntry>> {
  let lastError: unknown;

  for (const sourceUrl of SOURCE_URLS) {
    try {
      const response = await fetch(sourceUrl, {
        next: { revalidate: 60 * 60 * 24 },
      });

      if (!response.ok) {
        lastError = new Error(`Unable to fetch Streams in the Desert text from ${sourceUrl}`);
        continue;
      }

      const text = await response.text();
      const entries = parseStreamsInTheDesert(text);

      if (entries.size > 300) {
        return entries;
      }

      lastError = new Error(`Only found ${entries.size} Streams in the Desert readings`);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Unable to load Streams in the Desert readings.");
}

export function getNewYorkDateKey(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";

  return `${month}-${day}`;
}

export function formatStreamsInTheDesertDate(dateKey: string): string {
  const [month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(2024, month - 1, day));

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function adjacentDateKey(dateKey: string, offset: number): string {
  const [month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(2024, month - 1, day + offset));
  const nextMonth = String(date.getUTCMonth() + 1).padStart(2, "0");
  const nextDay = String(date.getUTCDate()).padStart(2, "0");

  return `${nextMonth}-${nextDay}`;
}
