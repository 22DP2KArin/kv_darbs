"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";

export async function updateProfile(formData: FormData) {
  const user = await requireAuth();
  const username = String(formData.get("username"));
  const interests = String(formData.get("interests") ?? "");
  const hobbies = String(formData.get("hobbies") ?? "");

  const supabase = createServerSupabase();

  let avatar_url: string | undefined;
  const file = formData.get("avatar") as File | null;
  if (file && file.size > 0) {
    const path = `${user.id}/${file.name}`;
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(path, file, { upsert: true });
    if (!error) {
      const { data: urlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(path);
      avatar_url = urlData.publicUrl;
    }
  }

  const updateData: any = {
    username,
    interests: interests ? interests.split(",").map(s => s.trim()) : [],
    hobbies: hobbies ? hobbies.split(",").map(s => s.trim()) : []
  };
  if (avatar_url) updateData.avatar_url = avatar_url;

  await supabase.from("profiles").update(updateData).eq("id", user.id);
}
