import { put } from '@vercel/blob';
import { readFile, writeFile } from 'node:fs/promises';

const data = JSON.parse(await readFile('/tmp/thyword-all.json', 'utf8'));

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60);
}

const results = [];
let done = 0;
const total = data.reduce((a, e) => a + e.audio_urls.length, 0);

for (const entry of data) {
  const blobUrls = [];
  for (let i = 0; i < entry.audio_urls.length; i++) {
    const src = entry.audio_urls[i];
    const ext = (src.match(/\.(mp3|m4a|wav)(?:\?|$)/i)?.[1] ?? 'mp3').toLowerCase();
    const slug = slugify(entry.title || 'untitled');
    const suffix = entry.audio_urls.length > 1 ? `-${i + 1}` : '';
    const pathname = `thy-word/${entry.date || 'undated'}-${slug}${suffix}.${ext}`;

    process.stdout.write(`[${++done}/${total}] ${pathname} ... `);
    try {
      const r = await fetch(src, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!r.ok) throw new Error(`fetch ${r.status}`);
      const buf = Buffer.from(await r.arrayBuffer());
      const blob = await put(pathname, buf, {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: ext === 'm4a' ? 'audio/mp4' : `audio/${ext}`,
      });
      blobUrls.push(blob.url);
      console.log(`✓ ${(buf.length/1024/1024).toFixed(1)}MB`);
    } catch (err) {
      console.log(`✗ ${err.message}`);
      blobUrls.push(null);
    }
  }
  results.push({ ...entry, blob_urls: blobUrls });
}

await writeFile('/tmp/thyword-with-blob.json', JSON.stringify(results, null, 2));
console.log(`\nDone. Successful: ${results.flatMap(r => r.blob_urls).filter(Boolean).length}/${total}`);
