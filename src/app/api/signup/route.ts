import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { child_name, parent_email, book_slug, utm_source, utm_campaign, utm_medium } = body;

    if (!child_name || !parent_email || !book_slug) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabase.from("signups").insert({
      child_name: child_name.trim(),
      parent_email: parent_email.trim().toLowerCase(),
      book_slug: book_slug.trim(),
      utm_source: utm_source || null,
      utm_campaign: utm_campaign || null,
      utm_medium: utm_medium || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
