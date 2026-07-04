import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MorningEveningView from "../MorningEveningView";
import {
  formatMorningEveningDate,
  getMorningEveningEntry,
} from "@/lib/morning-evening";

type Props = {
  params: Promise<{ date: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const label = /^\d{2}-\d{2}$/.test(date)
    ? formatMorningEveningDate(date)
    : "Daily Reading";

  return {
    title: `${label} | Spurgeon's Morning and Evening`,
    description: `Read the ${label} morning and evening selections from C. H. Spurgeon's classic devotional.`,
    alternates: {
      canonical: `/devotionals/morning-and-evening/${date}`,
    },
  };
}

export default async function MorningAndEveningDatePage({ params }: Props) {
  const { date } = await params;
  if (!/^\d{2}-\d{2}$/.test(date)) notFound();

  const [morning, evening] = await Promise.all([
    getMorningEveningEntry(date, "morning"),
    getMorningEveningEntry(date, "evening"),
  ]);

  if (!morning || !evening) notFound();

  return (
    <MorningEveningView dateKey={date} morning={morning} evening={evening} />
  );
}
