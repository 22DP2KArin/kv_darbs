import { createServerSupabase } from "@/lib/supabase/server";
import GiftCard from "@/components/GiftCard";
import { requireAuth } from "@/lib/auth";
import { addToWishlist } from "./actions";

type Props = { params: { id: string } };

export default async function GiftDetailsPage({ params }: Props) {
  const supabase = createServerSupabase();
  const { data: gift } = await supabase
    .from("gifts")
    .select("*")
    .eq("id", Number(params.id))
    .single();

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
