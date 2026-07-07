import type { Metadata } from "next";
import MorningEveningView from "./MorningEveningView";
import {
  getMorningAndEveningEntries,
  getNewYorkDateKey,
} from "@/lib/morning-evening";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Today's Spurgeon Morning and Evening Devotional | Wood River Baptist Church",
  description:
    "Read today's Morning and Evening selections from C. H. Spurgeon, automatically updated each day at midnight Eastern Time.",
  alternates: {
    canonical: "/devotionals/spurgeon-morning-evening",
  },
};

export default async function MorningEveningTodayPage() {
  const dateKey = getNewYorkDateKey();
  const entries = await getMorningAndEveningEntries();
  const entry = entries.get(dateKey);

  if (!entry) {
    throw new Error(`No Morning and Evening entry was found for ${dateKey}.`);
  }

  return <MorningEveningView entry={entry} isToday />;
}
