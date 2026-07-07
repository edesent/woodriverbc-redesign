import { ArrowLeft, ArrowRight, BookOpenText, CalendarDays, Moon, Sun } from "lucide-react";
import Link from "next/link";
import type { MorningEveningEntry, MorningEveningReading } from "@/lib/morning-evening";
import {
  adjacentDateKey,
  formatMorningEveningDate,
} from "@/lib/morning-evening";
import MidnightRefresh from "./MidnightRefresh";

type Props = {
  entry: MorningEveningEntry;
  isToday?: boolean;
};

function ReadingCard({ reading }: { reading: MorningEveningReading }) {
  const Icon = reading.timeOfDay === "morning" ? Sun : Moon;

  return (
    <section className="faiths-checkbook-entry">
      <header>
        <p className="eyebrow">
          <Icon size={17} aria-hidden="true" /> {reading.timeOfDay === "morning" ? "Morning Reading" : "Evening Reading"}
        </p>
        <h2>{reading.timeOfDay === "morning" ? "Morning" : "Evening"}</h2>
      </header>

      {reading.scripture && (
        <blockquote>
          <BookOpenText size={28} aria-hidden="true" />
          <p>{reading.scripture}</p>
        </blockquote>
      )}

      <div className="faiths-checkbook-body">
        {reading.paragraphs.map((paragraph, index) => (
          <p key={`${reading.dateKey}-${reading.timeOfDay}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default function MorningEveningView({ entry, isToday = false }: Props) {
  const previous = adjacentDateKey(entry.dateKey, -1);
  const next = adjacentDateKey(entry.dateKey, 1);

  return (
    <>
      <MidnightRefresh />
      <section className="page-hero faiths-checkbook-hero">
        <div>
          <p className="eyebrow">Daily Devotional by C. H. Spurgeon</p>
          <h1>Morning and Evening</h1>
          <p>
            Two daily readings from Charles Haddon Spurgeon, automatically
            updated each day at midnight Eastern Time.
          </p>
        </div>
      </section>

      <section className="section page-content faiths-checkbook-page">
        <div className="devotional-entries">
          <article className="faiths-checkbook-entry">
            <header>
              <p className="eyebrow">
                {isToday ? "Today’s Devotionals" : "Daily Devotionals"}
              </p>
              <p className="faiths-checkbook-date">
                <CalendarDays size={18} aria-hidden="true" />
                {formatMorningEveningDate(entry.dateKey)}
              </p>
            </header>

            <nav className="faiths-checkbook-navigation" aria-label="Daily devotionals">
              <Link href="/devotionals">
                <ArrowLeft size={18} /> Back to Devotionals
              </Link>
              <Link href={`/devotionals/spurgeon-morning-evening/${previous}`}>
                <ArrowLeft size={18} /> Previous day
              </Link>
              {!isToday && (
                <Link href="/devotionals/spurgeon-morning-evening">Today</Link>
              )}
              <Link href={`/devotionals/spurgeon-morning-evening/${next}`}>
                Next day <ArrowRight size={18} />
              </Link>
            </nav>
          </article>

          <ReadingCard reading={entry.morning} />
          <ReadingCard reading={entry.evening} />
        </div>

        <aside className="callout faiths-checkbook-about">
          <h2>About Morning and Evening</h2>
          <p>
            Spurgeon’s classic devotional provides a morning meditation and an
            evening meditation for each day of the year, encouraging believers
            to begin and end the day with Scripture-centered reflection.
          </p>
          <p className="faiths-checkbook-source">
            This public-domain devotional text is supplied from the Christian
            Classics Ethereal Library. The page updates according to Eastern
            Time, matching the church’s local schedule.
          </p>
        </aside>
      </section>
    </>
  );
}
