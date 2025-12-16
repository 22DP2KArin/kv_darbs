"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const username = String(formData.get("username"));

  const supabase = createServerSupabase();
  const anySupabase: any = supabase;

  const { data, error } = await anySupabase.auth.signUp({
    email,
    password
  });

  if (error || !data.user) {
    throw new Error("Neizdevās reģistrācija");
  }

  const userId = data.user.id as string;

  const { error: insertError } = await anySupabase
    .from("profiles")
    .insert({
      id: userId,
      username
    });

  if (insertError) {
    throw new Error(insertError.message);
  }

  redirect("/");
}
