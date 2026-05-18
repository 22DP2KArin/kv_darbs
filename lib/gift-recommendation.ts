// lib/gift-recommendation.ts
import { createServerSupabase } from "@/lib/supabase/server";

// Galvenā dāvanu ideju ģenerēšanas funkcija.
// Funkcija nolasa lietotāja profila datus un iegūst dāvanu sarakstu no datubāzes.
export async function generateGiftIdeas(userId: string) {
  // Izveido Supabase servera klientu darbam ar datubāzi
  const supabase = await createServerSupabase();

  // Nolasa lietotāja intereses un hobijus no "profiles" tabulas
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("interests, hobbies")
    .eq("id", userId)
    .single();

  // Ja profila nolasīšanas laikā rodas kļūda, tā tiek izvadīta konsolē
  if (profileError) {
    console.error("Profile error:", profileError.message);
  }

  // Ja profila dati nav pieejami, tiek izmantots tukšs objekts
  const profile: any = profileData ?? {};

  // Iegūst lietotāja interešu sarakstu
  const interests = profile.interests ?? [];

  // Iegūst lietotāja hobiju sarakstu
  const hobbies = profile.hobbies ?? [];

  // Diagnostikas nolūkos izvada nolasītos profila datus
  console.log("PROFILE:", { interests, hobbies });

  // Nolasa dāvanu sarakstu no "gifts" tabulas
  const { data: giftsData, error: giftsError } = await supabase
    .from("gifts")
    .select("id, title, price, description, image_url")
    .order("id", { ascending: true })
    .limit(30);

  // Ja dāvanu nolasīšanas laikā rodas kļūda, tiek izmests izņēmums
  if (giftsError) {
    throw new Error(giftsError.message);
  }

  // Atgriež iegūto dāvanu sarakstu
  return (giftsData ?? []) as any[];
}