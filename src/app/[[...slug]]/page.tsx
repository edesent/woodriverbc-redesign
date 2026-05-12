import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Check,
  Clock,
  ExternalLink,
  HeartHandshake,
  MessageCircleQuestion,
  NotebookPen,
  Radio,
  Send,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  aliases,
  bibleBooks,
  bibleStudies,
  devotionals,
  events,
  homeLinks,
  prayerSections,
  radioLinks,
  romansRoad,
  scriptureMemory,
  services,
  site,
  textPages,
  thyWordPosts,
} from "@/lib/site";

type Params = {
  slug?: string[];
};

function routeKey(params: Params) {
  const slug = params.slug ?? [];
  return slug.join("/") || "home";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const key = aliases[routeKey(await params)] ?? routeKey(await params);
  if (key === "home") return {};
  if (key.startsWith("events/")) return { title: "Events" };
  if (key === "thy-word-is-a-lamp-unto-my-feet") return { title: "Thy Word" };
  if (key === "the-romans-road") return { title: "The Romans Road" };
  if (key === "who-is-jesus") return { title: "Who Is Jesus" };
  if (key === "prayer-2") return { title: "Prayer" };
  if (key === "daily-worship") return { title: "Daily Worship" };
  const page = textPages[key];
  return { title: page?.title ?? "Wood River Baptist Church" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const rawKey = routeKey(await params);
  const key = aliases[rawKey] ?? rawKey;

  if (key === "home") return <HomePage />;
  if (key === "events" || key.startsWith("events/")) return <EventsPage archive={key !== "events"} />;
  if (key === "thy-word-is-a-lamp-unto-my-feet") return <ThyWordPage />;
  if (key === "devotionals") return <LinkCollection title="Devotionals" intro="A curated set of daily devotional readings and trusted Bible helps." links={devotionals} icon={<NotebookPen />} />;
  if (key === "scripture-memory-1") return <SimpleListPage title="Scripture Memory Selections" intro="Selected passages for hiding God's Word in your heart." items={scriptureMemory} icon={<BookOpenText />} />;
  if (key === "bible-studies") return <BibleStudiesPage />;
  if (key === "prayer-2") return <PrayerPage />;
  if (key === "christian-radio") return <LinkCollection title="Christian Radio" intro="Music and Bible broadcasting resources for daily listening." links={radioLinks} icon={<Radio />} />;
  if (key === "the-romans-road") return <RomansRoadPage />;
  if (key === "who-is-jesus") return <WhoIsJesusPage />;
  if (key === "the-bible") return <BibleSearchPage />;
  if (key === "bible-reading-tracker") return <BibleTrackerPage />;
  if (key === "daily-worship") return <DailyWorshipPage />;
  if (key === "romans-14-9") return <RomansDetailPage />;
  if (key === "pastor") return <PastorPage />;

  const page = textPages[key];
  if (page) return <TextPage page={page} pageKey={key} />;

  notFound();
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image src="/wood-river-baptist-church.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Wyoming, Rhode Island</p>
          <h1>{site.name}</h1>
          <blockquote className="hero-verse">
            <p>&ldquo;{site.verse}&rdquo;</p>
            <cite>{site.verseReference}</cite>
          </blockquote>
          <div className="button-row">
            <Link className="button primary" href="/services">
              Service Times <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" href="/who-is-jesus">
              Learn of Christ
            </Link>
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">From Our Heart</p>
          <h2>Ministering the gospel from Rockville to Wood River Junction, Westerly to Wakefield, and throughout the world.</h2>
          <p>
            It is the desire of Wood River Baptist Church to minister the gospel of the
            Lord Jesus Christ, who died on the cross for our sins according to the
            Scriptures. We invite you and your family to join us soon and let the Lord
            work to show you His greatness.
          </p>
          <Link className="text-link" href="/pastor">
            Pastor Jon Juneau <ArrowRight size={16} />
          </Link>
        </div>
        <div className="link-grid compact">
          {homeLinks.map(([label, href]) => (
            <SmartLink className="resource-link" href={href} key={href}>
              {label} <ArrowRight size={16} />
            </SmartLink>
          ))}
        </div>
      </section>

      <ServicesBand />
      <EventsPreview />
      <section className="section resource-band">
        <div>
          <p className="eyebrow">Our Daily Walk</p>
          <h2>Scripture, prayer, Bible study, and devotional resources in one place.</h2>
        </div>
        <div className="resource-cards">
          <FeatureLink icon={<NotebookPen />} title="Devotionals" href="/devotionals" />
          <FeatureLink icon={<BookOpenText />} title="Bible Studies" href="/bible-studies" />
          <FeatureLink icon={<HeartHandshake />} title="Prayer" href="/prayer-2" />
          <FeatureLink icon={<MessageCircleQuestion />} title="Ask A Question" href="/ask-a-question" />
        </div>
      </section>
    </>
  );
}

