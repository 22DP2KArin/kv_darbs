// app/login/actions.ts
"use server";

import { createServerSupabaseForActions } from "@/lib/supabase/server-actions";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const supabase = await createServerSupabaseForActions();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("LOGIN ERROR", error);
    throw new Error(error.message);
  }

  console.log("LOGIN OK", data);

  redirect("/"); 
}
