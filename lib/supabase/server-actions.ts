// lib/supabase/server-actions.ts
import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { Database } from "@/types/db";

// Funkcija izveido Supabase servera klientu Server Actions vajadzībām.
// Klients izmanto cookies, lai uzturētu lietotāja autentifikācijas sesiju servera pusē.
export async function createServerSupabaseForActions() {
  // Iegūst piekļuvi pašreizējās pieprasījuma sesijas cookies
  const cookieStore = await cookies();

  // Izveido Supabase servera klientu ar datubāzes tipiem un cookies konfigurāciju
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Nolasa konkrētas cookie vērtību pēc nosaukuma
        get(name: string) {
          return cookieStore.get(name)?.value ?? "";
        },

        // Saglabā vai atjaunina cookie vērtību
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },

        // Noņem cookie, iestatot tai tukšu vērtību
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );

  // Atgriež konfigurēto Supabase servera klientu
  return supabase;
}