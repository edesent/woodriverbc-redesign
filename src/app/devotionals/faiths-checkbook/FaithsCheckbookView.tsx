import { ArrowLeft, ArrowRight, BookOpenText, CalendarDays } from "lucide-react";
import Link from "next/link";
import type { FaithsCheckbookEntry } from "@/lib/faiths-checkbook";
import {
  adjacentDateKey,
  formatFaithsCheckbookDate,
} from "@/lib/faiths-checkbook";
import MidnightRefresh from "./MidnightRefresh";

type Props = {
  entry: FaithsCheckbookEntry;
  isToday?: boolean;
};

export default function FaithsCheckbookView({ entry, isToday = false }: Props) {
  const previous = adjacentDateKey(entry.dateKey, -1);
  const next = adjacentDateKey(entry.dateKey, 1);

  return (
    <>
      <MidnightRefresh />
      <section className="page-hero faiths-checkbook-hero">
        <div>
          <p className="eyebrow">Daily Devotional by C. H. Spurgeon</p>
          <h1>Faith&apos;s Checkbook</h1>
          <p>
            Precious promises arranged for daily use, with brief experimental
            comments from Charles Haddon Spurgeon.
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
              {formatFaithsCheckbookDate(entry.dateKey)}
            </p>
            <h2>{entry.title}</h2>
          </header>

          <blockquote>
            <BookOpenText size={28} aria-hidden="true" />
            <p>{entry.scripture}</p>
          </blockquote>

          <div className="faiths-checkbook-body">
            {entry.paragraphs.map((paragraph, index) => (
              <p key={`${entry.dateKey}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <nav className="faiths-checkbook-navigation" aria-label="Daily devotionals">
            <Link href="/devotionals">
              <ArrowLeft size={18} /> Back to Devotionals
            </Link>
            <Link href={`/devotionals/faiths-checkbook/${previous}`}>
              <ArrowLeft size={18} /> Previous day
            </Link>
            {!isToday && (
              <Link href="/devotionals/faiths-checkbook">Today</Link>
            )}
            <Link href={`/devotionals/faiths-checkbook/${next}`}>
              Next day <ArrowRight size={18} />
            </Link>
          </nav>
        </article>

        <aside className="callout faiths-checkbook-about">
          <h2>About Faith&apos;s Checkbook</h2>
          <p>
            Spurgeon compared the promises of God to checks drawn upon the bank
            of faith—promises to be received personally, presented to God in
            prayer, and trusted as completely true.
          </p>
          <p className="faiths-checkbook-source">
            This public-domain devotional text is supplied from the Christian
            Classics Ethereal Library. Scripture wording and punctuation follow
            the historic edition used in that source.
          </p>
        </aside>
      </section>
    </>
  );
}
