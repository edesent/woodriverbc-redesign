const SOURCE_URL =
  "https://www.ccel.org/ccel/s/spurgeon/checkbook/cache/checkbook.txt";

const monthNumbers: Record<string, string> = {
  "Jan.": "01",
  "Feb.": "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  "Aug.": "08",
  "Sept.": "09",
  "Oct.": "10",
  "Nov.": "11",
  "Dec.": "12",
};

export type FaithsCheckbookEntry = {
  dateKey: string;
  title: string;
  scripture: string;
  paragraphs: string[];
};

function titleCase(value: string) {
  return value
    .toLowerCase()
    .replace(/(^|[\s—-])([a-z])/g, (_, prefix: string, letter: string) =>
      `${prefix}${letter.toUpperCase()}`,
    );
}

function cleanGroups(block: string) {
  return block
    .split(/\n\s*\n/)
    .map((group) =>
      group
        .split("\n")
        .map((line) => line.trim())
        .filter(
          (line) =>
            line &&
            !line.startsWith("__________________________________________________________________"),
        )
        .join(" "),
    )
    .filter(Boolean);
}

export function parseFaithsCheckbook(text: string) {
  const start = text.indexOf("THE MONTH OF JANUARY");
  const devotionalText = start >= 0 ? text.slice(start) : text;
  const datePattern =
    /^\s{3}(Jan\.|Feb\.|March|April|May|June|July|Aug\.|Sept\.|Oct\.|Nov\.|Dec\.)\s+(\d{1,2})\s*$/gm;
  const matches = [...devotionalText.matchAll(datePattern)];
  const entries = new Map<string, FaithsCheckbookEntry>();

  matches.forEach((match, index) => {
    const month = monthNumbers[match[1]];
    const day = match[2].padStart(2, "0");
    const dateKey = `${month}-${day}`;
    const blockStart = (match.index ?? 0) + match[0].length;
    const blockEnd = matches[index + 1]?.index ?? devotionalText.length;
    const groups = cleanGroups(devotionalText.slice(blockStart, blockEnd));
    const title = groups.shift();
    const scripture = groups.shift();

    if (!title || !scripture) return;

    let paragraphs = groups;
    if (dateKey === "12-31") {
      const indexStart = paragraphs.findIndex((paragraph) => paragraph === "Indexes");
      if (indexStart >= 0) paragraphs = paragraphs.slice(0, indexStart);
    }

    entries.set(dateKey, {
      dateKey,
      title: titleCase(title),
      scripture,
      paragraphs,
    });
  });

  return entries;
}

export async function getFaithsCheckbookEntries() {
  const response = await fetch(SOURCE_URL, {
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error("Unable to load Faith's Checkbook devotional text.");
  }

  return parseFaithsCheckbook(await response.text());
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

export function formatFaithsCheckbookDate(dateKey: string) {
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
