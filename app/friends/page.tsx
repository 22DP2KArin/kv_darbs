import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";
import FriendList from "@/components/FriendList";

type Friend = {
  user_id: string;
  friend_id: string;
  profiles: {
    id: string;
    username: string;
  };
};

export default async function FriendsPage() {
  const user = await requireAuth();

  const supabase = await createServerSupabase();

  const { data } = await supabase
    .from("friends")
    .select("user_id, friend_id, profiles:friend_id (id, username)")
    .eq("user_id", user.id);

  const friends: Friend[] =
    data
      ?.map((row: any) => {
        const rawProfiles = row.profiles;
        const p = Array.isArray(rawProfiles) ? rawProfiles[0] : rawProfiles ?? null;

        if (!p) return null;

        return {
          user_id: String(row.user_id),
          friend_id: String(row.friend_id),
          profiles: {
            id: String(p.id),
            username: String(p.username),
          },
        };
      })
      .filter(Boolean) as Friend[] ?? [];

  return (
    <main className="mx-auto max-w-3xl space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Draugi</h1>
      <FriendList friends={friends} />
    </main>
  );
}
