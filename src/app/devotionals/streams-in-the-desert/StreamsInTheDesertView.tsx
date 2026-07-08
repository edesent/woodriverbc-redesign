import { ArrowLeft, ArrowRight, BookOpenText, CalendarDays } from "lucide-react";
import Link from "next/link";
import type { StreamsInTheDesertEntry } from "@/lib/streams-in-the-desert";
import {
  adjacentDateKey,
  formatStreamsInTheDesertDate,
} from "@/lib/streams-in-the-desert";
import MidnightRefresh from "./MidnightRefresh";

type Props = {
  entry: StreamsInTheDesertEntry;
  isToday?: boolean;
};

export default function StreamsInTheDesertView({ entry, isToday = false }: Props) {
  const previous = adjacentDateKey(entry.dateKey, -1);
  const next = adjacentDateKey(entry.dateKey, 1);

  return (
    <>
      <MidnightRefresh />
      <section className="page-hero faiths-checkbook-hero">
        <div>
          <p className="eyebrow">Daily Devotional by Mrs. Charles E. Cowman</p>
          <h1>Streams in the Desert</h1>
          <p>
            Daily encouragement for pilgrims in dry places, drawn from the
            original devotional edition and updated each day at midnight Eastern Time.
          </p>
        </div>
      </section>

      <section className="section page-content faiths-checkbook-page">
        <article className="faiths-checkbook-entry">
          <header>
            <p className="eyebrow">
              {isToday ? "Today’s Devotional" : "Daily Devotional"}
            </p>
            <p className="faiths-checkbook-date">
              <CalendarDays size={18} aria-hidden="true" />
              {formatStreamsInTheDesertDate(entry.dateKey)}
            </p>
            <h2>{entry.title}</h2>
          </header>

          {entry.scripture && (
            <blockquote>
              <BookOpenText size={28} aria-hidden="true" />
              <p>{entry.scripture}</p>
            </blockquote>
          )}

          <div className="faiths-checkbook-body">
            {entry.paragraphs.map((paragraph, index) => (
              <p key={`${entry.dateKey}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <nav className="faiths-checkbook-navigation" aria-label="Daily devotionals">
            <Link href="/devotionals">
              <ArrowLeft size={18} /> Back to Devotionals
            </Link>
            <Link href={`/devotionals/streams-in-the-desert/${previous}`}>
              <ArrowLeft size={18} /> Previous day
            </Link>
            {!isToday && (
              <Link href="/devotionals/streams-in-the-desert">Today</Link>
            )}
            <Link href={`/devotionals/streams-in-the-desert/${next}`}>
              Next day <ArrowRight size={18} />
            </Link>
          </nav>
        </article>

        <aside className="callout faiths-checkbook-about">
          <h2>About Streams in the Desert</h2>
          <p>
            Streams in the Desert was compiled by Mrs. Charles E. Cowman to
            encourage believers to trust God in trial, waiting, weakness, and loss.
          </p>
          <p className="faiths-checkbook-source">
            This page uses the public Internet Archive scan supplied by the
            church and updates according to Eastern Time, matching the church’s local schedule.
          </p>
        </aside>
      </section>
    </>
  );
}
