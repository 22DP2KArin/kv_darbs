// app/ideas/page.tsx
import { requireAuth } from "@/lib/auth";
import { generateGiftIdeas } from "@/lib/gift-recommendation";
import GiftCard from "@/components/GiftCard";

export default async function IdeasPage() {
  const user = await requireAuth();
  const ideas = await generateGiftIdeas(user.id);

  console.log("IDEAS:", ideas);

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">Personalizētas dāvanu idejas</h1>

      {ideas.length === 0 && (
        <p className="text-gray-500">Pagaidām nav atrastas dāvanu idejas.</p>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {ideas.map((gift: any) => (
          <GiftCard
            key={gift.id}
            id={gift.id}
            title={gift.title}
            price={gift.price}
            description={gift.description}
            image_url={gift.image_url}
          />
        ))}
      </div>
    </main>
  );
}