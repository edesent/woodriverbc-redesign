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
import Script from "next/script";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import { BibleSearch } from "./bible-search";
import { ContactForm } from "./contact-form";
import { MensSteakFryForm } from "./mens-steak-fry-form";
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
import { scriptureMemoryLinks, scriptureMemoryTextPages } from "@/lib/scripture-memory-pages";

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
  if (key === "events/mens-steak-fry") {
    return {
      title: "Men's Steak Fry — Wood River Baptist Church",
      description:
        "Register for the free Men's Steak Fry at Wood River Baptist Church on Friday, July 24, 2026 at 6:00 PM.",
    };
  }
  if (key.startsWith("events/")) return { title: "Wood River Baptist Church" };
  if (key === "thy-word-is-a-lamp-unto-my-feet") return { title: "Thy Word" };
  if (key.startsWith("thy-word-is-a-lamp-unto-my-feet/")) {
    const slug = key.slice("thy-word-is-a-lamp-unto-my-feet/".length);
    const post = thyWordPosts.find((p) => thyWordSlug(p) === slug);
    return {
      title: post?.title ?? "Thy Word",
      description:
        post && "body" in post && post.body
          ? post.body.slice(0, 155)
          : "Listen to Bible preaching and read Christian devotionals from Wood River Baptist Church in Wyoming, Rhode Island.",
      alternates: { canonical: `/${key}` },
      openGraph: {
        type: "article",
        title: post?.title ?? "Thy Word",
        description:
          post && "body" in post && post.body
            ? post.body.slice(0, 155)
            : "Bible preaching and Christian devotionals from Wood River Baptist Church.",
        url: `/${key}`,
      },
    };
  }
  if (key === "the-romans-road") return { title: "The Romans Road" };
  const romansMeta = romansRoadDetails.find((d) => d.slug === key);
  if (romansMeta) return { title: `${romansMeta.reference} — The Romans Road` };
  if (key === "who-is-jesus") return { title: "Who Is Jesus" };
  if (key.startsWith("who-is-jesus/")) {
    const slug = key.slice("who-is-jesus/".length);
    const truth = whoIsJesusTruths.find((item) => item.slug === slug);
    return { title: truth ? `${truth.reference} — Who Is Jesus` : "Who Is Jesus" };
  }
  if (key === "prayer-2") return { title: "Prayer" };
  if (key === "give") return { title: "Give" };
  if (key === "daily-worship") return { title: "Daily Worship" };
  const scriptureMemoryPage = scriptureMemoryTextPages[key];
  if (scriptureMemoryPage) return { title: scriptureMemoryPage.title };
  const page = textPages[key];
  return { title: page?.title ?? "Wood River Baptist Church" };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const rawKey = routeKey(await params);
  if (rawKey === "thy-word-is-a-lamp-unto-my-feet/2022-06-28-one-thing") {
    permanentRedirect("/thy-word-is-a-lamp-unto-my-feet/2026-06-28-one-thing");
  }
  const key = aliases[rawKey] ?? rawKey;
  const query = await searchParams;

  if (
    key === "thy-word-is-a-lamp-unto-my-feet" &&
    query.format === "rss"
  ) {
    permanentRedirect("/podcast.xml");
  }

  if (key === "home") return <HomePage />;
  if (key === "services") redirect("/#services");
  if (key === "find-us" || key === "contact-us") redirect("/connect-with-us");
  if (key === "events") return <EventsPage />;
  if (key === "events/mens-steak-fry") return <MensSteakFryPage />;
  if (key.startsWith("events/")) notFound();
  if (key === "thy-word-is-a-lamp-unto-my-feet") return <ThyWordPage />;
  if (key.startsWith("thy-word-is-a-lamp-unto-my-feet/")) {
    const slug = key.slice("thy-word-is-a-lamp-unto-my-feet/".length);
    const post = thyWordPosts.find((p) => thyWordSlug(p) === slug);
    if (post) return <ThyWordPostPage post={post} />;
    notFound();
  }
  if (key === "devotionals") return <LinkCollection title="Devotionals" intro="A curated set of daily devotional readings to help you and your family to walk with the Lord each day." links={devotionals} icon={<NotebookPen />} compactHero />;
  if (key === "scripture-memory-1") return <SimpleListPage title="Scripture Memory Selections" intro="Selected passages for hiding God's Word in your heart." items={scriptureMemory} icon={<BookOpenText />} links={scriptureMemoryLinks} />;
  if (key === "bible-studies") return <BibleStudiesPage />;
  if (key === "prayer-2") return <PrayerPage />;
  if (key === "christian-radio") return <LinkCollection title="Christian Radio" intro="Music and Bible broadcasting resources for daily listening." links={radioLinks} icon={<Radio />} />;
  if (key === "the-romans-road") return <RomansRoadPage />;
  if (key === "who-is-jesus") return <WhoIsJesusPage />;
  if (key.startsWith("who-is-jesus/")) {
    const slug = key.slice("who-is-jesus/".length);
    const truth = whoIsJesusTruths.find((item) => item.slug === slug);
    if (truth) return <WhoIsJesusScripturePage truth={truth} />;
  }
  if (key === "the-bible") return <BibleSearchPage />;
  if (key === "bible-reading-tracker") return <BibleTrackerPage />;
  if (key === "daily-worship") return <DailyWorshipPage />;
  const scriptureMemoryPage = scriptureMemoryTextPages[key];
  if (scriptureMemoryPage) return <TextPage page={scriptureMemoryPage} pageKey={key} />;
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

