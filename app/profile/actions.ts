// app/profile/actions.ts
"use server";

import { createServerSupabaseForActions } from "@/lib/supabase/server-actions";
import { redirect } from "next/navigation";

export type Profile = {
  id: string;
  username: string | null;
  avatar_url: string | null;
  hobbies: string[] | null;
  interests: string[] | null;
};

export async function getProfile(): Promise<Profile | null> {
  const supabase = await createServerSupabaseForActions();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return null;
  }

  const { data: profile, error } = await supabase
    .from("profiles" as any)
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return profile as Profile;
}

export async function updateProfile(params: {
  username: string;
  avatarUrl: string;
  hobbies: string;
  interests: string;
}) {
  const supabase = await createServerSupabaseForActions();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("Nav pieteicies");
    return;
  }

  const hobbiesArray = params.hobbies
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean);

  const interestsArray = params.interests
    .split(",")
    .map((i) => i.trim())
    .filter(Boolean);

  const { error } = await supabase
    .from("profiles" as any)
    .upsert({
      id: user.id,
      username: params.username || null,
      avatar_url: params.avatarUrl || null,
      hobbies: hobbiesArray,
      interests: interestsArray,
    } as any);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/"); 
}
