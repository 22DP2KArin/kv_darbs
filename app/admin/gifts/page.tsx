import { requireRole } from "@/lib/auth";
import { createServerSupabase } from "@/lib/supabase/server";
import { createGift, deleteGift } from "./actions";

export default async function AdminGiftsPage() {
  await requireRole(["admin"]);

  const supabase = await createServerSupabase();

  const { data: gifts } = await supabase
    .from("gifts" as any)
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  const list = (gifts ?? []) as {
    id: number;
    title: string;
    price: number;
  }[];

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">Dāvanu pārvaldība</h1>

      <form action={createGift} className="card max-w-lg space-y-2">
        <h2 className="font-semibold">Pievienot dāvanu</h2>

        <input
          name="title"
          className="input"
          placeholder="Nosaukums"
          required
        />

        <input
          name="price"
          type="number"
          step="0.01"
          className="input"
          placeholder="Cena"
          required
        />

        <textarea
          name="description"
          className="input"
          placeholder="Apraksts"
          rows={3}
        />

        <button className="btn-primary" type="submit">
          Saglabāt
        </button>
      </form>

      <section className="card space-y-2">
        <h2 className="font-semibold">Esošās dāvanas</h2>

        <ul className="space-y-1 text-sm">
          {list.map((g) => (
            <li
              key={g.id}
              className="flex items-center justify-between"
            >
              <span>
                {g.title} – {g.price.toFixed(2)} €
              </span>

              <form action={deleteGift}>
                <input type="hidden" name="id" value={g.id} />
                <button className="text-red-600" type="submit">
                  Dzēst
                </button>
              </form>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}