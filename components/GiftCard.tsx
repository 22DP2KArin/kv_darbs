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
    <div className="card space-y-2">
      {image_url && (
        <img
          src={image_url}
          alt={title}
          className="h-40 w-full rounded object-cover"
        />
      )}

      <h2 className="font-semibold">{title}</h2>

      {price != null && <p className="text-sm text-slate-700">{price} €</p>}

      {description && (
        <p className="text-sm text-slate-600 line-clamp-2">{description}</p>
      )}
    </div>
  );
}
