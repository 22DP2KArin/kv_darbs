"use client";

import { useState } from "react";
import { signup } from "./actions";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await signup(formData);
    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Reģistrācija</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="input" name="email" type="email" required placeholder="E-pasts" />
        <input className="input" name="password" type="password" required placeholder="Parole" />
        <input className="input" name="username" required placeholder="Lietotājvārds" />
        <button disabled={loading} className="btn-primary w-full">
          Izveidot kontu
        </button>
      </form>
    </main>
  );
}
