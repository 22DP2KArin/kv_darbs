// app/profile/actions.ts
"use server";

import { createServerSupabaseForActions } from "@/lib/supabase/server-actions";
import { redirect } from "next/navigation";

export type Profile = {
  // Profila ieraksta unikālais identifikators (sasaistīts ar auth.users id)
  id: string;
  // Lietotājvārds, ko lietotājs izvēlas savam profilam
  username: string | null;
  // Profila attēla URL adrese
  avatar_url: string | null;
  // Lietotāja hobiju saraksts (glabājas kā masīvs)
  hobbies: string[] | null;
  // Lietotāja interešu saraksts (glabājas kā masīvs)
  interests: string[] | null;
};

// Funkcija nolasa pašreizējā lietotāja profila datus no "profiles" tabulas.
// Ja lietotājs nav pieteicies vai profils nav atrodams, tiek atgriezts null.
export async function getProfile(): Promise<Profile | null> {
  // Izveido Supabase servera klientu darbam servera pusē
  const supabase = await createServerSupabaseForActions();

  // Nolasa pašreiz pieteikušos lietotāju no autentifikācijas sistēmas
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  // Ja lietotājs nav pieteicies vai ir kļūda, profils netiek ielādēts
  if (userError || !user) {
    return null;
  }

  // Nolasa profila ierakstu no "profiles" tabulas pēc lietotāja id
  const { data: profile, error } = await supabase
    .from("profiles" as any)
    .select("*")
    .eq("id", user.id)
    .single();

  // Ja rodas kļūda, tā tiek padota tālāk kā izņēmums
  if (error) {
    throw new Error(error.message);
  }

  // Atgriež profila datus tipa Profile formātā
  return profile as Profile;
}

// Funkcija atjaunina pašreizējā lietotāja profila datus.
// Teksta laukus "hobbies" un "interests" pārvērš masīvos un saglabā "profiles" tabulā.
export async function updateProfile(params: {
  username: string;
  avatarUrl: string;
  hobbies: string;
  interests: string;
}) {
  // Izveido Supabase servera klientu darbam servera pusē
  const supabase = await createServerSupabaseForActions();

  // Nolasa pašreiz pieteikušos lietotāju
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  // Ja lietotājs nav pieteicies, profilu atjaunināt nav iespējams
  if (userError || !user) {
    console.error("Nav pieteicies");
    return;
  }

  // Pārvērš hobiju tekstu par masīvu (atdala pēc komatiem, noņem liekās atstarpes)
  const hobbiesArray = params.hobbies
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean);

  // Pārvērš interešu tekstu par masīvu (atdala pēc komatiem, noņem liekās atstarpes)
  const interestsArray = params.interests
    .split(",")
    .map((i) => i.trim())
    .filter(Boolean);

  // Saglabā vai atjaunina profila ierakstu "profiles" tabulā, izmantojot upsert
  const { error } = await supabase
    .from("profiles" as any)
    .upsert({
      id: user.id,
      username: params.username || null,
      avatar_url: params.avatarUrl || null,
      hobbies: hobbiesArray,
      interests: interestsArray,
    } as any);

  // Ja saglabāšanas laikā rodas kļūda, tā tiek padota kā izņēmums
  if (error) {
    throw new Error(error.message);
  }

  // Pēc veiksmīgas profila atjaunināšanas lietotājs tiek novirzīts uz sākumlapu
  redirect("/");
}