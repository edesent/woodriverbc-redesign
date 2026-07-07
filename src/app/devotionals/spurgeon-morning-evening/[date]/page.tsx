import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MorningEveningView from "../MorningEveningView";
import {
  formatMorningEveningDate,
  getMorningAndEveningEntries,
} from "@/lib/morning-evening";

type Props = {
  params: Promise<{ date: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const entries = await getMorningAndEveningEntries();
  const entry = entries.get(date);

  if (!entry) {
    return { title: "Devotional Not Found | Wood River Baptist Church" };
  }

  return {
    title: `${formatMorningEveningDate(date)} | Spurgeon's Morning and Evening`,
    description: `Read the ${formatMorningEveningDate(date)} Morning and Evening selections from C. H. Spurgeon.`,
    alternates: {
      canonical: `/devotionals/spurgeon-morning-evening/${date}`,
    },
  };
}

export default async function MorningEveningDatePage({ params }: Props) {
  const { date } = await params;

  if (!/^\d{2}-\d{2}$/.test(date)) notFound();

  const entries = await getMorningAndEveningEntries();
  const entry = entries.get(date);
  if (!entry) notFound();

  return <MorningEveningView entry={entry} />;
}
