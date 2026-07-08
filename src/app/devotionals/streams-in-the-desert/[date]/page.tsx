import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StreamsInTheDesertView from "../StreamsInTheDesertView";
import {
  formatStreamsInTheDesertDate,
  getStreamsInTheDesertEntries,
} from "@/lib/streams-in-the-desert";

type Props = {
  params: Promise<{ date: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const entries = await getStreamsInTheDesertEntries();
  const entry = entries.get(date);

  if (!entry) {
    return {
      title: "Streams in the Desert Devotional | Wood River Baptist Church",
    };
  }

  return {
    title: `${formatStreamsInTheDesertDate(date)} Streams in the Desert Devotional | Wood River Baptist Church`,
    description: `Read the Streams in the Desert devotional for ${formatStreamsInTheDesertDate(date)}.`,
  };
}

export default async function StreamsInTheDesertDatePage({ params }: Props) {
  const { date } = await params;

  if (!/^\d{2}-\d{2}$/.test(date)) {
    notFound();
  }

  const entries = await getStreamsInTheDesertEntries();
  const entry = entries.get(date);

  if (!entry) {
    notFound();
  }

  return <StreamsInTheDesertView entry={entry} />;
}
