import GiftCatalog from "@/components/GiftCatalog";
import GiftFilters from "@/components/GiftFilters";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h1 className="mb-2 text-2xl font-bold">IEVADS</h1>
        <p className="mb-2 text-sm">
          Izstrādātā sistēma ir tīmekļa vietne, kas palīdz lietotājiem
          izvēlēties piemērotas dāvanas, izmantojot filtrus pēc hobijiem,
          interesēm un cenas, kā arī veidot vēlmju sarakstus.
        </p>
        <p className="text-sm">
          Nereģistrēts lietotājs var pārlūkot katalogu, bet reģistrēts lietotājs
          var uzturēt savu vēlmju sarakstu, pievienot draugus un saņemt
          personalizētas dāvanu idejas.
        </p>
      </section>
      <section>
        <GiftFilters />
        <GiftCatalog />
      </section>
    </div>
  );
}
