"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { requireRole } from "@/lib/auth";

export async function createGift(formData: FormData) {
  await requireRole(["admin"]);

  const title = String(formData.get("title"));
  const price = Number(formData.get("price"));
  const description = String(formData.get("description") ?? "");

  const supabase = createServerSupabase();

  const { error } = await supabase
    // говорим TS «поверь мне, тут правильная таблица»
    .from("gifts" as any)
    .insert({
      title,
      price,
      description
    } as any);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteGift(formData: FormData) {
  await requireRole(["admin"]);

  const id = Number(formData.get("id"));
  const supabase = createServerSupabase();

  const { error } = await supabase
    .from("gifts" as any)
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
