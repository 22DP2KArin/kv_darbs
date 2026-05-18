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
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8 flex items-baseline justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Vēlmju saraksts
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Dāvanas, kuras tu visvairāk vēlētos saņemt.
            </p>
          </div>
        </header>

        <section className="space-y-4">
          <WishlistClient initialItems={wishlist} />
        </section>
      </div>
    </main>
  );
}