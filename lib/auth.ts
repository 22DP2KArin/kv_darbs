// lib/auth.ts
import { redirect } from "next/navigation";
import { createServerSupabase } from "@/lib/supabase/server";
import type { Database } from "@/types/db";

// Pašreizējā lietotāja profila tips no datubāzes "profiles" tabulas
export type SessionUser = Database["public"]["Tables"]["profiles"]["Row"] | null;

// Funkcija iegūst pašreiz autentificēto lietotāju no Supabase sesijas.
export async function getSessionUser() {
  // Izveido Supabase servera klientu
  const supabase = await createServerSupabase();

  // Nolasa pašreizējo lietotāju no autentifikācijas sistēmas
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Atgriež autentificēto lietotāju
  return user;
}

// Funkcija iegūst pašreizējā lietotāja profila datus no "profiles" tabulas.
export async function getCurrentProfile() {
  // Izveido Supabase servera klientu
  const supabase = await createServerSupabase();

  // Nolasa pašreizējo lietotāju no autentifikācijas sistēmas
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Ja lietotājs nav pieteicies, profils netiek atgriezts
  if (!user) return null;

  // Nolasa lietotāja profila ierakstu no "profiles" tabulas pēc lietotāja id
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  // Ja profila nolasīšanas laikā rodas kļūda, tiek izmests izņēmums
  if (error) {
    throw new Error(error.message);
  }

  // Atgriež atrasto profila ierakstu
  return data;
}

// Funkcija pārbauda, vai lietotājs ir autentificēts.
// Ja lietotājs nav pieteicies, viņš tiek novirzīts uz pieteikšanās lapu.
export async function requireAuth() {
  // Izveido Supabase servera klientu
  const supabase = await createServerSupabase();

  // Nolasa pašreizējo lietotāju no autentifikācijas sistēmas
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Ja lietotājs nav autentificēts, notiek novirzīšana uz login lapu
  if (!user) {
    redirect("/login");
  }

  // Atgriež autentificēto lietotāju
  return user;
}