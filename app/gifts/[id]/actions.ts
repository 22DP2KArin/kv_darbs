"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";

export async function addToWishlist(formData: FormData) {
  const user = await requireAuth();
  const giftId = Number(formData.get("gift_id"));
  const supabase = createServerSupabase();

  await supabase.from("wishlist_items").upsert(
    {
      user_id: user.id,
      gift_id: giftId,
      quantity: 1
    },
    { onConflict: "user_id,gift_id" }
  );
}
