// app/login/actions.ts
"use server";

import { createServerSupabaseForActions } from "@/lib/supabase/server-actions";
import { redirect } from "next/navigation";

// Galvenā lietotāja pieteikšanās funkcija
export async function loginAction(formData: FormData) {
  // Iegūst e-pastu no formas datiem
  const email = String(formData.get("email"));

  // Iegūst paroli no formas datiem
  const password = String(formData.get("password"));

  // Izveido Supabase servera klientu
  const supabase = await createServerSupabaseForActions();

  // Veic lietotāja autentifikāciju
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // Apstrādā pieteikšanās kļūdu
  if (error) {
    console.error("LOGIN ERROR", error);
    throw new Error(error.message);
  }

  // Izvada veiksmīgas pieteikšanās informāciju
  console.log("LOGIN OK", data);

  // Novirza lietotāju uz sākumlapu
  redirect("/");
}