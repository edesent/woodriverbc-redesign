import type { Metadata } from "next";
import MorningEveningView from "./MorningEveningView";
import { getEasternDateAndPeriod, getMorningEveningEntry } from "@/lib/morning-evening";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Spurgeon's Morning and Evening Devotional | Wood River Baptist Church",
  description: "Read today's Morning or Evening devotional by C. H. Spurgeon, automatically selected by Eastern Time.",
  alternates: { canonical: "/devotionals/spurgeon-morning-evening" },
};

export default async function MorningEveningTodayPage() {
  const { dateKey, period } = getEasternDateAndPeriod();
  const entry = await getMorningEveningEntry(dateKey, period);
  if (!entry) throw new Error(`No Morning and Evening entry was found for ${dateKey} ${period}.`);
  return <MorningEveningView entry={entry} isToday />;
}
