"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";

export async function updateQuantityAction(id: number, quantity: number) {
  const user = await requireAuth();
  const supabase = createServerSupabase();
  await supabase
    .from("wishlist_items")
    .update({ quantity })
    .eq("id", id)
    .eq("user_id", user.id);
}

export async function removeItemAction(id: number) {
  const user = await requireAuth();
  const supabase = createServerSupabase();
  await supabase
    .from("wishlist_items")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);
}
