import Link from "next/link";

type GiftCardProps = {
  id: number;
  title: string;
  price: number;
  description?: string | null;
  image_url?: string | null;
  showDetailsLink?: boolean;
};

export default function GiftCard(props: GiftCardProps) {
  return (
    <div className="card flex flex-col gap-2">
      {props.image_url && (
        <img
          src={props.image_url}
          alt={props.title}
          className="h-40 w-full rounded object-cover"
        />
      )}
      <div className="flex-1 space-y-1">
        <h3 className="font-semibold">{props.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-3">
          {props.description}
        </p>
        <p className="text-sm font-bold">
          {props.price.toFixed(2)} €
        </p>
      </div>
      {props.showDetailsLink && (
        <Link href={`/gifts/${props.id}`} className="text-sm text-sky-700">
          Detalizēts apraksts
        </Link>
      )}
    </div>
  );
}
