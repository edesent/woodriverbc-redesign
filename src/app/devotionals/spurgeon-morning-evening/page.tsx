import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spurgeon's Morning and Evening Devotional | Wood River Baptist Church",
  description: "Read Spurgeon's Morning and Evening devotional through Wood River Baptist Church.",
  alternates: { canonical: "/devotionals/spurgeon-morning-evening" },
};

export default function MorningEveningPage() {
  return (
    <>
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">Daily Readings by C. H. Spurgeon</p>
          <h1>Morning and Evening</h1>
          <p>
            A daily devotional resource with morning and evening meditations from
            Charles Haddon Spurgeon.
          </p>
        </div>
      </section>

      <section className="section page-content">
        <article className="scripture-passage">
          <p className="body-copy">
            Use the embedded devotional below to read today’s Morning and Evening
            selections. This page is being hosted here on the Wood River Baptist
            Church website while preserving the public-domain devotional source.
          </p>
          <p className="body-copy">
            <Link className="meaning-link" href="https://spurgeonsmorningandevening.org/">
              Open Morning and Evening in a new tab
            </Link>
          </p>
        </article>

        <div className="bible-iframe">
          <iframe
            title="Spurgeon Morning and Evening devotional"
            src="https://spurgeonsmorningandevening.org/"
            loading="lazy"
          />
          <p className="note">
            If the embedded devotional does not display on your device, use the
            button above to open it directly.
          </p>
        </div>
      </section>
    </>
  );
}
