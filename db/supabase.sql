create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  interests text[],
  hobbies text[]
);

create table public.hobbies (
  id bigserial primary key,
  name text not null unique
);

create table public.interests (
  id bigserial primary key,
  name text not null unique
);

create table public.gifts (
  id bigserial primary key,
  title text not null,
  price numeric(10,2) not null,
  description text,
  image_url text,
  created_at timestamptz default now()
);

create table public.gifts_hobbies (
  gift_id bigint references public.gifts(id) on delete cascade,
  hobby_id bigint references public.hobbies(id) on delete cascade,
  primary key (gift_id, hobby_id)
);

create table public.gifts_interests (
  gift_id bigint references public.gifts(id) on delete cascade,
  interest_id bigint references public.interests(id) on delete cascade,
  primary key (gift_id, interest_id)
);

create table public.wishlist_items (
  id bigserial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  gift_id bigint references public.gifts(id) on delete cascade,
  quantity int not null default 1 check (quantity > 0),
  created_at timestamptz default now(),
  unique (user_id, gift_id)
);

create table public.friends (
  user_id uuid references auth.users(id) on delete cascade,
  friend_id uuid references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, friend_id),
  check (user_id <> friend_id)
);

create table public.generated_ideas (
  id bigserial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  gift_id bigint references public.gifts(id) on delete set null,
  url text,
  text text,
  created_at timestamptz default now()
);

create or replace function public.get_recommended_gifts(
  p_interests text[],
  p_hobbies text[]
)
returns setof public.gifts
language sql
as $$
  select distinct g.*
  from public.gifts g
  left join public.gifts_interests gi on gi.gift_id = g.id
  left join public.interests i on i.id = gi.interest_id
  left join public.gifts_hobbies gh on gh.gift_id = g.id
  left join public.hobbies h on h.id = gh.hobby_id
  where
    (i.name = any(p_interests) or h.name = any(p_hobbies))
  order by g.price asc, g.created_at desc
  limit 20;
$$;

alter table public.profiles enable row level security;
alter table public.wishlist_items enable row level security;
alter table public.friends enable row level security;
alter table public.generated_ideas enable row level security;

create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

create policy "wishlist_select_owner" on public.wishlist_items
  for select using (
    auth.uid() = user_id or
    exists (
      select 1 from public.friends f
      where (f.user_id = user_id and f.friend_id = auth.uid())
         or (f.friend_id = user_id and f.user_id = auth.uid())
    )
  );

create policy "wishlist_modify_owner" on public.wishlist_items
  for all using (auth.uid() = user_id);

create policy "friends_owner" on public.friends
  for all using (auth.uid() = user_id);

create policy "ideas_owner" on public.generated_ideas
  for all using (auth.uid() = user_id);
