import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FaithsCheckbookView from "../FaithsCheckbookView";
import {
  formatFaithsCheckbookDate,
  getFaithsCheckbookEntries,
} from "@/lib/faiths-checkbook";

type Props = {
  params: Promise<{ date: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const entries = await getFaithsCheckbookEntries();
  const entry = entries.get(date);

  if (!entry) {
    return { title: "Devotional Not Found | Wood River Baptist Church" };
  }

  return {
    title: `${entry.title} — ${formatFaithsCheckbookDate(date)} | Faith's Checkbook`,
    description: `Read “${entry.title},” the ${formatFaithsCheckbookDate(date)} selection from C. H. Spurgeon's Faith's Checkbook.`,
    alternates: {
      canonical: `/devotionals/faiths-checkbook/${date}`,
    },
  };
}

export default async function FaithsCheckbookDatePage({ params }: Props) {
  const { date } = await params;

  if (!/^\d{2}-\d{2}$/.test(date)) notFound();

  const entries = await getFaithsCheckbookEntries();
  const entry = entries.get(date);
  if (!entry) notFound();

  return <FaithsCheckbookView entry={entry} />;
}
