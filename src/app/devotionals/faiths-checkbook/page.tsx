import type { Metadata } from "next";
import FaithsCheckbookView from "./FaithsCheckbookView";
import {
  getFaithsCheckbookEntries,
  getNewYorkDateKey,
} from "@/lib/faiths-checkbook";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Today's Faith's Checkbook Devotional | Wood River Baptist Church",
  description:
    "Read today's selection from C. H. Spurgeon's Faith's Checkbook, automatically updated each day at midnight Eastern Time.",
  alternates: {
    canonical: "/devotionals/faiths-checkbook",
  },
};

export default async function FaithsCheckbookTodayPage() {
  const dateKey = getNewYorkDateKey();
  const entries = await getFaithsCheckbookEntries();
  const entry = entries.get(dateKey);

  if (!entry) {
    throw new Error(`No Faith's Checkbook entry was found for ${dateKey}.`);
  }

  return <FaithsCheckbookView entry={entry} isToday />;
}
