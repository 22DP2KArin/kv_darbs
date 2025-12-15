"use client";

import { removeFriendAction } from "@/app/friends/actions";

type Friend = {
  user_id: string;
  friend_id: string;
  profiles: {
    id: string;
    username: string;
  };
};

export default function FriendList({ friends }: { friends: Friend[] }) {
  async function remove(friendId: string) {
    await removeFriendAction(friendId);
  }

  return (
    <div className="space-y-2">
      {friends.map(f => (
        <div
          key={f.friend_id}
          className="flex items-center justify-between rounded border p-2"
        >
          <span>{f.profiles.username}</span>
          <button
            className="text-sm text-red-600"
            onClick={() => remove(f.friend_id)}
          >
            Dzēst draugu
          </button>
        </div>
      ))}
    </div>
  );
}
