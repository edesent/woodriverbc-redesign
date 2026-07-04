import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MorningEveningView from "../../MorningEveningView";
import {
  formatMorningEveningDate,
  getMorningEveningEntry,
  type ReadingPeriod,
} from "@/lib/morning-evening";

type Props = {
  params: Promise<{ date: string; period: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date, period } = await params;
  const validPeriod = period === "morning" || period === "evening";
  const label = /^\d{2}-\d{2}$/.test(date)
    ? formatMorningEveningDate(date)
    : "Daily Reading";

  return {
    title: `${validPeriod ? period[0].toUpperCase() + period.slice(1) : "Reading"}, ${label} | Spurgeon's Morning and Evening`,
    description: `Read Spurgeon's ${validPeriod ? period : "daily"} devotional for ${label}.`,
    alternates: {
      canonical: `/devotionals/morning-and-evening/${date}/${period}`,
    },
  };
}

export default async function MorningAndEveningPeriodPage({ params }: Props) {
  const { date, period } = await params;
  if (!/^\d{2}-\d{2}$/.test(date)) notFound();
  if (period !== "morning" && period !== "evening") notFound();

  const selectedPeriod = period as ReadingPeriod;
  const [morning, evening] = await Promise.all([
    getMorningEveningEntry(date, "morning"),
    getMorningEveningEntry(date, "evening"),
  ]);

  if (!morning || !evening) notFound();

  return (
    <MorningEveningView
      dateKey={date}
      morning={morning}
      evening={evening}
      selectedPeriod={selectedPeriod}
    />
  );
}
