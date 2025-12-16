import { createServerSupabase } from "@/lib/supabase/server";
import GiftCard from "./GiftCard";

type Props = {
  searchParams?: {
    q?: string;
    min?: string;
    max?: string;
  };
};

export default async function GiftCatalog({ searchParams }: Props) {
  const supabase = createServerSupabase();
  const anySupabase: any = supabase;

  const q = searchParams?.q ?? "";
  const min = searchParams?.min;
  const max = searchParams?.max;

  let query = anySupabase.from("gifts").select("*");

  if (q) {
    query = query.ilike("title", `%${q}%`);
  }
  if (min) {
    query = query.gte("price", Number(min));
  }
  if (max) {
    query = query.lte("price", Number(max));
  }

  const { data } = await query.order("created_at", { ascending: false });

  const gifts = (data ?? []) as any[];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {gifts.map((gift) => (
        <GiftCard
          key={gift.id}
          id={gift.id}
          title={gift.title}
          price={gift.price}
          description={gift.description}
          image_url={gift.image_url ?? undefined}
          showDetailsLink
        />
      ))}
    </div>
  );
}
