import { site, thyWordPosts, thyWordSlug } from "@/lib/site";

const SITE_URL = "https://www.woodriverbc.org";
const FEED_URL = `${SITE_URL}/podcast.xml`;
const SHOW_URL = `${SITE_URL}/thy-word-is-a-lamp-unto-my-feet`;
const ARTWORK_URL = `${SITE_URL}/wood-river-baptist-church.jpg`;
const SHOW_DESCRIPTION =
  "Sermons, Bible studies, and devotional messages from Wood River Baptist Church in Wyoming, Rhode Island.";

export const dynamic = "force-dynamic";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function cdata(value: string): string {
  return value.replace(/]]>/g, "]]\]\]><![CDATA[>");
}

function mediaType(url: string): string {
  const pathname = new URL(url).pathname.toLowerCase();
  if (pathname.endsWith(".m4a") || pathname.endsWith(".mp4")) return "audio/mp4";
  if (pathname.endsWith(".wav")) return "audio/wav";
  if (pathname.endsWith(".aac")) return "audio/aac";
  return "audio/mpeg";
}

function publicationDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toUTCString();
}

async function getMediaLength(url: string): Promise<number | null> {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      next: { revalidate: 86400 },
    });

    if (!response.ok) return null;

    const value = response.headers.get("content-length");
    if (!value) return null;

    const length = Number(value);
    return Number.isFinite(length) && length > 0 ? length : null;
  } catch {
    return null;
  }
}

async function buildEpisodeXml() {
  const audioPosts = thyWordPosts
    .flatMap((post) => {
      if (!("audio" in post) || !post.audio) return [];

      return [
        {
          title: post.title,
          date: post.date,
          author: "author" in post && post.author ? post.author : "Pastor Jon Juneau",
          reference: "reference" in post && post.reference ? post.reference : undefined,
          body: "body" in post && post.body ? post.body : undefined,
          audio: post.audio,
          slug: thyWordSlug(post),
        },
      ];
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  const episodes = await Promise.all(
    audioPosts.map(async (post) => {
      const length = await getMediaLength(post.audio);
      if (!length) return null;

      const pageUrl = `${SHOW_URL}/${post.slug}`;
      const description =
        post.body ??
        (post.reference
          ? `A sermon from ${post.reference} preached at Wood River Baptist Church.`
          : "A sermon preached at Wood River Baptist Church.");

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <itunes:title>${escapeXml(post.title)}</itunes:title>
      <link>${escapeXml(pageUrl)}</link>
      <guid isPermaLink="false">wrbc:thy-word:${escapeXml(post.slug)}</guid>
      <pubDate>${publicationDate(post.date)}</pubDate>
      <description>${escapeXml(description)}</description>
      <content:encoded><![CDATA[<p>${cdata(description)}</p>]]></content:encoded>
      <itunes:author>${escapeXml(post.author)}</itunes:author>
      <itunes:summary>${escapeXml(description)}</itunes:summary>
      <itunes:explicit>false</itunes:explicit>
      <itunes:episodeType>full</itunes:episodeType>
      <enclosure url="${escapeXml(post.audio)}" length="${length}" type="${mediaType(post.audio)}" />
    </item>`;
    }),
  );

  return episodes.filter((episode): episode is string => Boolean(episode)).join("");
}

export async function GET() {
  const episodes = await buildEpisodeXml();
  const datedAudioPosts = thyWordPosts.filter(
    (post) => "audio" in post && Boolean(post.audio),
  );
  const latestDate = datedAudioPosts
    .map((post) => post.date)
    .sort((a, b) => b.localeCompare(a))[0];
  const lastBuildDate = latestDate
    ? publicationDate(latestDate)
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${escapeXml(SHOW_URL)}</link>
    <atom:link href="${escapeXml(FEED_URL)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SHOW_DESCRIPTION)}</description>
    <language>en-us</language>
    <copyright>&#xA9; ${new Date().getUTCFullYear()} ${escapeXml(site.name)}</copyright>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Wood River Baptist Church Website</generator>
    <managingEditor>${escapeXml(site.email)} (Pastor Jon Juneau)</managingEditor>
    <webMaster>${escapeXml(site.email)} (Pastor Jon Juneau)</webMaster>
    <image>
      <url>${escapeXml(ARTWORK_URL)}</url>
      <title>${escapeXml(site.name)}</title>
      <link>${escapeXml(SHOW_URL)}</link>
    </image>
    <itunes:author>Pastor Jon Juneau</itunes:author>
    <itunes:summary>${escapeXml(SHOW_DESCRIPTION)}</itunes:summary>
    <itunes:type>episodic</itunes:type>
    <itunes:explicit>false</itunes:explicit>
    <itunes:block>false</itunes:block>
    <itunes:complete>false</itunes:complete>
    <itunes:owner>
      <itunes:name>Pastor Jon Juneau</itunes:name>
      <itunes:email>${escapeXml(site.email)}</itunes:email>
    </itunes:owner>
    <itunes:image href="${escapeXml(ARTWORK_URL)}" />
    <itunes:category text="Religion &amp; Spirituality">
      <itunes:category text="Christianity" />
    </itunes:category>${episodes}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
