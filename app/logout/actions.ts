"use server";

import { redirect } from "next/navigation";
import { createServerSupabase } from "@/lib/supabase/server";

// Galvenā lietotāja izrakstīšanās funkcija
export async function logoutAction() {
  // Izveido Supabase servera klientu
  const supabase = await createServerSupabase();

  // Pārtrauc aktīvo lietotāja sesiju
  await supabase.auth.signOut();

  // Pēc izrakstīšanās novirza lietotāju uz pieteikšanās lapu
  redirect("/login");
}