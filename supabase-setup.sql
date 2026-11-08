create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  username text not null check (char_length(btrim(username)) between 3 and 24),
  role text not null default 'student' check (role in ('student', 'teacher')),
  created_at timestamptz not null default now()
);

create unique index if not exists profiles_username_ci_unique
  on public.profiles (lower(username));

create table if not exists public.quiz_results (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles (user_id) on delete cascade,
  subject text not null,
  score integer not null check (score between 0 and 8),
  total integer not null check (total between 1 and 8),
  mode text not null check (mode in ('olympiad', 'practice')),
  xp_earned integer not null default 0 check (xp_earned between 0 and 10000),
  created_at timestamptz not null default now(),
  check (score <= total)
);

alter table public.profiles enable row level security;
alter table public.quiz_results enable row level security;

drop policy if exists "Authenticated users can view usernames" on public.profiles;
create policy "Authenticated users can view usernames"
  on public.profiles for select to authenticated
  using (true);

drop policy if exists "Players can view their own results" on public.quiz_results;
create policy "Players can view their own results"
  on public.quiz_results for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Teachers can view all results" on public.quiz_results;
create policy "Teachers can view all results"
  on public.quiz_results for select to authenticated
  using (
    exists (
      select 1
      from public.profiles
      where profiles.user_id = (select auth.uid())
        and profiles.role = 'teacher'
    )
  );

drop policy if exists "Players can add their own results" on public.quiz_results;
create policy "Players can add their own results"
  on public.quiz_results for insert to authenticated
  with check (user_id = (select auth.uid()));

create or replace function public.create_quiz_profile()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  insert into public.profiles (user_id, username)
  values (new.id, new.raw_user_meta_data ->> 'username');
  return new;
end;
$$;

drop trigger if exists create_quiz_profile_after_signup on auth.users;
create trigger create_quiz_profile_after_signup
  after insert on auth.users
  for each row execute function public.create_quiz_profile();

create or replace function public.get_leaderboard()
returns table (username text, points bigint, subjects_played bigint)
language sql
security definer
set search_path = public, pg_temp
as $$
  with best_by_subject as (
    select results.user_id, results.subject, max(results.score) as best_score
    from public.quiz_results as results
    where results.mode = 'olympiad'
    group by results.user_id, results.subject
  )
  select profiles.username,
         sum(best_by_subject.best_score)::bigint as points,
         count(*)::bigint as subjects_played
  from best_by_subject
  join public.profiles using (user_id)
  where (select auth.uid()) is not null
  group by profiles.user_id, profiles.username
  order by points desc, profiles.username asc;
$$;

revoke all on function public.create_quiz_profile() from public, anon, authenticated;
grant execute on function public.create_quiz_profile() to supabase_auth_admin;
revoke all on function public.get_leaderboard() from public, anon;
grant execute on function public.get_leaderboard() to authenticated;

grant select on public.profiles to authenticated;
grant select, insert on public.quiz_results to authenticated;
grant usage, select on sequence public.quiz_results_id_seq to authenticated;
