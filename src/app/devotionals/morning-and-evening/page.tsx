import type { Metadata } from "next";
import MorningEveningView from "./MorningEveningView";
import {
  getEasternDateKey,
  getMorningEveningEntry,
} from "@/lib/morning-evening";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Today's Spurgeon Morning and Evening Devotional | Wood River Baptist Church",
  description:
    "Read today's morning and evening selections from C. H. Spurgeon's Morning and Evening, updated automatically each day at midnight Eastern Time.",
  alternates: {
    canonical: "/devotionals/morning-and-evening",
  },
};

export default async function MorningAndEveningTodayPage() {
  const dateKey = getEasternDateKey();
  const [morning, evening] = await Promise.all([
    getMorningEveningEntry(dateKey, "morning"),
    getMorningEveningEntry(dateKey, "evening"),
  ]);

  if (!morning || !evening) {
    throw new Error(`No Morning and Evening readings were found for ${dateKey}.`);
  }

  return (
    <MorningEveningView
      dateKey={dateKey}
      morning={morning}
      evening={evening}
      isToday
    />
  );
}
