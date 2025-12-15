"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";

export async function addFriendAction(formData: FormData) {
  const user = await requireAuth();
  const username = String(formData.get("username"));

  const supabase = createServerSupabase();
  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .single();

  if (!profile || profile.id === user.id) return;

  await supabase.from("friends").upsert(
    {
      user_id: user.id,
      friend_id: profile.id
    },
    { onConflict: "user_id,friend_id" }
  );
}

export async function removeFriendAction(friendId: string) {
  const user = await requireAuth();
  const supabase = createServerSupabase();
  await supabase
    .from("friends")
    .delete()
    .eq("user_id", user.id)
    .eq("friend_id", friendId);
}
