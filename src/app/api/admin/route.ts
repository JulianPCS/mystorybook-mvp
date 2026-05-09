import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get("password");

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch all signups
  const { data: signups, error: signupsError } = await supabase
    .from("signups")
    .select("*")
    .order("created_at", { ascending: false });

  if (signupsError) {
    return NextResponse.json({ error: "Failed to fetch signups" }, { status: 500 });
  }

  // Fetch CTA clicks
  const { data: clicks, error: clicksError } = await supabase
    .from("page_events")
    .select("id")
    .eq("event_type", "cta_click");

  if (clicksError) {
    return NextResponse.json({ error: "Failed to fetch clicks" }, { status: 500 });
  }

  const totalSignups = signups?.length ?? 0;
  const totalClicks = clicks?.length ?? 0;
  const conversionRate = totalClicks > 0
    ? ((totalSignups / totalClicks) * 100).toFixed(1)
    : "0.0";

  // Group by slug
  const slugMap: Record<string, number> = {};
  for (const s of signups ?? []) {
    slugMap[s.book_slug] = (slugMap[s.book_slug] || 0) + 1;
  }
  const bySlug = Object.entries(slugMap)
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => b.count - a.count);

  // Group by date
  const dateMap: Record<string, number> = {};
  for (const s of signups ?? []) {
    const date = s.created_at.slice(0, 10);
    dateMap[date] = (dateMap[date] || 0) + 1;
  }
  const byDate = Object.entries(dateMap)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 14);

  return NextResponse.json({
    totalSignups,
    totalClicks,
    conversionRate,
    bySlug,
    byDate,
    signups: signups ?? [],
  });
}
