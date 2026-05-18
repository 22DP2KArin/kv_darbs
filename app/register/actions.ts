"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { adminSupabase } from "@/lib/supabase/admin";
import { redirect } from "next/navigation";

// Galvenā lietotāja reģistrācijas funkcija.
// Funkcija izveido jaunu lietotāju Supabase autentifikācijā
// un sākotnējo profila ierakstu "profiles" tabulā.
export async function signup(formData: FormData) {
  // Nolasa e-pastu, paroli un lietotājvārdu no reģistrācijas formas
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const username = String(formData.get("username"));

  // Izveido Supabase servera klientu autentifikācijas darbībām
  const supabase = await createServerSupabase();

  // Izveido jaunu lietotāju Supabase autentifikācijas sistēmā
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  // Ja reģistrācijas laikā rodas kļūda vai nav atgriezts lietotājs, tiek izmests izņēmums
  if (error || !data.user) {
    throw new Error(error?.message ?? "Neizdevās reģistrācija");
  }

  // Jaunizveidotā lietotāja identifikators
  const userId = data.user.id as string;

  // Izveido sākotnējo profila ierakstu "profiles" tabulā ar lietotājvārdu
  const { error: insertError } = await adminSupabase
    .from("profiles")
    .insert({
      id: userId,
      username,
    });

  // Ja profila izveides laikā rodas kļūda, tiek izmests izņēmums
  if (insertError) {
    throw new Error(insertError.message);
  }

  // Pēc veiksmīgas reģistrācijas un profila izveides lietotājs tiek novirzīts uz profila lapu
  redirect("/profile");
}