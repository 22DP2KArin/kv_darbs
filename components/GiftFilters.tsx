"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function GiftFilters() {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [minPrice, setMinPrice] = useState(params.get("min") ?? "");
  const [maxPrice, setMaxPrice] = useState(params.get("max") ?? "");

  useEffect(() => {
    setQuery(params.get("q") ?? "");
  }, [params]);

  function applyFilters() {
    const search = new URLSearchParams(params.toString());
    query ? search.set("q", query) : search.delete("q");
    minPrice ? search.set("min", minPrice) : search.delete("min");
    maxPrice ? search.set("max", maxPrice) : search.delete("max");
    router.push(`?${search.toString()}`);
  }

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      <input
        className="input max-w-xs"
        placeholder="Meklēt pēc nosaukuma..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <input
        className="input w-28"
        type="number"
        placeholder="Min €"
        value={minPrice}
        onChange={e => setMinPrice(e.target.value)}
      />
      <input
        className="input w-28"
        type="number"
        placeholder="Max €"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
      />
      <button className="btn-primary" type="button" onClick={applyFilters}>
        Filtrēt
      </button>
    </div>
  );
}
