import { NextResponse } from "next/server";
import { createServerSupabaseForActions } from "@/lib/supabase/server-actions";

export async function POST() {
  const supabase = await createServerSupabaseForActions();

  await supabase.auth.signOut();

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return NextResponse.redirect(new URL("/", baseUrl));
}