function parseEventStartDate(event: (typeof events)[number]): Date {
  const segment = event.date.split(/[–-]/)[0].trim();
  const parsed = new Date(segment);
  return isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

function isEventPast(event: (typeof events)[number]): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parseEventStartDate(event) < today;
}

function getUpcomingEvents() {
  return [...events]
    .filter((e) => !isEventPast(e))
    .sort((a, b) => parseEventStartDate(a).getTime() - parseEventStartDate(b).getTime());
}

function getPastEvents() {
  return [...events]
    .filter((e) => isEventPast(e))
    .sort((a, b) => parseEventStartDate(b).getTime() - parseEventStartDate(a).getTime());
}

function EventsPreview() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  const previewEvents: { event: (typeof events)[number]; isPast: boolean }[] = [
    ...upcoming.slice(0, 3).map((e) => ({ event: e, isPast: false })),
  ];
  if (previewEvents.length < 3) {
    const needed = 3 - previewEvents.length;
    past.slice(0, needed).forEach((e) => previewEvents.push({ event: e, isPast: true }));
  }

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
        {previewEvents.map(({ event, isPast }) => (
          <EventCard event={event} key={event.title} isPast={isPast} />
        ))}
      </div>
    </section>
  );
}

function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <PageShell eyebrow="Church Calendar" title="Upcoming Events of WRBC" intro="Special services, fellowship meals, seasonal outreach, and church family gatherings.">
      <div className="event-list full">
        {upcoming.map((event) => (
          <EventCard event={event} key={event.title} />
        ))}
      </div>
      {past.length > 0 && (
        <div className="past-events-section">
          <h2 className="past-events-heading">Past Events</h2>
          <div className="event-list full">
            {past.map((event) => (
              <EventCard event={event} key={event.title} isPast />
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}

function MensSteakFryPage() {
  const directionsHref = `https://maps.google.com/?q=${encodeURIComponent(site.address)}`;
  const phoneHref = `tel:${site.secondaryPhone.replace(/[^0-9]/g, "")}`;

  return (
    <PageShell
      eyebrow="Men's Fellowship"
      title="Men's Steak Fry"
      intro="Enjoy a free steak dinner and learn practical ways to maintain your small engines. Men and their guests are welcome."
    >
      <div className="steak-fry-layout">
        <section className="steak-fry-details">
          <div className="button-row" style={{ marginTop: 0, marginBottom: "18px" }}>
            <a
              className="button primary"
              href="https://campaigns.tithely.com/60798-wood-river-baptist-church/living-nativity-animal-pens"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Event but Help With Our New Living Nativity Animal Pens! <ExternalLink size={16} />
            </a>
          </div>
          <h2>Friday, July 24, 2026</h2>
          <p>
            Join the men of Wood River Baptist Church for a steak dinner, fellowship,
            and a practical small-engine maintenance presentation.
          </p>

          <ul className="steak-fry-facts">
            <li>
              <Clock size={20} aria-hidden />
              <span>6:00 PM</span>
            </li>
            <li>
              <MapPin size={20} aria-hidden />
              <span>
                <a href={directionsHref} target="_blank" rel="noopener noreferrer">
                  {site.address}
                </a>
              </span>
            </li>
            <li>
              <CalendarDays size={20} aria-hidden />
              <span>Please RSVP by Tuesday, July 21.</span>
            </li>
            <li>
              <Phone size={20} aria-hidden />
              <span>
                Questions? Text or call <a href={phoneHref}>{site.secondaryPhone}</a>.
              </span>
            </li>
          </ul>

          <div className="steak-fry-workshop">
            <strong>Learn how to maintain your small engines</strong>
            <p>
              The evening will include useful instruction for caring for lawn mowers,
              trimmers, and other small-engine equipment.
            </p>
          </div>
        </section>

        <section className="steak-fry-registration">
          <p className="eyebrow">RSVP by July 21</p>
          <h2>Sign up for the Steak Fry</h2>
          <p>
            Register yourself and list the names of any guests you plan to bring. Please
            also tell us about any dietary needs so we can prepare for you.
          </p>
          <MensSteakFryForm />
        </section>
      </div>

    </PageShell>
  );
}

function EventCard({ event, isPast = false }: { event: (typeof events)[number]; isPast?: boolean }) {
  const url = "url" in event ? event.url : undefined;
  return (
    <article className={`event-card${isPast ? " event-card--past" : ""}`}>
      {isPast && <div className="event-card__past-overlay">This event has passed</div>}
      <div className="event-date">
        <CalendarDays size={20} />
        <span>{event.date}</span>
      </div>
      <h3>{event.title}</h3>
      <p className="event-time">
        <Clock size={16} /> {event.time}
      </p>
      <p>{event.description}</p>
      {url && !isPast ? (
        url.startsWith("/") ? (
          <Link className="button primary inline" href={url}>
            Learn more &amp; register <ArrowRight size={14} />
          </Link>
        ) : (
          <a className="button primary inline" href={url} target="_blank" rel="noopener noreferrer">
            Learn more &amp; register <ExternalLink size={14} />
          </a>
        )
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
          <div className="button-row">
            <a className="button secondary" href="/podcast.xml">
              Podcast RSS Feed
            </a>
          </div>
          <p className="note">
            To subscribe, copy the RSS feed link and paste it into an RSS reader or a podcast app that accepts RSS feeds.
          </p>
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
  compactHero = false,
}: {
  title: string;
  intro: string;
  links: readonly (readonly [string, string])[];
  icon: React.ReactNode;
  compactHero?: boolean;
}) {
  return (
    <PageShell title={title} intro={intro} compactHero={compactHero}>
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
  links = {},
}: {
  title: string;
  intro: string;
  items: readonly string[];
  icon: React.ReactNode;
  links?: Record<string, string>;
}) {
  return (
    <PageShell title={title} intro={intro}>
      <div className="memory-grid">
        {items.map((item) => {
          const href = links[item];
          const content = (
            <>
              {icon}
              <span>{item}</span>
              {href ? <ArrowRight size={16} /> : null}
            </>
          );

          return href ? (
            <Link className="memory-item memory-link" href={href} key={item}>
              {content}
            </Link>
          ) : (
            <div className="memory-item" key={item}>
              {content}
            </div>
          );
        })}
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

const whoIsJesusTruths = [
  {
    truth: "He is eternal God, Creator of all things",
    reference: "John 1:1, 3",
    slug: "eternal-god-creator",
    verses: [
      ["John 1:1", "In the beginning was the Word, and the Word was with God, and the Word was God."],
      ["John 1:3", "All things were made by him; and without him was not any thing made that was made."],
    ],
  },
  {
    truth: "He became a man to reveal the Father to us",
    reference: "John 1:14",
    slug: "word-made-flesh",
    verses: [
      ["John 1:14", "And the Word was made flesh, and dwelt among us, and we beheld his glory, the glory as of the only begotten of the Father, full of grace and truth."],
    ],
  },
  {
    truth: "He became the final sacrifice for sin",
    reference: "John 1:29",
    slug: "lamb-of-god",
    verses: [
      ["John 1:29", "The next day John seeth Jesus coming unto him, and saith, Behold the Lamb of God, which taketh away the sin of the world."],
    ],
  },
  {
    truth: "He predicted that He would rise from the dead",
    reference: "John 2:19, 21",
    slug: "resurrection-predicted",
    verses: [
      ["John 2:19", "Jesus answered and said unto them, Destroy this temple, and in three days I will raise it up."],
      ["John 2:21", "But he spake of the temple of his body."],
    ],
  },
  {
    truth: "He died that those who trust Him will have eternal life",
    reference: "John 3:16",
    slug: "eternal-life",
    verses: [
      ["John 3:16", "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."],
    ],
  },
  {
    truth: "Those who trust Him find spiritual satisfaction",
    reference: "John 4:14",
    slug: "living-water",
    verses: [
      ["John 4:14", "But whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him will be in him a well of water springing up into everlasting life."],
    ],
  },
  {
    truth: "Those who trust Him are passed from death unto life",
    reference: "John 5:24",
    slug: "death-unto-life",
    verses: [
      ["John 5:24", "Verily, verily, I say unto you, He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life."],
    ],
  },
  {
    truth: "Those who come to Him will not be cast out",
    reference: "John 6:37",
    slug: "not-cast-out",
    verses: [
      ["John 6:37", "All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out."],
    ],
  },
] as const;

function WhoIsJesusPage() {
  return (
    <PageShell title="Who Is Jesus?" intro="It is the most important question you have to answer for yourself.">
      <div className="truth-grid">
        {whoIsJesusTruths.map((item) => (
          <Link className="resource-link" href={`/who-is-jesus/${item.slug}`} key={item.truth}>
            <div>
              <h2>{item.truth}</h2>
              <p>{item.reference}</p>
            </div>
            <ArrowRight size={16} />
          </Link>
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

function WhoIsJesusScripturePage({ truth }: { truth: (typeof whoIsJesusTruths)[number] }) {
  return (
    <PageShell eyebrow="Who Is Jesus?" title={truth.truth} intro={truth.reference}>
      <div className="scripture-passage">
        {truth.verses.map(([reference, verse]) => (
          <p className="body-copy" key={reference}>
            <strong>{reference}</strong> {verse}
          </p>
        ))}
      </div>
      <Link className="text-link" href="/who-is-jesus">
        Back to Who Is Jesus? <ArrowRight size={16} />
      </Link>
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
          src="https://give.tithe.ly/?formId=072ae9f0-c681-413f-9c3d-306612ba9a35"
          title="Wood River Baptist Church online giving"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="payment"
        />
      </div>
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

function renderScriptureParagraph(paragraph: string, isScripturePassage?: boolean) {
  if (!isScripturePassage) return paragraph;

  const match = paragraph.match(/^((?:(?:[1-3]|I{1,3})\s+)?[A-Z][A-Za-z]+(?:\s+(?:of|the|[A-Z][A-Za-z]+))*\s+\d+:\d+(?:[-–]\d+)?(?:,\s*\d+)?|\d+)\s+(.*)$/);
  if (!match) return paragraph;

  return (
    <>
      <strong>{match[1]}</strong> {match[2]}
    </>
  );
}

function TextPage({ page, pageKey }: { page: (typeof textPages)[string]; pageKey: string }) {
  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.image}>
      {pageKey === "services" ? <ServicesBand /> : null}
      {page.paragraphs?.length ? (
        <div className={page.bodyClass}>
          {page.paragraphs.map((paragraph) =>
            paragraph.startsWith("SECTION:") ? (
              <h2 className="scripture-section-heading" key={paragraph}>
                {paragraph.slice("SECTION:".length)}
              </h2>
            ) : (
              <p className="body-copy" key={paragraph}>
                {renderScriptureParagraph(paragraph, page.bodyClass === "scripture-passage")}
              </p>
            )
          )}
        </div>
      ) : null}
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
  compactHero = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  compactHero?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={`page-hero ${image ? "with-image" : ""} ${compactHero ? "compact" : ""}`}>
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
