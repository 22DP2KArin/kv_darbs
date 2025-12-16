"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";

export async function addFriendAction(formData: FormData) {
  const user = await requireAuth();
  const username = String(formData.get("username"));

  const supabase = createServerSupabase();

  const { data: profile, error: profileError } = await supabase
    .from("profiles" as any)
    .select("id")
    .eq("username", username)
    .single();

  if (profileError || !profile || (profile as any).id === user.id) {
    return;
  }

  const friendId = (profile as any).id as string;

  const { error } = await supabase
    .from("friends" as any)
    .upsert(
      {
        user_id: user.id,
        friend_id: friendId
      } as any,
      { onConflict: "user_id,friend_id" }
    );

  if (error) {
    throw new Error(error.message);
  }
}

export async function removeFriendAction(friendId: string) {
  const user = await requireAuth();
  const supabase = createServerSupabase();

  const { error } = await supabase
    .from("friends" as any)
    .delete()
    .eq("user_id", user.id)
    .eq("friend_id", friendId);

  if (error) {
    throw new Error(error.message);
  }
}
