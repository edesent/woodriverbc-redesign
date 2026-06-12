import {
  ArrowRight,
  BookMarked,
  BookmarkCheck,
  BookOpenText,
  CalendarDays,
  Check,
  Clock,
  Download,
  ExternalLink,
  Facebook,
  HandHelping,
  HeartHandshake,
  Instagram,
  ListChecks,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Mic2,
  NotebookPen,
  Phone,
  Radio,
  Send,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { BibleSearch } from "./bible-search";
import { ContactForm } from "./contact-form";
import {
  aliases,
  bibleBooks,
  bibleStudies,
  devotionals,
  events,
  homeLinks,
  navGroups,
  prayerSections,
  radioLinks,
  romansRoad,
  romansRoadDetails,
  romansRoadSlug,
  scriptureMemory,
  services,
  site,
  textPages,
  thyWordPosts,
  thyWordSlug,
} from "@/lib/site";

const dailyWalkIcons: Record<string, React.ReactNode> = {
  "/devotionals": <NotebookPen />,
  "/scripture-memory-1": <BookmarkCheck />,
  "/bible-reading-tracker": <ListChecks />,
  "/bible-studies": <BookOpenText />,
  "/missions-prayer-email-signup": <Mail />,
  "/prayer-2": <HeartHandshake />,
  "/prayer": <Send />,
  "/ask-a-question": <MessageCircleQuestion />,
  "/opportunities-to-serve": <HandHelping />,
  "/christian-radio": <Radio />,
  "/the-bible": <BookMarked />,
};


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
  if (key.startsWith("events/")) return { title: "Wood River Baptist Church" };
  if (key === "thy-word-is-a-lamp-unto-my-feet") return { title: "Thy Word" };
  if (key.startsWith("thy-word-is-a-lamp-unto-my-feet/")) {
    const slug = key.slice("thy-word-is-a-lamp-unto-my-feet/".length);
    const post = thyWordPosts.find((p) => thyWordSlug(p) === slug);
    return { title: post?.title ?? "Thy Word" };
  }
  if (key === "the-romans-road") return { title: "The Romans Road" };
  const romansMeta = romansRoadDetails.find((d) => d.slug === key);
  if (romansMeta) return { title: `${romansMeta.reference} — The Romans Road` };
  if (key === "who-is-jesus") return { title: "Who Is Jesus" };
  if (key === "prayer-2") return { title: "Prayer" };
  if (key === "give") return { title: "Give" };
  if (key === "daily-worship") return { title: "Daily Worship" };
  const page = textPages[key];
  return { title: page?.title ?? "Wood River Baptist Church" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const rawKey = routeKey(await params);
  const key = aliases[rawKey] ?? rawKey;

  if (key === "home") return <HomePage />;
  if (key === "services") redirect("/#services");
  if (key === "find-us" || key === "contact-us") redirect("/connect-with-us");
  if (key === "events") return <EventsPage />;
  if (key.startsWith("events/")) notFound();
  if (key === "thy-word-is-a-lamp-unto-my-feet") return <ThyWordPage />;
  if (key.startsWith("thy-word-is-a-lamp-unto-my-feet/")) {
    const slug = key.slice("thy-word-is-a-lamp-unto-my-feet/".length);
    const post = thyWordPosts.find((p) => thyWordSlug(p) === slug);
    if (post) return <ThyWordPostPage post={post} />;
    notFound();
  }
  if (key === "devotionals") return <LinkCollection title="Devotionals" intro="A curated set of daily devotional readings and trusted Bible helps." links={devotionals} icon={<NotebookPen />} />;
  if (key === "scripture-memory-1") return <SimpleListPage title="Scripture Memory Selections" intro="Selected passages for hiding God's Word in your heart." items={scriptureMemory} icon={<BookOpenText />} links={{ "Psalm 27 - A Psalm For Courage And Strength": "/psalm-27" }} />;
  if (key === "bible-studies") return <BibleStudiesPage />;
  if (key === "prayer-2") return <PrayerPage />;
  if (key === "christian-radio") return <LinkCollection title="Christian Radio" intro="Music and Bible broadcasting resources for daily listening." links={radioLinks} icon={<Radio />} />;
  if (key === "the-romans-road") return <RomansRoadPage />;
  if (key === "who-is-jesus") return <WhoIsJesusPage />;
  if (key === "the-bible") return <BibleSearchPage />;
  if (key === "bible-reading-tracker") return <BibleTrackerPage />;
  if (key === "daily-worship") return <DailyWorshipPage />;
  const romansDetail = romansRoadDetails.find((d) => d.slug === key);
  if (romansDetail) return <RomansVerseDetailPage detail={romansDetail} />;
  if (key === "pastor") return <PastorPage />;
  if (key === "give") return <GivePage />;
  if (key === "connect-with-us") return <ConnectPage />;

  const page = textPages[key];
  if (page) return <TextPage page={page} pageKey={key} />;

  notFound();
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image src="/hero-image-wrbc.png" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-crosses" aria-hidden>
          <Image src="/woodriver/wood-riverctosses.png" alt="" width={620} height={620} />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Wyoming, Rhode Island</p>
          <h1>{site.name}</h1>
          <blockquote className="hero-verse">
            <p>&ldquo;{site.verse}&rdquo;</p>
            <cite>{site.verseReference}</cite>
          </blockquote>
          <div className="button-row">
            <Link className="button primary" href="/#services">
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

      <PastorPreview />
      <ServicesBand />
      <EventsPreview />
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our Daily Walk</p>
            <h2>Scripture, prayer, Bible study, and devotional resources in one place.</h2>
          </div>
        </div>
        <div className="resource-cards wide">
          {navGroups[0].items.map(([title, href]) => (
            <FeatureLink
              key={href}
              icon={dailyWalkIcons[href] ?? <Sparkles />}
              title={title}
              href={href}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function ServicesBand() {
  return (
    <section className="section services-band" id="services">
      <div className="section-heading">
        <h2>Our Weekly Services</h2>
        <p className="eyebrow section-heading-eyebrow">Gather With Us</p>
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

function PastorPreview() {
  const pastor = textPages["pastor"];
  const excerpt = pastor.paragraphs?.slice(0, 2) ?? [];
  return (
    <section className="section pastor-band">
      <div className="pastor-feature">
        <div className="pastor-photo">
          <Image
            src="/woodriver/juneau-family.jpg"
            alt="Pastor Jon Juneau with his wife Heather and their five children"
            width={900}
            height={900}
            sizes="(max-width: 880px) 100vw, 50vw"
          />
        </div>
        <div className="pastor-bio">
          <p className="eyebrow">{pastor.eyebrow}</p>
          <h2>Meet our pastor</h2>
          <p className="body-copy">{pastor.intro}</p>
          {excerpt.map((paragraph) => (
            <p className="body-copy" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <Link className="button primary inline" href="/pastor">
            Read his full testimony <ArrowRight size={18} />
          </Link>
        </div>
      </div>
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

function EventsPage() {
  return (
    <PageShell eyebrow="Church Calendar" title="Upcoming Events of WRBC" intro="Special services, fellowship meals, seasonal outreach, and church family gatherings.">
      <div className="event-list full">
        {events.map((event) => (
          <EventCard event={event} key={event.title} />
        ))}
      </div>
    </PageShell>
  );
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  const url = "url" in event ? event.url : undefined;
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
      {url ? (
        <a className="button primary inline" href={url} target="_blank" rel="noopener noreferrer">
          Learn more &amp; register <ExternalLink size={14} />
        </a>
      ) : null}
    </article>
  );
}

function ThyWordPage() {
  return (
    <>
      <section className="page-hero with-image">
        <Image
          src="/woodriver/cross-sky.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div>
          <p className="eyebrow">Pastor Jon Juneau</p>
          <h1>Thy Word</h1>
          <p>Thoughts on selected passages from the Word of God — sermons, devotionals, and Bible studies preached at Wood River Baptist Church.</p>
        </div>
      </section>
      <section className="section">
        <div className="thyword-list">
          {thyWordPosts.map((post) => (
            <ThyWordPreviewCard key={thyWordSlug(post)} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

type ThyWordPost = (typeof thyWordPosts)[number];

function ThyWordPreviewCard({ post }: { post: ThyWordPost }) {
  const formattedDate = formatThyWordDate(post.date);
  const author = "author" in post && post.author ? post.author : null;
  return (
    <Link className="thyword-preview" href={`/thy-word-is-a-lamp-unto-my-feet/${thyWordSlug(post)}`}>
      <p className="meta">
        {formattedDate}
        {author ? <span> · {author}</span> : null}
      </p>
      <h2>{post.title}</h2>
      <span className="read-more">Read more <ArrowRight size={14} /></span>
    </Link>
  );
}

function ThyWordPostPage({ post }: { post: ThyWordPost }) {
  const formattedDate = formatThyWordDate(post.date);
  const author = "author" in post && post.author ? post.author : null;
  return (
    <PageShell
      eyebrow={`${formattedDate}${author ? ` · ${author}` : ""}`}
      title={post.title}
      intro={"reference" in post && post.reference ? post.reference : undefined}
    >
      <div className="thyword-post">
        {"audio" in post && post.audio ? (
          <audio className="thyword-audio" controls preload="none" src={post.audio}>
            Your browser does not support the audio element.
          </audio>
        ) : null}
        {"body" in post && post.body ? <p className="body-copy">{post.body}</p> : null}
        <Link className="thyword-back" href="/thy-word-is-a-lamp-unto-my-feet">
          ← Back to all entries
        </Link>
      </div>
    </PageShell>
  );
}

function formatThyWordDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
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
              {section.lessons.map((lesson) => {
                const isPdf = lesson.url.toLowerCase().endsWith(".pdf");
                return (
                  <li key={lesson.url}>
                    <a href={lesson.url} target="_blank" rel="noopener noreferrer">
                      <Download size={15} />
                      <span>{lesson.title}</span>
                      <em>{isPdf ? "PDF" : "DOCX"}</em>
                    </a>
                  </li>
                );
              })}
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
            <div>
              <p>{summary}</p>
              <Link className="meaning-link" href={`/${romansRoadSlug(reference)}`}>
                What does this mean? <ArrowRight size={14} />
              </Link>
            </div>
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
          <Link className="button secondary" href="/connect-with-us">
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
      <BibleSearch />
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

function ConnectPage() {
  const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;
  const directionsHref = `https://maps.google.com/?q=${encodeURIComponent(site.address)}`;
  const phoneHref = `tel:${site.phone.replace(/[^0-9]/g, "")}`;
  const secondaryPhoneHref = `tel:${site.secondaryPhone.replace(/[^0-9]/g, "")}`;
  const emailHref = `mailto:${site.email}`;
  return (
    <PageShell
      eyebrow="Visit"
      title="Connect With Us"
      intro="We would be glad to hear from you, and visitors are welcome at every regular service and special fellowship day."
    >
      <div className="connect-grid">
        <div className="connect-card">
          <h2>Where we meet</h2>
          <p className="connect-address">
            <MapPin size={18} aria-hidden /> {site.address}
          </p>
          <div className="map-frame">
            <iframe
              src={mapsEmbed}
              title="Map to Wood River Baptist Church"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a className="button primary" href={directionsHref} target="_blank" rel="noopener noreferrer">
            Open directions <ArrowRight size={18} />
          </a>
        </div>

        <div className="connect-card">
          <h2>Reach the church</h2>
          <ul className="connect-list">
            <li>
              <Phone size={18} aria-hidden />
              <span>
                <a href={phoneHref}>{site.phone}</a>
                <small> or <a href={secondaryPhoneHref}>{site.secondaryPhone}</a></small>
              </span>
            </li>
            <li>
              <Mail size={18} aria-hidden />
              <a href={emailHref}>{site.email}</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden />
              <span>
                Mailing: {site.mailingAddress}
              </span>
            </li>
          </ul>
          <h2 className="connect-subhead">Follow along</h2>
          <ul className="connect-social">
            <li><a href={site.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={18} aria-hidden /> Facebook</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden /> Instagram</a></li>
            <li><a href={site.podcast} target="_blank" rel="noopener noreferrer"><Mic2 size={18} aria-hidden /> Podcast</a></li>
          </ul>
        </div>
      </div>

      <div className="connect-services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">When we gather</p>
            <h2>Service times</h2>
          </div>
          <Link className="text-link" href="/#services">
            See all services <ArrowRight size={16} />
          </Link>
        </div>
        <ul className="connect-times">
          {services.map((service) => (
            <li key={service.title}>
              <Clock size={18} aria-hidden />
              <div>
                <strong>{service.title}</strong>
                <span>{service.day} · {service.time}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="note">
          First time visiting? You&apos;ll be greeted warmly. Dress is what you&apos;re comfortable in,
          and there&apos;s no expectation to give or sign anything &mdash; just come and worship with us.
        </p>
      </div>
    </PageShell>
  );
}

function GivePage() {
  const tithelyFormId = "072ae9f0-c681-413f-9c3d-306612ba9a35";
  const tithelyEmbedUrl = `https://give.tithe.ly/?formId=${tithelyFormId}`;
  return (
    <PageShell
      eyebrow="Giving"
      title="Support the work of the gospel"
      intro="Your generosity helps Wood River Baptist Church preach the gospel, disciple believers, and minister to families in Rhode Island and beyond."
    >
      <blockquote className="give-verse">
        <p>
          &ldquo;Every man according as he purposeth in his heart, so let him give; not
          grudgingly, or of necessity: for God loveth a cheerful giver.&rdquo;
        </p>
        <cite>2 Corinthians 9:7</cite>
      </blockquote>

      <div className="give-embed">
        <iframe
          src={tithelyEmbedUrl}
          title="Wood River Baptist Church online giving"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="payment"
        />
      </div>

      <p className="note give-fallback">
        Having trouble with the form?{" "}
        <a href={tithelyEmbedUrl} target="_blank" rel="noopener noreferrer">
          Open the giving form in a new tab
        </a>
        .
      </p>
    </PageShell>
  );
}

function RomansVerseDetailPage({ detail }: { detail: (typeof romansRoadDetails)[number] }) {
  return (
    <PageShell eyebrow="The Romans Road" title={detail.reference} intro={detail.verse}>
      <div className="truth-grid">
        {detail.columns.map((col) => (
          <article key={col.heading}>
            <h2>{col.heading}</h2>
            <p>{col.body}</p>
            {col.learnMore ? (
              <a
                className="text-link"
                href={col.learnMore[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More: {col.learnMore[0]} <ExternalLink size={14} />
              </a>
            ) : null}
          </article>
        ))}
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
    <SmartLink className="feature-link" href={href}>
      {icon}
      <span>{title}</span>
      <ArrowRight size={16} />
    </SmartLink>
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
