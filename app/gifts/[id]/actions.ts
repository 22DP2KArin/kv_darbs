"use server";

import { createServerSupabaseForActions } from "@/lib/supabase/server-actions";
import { requireAuth } from "@/lib/auth";

export async function addToWishlist(formData: FormData) {
  const user = await requireAuth();

  const giftId = Number(formData.get("gift_id"));

  const supabase = await createServerSupabaseForActions();

  const { error } = await supabase
    .from("wishlist_items" as any)
    .upsert(
      {
        user_id: user.id,
        gift_id: giftId,
        quantity: 1,
      } as any,
      { onConflict: "user_id,gift_id" }
    );

  if (error) {
    throw new Error(error.message);
  }
}
