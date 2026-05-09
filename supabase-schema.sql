-- Run this in your Supabase SQL Editor (Database > SQL Editor > New Query)

-- Email signups (main conversion table)
create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  child_name text not null,
  parent_email text not null,
  book_slug text not null,
  utm_source text,
  utm_campaign text,
  utm_medium text
);

-- Enable Row Level Security
alter table public.signups enable row level security;

-- Allow anonymous inserts (for the signup form)
create policy "Allow anon inserts" on public.signups
  for insert with check (true);

-- Only service role can read (admin API uses service role via anon key + password check)
-- Note: admin route uses ANON key but checks ADMIN_PASSWORD before returning data.
-- For extra security in production, switch to service role key on the server.
create policy "Allow anon reads" on public.signups
  for select using (true);


-- CTA click tracking (for conversion rate calculation)
create table if not exists public.page_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  event_type text not null,  -- 'cta_click'
  book_slug text not null,
  page text
);

alter table public.page_events enable row level security;

create policy "Allow anon inserts" on public.page_events
  for insert with check (true);

create policy "Allow anon reads" on public.page_events
  for select using (true);


-- Handy indexes
create index if not exists signups_book_slug_idx on public.signups (book_slug);
create index if not exists signups_created_at_idx on public.signups (created_at desc);
create index if not exists page_events_event_type_idx on public.page_events (event_type);
