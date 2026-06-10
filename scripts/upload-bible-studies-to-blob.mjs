import { put } from '@vercel/blob';
import { writeFile } from 'node:fs/promises';

// All Bible Studies PDFs and DOCX from woodriverbc.org/bible-studies
// Format: [oldPath, blobPathname]
const FILES = [
  // Psalms
  ['/s/Psalm-33.docx', 'bible-studies/psalms/psalm-33.docx'],
  ['/s/Psalm78_1-8.docx', 'bible-studies/psalms/psalm-78_1-8.docx'],
  ['/s/Psalm-45.docx', 'bible-studies/psalms/psalm-45.docx'],
  ['/s/Psalm-42.docx', 'bible-studies/psalms/psalm-42.docx'],
  ['/s/Psalm-37.docx', 'bible-studies/psalms/psalm-37.docx'],
  ['/s/Psalm-32.docx', 'bible-studies/psalms/psalm-32.docx'],
  ['/s/Psalm-27.docx', 'bible-studies/psalms/psalm-27.docx'],
  // 1 Corinthians
  ['/s/1-Cor-1_1-8.docx', 'bible-studies/1-corinthians/1-cor-1_1-8.docx'],
  ['/s/1-Cor-1_9-16.docx', 'bible-studies/1-corinthians/1-cor-1_9-16.docx'],
  ['/s/1-Cor-1_17-25.docx', 'bible-studies/1-corinthians/1-cor-1_17-25.docx'],
  ['/s/1-Cor-1_26-32.docx', 'bible-studies/1-corinthians/1-cor-1_26-32.docx'],
  ['/s/1-Cor-2_1-6.docx', 'bible-studies/1-corinthians/1-cor-2_1-6.docx'],
  ['/s/1-Cor-2_7-16.docx', 'bible-studies/1-corinthians/1-cor-2_7-16.docx'],
  ['/s/1-Cor-3_1-11.docx', 'bible-studies/1-corinthians/1-cor-3_1-11.docx'],
  ['/s/1-Cor-3_12-26.docx', 'bible-studies/1-corinthians/1-cor-3_12-26.docx'],
  ['/s/1-Cor-4_1-5.docx', 'bible-studies/1-corinthians/1-cor-4_1-5.docx'],
  ['/s/1-Cor-4_6-13.docx', 'bible-studies/1-corinthians/1-cor-4_6-13.docx'],
  ['/s/1-Cor-4_14-21.docx', 'bible-studies/1-corinthians/1-cor-4_14-21.docx'],
  ['/s/1-Cor-5_1-13.docx', 'bible-studies/1-corinthians/1-cor-5_1-13.docx'],
  ['/s/1-Cor-6.docx', 'bible-studies/1-corinthians/1-cor-6.docx'],
  ['/s/1-Cor-7_1-7.docx', 'bible-studies/1-corinthians/1-cor-7_1-7.docx'],
  ['/s/1-Cor-7_8-16.docx', 'bible-studies/1-corinthians/1-cor-7_8-16.docx'],
  ['/s/1-Cor-7_18-24.docx', 'bible-studies/1-corinthians/1-cor-7_18-24.docx'],
  ['/s/1-Cor-7_25-40.docx', 'bible-studies/1-corinthians/1-cor-7_25-40.docx'],
  ['/s/1-Cor-8_1-13.docx', 'bible-studies/1-corinthians/1-cor-8_1-13.docx'],
  // Galatians
  ['/s/Galatians-5_1-12.docx', 'bible-studies/galatians/galatians-5_1-12.docx'],
  ['/s/Galatians-4_17-31.docx', 'bible-studies/galatians/galatians-4_17-31.docx'],
  ['/s/Galatians-4_8-16.docx', 'bible-studies/galatians/galatians-4_8-16.docx'],
  ['/s/Galatians-4_1-7.docx', 'bible-studies/galatians/galatians-4_1-7.docx'],
  ['/s/Galatians-3_19-29.docx', 'bible-studies/galatians/galatians-3_19-29.docx'],
  ['/s/Galatians-3_10-19.docx', 'bible-studies/galatians/galatians-3_10-19.docx'],
  // I John
  ['/s/Knowing-God.pdf', 'bible-studies/i-john/knowing-god.pdf'],
  ['/s/The-True-Light-Now-Shineth.pdf', 'bible-studies/i-john/the-true-light-now-shineth.pdf'],
  ['/s/We-Know-Him.pdf', 'bible-studies/i-john/we-know-him.pdf'],
  ['/s/We-Have-An-Advocate.pdf', 'bible-studies/i-john/we-have-an-advocate.pdf'],
  ['/s/God-Is-Light.pdf', 'bible-studies/i-john/god-is-light.pdf'],
  ['/s/The-Word-of-Life.pdf', 'bible-studies/i-john/the-word-of-life.pdf'],
  // Habakkuk
  ['/s/A-Man-With-A-Burden-qol1.pdf', 'bible-studies/habakkuk/a-man-with-a-burden.pdf'],
  ['/s/The-Question-All-People-Ask-And-No-One-Can-Answer.pdf', 'bible-studies/habakkuk/the-question-all-people-ask.pdf'],
  ['/s/Remember-God-Is-At-Work-yu6f.pdf', 'bible-studies/habakkuk/remember-god-is-at-work.pdf'],
  ['/s/The-God-I-Know-ghd0.pdf', 'bible-studies/habakkuk/the-god-i-know.pdf'],
  ['/s/Living-By-Faith.pdf', 'bible-studies/habakkuk/living-by-faith.pdf'],
  ['/s/All-We-Want-Is-More.pdf', 'bible-studies/habakkuk/all-we-want-is-more.pdf'],
  ['/s/When-Stones-Speak-And-Timbers-Answer.pdf', 'bible-studies/habakkuk/when-stones-speak-and-timbers-answer.pdf'],
  ['/s/Calling-On-Gods-that-cannot-answer.pdf', 'bible-studies/habakkuk/calling-on-gods-that-cannot-answer.pdf'],
  ['/s/The-Heart-Cry-for-Revival-f7lx.pdf', 'bible-studies/habakkuk/the-heart-cry-for-revival.pdf'],
  ['/s/The-Fear-of-the-Lord.pdf', 'bible-studies/habakkuk/the-fear-of-the-lord.pdf'],
  ['/s/Rejoicing-in-the-Lord.pdf', 'bible-studies/habakkuk/rejoicing-in-the-lord.pdf'],
];

const BASE = 'https://www.woodriverbc.org';
const mapping = {};
let done = 0;

for (const [oldPath, blobPathname] of FILES) {
  const src = `${BASE}${oldPath}`;
  const isPdf = oldPath.toLowerCase().endsWith('.pdf');
  const contentType = isPdf
    ? 'application/pdf'
    : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  process.stdout.write(`[${++done}/${FILES.length}] ${blobPathname} ... `);
  try {
    const r = await fetch(src, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) throw new Error(`fetch ${r.status}`);
    const buf = Buffer.from(await r.arrayBuffer());
    const blob = await put(blobPathname, buf, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType,
    });
    mapping[oldPath] = blob.url;
    console.log(`✓ ${(buf.length / 1024).toFixed(0)}KB`);
  } catch (err) {
    console.log(`✗ ${err.message}`);
    mapping[oldPath] = null;
  }
}

await writeFile('/tmp/bible-studies-blob-map.json', JSON.stringify(mapping, null, 2));
const ok = Object.values(mapping).filter(Boolean).length;
console.log(`\nDone. Successful: ${ok}/${FILES.length}`);
console.log(`Mapping written to /tmp/bible-studies-blob-map.json`);
