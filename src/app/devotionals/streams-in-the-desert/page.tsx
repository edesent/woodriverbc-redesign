import type { Metadata } from "next";
import StreamsInTheDesertView from "./StreamsInTheDesertView";
import {
  getNewYorkDateKey,
  getStreamsInTheDesertEntries,
} from "@/lib/streams-in-the-desert";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Today's Streams in the Desert Devotional | Wood River Baptist Church",
  description:
    "Read today's Streams in the Desert devotional with daily navigation from Wood River Baptist Church.",
};

export default async function StreamsInTheDesertPage() {
  const entries = await getStreamsInTheDesertEntries();
  const today = getNewYorkDateKey();
  const entry = entries.get(today);

  if (!entry) {
    throw new Error(`No Streams in the Desert entry found for ${today}`);
  }

  return <StreamsInTheDesertView entry={entry} isToday />;
}
