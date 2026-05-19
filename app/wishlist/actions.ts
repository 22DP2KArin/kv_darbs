"use server";

import { createServerSupabaseForActions } from "@/lib/supabase/server-actions";
import { requireAuth } from "@/lib/auth";

export async function updateQuantityAction(id: number, quantity: number) {
  const user = await requireAuth();
  const supabase = await createServerSupabaseForActions();
  const anySupabase = supabase as any;

  const { error } = await anySupabase
    .from("wishlist_items")
    .update({ quantity })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function removeItemAction(id: number) {
  const user = await requireAuth();
  console.log("REMOVE ITEM", { id, userId: user.id });

  const supabase = await createServerSupabaseForActions();
  const anySupabase = supabase as any;

  const { error } = await anySupabase
    .from("wishlist_items")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    console.error("REMOVE ERROR", error);
    throw new Error(error.message);
  }
}