function ServicesBand() {
  return (
    <section className="section services-band">
      <div className="section-heading">
        <p className="eyebrow">Gather With Us</p>
        <h2>Our Weekly Services</h2>
      </div>
      <div className="service-cards">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <Image src={service.image} alt="" width={640} height={480} sizes="(max-width: 980px) 50vw, 25vw" />
            <div>
              <span>{service.day}</span>
              <h3>{service.title}</h3>
              <p>{service.time}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="note">
        On the first Lord&apos;s Day of January, March, May, July, September, and November,
        the church enjoys a fellowship dinner after Morning Worship and does not hold
        Evening Worship.
      </p>
    </section>
  );
}

function EventsPreview() {
  return (
    <section className="section events-preview">
      <div className="section-heading">
        <p className="eyebrow">Church Calendar</p>
        <h2>Events and fellowship days</h2>
        <Link className="text-link" href="/events">
          View all events <ArrowRight size={16} />
        </Link>
      </div>
      <div className="event-list">
        {events.slice(0, 3).map((event) => (
          <EventCard event={event} key={event.title} />
        ))}
      </div>
    </section>
  );
}

function EventsPage({ archive }: { archive: boolean }) {
  return (
    <PageShell eyebrow="Church Calendar" title={archive ? "Event Archive" : "Upcoming Events of WRBC"} intro="Special services, fellowship meals, seasonal outreach, and church family gatherings.">
      <div className="event-list full">
        {events.map((event) => (
          <EventCard event={event} key={event.title} />
        ))}
      </div>
    </PageShell>
  );
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <article className="event-card">
      <div className="event-date">
        <CalendarDays size={20} />
        <span>{event.date}</span>
      </div>
      <h3>{event.title}</h3>
      <p className="event-time">
        <Clock size={16} /> {event.time}
      </p>
      <p>{event.description}</p>
    </article>
  );
}

