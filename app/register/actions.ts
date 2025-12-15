"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const username = String(formData.get("username"));

  const supabase = createServerSupabase();

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });
  if (error || !data.user) {
    throw new Error("Neizdevās reģistrācija");
  }

  await supabase.from("profiles").insert({
    id: data.user.id,
    username
  });

  redirect("/");
}
