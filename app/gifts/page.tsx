import GiftCatalog from "@/components/GiftCatalog";

type GiftsPageProps = {
  searchParams?: Promise<{
    q?: string;
    max?: string;
  }>;
};

export default async function GiftsPage({ searchParams }: GiftsPageProps) {
  const resolved = (await searchParams) ?? {};
  const params = {
    q: resolved.q ?? "",
    max: resolved.max ?? "",
  };

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">Dāvanu katalogs</h1>
      <GiftCatalog searchParams={params} />
    </main>
  );
}