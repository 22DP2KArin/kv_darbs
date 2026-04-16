// app/wishlist/page.tsx
import { createServerSupabase } from "@/lib/supabase/server";
import { WishlistClient } from "./WishlistClient";

type WishlistItemRow = {
  id: number;
  gift_id: number;
  quantity: number;
  gifts: {
    id: number;
    title: string;
    price: number | null;
    image_url: string | null;
  } | null;
};

export default async function WishlistPage() {
  const supabase = await createServerSupabase();

  const { data, error } = await supabase
    .from("wishlist_items" as any)
    .select("id, gift_id, quantity, gifts(id, title, price, image_url)");

  if (error) {
    throw new Error(error.message);
  }

  const wishlist = (data ?? []) as WishlistItemRow[];

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">Vēlmju saraksts</h1>
      <WishlistClient initialItems={wishlist} />
    </main>
  );
}
