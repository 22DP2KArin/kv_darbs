"use client";

import { useEffect, useState } from "react";
import { updateProfile, getProfile, type Profile } from "./actions";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [interests, setInterests] = useState("");

  useEffect(() => {
    (async () => {
      const data: Profile | null = await getProfile();
      if (data) {
        setUsername(data.username ?? "");
        setAvatarUrl((data.avatar_url ?? "").trim());
        setHobbies((data.hobbies ?? []).join(", "));
        setInterests((data.interests ?? []).join(", "));
      }
      setLoading(false);
    })();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    await updateProfile({ username, avatarUrl, hobbies, interests });
    setSaving(false);
  }

  if (loading) return <p>Ielāde...</p>;

  return (
    <main className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Mans profils</h1>

      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Lietotājvārds</label>
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Avatar URL</label>
          <input
            className="input"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Hobiji (caur komatu)
          </label>
          <input
            className="input"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Intereses (caur komatu)
          </label>
          <input
            className="input"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </div>

        <button disabled={saving} className="btn-primary w-full">
          {saving ? "Saglabāju..." : "Saglabāt"}
        </button>
      </form>
    </main>
  );
}
