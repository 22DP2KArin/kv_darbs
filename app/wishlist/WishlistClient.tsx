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
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
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
    return <p>Saraksts ir tukšs.</p>;
  }

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const title = item.gifts?.title ?? `Dāvana #${item.gift_id}`;
        const giftUrl = `/gifts/${item.gift_id}`;

        return (
          <div key={item.id} className="flex items-center gap-2">
            <div className="flex-1">
              <Link href={giftUrl} className="font-medium text-purple-700 hover:underline">
                {title}
              </Link>
            </div>

            <div className="flex items-center gap-1">
              <input
                type="number"
                min={1}
                className="w-16 input"
                value={item.quantity}
                onChange={(e) =>
                  handleLocalQuantityChange(item.id, e.target.value)
                }
                onBlur={() => handleSaveQuantity(item.id, item.quantity)}
                disabled={isPending}
              />
            </div>

            <button
              type="button"
              className="ml-2 btn-danger"
              disabled={isPending}
              onClick={() => handleRemove(item.id)}
            >
              Dzēst
            </button>
          </div>
        );
      })}
    </div>
  );
}
