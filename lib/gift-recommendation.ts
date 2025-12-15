import { createServerSupabase } from "@/lib/supabase/server";

export async function generateGiftIdeas(userId: string) {
  const supabase = createServerSupabase();
  const { data: profile } = await supabase
    .from("profiles")
    .select("interests, hobbies")
    .eq("id", userId)
    .single();

  if (!profile) return [];

  const { data } = await supabase.rpc("get_recommended_gifts", {
    p_interests: profile.interests ?? [],
    p_hobbies: profile.hobbies ?? []
  });

  return data ?? [];
}
