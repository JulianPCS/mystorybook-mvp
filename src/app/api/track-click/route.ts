import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { book_slug, page } = body;

    if (!book_slug) {
      return NextResponse.json({ error: "Missing book_slug" }, { status: 400 });
    }

    const { error } = await supabase.from("page_events").insert({
      event_type: "cta_click",
      book_slug: book_slug.trim(),
      page: page || "unknown",
    });

    if (error) {
      console.error("Supabase track-click error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Track-click error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
