# MyStoryBook — Personalised Children's Colouring Books

Fake-door MVP to validate demand for personalised children's colouring books targeting UK parents.

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS**
- **Supabase** (email capture + click tracking)
- **Vercel** (deployment)

## Pages
| Route | Purpose |
|---|---|
| `/` | Homepage — hero, name grid, occasion grid, sample pages |
| `/books` | Browse — searchable name grid + occasion grid |
| `/books/[slug]` | Book detail — cover mockup, price, CTA |
| `/waitlist-confirmed` | Post-signup confirmation + WhatsApp share |
| `/admin` | Password-protected dashboard (signups, clicks, conversion rate) |

## Setup

### 1. Install
```bash
cd coloring-book
npm install
```

### 2. Create Supabase tables
1. Go to [supabase.com](https://supabase.com) → New project
2. Open **Database → SQL Editor → New Query**
3. Paste and run `supabase-schema.sql`

### 3. Environment variables
```bash
cp .env.example .env.local
```
Fill in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ADMIN_PASSWORD=choose-a-password
```

### 4. Run locally
```bash
npm run dev
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```
Add the 3 env vars in Vercel → Project Settings → Environment Variables.

## UTM Tracking
All UTM params are captured on signup. Example ad URL:
```
https://yourdomain.com/books/maryam?utm_source=facebook&utm_campaign=muslim-eid&utm_medium=paid
```

## Success Metric
**Target: >10% conversion** (signups ÷ CTA clicks) — tracked live on `/admin`.
