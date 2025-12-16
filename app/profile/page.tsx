import { getCurrentProfile } from "@/lib/auth";
import { updateProfile } from "./actions";

export default async function ProfilePage() {
  const rawProfile = await getCurrentProfile();
  const profile = rawProfile as any;

  if (!profile) return <div>Jāpiesakās sistēmā.</div>;

  return (
    <main className="mx-auto max-w-lg space-y-4">
      <h1 className="text-2xl font-bold">Profila rediģēšana</h1>
      <form action={updateProfile} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Lietotājvārds</label>
          <input
            className="input"
            name="username"
            defaultValue={profile.username}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Intereses (komatiem atdalītas)
          </label>
          <input
            className="input"
            name="interests"
            defaultValue={(profile.interests ?? []).join(", ")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Hobiji (komatiem atdalīti)
          </label>
          <input
            className="input"
            name="hobbies"
            defaultValue={(profile.hobbies ?? []).join(", ")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Profila foto</label>
          <input className="block w-full text-sm" type="file" name="avatar" />
        </div>
        <button className="btn-primary" type="submit">
          Saglabāt
        </button>
      </form>
    </main>
  );
}
