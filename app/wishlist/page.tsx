import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";
import WishlistTable, { Item } from "@/components/WishlistTable";

export default async function WishlistPage() {
  const user = await requireAuth();

  const supabase = await createServerSupabase();

  const { data } = await supabase
    .from("wishlist_items")
    .select("id, quantity, gifts(id, title, price)")
    .eq("user_id", user.id);

  const items: Item[] =
    data
      ?.map((row: any) => {
        const rawGifts = row.gifts;
        const g = Array.isArray(rawGifts) ? rawGifts[0] : rawGifts ?? null;

        if (!g) return null;

        return {
          id: Number(row.id),
          quantity: Number(row.quantity),
          gifts: {
            id: Number(g.id),
            title: String(g.title),
            price: Number(g.price),
          },
        };
      })
      .filter(Boolean) as Item[] ?? [];

  return (
    <main className="mx-auto max-w-3xl space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Dāvanu katalogs</h1>
      <WishlistTable items={items} />
    </main>
  );
}
