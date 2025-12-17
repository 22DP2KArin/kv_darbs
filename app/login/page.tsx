"use client";

import { useState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fd = new FormData(e.currentTarget);

    await loginAction(fd);

    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Pieteikšanās</h1>
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

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button disabled={loading} className="btn-primary w-full">
          {loading ? "Piesakos..." : "Pieteikties"}
        </button>
      </form>
    </main>
  );
}
