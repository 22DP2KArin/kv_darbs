"use client";

import { useEffect, useState } from "react";
import { updateProfile, getProfile } from "./actions";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [interests, setInterests] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getProfile();
      if (data) {
        setUsername(data.username ?? "");
        setAvatarUrl((data.avatar_url ?? "").trim());   // ← тут
        setHobbies((data.hobbies ?? []).join(", "));
        setInterests((data.interests ?? []).join(", "));
      }
      setLoading(false);
    })();
  }, []);


  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await updateProfile({
      username,
      avatarUrl,
      hobbies,
      interests,
    });
    setSaving(false);
  }

  if (loading) return <p className="p-4">Ielāde...</p>;

  return (
    <main className="mx-auto max-w-xl p-4 space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Profils</h1>

      <form onSubmit={onSubmit} className="space-y-3">
        <div className="space-y-1">
          <label className="block text-sm font-medium">Lietotājvārds</label>
          <input
            className="input w-full"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Avatar URL</label>
          <input
            className="input w-full"
            value={avatarUrl}
            onChange={e => setAvatarUrl(e.target.value)}
            placeholder="https://..."
          />
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="Avatar"
              className="mt-2 h-24 w-24 rounded-full object-cover"
            />
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Hobiji (caur komatu)
          </label>
          <input
            className="input w-full"
            value={hobbies}
            onChange={e => setHobbies(e.target.value)}
            placeholder="gaming, coding, sports"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Intereses (caur komatu)
          </label>
          <input
            className="input w-full"
            value={interests}
            onChange={e => setInterests(e.target.value)}
            placeholder="anime, travel"
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={saving}
        >
          Saglabāt
        </button>
      </form>
    </main>
  );
}
