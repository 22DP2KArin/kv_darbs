// app/gifts/page.tsx
import GiftCatalog from "@/components/GiftCatalog";
import GiftFilters from "@/components/GiftFilters";

type GiftsPageProps = {
  searchParams: Promise<{
    q?: string;
    max?: string;
  }>;
};

export default async function GiftsPage({ searchParams }: GiftsPageProps) {
  // В Next.js 15 searchParams приходит как Promise, его нужно await
  const params = await searchParams;

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">Dāvanu katalogs</h1>

      {/* фильтры, если нужны */}
      {/* <GiftFilters /> */}

      {/* сюда уже передаём обычный объект */}
      <GiftCatalog searchParams={params} />
    </main>
  );
}