function ThyWordPage() {
  return (
    <PageShell eyebrow="Pastor Jon Juneau" title="Thy Word" intro="Thoughts on selected passages from the Word of God.">
      <div className="article-list">
        {thyWordPosts.map((post) => (
          <article className="article-card" key={post.title}>
            <p className="meta">{post.date}</p>
            <h2>{post.title}</h2>
            {"reference" in post ? <strong>{post.reference}</strong> : null}
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function LinkCollection({
  title,
  intro,
  links,
  icon,
}: {
  title: string;
  intro: string;
  links: readonly (readonly [string, string])[];
  icon: React.ReactNode;
}) {
  return (
    <PageShell title={title} intro={intro}>
      <div className="link-grid">
        {links.map(([label, href]) => (
          <SmartLink className="resource-link" href={href} key={href}>
            {icon}
            <span>{label}</span>
            <ExternalLink size={16} />
          </SmartLink>
        ))}
      </div>
    </PageShell>
  );
}

function SimpleListPage({
  title,
  intro,
  items,
  icon,
}: {
  title: string;
  intro: string;
  items: readonly string[];
  icon: React.ReactNode;
}) {
  return (
    <PageShell title={title} intro={intro}>
      <div className="memory-grid">
        {items.map((item) => (
          <div className="memory-item" key={item}>
            {icon}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function BibleStudiesPage() {
  return (
    <PageShell title="Bible Studies" intro="Download and use these Bible studies to learn the Word of God and teach the Word of God.">
      <div className="study-grid">
        {bibleStudies.map((section) => (
          <section className="study-card" key={section.book}>
            <h2>{section.book}</h2>
            <ul>
              {section.lessons.map((lesson) => (
                <li key={lesson}>
                  <Check size={15} />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

function PrayerPage() {
  return (
    <PageShell title="Prayer" intro="A shared prayer guide for evangelism, preaching, revival, families, soldiers, and nearby communities.">
      <div className="prayer-grid">
        {prayerSections.map((section) => (
          <section className="prayer-card" key={section.title}>
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

function RomansRoadPage() {
  return (
    <PageShell title="The Romans Road" intro="God's way of salvation, traced through the book of Romans.">
      <div className="road">
        {romansRoad.map(([reference, summary]) => (
          <article className="road-step" key={reference}>
            <span>{reference}</span>
            <p>{summary}</p>
          </article>
        ))}
      </div>
      <div className="callout">
        <h2>What should I do?</h2>
        <p>
          Believe the Lord Jesus Christ, call upon Him for salvation, and talk with the
          church if you have questions about the gospel, baptism, or walking in newness
          of life.
        </p>
        <Link className="button primary" href="/ask-a-question">
          Ask a Bible question
        </Link>
      </div>
    </PageShell>
  );
}

function WhoIsJesusPage() {
  const truths = [
    ["He is eternal God, Creator of all things", "John 1:1, 3"],
    ["He became a man to reveal the Father to us", "John 1:14"],
    ["He became the final sacrifice for sin", "John 1:29"],
    ["He predicted that He would rise from the dead", "John 2:19, 21"],
    ["He died that those who trust Him will have eternal life", "John 3:16"],
    ["Those who trust Him find spiritual satisfaction", "John 4:14"],
    ["Those who trust Him are passed from death unto life", "John 5:24"],
    ["Those who come to Him will not be cast out", "John 6:37"],
  ] as const;

  return (
    <PageShell title="Who Is Jesus?" intro="It is the most important question you have to answer for yourself.">
      <div className="truth-grid">
        {truths.map(([truth, reference]) => (
          <article key={truth}>
            <h2>{truth}</h2>
            <p>{reference}</p>
          </article>
        ))}
      </div>
      <div className="callout">
        <h2>There is salvation in no other.</h2>
        <p>
          If you believe the truths of Scripture, find a quiet place and ask Jesus to
          forgive your sins and save you. If you have questions, call, email, or visit.
        </p>
        <div className="button-row">
          <Link className="button primary" href="/the-romans-road">
            The Romans Road
          </Link>
          <Link className="button secondary" href="/contact-us">
            Contact the church
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

function BibleSearchPage() {
  return (
    <PageShell title="The Bible" intro="Search the Bible by book, chapter, verse, word, or phrase.">
      <form className="search-panel" action="https://www.blueletterbible.org/search/search.cfm" method="get">
        <label htmlFor="criteria">Search Scripture</label>
        <div>
          <input id="criteria" name="Criteria" placeholder="e.g. John 3:16 or grace" />
          <button type="submit">
            Search <Send size={16} />
          </button>
        </div>
        <p>Powered by BlueLetterBible.org</p>
      </form>
    </PageShell>
  );
}

function BibleTrackerPage() {
  return (
    <PageShell title="Bible Reading Tracker" intro="Keep track of your progress through all 66 books of the Bible.">
      <div className="tracker-actions">
        <button type="button">Login with Google</button>
        <button type="button">Register</button>
        <button type="button">Reset</button>
      </div>
      <div className="progress-shell">
        <span>0 of 66 books complete</span>
        <div><span style={{ width: "0%" }} /></div>
      </div>
      <div className="book-grid">
        {bibleBooks.map((book) => (
          <label key={book}>
            <input type="checkbox" />
            <span>{book}</span>
          </label>
        ))}
      </div>
    </PageShell>
  );
}

function DailyWorshipPage() {
  return (
    <PageShell title="Daily Worship" intro="A quick path into daily Bible reading, study, prayer, and devotional helps.">
      <div className="resource-cards wide">
        <FeatureLink icon={<NotebookPen />} title="Devotionals" href="/devotionals" />
        <FeatureLink icon={<BookOpenText />} title="Scripture Memory" href="/scripture-memory-1" />
        <FeatureLink icon={<BookOpenText />} title="Bible Studies" href="/bible-studies" />
        <FeatureLink icon={<HeartHandshake />} title="Prayer" href="/prayer-2" />
        <FeatureLink icon={<HeartHandshake />} title="Prayer Request" href="/prayer" />
        <FeatureLink icon={<MessageCircleQuestion />} title="Ask A Question" href="/ask-a-question" />
      </div>
    </PageShell>
  );
}

function PastorPage() {
  const page = textPages["pastor"];
  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      <div className="pastor-feature">
        <div className="pastor-photo">
          <Image
            src="/woodriver/juneau-family.jpg"
            alt="Pastor Jon Juneau with his wife Heather and their five children"
            width={900}
            height={900}
            sizes="(max-width: 880px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="pastor-bio">
          {page.paragraphs?.map((paragraph) => (
            <p className="body-copy" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function RomansDetailPage() {
  return (
    <PageShell title="Romans 14:9" intro="For to this end Christ both died, and rose, and revived, that he might be Lord both of the dead and living.">
      <div className="truth-grid">
        <article>
          <h2>For to This End</h2>
          <p>There is an ultimate reason Jesus Christ did what He did: that His people might live with Him as their Lord.</p>
        </article>
        <article>
          <h2>Died, Rose, And Revived</h2>
          <p>Jesus died, rose, and revived so that those under His lordship would also be His friends.</p>
        </article>
        <article>
          <h2>That He Might Be Lord</h2>
          <p>Because He gave Himself for us, it is reasonable and good to follow Him.</p>
        </article>
      </div>
      <Link className="text-link" href="/the-romans-road">
        Back to The Romans Road <ArrowRight size={16} />
      </Link>
    </PageShell>
  );
}

function TextPage({ page, pageKey }: { page: (typeof textPages)[string]; pageKey: string }) {
  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.image}>
      {pageKey === "services" ? <ServicesBand /> : null}
      {page.paragraphs?.map((paragraph) => (
        <p className="body-copy" key={paragraph}>
          {paragraph}
        </p>
      ))}
      {page.bullets ? (
        <ul className="check-list">
          {page.bullets.map((bullet) => (
            <li key={bullet}>
              <Check size={16} /> {bullet}
            </li>
          ))}
        </ul>
      ) : null}
      {pageKey === "ask-a-question" || pageKey === "prayer" ? <ContactForm mode={pageKey} /> : null}
      {page.cta ? (
        <SmartLink className="button primary inline" href={page.cta[1]}>
          {page.cta[0]} <ArrowRight size={17} />
        </SmartLink>
      ) : null}
    </PageShell>
  );
}

function ContactForm({ mode }: { mode: string }) {
  return (
    <form className="contact-form">
      <label>
        Name
        <input name="name" />
      </label>
      <label>
        Email or phone
        <input name="contact" />
      </label>
      <label>
        {mode === "prayer" ? "Prayer request" : "Question"}
        <textarea name="message" rows={5} />
      </label>
      <button type="button">
        Send to church <Send size={16} />
      </button>
    </form>
  );
}

function PageShell({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={`page-hero ${image ? "with-image" : ""}`}>
        {image ? <Image src={image} alt="" fill sizes="100vw" /> : null}
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {intro ? <p>{intro}</p> : null}
        </div>
      </section>
      <section className="section page-content">{children}</section>
    </>
  );
}

function FeatureLink({ icon, title, href }: { icon: React.ReactNode; title: string; href: string }) {
  return (
    <Link className="feature-link" href={href}>
      {icon}
      <span>{title}</span>
      <ArrowRight size={16} />
    </Link>
  );
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
