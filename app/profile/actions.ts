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
    const uploadResult: any = await supabase.storage
      .from("avatars")
      .upload(path, file, { upsert: true });

    if (!uploadResult.error) {
      const urlData: any = supabase.storage
        .from("avatars")
        .getPublicUrl(path);
      avatar_url = urlData.data.publicUrl;
    }
  }

  const updateData: any = {
    username,
    interests: interests ? interests.split(",").map((s) => s.trim()) : [],
    hobbies: hobbies ? hobbies.split(",").map((s) => s.trim()) : []
  };
  if (avatar_url) updateData.avatar_url = avatar_url;

  // вообще убираем generic-типы у supabase
  const anySupabase: any = supabase;

  const { error } = await anySupabase
    .from("profiles")
    .update(updateData)
    .eq("id", user.id);

  if (error) {
    throw new Error(error.message);
  }
}
