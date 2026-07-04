import { ArrowLeft, ArrowRight, BookOpenText, Moon, Sun } from "lucide-react";
import Link from "next/link";
import type { MorningEveningEntry, ReadingPeriod } from "@/lib/morning-evening";
import { adjacentMorningEveningDate, formatMorningEveningDate } from "@/lib/morning-evening";
import PeriodRefresh from "./PeriodRefresh";

type Props = { entry: MorningEveningEntry; isToday?: boolean };

export default function MorningEveningView({ entry, isToday = false }: Props) {
  const otherPeriod: ReadingPeriod = entry.period === "morning" ? "evening" : "morning";
  const previousDate = adjacentMorningEveningDate(entry.dateKey, -1);
  const nextDate = adjacentMorningEveningDate(entry.dateKey, 1);

  return (
    <>
      <PeriodRefresh />
      <section className="page-hero morning-evening-hero">
        <div>
          <p className="eyebrow">Daily Readings by C. H. Spurgeon</p>
          <h1>Morning and Evening</h1>
          <p>Begin and end each day with Scripture-centered meditations from Charles Haddon Spurgeon.</p>
        </div>
      </section>

      <section className="section page-content morning-evening-page">
        <article className="morning-evening-entry">
          <header>
            <p className="eyebrow">{isToday ? "Today’s Reading" : "Daily Reading"}</p>
            <div className="morning-evening-heading-row">
              <span className={`period-badge ${entry.period}`}>
                {entry.period === "morning" ? <Sun size={18} /> : <Moon size={18} />}
                {entry.period === "morning" ? "Morning" : "Evening"}
              </span>
              <span className="morning-evening-date">{formatMorningEveningDate(entry.dateKey)}</span>
            </div>
            <h2>{entry.period === "morning" ? "Morning Meditation" : "Evening Meditation"}</h2>
          </header>

          <blockquote>
            <BookOpenText size={28} aria-hidden="true" />
            <p>{entry.scripture}</p>
            <cite>{entry.reference}</cite>
          </blockquote>

          <div className="morning-evening-body">
            {entry.paragraphs.map((paragraph, index) => (
              <p key={`${entry.dateKey}-${entry.period}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="morning-evening-switcher">
            <Link href={`/devotionals/spurgeon-morning-evening/${entry.dateKey}/${otherPeriod}`}>
              {otherPeriod === "morning" ? <Sun size={18} /> : <Moon size={18} />}
              Read the {otherPeriod} devotional
            </Link>
          </div>

          <nav className="morning-evening-navigation" aria-label="Morning and Evening devotionals">
            <Link href={`/devotionals/spurgeon-morning-evening/${previousDate}/${entry.period}`}>
              <ArrowLeft size={18} /> Previous day
            </Link>
            {!isToday && <Link href="/devotionals/spurgeon-morning-evening">Today</Link>}
            <Link href={`/devotionals/spurgeon-morning-evening/${nextDate}/${entry.period}`}>
              Next day <ArrowRight size={18} />
            </Link>
          </nav>
        </article>

        <aside className="callout morning-evening-about">
          <h2>Morning and Evening</h2>
          <p>The main page shows the Morning reading before noon Eastern Time and the Evening reading from noon until midnight.</p>
          <p className="morning-evening-source">This public-domain text is supplied from the Christian Classics Ethereal Library.</p>
        </aside>
      </section>
    </>
  );
}
