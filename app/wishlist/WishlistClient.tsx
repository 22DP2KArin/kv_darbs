"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { removeItemAction, updateQuantityAction } from "./actions";

type WishlistItemRow = {
  id: number;
  gift_id: number;
  quantity: number;
  gifts: {
    id: number;
    title: string;
    price: number | null;
    image_url: string | null;
  } | null;
};

export function WishlistClient({ initialItems }: { initialItems: WishlistItemRow[] }) {
  const [items, setItems] = useState(initialItems);
  const [isPending, startTransition] = useTransition();

  function handleLocalQuantityChange(id: number, value: string) {
    const qty = Math.max(1, Number(value) || 1);
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  }

  async function handleSaveQuantity(id: number, quantity: number) {
    startTransition(async () => {
      await updateQuantityAction(id, quantity);
    });
  }

  async function handleRemove(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id));

    startTransition(async () => {
      await removeItemAction(id);
    });
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-pink-200 bg-white/70 p-8 text-center">
        <p className="text-lg font-medium text-gray-800">
          Saraksts ir tukšs.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Pievieno dāvanas no kataloga, lai redzētu tās šeit.
        </p>
        <Link
          href="/catalog"
          className="mt-4 inline-flex rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-600"
        >
          Doties uz katalogu
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const title = item.gifts?.title ?? `Dāvana #${item.gift_id}`;
        const price = item.gifts?.price ?? null;
        const imageUrl = item.gifts?.image_url ?? null;
        const giftUrl = `/gifts/${item.gift_id}`;

        return (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl border border-pink-100 bg-white/80 px-4 py-3 shadow-sm transition hover:border-pink-200 hover:shadow-md"
          >
            {imageUrl && (
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="flex-1">
              <Link
                href={giftUrl}
                className="text-base font-semibold text-purple-800 hover:underline"
              >
                {title}
              </Link>
              {price !== null && (
                <p className="mt-1 text-sm text-gray-600">
                  {price.toFixed(2)} €
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                className="w-16 rounded-lg border border-gray-200 bg-white px-2 py-1 text-center text-sm shadow-sm focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-300"
                value={item.quantity}
                onChange={(e) =>
                  handleLocalQuantityChange(item.id, e.target.value)
                }
                onBlur={() => handleSaveQuantity(item.id, item.quantity)}
                disabled={isPending}
              />

              <button
                type="button"
                className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500 shadow-sm transition hover:bg-red-100 disabled:opacity-60"
                disabled={isPending}
                onClick={() => handleRemove(item.id)}
              >
                Dzēst
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}