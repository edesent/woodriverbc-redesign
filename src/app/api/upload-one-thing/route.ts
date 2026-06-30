import { createHash } from "node:crypto";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

const EXPECTED_PATHNAME = "thy-word/2022-06-28-one-thing.m4a";
const ACCESS_KEY_HASH = "d4d9fd708c8b8c3c7734829bff66cc7174ac39fdfac606679986af8a39efa2bc";

function isValidAccessKey(key: unknown): key is string {
  if (typeof key !== "string") return false;
  return createHash("sha256").update(key).digest("hex") === ACCESS_KEY_HASH;
}

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const payload = JSON.parse(clientPayload || "{}") as { key?: unknown };

        if (!isValidAccessKey(payload.key)) {
          throw new Error("This upload link is not authorized.");
        }

        if (pathname !== EXPECTED_PATHNAME) {
          throw new Error("This uploader only accepts the One Thing sermon audio.");
        }

        return {
          allowedContentTypes: [
            "audio/mp4",
            "audio/x-m4a",
            "audio/m4a",
            "audio/mpeg",
            "application/octet-stream",
          ],
          maximumSizeInBytes: 60 * 1024 * 1024,
          addRandomSuffix: false,
          allowOverwrite: true,
          tokenPayload: JSON.stringify({ sermon: "one-thing" }),
        };
      },
      onUploadCompleted: async () => {},
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed." },
      { status: 400 },
    );
  }
}
