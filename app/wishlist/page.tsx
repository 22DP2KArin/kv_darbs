import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";
import WishlistTable from "@/components/WishlistTable";

export default async function WishlistPage() {
  const user = await requireAuth();
  const supabase = createServerSupabase();
  const { data } = await supabase
    .from("wishlist_items")
    .select("id, quantity, gifts(id, title, price)")
    .eq("user_id", user.id);

  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold text-purple-700">Dāvanu katalogs</h1>
      <WishlistTable items={(data as any[]) ?? []} />
    </main>
  );
}
