"use client";

import { ExternalLink, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type Verse = { book_name: string; chapter: number; verse: number; text: string };
type BibleApiResponse = {
  reference: string;
  verses: Verse[];
  text: string;
  translation_name: string;
};

type Result =
  | { kind: "verse"; data: BibleApiResponse; query: string }
  | { kind: "iframe"; query: string }
  | { kind: "error"; message: string };

const REFERENCE_PATTERN = /^[1-3]?\s*[A-Za-z]+\s+\d+(?::\d+(?:-\d+)?)?$/;

function blbSearchUrl(query: string): string {
  return `https://www.blueletterbible.org/search/search.cfm?Criteria=${encodeURIComponent(query)}&t=KJV`;
}

export function BibleSearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setLoading(true);
    setResult(null);

    if (REFERENCE_PATTERN.test(q)) {
      try {
        const url = `https://bible-api.com/${encodeURIComponent(q)}?translation=kjv`;
        const res = await fetch(url);
        if (res.ok) {
          const data: BibleApiResponse = await res.json();
          setResult({ kind: "verse", data, query: q });
          setLoading(false);
          return;
        }
      } catch {
        // fall through to iframe
      }
    }
    setResult({ kind: "iframe", query: q });
    setLoading(false);
  }

  return (
    <>
      <form className="search-panel" onSubmit={onSubmit}>
        <label htmlFor="criteria">Search Scripture</label>
        <div>
          <input
            id="criteria"
            name="Criteria"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. John 3:16 or grace"
            autoComplete="off"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Searching…" : (<>Search <Send size={16} /></>)}
          </button>
        </div>
        <p>Verse references render inline. Keyword searches open Blue Letter Bible below.</p>
      </form>

      {result?.kind === "verse" && (
        <div className="bible-result">
          <h2>{result.data.reference}</h2>
          <div className="bible-passage">
            {result.data.verses.map((v) => (
              <p key={`${v.book_name}-${v.chapter}-${v.verse}`}>
                <sup>{v.verse}</sup>
                {v.text.replace(/\s+/g, " ").trim()}
              </p>
            ))}
          </div>
          <p className="bible-meta">{result.data.translation_name}</p>
          <a
            className="text-link"
            href={blbSearchUrl(result.data.reference)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Study on Blue Letter Bible <ExternalLink size={16} />
          </a>
        </div>
      )}

      {result?.kind === "iframe" && (
        <div className="bible-iframe">
          <iframe
            src={blbSearchUrl(result.query)}
            title={`Blue Letter Bible search results for ${result.query}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="note">
            Results too cramped here?{" "}
            <a href={blbSearchUrl(result.query)} target="_blank" rel="noopener noreferrer">
              Open on Blue Letter Bible <ExternalLink size={14} />
            </a>
          </p>
        </div>
      )}
    </>
  );
}
