-- Create location table
create table public.location (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

-- Create type_cooking table
create table public.type_cooking (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

-- Create restaurant table
create table public.restaurant (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text,
  address text,
  stars integer check (stars >= 0 and stars <= 5),
  image text,
  num_reviews integer default 0,
  location_id uuid references public.location(id) on delete set null,
  type_id uuid references public.type_cooking(id) on delete set null,
  created_at timestamp with time zone default now()
);


create table public."user" (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default now()
);

-- Favorites table (no duplicate restaurant favorites per user)
create table public.favorite (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public."user"(id) on delete cascade,
  restaurant_id uuid references public.restaurant(id) on delete cascade,
  created_at timestamp with time zone default now(),
  unique (user_id, restaurant_id)  -- Ensure no duplicates
);

--  Visits table
create type visit_status as enum ('Solicitado', 'Aprobado', 'Rechazado', 'Concluido');

create table public.visit (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public."user"(id) on delete cascade,
  restaurant_id uuid references public.restaurant(id) on delete cascade,
  visit_date date not null,
  status visit_status not null default 'Solicitado',
  reason_rejected text,
  description text,
  created_at timestamp with time zone default now()
);