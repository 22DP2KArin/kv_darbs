"use client";

import { useState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await loginAction(fd);
    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Pieteikšanās</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="input" name="email" type="email" required placeholder="E-pasts" />
        <input className="input" name="password" type="password" required placeholder="Parole" />
        <button disabled={loading} className="btn-primary w-full">
          Pieteikties
        </button>
      </form>
    </main>
  );
}
