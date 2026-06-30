import { createHash } from "node:crypto";
import { notFound } from "next/navigation";
import { OneThingUploadForm } from "./upload-form";

const ACCESS_KEY_HASH = "d4d9fd708c8b8c3c7734829bff66cc7174ac39fdfac606679986af8a39efa2bc";

function isValidAccessKey(key: string | undefined): key is string {
  if (!key) return false;
  return createHash("sha256").update(key).digest("hex") === ACCESS_KEY_HASH;
}

export default async function UploadOneThingPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  if (!isValidAccessKey(key)) notFound();

  return (
    <>
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">Thy Word</p>
          <h1>Upload “One Thing”</h1>
          <p>Secure audio upload for Wood River Baptist Church.</p>
        </div>
      </section>
      <section className="section page-content">
        <OneThingUploadForm accessKey={key} />
      </section>
    </>
  );
}
