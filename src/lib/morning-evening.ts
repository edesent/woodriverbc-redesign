export type ReadingPeriod = "morning" | "evening";

export type MorningEveningEntry = {
  dateKey: string;
  period: ReadingPeriod;
  scripture: string;
  reference: string;
  paragraphs: string[];
};

export async function getMorningEveningEntry() {
  return undefined as MorningEveningEntry | undefined;
}

export function getEasternDateAndPeriod() {
  return { dateKey: "01-01", period: "morning" as ReadingPeriod };
}

export function formatMorningEveningDate(dateKey: string) {
  const [monthText = "1", dayText = "1"] = dateKey.split("-");
  const month = Number(monthText);
  const day = Number(dayText);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2024, month - 1, day)));
}

export function adjacentMorningEveningDate(dateKey: string, amount: number) {
  const [monthText = "1", dayText = "1"] = dateKey.split("-");
  const date = new Date(Date.UTC(2024, Number(monthText) - 1, Number(dayText)));
  date.setUTCDate(date.getUTCDate() + amount);
  return `${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
}
