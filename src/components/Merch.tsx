"use client";

import { useState } from "react";
import { merch } from "@/lib/content";

export default function Merch() {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const buy = async (id: string) => {
    const size = selected[id] || merch.find(m => m.id === id)?.sizes[0] || "One size";
    setLoading(id);
    setNotice(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, size, quantity: 1 }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setNotice(data.message || "Reserved for the next drop — we'll notify you.");
    } catch {
      setNotice("Something went wrong. Try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="merch" className="py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-500">Limited Drops</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Wear the Studio</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Chameleon energy, Florida roots, Love Always. Hate Never. Drops announced first on Discord and YouTube.
          </p>
        </div>

        {notice && (
          <div className="mt-8 rounded-xl border border-ember-500/30 bg-ember-500/10 px-5 py-4 text-sm text-ember-100">
            {notice}
          </div>
        )}

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {merch.map((item) => (
            <div key={item.id} className="group rounded-2xl border border-white/10 bg-ink-900/50 p-6 transition-all hover:border-white/20 hover:bg-ink-900/70">
              <div className="aspect-square rounded-xl bg-ink-950 flex items-center justify-center overflow-hidden" style={{ boxShadow: `inset 0 0 48px ${item.accent}22` }}>
                <img src={item.image} alt={item.name} className="h-4/5 w-4/5 object-contain transition-transform group-hover:scale-105" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-white">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.copy}</p>
              <p className="mt-4 font-display text-2xl font-bold" style={{ color: item.accent }}>{item.price}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelected(prev => ({ ...prev, [item.id]: size }))}
                    className={`rounded-lg border px-3.5 py-1.5 text-xs font-medium transition ${
                      (selected[item.id] || item.sizes[0]) === size
                        ? "border-white bg-white text-ink-950"
                        : "border-white/15 text-slate-300 hover:border-white/30"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button
                onClick={() => buy(item.id)}
                disabled={loading === item.id}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-ember-500 to-ember-600 py-3.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
              >
                {loading === item.id ? "Processing…" : "Buy / Reserve"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
