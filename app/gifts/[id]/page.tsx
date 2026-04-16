import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";
import { addToWishlist } from "./actions";

type PageProps = {
  params: { id: string };
};

export default async function GiftDetailsPage({ params }: PageProps) {
  const supabase = await createServerSupabase();

  const { data, error } = await supabase
    .from("gifts" as any)
    .select("*")
    .eq("id", Number(params.id))
    .single();

  if (error || !data) {
    return <div>Nav atrasta dāvana.</div>;
  }

  const gift = data as any;

  const user = await requireAuth().catch(() => null);

  return (
    <main className="mx-auto max-w-4xl py-6">
      <section className="rounded-2xl border bg-white shadow-sm">
        <div className="flex flex-col gap-6 p-4 md:flex-row md:p-6">
          {/* Картинка слева */}
          <div className="md:w-2/5">
            <div className="relative h-56 w-full overflow-hidden rounded-xl md:h-64">
              <img
                src={gift.image_url ?? "/placeholder.png"}
                alt={gift.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Текст и кнопки справа */}
          <div className="flex flex-1 flex-col justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
                {gift.title}
              </h1>

              {gift.price != null && (
                <p className="mt-1 text-lg font-semibold text-purple-700">
                  {gift.price} €
                </p>
              )}

              {gift.description && (
                <p className="mt-3 text-sm text-slate-700">
                  {gift.description}
                </p>
              )}
            </div>

            <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              {user && (
                <form action={addToWishlist}>
                  <input type="hidden" name="gift_id" value={gift.id} />
                  <button
                    className="btn-primary w-full md:w-auto"
                    type="submit"
                  >
                    Pievienot vēlmju sarakstam
                  </button>
                </form>
              )}

              {!user && (
                <p className="text-sm text-slate-600">
                  Piesakies, lai pievienotu dāvanu vēlmju sarakstam.
                </p>
              )}

              <div className="text-center text-sm text-slate-500 md:text-right">
                Skatīt detalizēti
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
