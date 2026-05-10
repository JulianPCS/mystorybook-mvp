import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      child_name,
      parent_name,
      parent_email,
      gender,
      skin,
      color_scheme,
      bg_theme,
      cover_image_url,
      page_ids,
    } = body;

    if (!child_name || !parent_email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabase.from("custom_orders").insert({
      child_name: child_name.trim(),
      parent_name: parent_name?.trim() || null,
      parent_email: parent_email.trim().toLowerCase(),
      gender: gender || null,
      cover_options: { skin, color_scheme, bg_theme },
      cover_image_url: cover_image_url || null,
      page_ids: page_ids || [],
      status: "pending",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Custom order error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
