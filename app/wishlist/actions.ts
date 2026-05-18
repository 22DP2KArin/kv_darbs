"use server";

import { createServerSupabaseForActions } from "@/lib/supabase/server-actions";
import { requireAuth } from "@/lib/auth";

// Funkcija atjaunina vēlmju saraksta ieraksta daudzumu (quantity).
// Tiek pārbaudīts, ka lietotājs ir pieteicies un tiek mainīts tikai viņa paša ieraksts.
export async function updateQuantityAction(id: number, quantity: number) {
  // Nodrošina, ka piekļuvei ir autentificēts lietotājs
  const user = await requireAuth();

  // Izveido Supabase servera klientu darbam ar datubāzi
  const supabase = await createServerSupabaseForActions();

  // Atjaunina konkrētā vēlmju saraksta ieraksta daudzumu,
// filtrējot pēc ieraksta id un pašreizējā lietotāja id
  const { error } = await supabase
    .from("wishlist_items" as any)
    .update({ quantity } as any)
    .eq("id", id)
    .eq("user_id", user.id);

  // Ja atjaunināšanas laikā rodas kļūda, tā tiek padota kā izņēmums
  if (error) {
    throw new Error(error.message);
  }
}

// Funkcija noņem konkrētu preci no lietotāja vēlmju saraksta.
// Tiek ņemts vērā gan ieraksta id, gan pašreizējā lietotāja id.
export async function removeItemAction(id: number) {
  // Nodrošina, ka piekļuvei ir autentificēts lietotājs
  const user = await requireAuth();
  console.log("REMOVE ITEM", { id, userId: user.id });

  // Izveido Supabase servera klientu darbam ar datubāzi
  const supabase = await createServerSupabaseForActions();

  // Dzēš vēlmju saraksta ierakstu pēc tā id,
// pārliecinoties, ka tas pieder pašreizējam lietotājam
  const { error } = await supabase
    .from("wishlist_items" as any)
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  // Ja dzēšanas laikā rodas kļūda, tā tiek izvadīta un padota kā izņēmums
  if (error) {
    console.error("REMOVE ERROR", error);
    throw new Error(error.message);
  }
}