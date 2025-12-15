import GiftCatalog from "@/components/GiftCatalog";
import GiftFilters from "@/components/GiftFilters";

export default function GiftsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dāvanu katalogs</h1>
      <GiftFilters />
      <GiftCatalog />
    </div>
  );
}
