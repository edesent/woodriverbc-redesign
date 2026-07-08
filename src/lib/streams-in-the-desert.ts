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

const OCR_WORD_FIXES: Array<[RegExp, string]> = [
  [/\bwil\b/gi, "will"],
  [/\bshal\b/gi, "shall"],
  [/\bal\b/gi, "all"],
  [/\bcal\b/gi, "call"],
  [/\bcal ed\b/gi, "called"],
  [/\bcaled\b/gi, "called"],
  [/\bcal ing\b/gi, "calling"],
  [/\bcal s\b/gi, "calls"],
  [/\btel\b/gi, "tell"],
  [/\btel s\b/gi, "tells"],
  [/\btel ing\b/gi, "telling"],
  [/\bwel\b/gi, "well"],
  [/\bdul\b/gi, "dull"],
  [/\bful\b/gi, "full"],
  [/\bfil\b/gi, "fill"],
  [/\bfil ed\b/gi, "filled"],
  [/\bfil ing\b/gi, "filling"],
  [/\bfol ow\b/gi, "follow"],
  [/\bfol owed\b/gi, "followed"],
  [/\bfol owing\b/gi, "following"],
  [/\bfol ows\b/gi, " follows"],
  [/\ball ow\b/gi, "allow"],
  [/\ball owed\b/gi, "allowed"],
  [/\ball owing\b/gi, "allowing"],
  [/\bcontinual y\b/gi, "continually"],
  [/\bspiritual y\b/gi, "spiritually"],
  [/\bnatural y\b/gi, "naturally"],
  [/\bactual y\b/gi, "actually"],
  [/\bliteral y\b/gi, "literally"],
  [/\bfinal y\b/gi, "finally"],
  [/\bperpetual y\b/gi, "perpetually"],
  [/\bprovidential y\b/gi, "providentially"],
  [/\bwil ing\b/gi, "willing"],
  [/\bwil ful\b/gi, "willful"],
  [/\bwil fully\b/gi, "willfully"],
  [/\breal y\b/gi, "really"],
  [/\bmarvel ous\b/gi, "marvelous"],
  [/\bcol ege\b/gi, "college"],
  [/\bintel ect\b/gi, "intellect"],
  [/\bintel ectual\b/gi, "intellectual"],
  [/\bintel igence\b/gi, "intelligence"],
  [/\bfel ow\b/gi, "fellow"],
  [/\bfel owship\b/gi, "fellowship"],
  [/\bsel f\b/gi, "self"],
  [/\bself -\b/gi, "self-"],
  [/\bto-day\b/gi, "today"],
  [/\bto-morrow\b/gi, "tomorrow"],
  [/\bco-operat/gi, "cooperat"],
];

function matchCase(original: string, replacement: string): string {
  if (original === original.toUpperCase()) {
    return replacement.toUpperCase();
  }

  if (original[0] === original[0]?.toUpperCase()) {
    return `${replacement[0].toUpperCase()}${replacement.slice(1)}`;
  }

  return replacement;
}

function proofreadOcrText(text: string): string {
  let corrected = text
    .replace(/([A-Za-z])-\n([a-z])/g, "$1$2")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([“\"'])\s+/g, "$1")
    .replace(/\s+([”\"'])/g, "$1")
    .replace(/\b([A-Z])\s\.\s([A-Z])\./g, "$1.$2.")
    .replace(/\s{2,}/g, " ");

  for (const [pattern, replacement] of OCR_WORD_FIXES) {
    corrected = corrected.replace(pattern, (match) => matchCase(match, replacement));
  }

  return corrected
    .replace(/\bfollows\b/gi, (match) => matchCase(match, "follows"))
    .replace(/\s{2,}/g, " ")
    .trim();
}

function normalizeText(text: string): string {
  return text
    .replace(/\r/g, "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\u00a0/g, " ")
    .replace(/([A-Za-z])-\n([a-z])/g, "$1$2")
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
    .map((paragraph) => proofreadOcrText(paragraph.replace(/\s+/g, " ")))
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
    title = proofreadOcrText(first.replace(/\s+/g, " "));
    body = body.slice(1);
  }

  const possibleScripture = body[0];
  if (possibleScripture && (looksLikeScripture(possibleScripture) || possibleScripture.length < 180)) {
    scripture = proofreadOcrText(possibleScripture);
    body = body.slice(1);
  } else if (second && looksLikeScripture(second)) {
    scripture = proofreadOcrText(second);
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
