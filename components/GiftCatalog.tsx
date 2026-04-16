// components/GiftCatalog.tsx
import { createServerSupabase } from "@/lib/supabase/server";
import GiftCard from "@/components/GiftCard";

type GiftCatalogProps = {
  searchParams?: {
    q?: string;
    max?: string;
  };
};

export default async function GiftCatalog({ searchParams }: GiftCatalogProps) {
  const supabase = await createServerSupabase();

  const q = searchParams?.q ?? "";
  const max = searchParams?.max;

  let query = supabase.from("gifts").select("*");

  if (q) {
    query = query.ilike("title", `%${q}%`);
  }

  if (max) {
    query = query.lte("price", Number(max));
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  const gifts = data ?? [];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {gifts.map((gift: any) => (
        <GiftCard
          key={gift.id}
          id={gift.id}
          title={gift.title}
          price={gift.price}
          description={gift.description}
          image_url={gift.image_url ?? undefined}
        />
      ))}
    </div>
  );
}
