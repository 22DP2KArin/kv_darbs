"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { adminSupabase } from "@/lib/supabase/admin";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const username = String(formData.get("username"));

  const supabase = await createServerSupabase();

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error || !data.user) {
    throw new Error(error?.message ?? "Neizdevās reģistrācija");
  }

  const userId = data.user.id as string;

  const { error: insertError } = await adminSupabase
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

