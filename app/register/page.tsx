"use client";

import { useState } from "react";
import { signup } from "./actions";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      await signup(formData); // при успехе будет redirect("/profile")
    } catch (err: any) {
      setError(err?.message ?? "Neizdevās reģistrācija");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Reģistrācija</h1>

      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="input"
          name="email"
          type="email"
          required
          placeholder="E-pasts"
        />
        <input
          className="input"
          name="password"
          type="password"
          required
          placeholder="Parole"
        />
        <input
          className="input"
          name="username"
          required
          placeholder="Lietotājvārds"
        />

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button disabled={loading} className="btn-primary w-full">
          {loading ? "Izveidoju..." : "Izveidot kontu"}
        </button>
      </form>
    </main>
  );
}
