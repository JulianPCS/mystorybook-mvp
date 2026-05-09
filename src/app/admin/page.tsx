"use client";

import { useState, useEffect, useCallback } from "react";

type Signup = {
  id: string;
  created_at: string;
  child_name: string;
  parent_email: string;
  book_slug: string;
  utm_source: string;
  utm_campaign: string;
  utm_medium: string;
};

type Stats = {
  totalSignups: number;
  totalClicks: number;
  conversionRate: string;
  bySlug: { slug: string; count: number }[];
  byDate: { date: string; count: number }[];
  signups: Signup[];
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchStats = useCallback(async (pw: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin?password=${encodeURIComponent(pw)}`);
      if (res.status === 401) {
        setError("Wrong password");
        setAuthed(false);
        return;
      }
      const data = await res.json();
      setStats(data);
      setAuthed(true);
      setError("");
    } catch {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    fetchStats(password);
  }

  useEffect(() => {
    if (authed) {
      const interval = setInterval(() => fetchStats(password), 30000);
      return () => clearInterval(interval);
    }
  }, [authed, password, fetchStats]);

  if (!authed) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-sm border border-teal-50 p-8 w-full max-w-sm">
          <h1 className="text-2xl font-black text-gray-800 mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border-2 border-teal-100 focus:border-teal-400 rounded-2xl px-4 py-3 font-semibold text-gray-800 outline-none transition-colors"
              required
            />
            {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-2xl transition-all"
            >
              {loading ? "Checking..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const conversionPct = parseFloat(stats.conversionRate);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-gray-800">📊 Admin Dashboard</h1>
        <button
          onClick={() => { setAuthed(false); setPassword(""); setStats(null); }}
          className="text-sm text-gray-400 hover:text-gray-600 font-semibold"
        >
          Logout
        </button>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Signups", value: stats.totalSignups, icon: "📧", color: "bg-teal-50 border-teal-200" },
          { label: "CTA Clicks", value: stats.totalClicks, icon: "👆", color: "bg-amber-50 border-amber-200" },
          { label: "Conversion Rate", value: `${conversionPct}%`, icon: "📈", color: conversionPct >= 10 ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200" },
          { label: "Unique Books", value: stats.bySlug.length, icon: "📚", color: "bg-purple-50 border-purple-200" },
        ].map((kpi) => (
          <div key={kpi.label} className={`${kpi.color} border-2 rounded-2xl p-4`}>
            <div className="text-2xl mb-1">{kpi.icon}</div>
            <div className="text-2xl font-black text-gray-800">{kpi.value}</div>
            <div className="text-xs font-bold text-gray-500">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Conversion target */}
      <div className="bg-white rounded-2xl border border-teal-100 p-4 mb-8 flex items-center gap-3">
        <span className="text-2xl">{conversionPct >= 10 ? "✅" : "⏳"}</span>
        <div>
          <p className="font-bold text-gray-700 text-sm">
            Target: 10% conversion rate (signups ÷ CTA clicks)
          </p>
          <p className="text-xs text-gray-400 font-semibold">
            Currently at {conversionPct}% — {conversionPct >= 10 ? "🎉 Target achieved!" : `need ${Math.max(0, Math.ceil(stats.totalClicks * 0.1) - stats.totalSignups)} more signups`}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* By slug */}
        <div className="bg-white rounded-2xl border border-teal-100 p-5">
          <h2 className="font-black text-gray-800 mb-4">Signups by Book</h2>
          {stats.bySlug.length === 0 ? (
            <p className="text-gray-400 text-sm font-semibold">No signups yet</p>
          ) : (
            <div className="space-y-2">
              {stats.bySlug.map((row) => (
                <div key={row.slug} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-0.5">
                      <span>{row.slug}</span>
                      <span>{row.count}</span>
                    </div>
                    <div className="h-1.5 bg-teal-50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-400 rounded-full"
                        style={{ width: `${(row.count / stats.bySlug[0].count) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* By date */}
        <div className="bg-white rounded-2xl border border-teal-100 p-5">
          <h2 className="font-black text-gray-800 mb-4">Signups by Day</h2>
          {stats.byDate.length === 0 ? (
            <p className="text-gray-400 text-sm font-semibold">No signups yet</p>
          ) : (
            <div className="space-y-2">
              {stats.byDate.map((row) => (
                <div key={row.date} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-0.5">
                      <span>{new Date(row.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
                      <span>{row.count}</span>
                    </div>
                    <div className="h-1.5 bg-amber-50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: `${(row.count / (stats.byDate[0]?.count || 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Raw signups table */}
      <div className="bg-white rounded-2xl border border-teal-100 overflow-hidden">
        <div className="p-5 border-b border-teal-50 flex items-center justify-between">
          <h2 className="font-black text-gray-800">All Signups</h2>
          <span className="text-xs text-gray-400 font-semibold">Auto-refreshes every 30s</span>
        </div>
        <div className="overflow-x-auto">
          {stats.signups.length === 0 ? (
            <div className="p-8 text-center text-gray-400 font-semibold">No signups yet — share those links! 🚀</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  {["Date", "Child Name", "Email", "Book", "Source", "Campaign"].map((h) => (
                    <th key={h} className="px-4 py-3 font-bold text-gray-500 text-xs uppercase tracking-wide whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats.signups.map((s) => (
                  <tr key={s.id} className="border-t border-gray-50 hover:bg-teal-50/30 transition-colors">
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(s.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-800">{s.child_name}</td>
                    <td className="px-4 py-3 text-gray-600">{s.parent_email}</td>
                    <td className="px-4 py-3 text-teal-600 font-semibold">{s.book_slug}</td>
                    <td className="px-4 py-3 text-gray-500">{s.utm_source || "—"}</td>
                    <td className="px-4 py-3 text-gray-500">{s.utm_campaign || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
