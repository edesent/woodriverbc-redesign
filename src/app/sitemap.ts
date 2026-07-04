import type { MetadataRoute } from "next";
import { romansRoadDetails, thyWordPosts, thyWordSlug } from "@/lib/site";

const routes = [
  "",
  "give",
  "events",
  "events/mens-steak-fry",
  "thy-word-is-a-lamp-unto-my-feet",
  "who-is-jesus",
  "the-romans-road",
  "devotionals",
  "devotionals/faiths-checkbook",
  "devotionals/spurgeon-morning-evening",
  "scripture-memory-1",
  "bible-reading-tracker",
  "bible-studies",
  "missions-prayer-email-signup",
  "prayer-2",
  "prayer",
  "ask-a-question",
  "opportunities-to-serve",
  "christian-radio",
  "the-bible",
  "about",
  "connect-with-us",
  "pastor",
  "covenant",
  "mission",
  "directory",
  "daily-worship",
  "worship",
  "new-page-1",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.woodriverbc.org";
  const staticEntries = routes.map((route) => ({
    url: `${base}/${route}`.replace(/\/$/, ""),
    lastModified: new Date(),
  }));
  const thyWordEntries = thyWordPosts.map((post) => ({
    url: `${base}/thy-word-is-a-lamp-unto-my-feet/${thyWordSlug(post)}`,
    lastModified: new Date(`${post.date}T12:00:00Z`),
  }));
  const romansEntries = romansRoadDetails.map((d) => ({
    url: `${base}/${d.slug}`,
    lastModified: new Date(),
  }));
  return [...staticEntries, ...thyWordEntries, ...romansEntries];
}
