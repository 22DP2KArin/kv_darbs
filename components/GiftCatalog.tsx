// components/GiftCatalog.tsx
import { createServerSupabase } from "@/lib/supabase/server";
import GiftCard from "@/components/GiftCard";
import Link from "next/link";

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
        <div key={gift.id} className="space-y-2">
          <GiftCard
            id={gift.id}
            title={gift.title}
            price={gift.price}
            description={gift.description}
            image_url={gift.image_url ?? undefined}
          />
          <Link
            href={`/gifts/${gift.id}`}
            className="btn-secondary mt-2 inline-block"
          >
            Skatīt detalizēti
          </Link>
        </div>
      ))}
    </div>
  );
}
