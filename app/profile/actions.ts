"use server";

import { createServerSupabase } from "@/lib/supabase/server";

type ProfileForm = {
  username: string;
  avatarUrl: string;
  hobbies: string;
  interests: string;
};

export async function getProfile() {
  const supabase = createServerSupabase() as any;

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) return null;
  return data;
}

export async function updateProfile(form: ProfileForm) {
  const supabase = createServerSupabase() as any;

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("Nav pieteicies");
  }

  const hobbiesArray = form.hobbies
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  const interestsArray = form.interests
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  const { error } = await supabase
    .from("profiles")
    .update({
      username: form.username,
      avatar_url: form.avatarUrl.trim() || null,
      hobbies: hobbiesArray,
      interests: interestsArray,
    })
    .eq("id", user.id);

  if (error) {
    throw new Error(error.message);
  }
}
