const SOURCE_URL =
  "https://www.ccel.org/ccel/s/spurgeon/morneve/cache/morneve.txt";

const monthNumbers: Record<string, string> = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

const bibleBookPattern = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalm",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
].sort((a, b) => b.length - a.length).join("|");

export type MorningEveningReading = {
  dateKey: string;
  timeOfDay: "morning" | "evening";
  title: string;
  scripture: string;
  paragraphs: string[];
};

export type MorningEveningEntry = {
  dateKey: string;
  morning: MorningEveningReading;
  evening: MorningEveningReading;
};

function cleanParagraphs(block: string) {
  return block
    .replace(/__________________________________________________________________/g, "")
    .split(/\n\s*\n|\n(?=[A-Z\"“])/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function titleFor(timeOfDay: "morning" | "evening", dateKey: string) {
  return `${timeOfDay === "morning" ? "Morning" : "Evening"}, ${formatMorningEveningDate(dateKey)}`;
}

function parseReading(
  dateKey: string,
  timeOfDay: "morning" | "evening",
  block: string,
): MorningEveningReading {
  const cleanedBlock = block
    .replace(/\[\d+\]Go To (?:Morning|Evening) Reading/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const scripturePattern = new RegExp(
    `^[\"“]([^\"”]+)[\"”]\\s+((?:${bibleBookPattern})\\s+\\d+:\\d+(?:[-–,]\\s*\\d+)?(?:,\\s*\\d+)?)\\s+([\\s\\S]*)$`,
  );
  const scriptureMatch = cleanedBlock.match(scripturePattern);

  if (!scriptureMatch) {
    return {
      dateKey,
      timeOfDay,
      title: titleFor(timeOfDay, dateKey),
      scripture: "",
      paragraphs: cleanParagraphs(cleanedBlock),
    };
  }

  return {
    dateKey,
    timeOfDay,
    title: titleFor(timeOfDay, dateKey),
    scripture: `“${scriptureMatch[1]}” ${scriptureMatch[2]}`,
    paragraphs: cleanParagraphs(scriptureMatch[3]),
  };
}

export function parseMorningAndEvening(text: string) {
  const readingPattern =
    /(?:^|\n|_+\s+)(Morning|Evening),\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})\s+/g;
  const matches = [...text.matchAll(readingPattern)];
  const readings = new Map<string, Partial<MorningEveningEntry>>();

  matches.forEach((match, index) => {
    const timeOfDay = match[1].toLowerCase() as "morning" | "evening";
    const month = monthNumbers[match[2]];
    const day = match[3].padStart(2, "0");
    const dateKey = `${month}-${day}`;
    const blockStart = (match.index ?? 0) + match[0].length;
    const blockEnd = matches[index + 1]?.index ?? text.length;
    const reading = parseReading(dateKey, timeOfDay, text.slice(blockStart, blockEnd));
    const existing = readings.get(dateKey) ?? { dateKey };

    readings.set(dateKey, {
      ...existing,
      [timeOfDay]: reading,
    });
  });

  const entries = new Map<string, MorningEveningEntry>();
  readings.forEach((entry, dateKey) => {
    if (entry.dateKey && entry.morning && entry.evening) {
      entries.set(dateKey, {
        dateKey,
        morning: entry.morning,
        evening: entry.evening,
      });
    }
  });

  return entries;
}

export async function getMorningAndEveningEntries() {
  const response = await fetch(SOURCE_URL, {
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error("Unable to load Spurgeon's Morning and Evening devotional text.");
  }

  return parseMorningAndEvening(await response.text());
}

export function getNewYorkDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;
  return `${month}-${day}`;
}

export function formatMorningEveningDate(dateKey: string) {
  const [month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2024, month - 1, day)));
}

export function adjacentDateKey(dateKey: string, amount: number) {
  const [month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(2024, month - 1, day));
  date.setUTCDate(date.getUTCDate() + amount);
  return `${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(
    date.getUTCDate(),
  ).padStart(2, "0")}`;
}
