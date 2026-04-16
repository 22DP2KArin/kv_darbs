// app/gifts/page.tsx
import GiftCatalog from "@/components/GiftCatalog";
// import GiftFilters from "@/components/GiftFilters";

type GiftsPageProps = {
  searchParams?: {
    q?: string;
    max?: string;
  };
};

export default async function GiftsPage({ searchParams }: GiftsPageProps) {
  const params = searchParams ?? {};

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">Dāvanu katalogs</h1>

      {/* <GiftFilters /> */}

      <GiftCatalog searchParams={params} />
    </main>
  );
}
