import { createServerSupabase } from "@/lib/supabase/server";
import GiftCard from "@/components/GiftCard";
import { requireAuth } from "@/lib/auth";
import { addToWishlist } from "./actions";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function GiftDetailsPage({ params }: PageProps) {
  const { id } = await params; // <-- ждём params

  const supabase = await createServerSupabase();

  const { data } = await supabase
    .from("gifts" as any)
    .select("*")
    .eq("id", Number(id))
    .single();

  const gift = data as any;

  if (!gift) {
    return <div>Nav atrasta dāvana.</div>;
  }

  const user = await requireAuth().catch(() => null);

  return (
    <div className="card space-y-4">
      <GiftCard
        id={gift.id}
        title={gift.title}
        price={gift.price}
        description={gift.description}
        image_url={gift.image_url ?? undefined}
      />
      {user && (
        <form action={addToWishlist}>
          <input type="hidden" name="gift_id" value={gift.id} />
          <button className="btn-primary" type="submit">
            Pievienot vēlmju sarakstam
          </button>
        </form>
      )}
      {!user && (
        <p className="text-sm text-slate-600">
          Piesakies, lai pievienotu dāvanu vēlmju sarakstam.
        </p>
      )}
    </div>
  );
}
