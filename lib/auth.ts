import { createServerSupabase } from "@/lib/supabase/server";

export async function getSessionUser() {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
}

export async function getCurrentProfile() {
  const user = await getSessionUser();
  if (!user) return null;
  const supabase = createServerSupabase();
  const { data } = await supabase
    .from("profiles" as any)
    .select("*")
    .eq("id", user.id)
    .single();
  return data ?? null;
}

export async function requireAuth() {
  const user = await getSessionUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export async function requireRole(roles: ("user" | "admin")[]) {
  const rawProfile = await getCurrentProfile();
  const profile = rawProfile as any;

  if (!profile || !roles.includes(profile.role)) {
    throw new Error("Forbidden");
  }
  return profile;
}
