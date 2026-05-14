import type { MetadataRoute } from "next";

const routes = [
  "",
  "events",
  "thy-word-is-a-lamp-unto-my-feet",
  "who-is-jesus",
  "the-romans-road",
  "devotionals",
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
  "find-us",
  "contact-us",
  "pastor",
  "covenant",
  "mission",
  "directory",
  "daily-worship",
  "worship",
  "new-page-1",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://woodriverbc-redesign.local";
  return routes.map((route) => ({
    url: `${base}/${route}`.replace(/\/$/, ""),
    lastModified: new Date(),
  }));
}
