"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/content";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl" : ""
      }`}
    >
      <div className="container-x flex h-[var(--nav-h)] items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-ember-600 to-teal-500 font-display text-sm font-black text-white">
            VF
          </span>
          <span className="font-display text-[15px] font-bold tracking-[0.18em] text-white">
            VeRa<span className="text-ember-500">FIED</span>
            <span className="ml-1 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500">Studios</span>
          </span>
        </a>
        <nav className="hidden gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-slate-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          Menu
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-ink-950/95 px-6 py-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block py-2 text-slate-200" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
