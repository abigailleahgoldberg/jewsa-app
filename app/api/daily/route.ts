import { NextResponse } from "next/server";
import { getDailyVerse } from "../../data/verses";

export const revalidate = 3600; // Cache 1 hour

export function GET() {
  const verse = getDailyVerse();
  return NextResponse.json(verse, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
