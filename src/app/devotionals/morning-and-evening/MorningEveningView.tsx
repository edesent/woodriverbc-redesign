import { ArrowLeft, ArrowRight, BookOpenText, CalendarDays, Moon, Sun } from "lucide-react";
import Link from "next/link";
import MidnightRefresh from "../faiths-checkbook/MidnightRefresh";
import type { MorningEveningEntry, ReadingPeriod } from "@/lib/morning-evening";
import {
  adjacentMorningEveningDate,
  formatMorningEveningDate,
} from "@/lib/morning-evening";

type Props = {
  dateKey: string;
  morning: MorningEveningEntry;
  evening: MorningEveningEntry;
  selectedPeriod?: ReadingPeriod;
  isToday?: boolean;
};

function Reading({ entry }: { entry: MorningEveningEntry }) {
  const isMorning = entry.period === "morning";

  return (
    <article className="morning-evening-reading" id={entry.period}>
      <header>
        <p className="eyebrow">{isMorning ? "Morning Reading" : "Evening Reading"}</p>
        <h2>
          {isMorning ? <Sun size={30} aria-hidden="true" /> : <Moon size={30} aria-hidden="true" />}
          {isMorning ? "Morning" : "Evening"}
        </h2>
      </header>

      <blockquote>
        <BookOpenText size={26} aria-hidden="true" />
        <p>{entry.scripture}</p>
        <cite>{entry.reference}</cite>
      </blockquote>

      <div className="morning-evening-body">
        {entry.paragraphs.map((paragraph, index) => (
          <p key={`${entry.dateKey}-${entry.period}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default function MorningEveningView({
  dateKey,
  morning,
  evening,
  selectedPeriod,
  isToday = false,
}: Props) {
  const previous = adjacentMorningEveningDate(dateKey, -1);
  const next = adjacentMorningEveningDate(dateKey, 1);
  const readings = selectedPeriod === "evening" ? [evening] : selectedPeriod === "morning" ? [morning] : [morning, evening];

  return (
    <>
      <MidnightRefresh />
      <section className="page-hero morning-evening-hero">
        <div>
          <p className="eyebrow">Twice-Daily Devotional by C. H. Spurgeon</p>
          <h1>Morning and Evening</h1>
          <p>
            Begin and end each day with Scripture and a Christ-centered meditation
            from Charles Haddon Spurgeon.
          </p>
        </div>
      </section>

      <section className="section page-content morning-evening-page">
        <header className="morning-evening-date-header">
          <p className="eyebrow">{isToday ? "Today’s Readings" : "Daily Readings"}</p>
          <h2>
            <CalendarDays size={24} aria-hidden="true" />
            {formatMorningEveningDate(dateKey)}
          </h2>
          <nav aria-label="Choose morning or evening reading">
            <Link href={`/devotionals/morning-and-evening/${dateKey}/morning`}>Morning</Link>
            <Link href={`/devotionals/morning-and-evening/${dateKey}/evening`}>Evening</Link>
            {!selectedPeriod && <span>Both readings shown below</span>}
          </nav>
        </header>

        <div className="morning-evening-readings">
          {readings.map((entry) => (
            <Reading key={entry.period} entry={entry} />
          ))}
        </div>

        <nav className="morning-evening-navigation" aria-label="Daily devotional navigation">
          <Link href={`/devotionals/morning-and-evening/${previous}`}>
            <ArrowLeft size={18} /> Previous day
          </Link>
          {!isToday && <Link href="/devotionals/morning-and-evening">Today</Link>}
          <Link href={`/devotionals/morning-and-evening/${next}`}>
            Next day <ArrowRight size={18} />
          </Link>
        </nav>

        <aside className="callout morning-evening-about">
          <h2>About Morning and Evening</h2>
          <p>
            Spurgeon prepared two readings for every day of the year—one for the
            beginning of the day and another for the evening hours. The historic
            public-domain text is supplied through the Christian Classics Ethereal Library.
          </p>
        </aside>
      </section>
    </>
  );
}
