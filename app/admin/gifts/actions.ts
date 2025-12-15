"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { requireRole } from "@/lib/auth";

export async function createGift(formData: FormData) {
  await requireRole(["admin"]);
  const title = String(formData.get("title"));
  const price = Number(formData.get("price"));
  const description = String(formData.get("description") ?? "");

  const supabase = createServerSupabase();
  await supabase.from("gifts").insert({ title, price, description });
}

export async function deleteGift(formData: FormData) {
  await requireRole(["admin"]);
  const id = Number(formData.get("id"));
  const supabase = createServerSupabase();
  await supabase.from("gifts").delete().eq("id", id);
}
