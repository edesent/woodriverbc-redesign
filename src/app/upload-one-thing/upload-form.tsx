"use client";

import type { PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import Link from "next/link";
import { useRef, useState } from "react";

const AUDIO_PATHNAME = "thy-word/2022-06-28-one-thing.m4a";
const SERMON_HREF = "/thy-word-is-a-lamp-unto-my-feet/2026-06-28-one-thing";

export function OneThingUploadForm({ accessKey }: { accessKey: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState(0);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  return (
    <div style={{ maxWidth: 720 }}>
      <p>
        Select the sermon recording and upload it. The file will be saved as the audio
        for the <strong>One Thing</strong> entry in the Thy Word section.
      </p>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const file = inputRef.current?.files?.[0];
          if (!file) return;

          setError("");
          setBlob(null);
          setProgress(0);
          setUploading(true);

          try {
            const uploadedBlob = await upload(AUDIO_PATHNAME, file, {
              access: "public",
              handleUploadUrl: "/api/upload-one-thing",
              clientPayload: JSON.stringify({ key: accessKey }),
              multipart: true,
              onUploadProgress: ({ percentage }) => setProgress(Math.round(percentage)),
            });
            setBlob(uploadedBlob);
          } catch (uploadError) {
            setError(uploadError instanceof Error ? uploadError.message : "The upload failed.");
          } finally {
            setUploading(false);
          }
        }}
      >
        <input
          ref={inputRef}
          name="file"
          type="file"
          accept=".m4a,.mp3,audio/mp4,audio/x-m4a,audio/mpeg"
          required
          disabled={uploading}
          style={{ display: "block", margin: "22px 0" }}
        />
        <button className="button primary" type="submit" disabled={uploading}>
          {uploading ? `Uploading… ${progress}%` : "Upload sermon audio"}
        </button>
      </form>

      {uploading ? (
        <div style={{ marginTop: 18 }}>
          <div
            aria-label={`Upload progress: ${progress}%`}
            style={{ height: 10, borderRadius: 999, overflow: "hidden", background: "#e5e7eb" }}
          >
            <div style={{ width: `${progress}%`, height: "100%", background: "currentColor" }} />
          </div>
        </div>
      ) : null}

      {error ? <p style={{ marginTop: 18 }}><strong>Upload error:</strong> {error}</p> : null}

      {blob ? (
        <div className="callout" style={{ marginTop: 28 }}>
          <h2>Upload complete</h2>
          <p>The audio is now connected to the One Thing sermon page.</p>
          <Link className="button primary inline" href={SERMON_HREF}>
            Open the sermon page
          </Link>
        </div>
      ) : null}
    </div>
  );
}
