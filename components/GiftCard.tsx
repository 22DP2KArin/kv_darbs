// components/GiftCard.tsx
import Link from "next/link";

type GiftCardProps = {
  id: number;
  title: string;
  price: number;
  description?: string;
  image_url?: string;
};

export default function GiftCard({
  id,
  title,
  price,
  description,
  image_url,
}: GiftCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border bg-white shadow-sm">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <img
          src={image_url ?? "/placeholder.png"}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>

        {price != null && (
          <p className="mt-1 text-sm text-slate-700">{price} €</p>
        )}

        {description && (
          <p className="mt-2 line-clamp-3 text-sm text-slate-600">
            {description}
          </p>
        )}

        <div className="mt-auto pt-3">
          <Link
            href={`/gifts/${id}`}
            className="btn-secondary inline-block w-full text-center"
          >
            Skatīt detalizēti
          </Link>
        </div>
      </div>
    </article>
  );
}
