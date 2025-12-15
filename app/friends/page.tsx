import { createServerSupabase } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth";
import FriendList from "@/components/FriendList";

export default async function FriendsPage() {
  const user = await requireAuth();
  const supabase = createServerSupabase();

  const { data: friends } = await supabase
    .from("friends")
    .select("user_id, friend_id, profiles:friend_id (id, username)")
    .eq("user_id", user.id);

  return (
    <main className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold">Draugi</h1>
        <form action="/friends/add" method="post" className="flex gap-2">
          <input
            className="input"
            name="username"
            placeholder="Lietotājvārds"
          />
          <button className="btn-primary" type="submit">
            Pievienot draugu
          </button>
        </form>
        <FriendList friends={(friends as any[]) ?? []} />
      </section>
    </main>
  );
}
