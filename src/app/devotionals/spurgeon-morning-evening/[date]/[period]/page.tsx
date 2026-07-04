import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MorningEveningView from "../../../MorningEveningView";
import { formatMorningEveningDate, getMorningEveningEntry, type ReadingPeriod } from "@/lib/morning-evening";

type Props = { params: Promise<{ date: string; period: string }> };

function validPeriod(value: string): value is ReadingPeriod {
  return value === "morning" || value === "evening";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date, period } = await params;
  if (!/^\d{2}-\d{2}$/.test(date) || !validPeriod(period)) return { title: "Devotional Not Found" };
  const entry = await getMorningEveningEntry(date, period);
  if (!entry) return { title: "Devotional Not Found" };
  const label = period === "morning" ? "Morning" : "Evening";
  return {
    title: `${label}, ${formatMorningEveningDate(date)} | Spurgeon's Morning and Evening`,
    description: `Read Spurgeon's ${label.toLowerCase()} meditation for ${formatMorningEveningDate(date)}.`,
    alternates: { canonical: `/devotionals/spurgeon-morning-evening/${date}/${period}` },
  };
}

export default async function MorningEveningDatePage({ params }: Props) {
  const { date, period } = await params;
  if (!/^\d{2}-\d{2}$/.test(date) || !validPeriod(period)) notFound();
  const entry = await getMorningEveningEntry(date, period);
  if (!entry) notFound();
  return <MorningEveningView entry={entry} />;
}
