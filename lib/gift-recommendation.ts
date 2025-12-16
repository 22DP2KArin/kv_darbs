import { createServerSupabase } from "@/lib/supabase/server";

export async function generateGiftIdeas(userId: string) {
  const supabase = createServerSupabase();
  const anySupabase: any = supabase;

  // профиль без строгих типов
  const { data: profileData } = await anySupabase
    .from("profiles")
    .select("interests, hobbies")
    .eq("id", userId)
    .single();

  const profile: any = profileData ?? {};
  const interests = profile.interests ?? [];
  const hobbies = profile.hobbies ?? [];

  // вызов RPC без строгих типов
  const { data: giftsData, error } = await anySupabase.rpc(
    "get_recommended_gifts",
    {
      p_interests: interests,
      p_hobbies: hobbies
    }
  );

  if (error) {
    throw new Error(error.message);
  }

  return (giftsData ?? []) as any[];
}
