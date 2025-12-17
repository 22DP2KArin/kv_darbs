"use client";

import { updateQuantityAction, removeItemAction } from "@/app/wishlist/actions";

export type Item = {
  id: number;
  quantity: number;
  gifts: {
    id: number;
    title: string;
    price: number;
  };
};

type Props = {
  items: Item[];
};

export default function WishlistTable({ items }: Props) {
  async function inc(id: number, current: number) {
    await updateQuantityAction(id, current + 1);
  }

  async function dec(id: number, current: number) {
    if (current <= 1) return;
    await updateQuantityAction(id, current - 1);
  }

  async function remove(id: number) {
    await removeItemAction(id);
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b">
          <th className="py-2 text-left">Dāvana</th>
          <th className="py-2 text-left">Cena</th>
          <th className="py-2 text-left">Daudzums</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="border-b">
            <td className="py-2">{item.gifts.title}</td>
            <td className="py-2">{item.gifts.price.toFixed(2)} €</td>
            <td className="py-2">
              <div className="inline-flex items-center gap-2">
                <button onClick={() => dec(item.id, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => inc(item.id, item.quantity)}>+</button>
              </div>
            </td>
            <td className="py-2 text-right">
              <button
                className="text-red-600"
                onClick={() => remove(item.id)}
              >
                Dzēst
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
