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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl" : "bg-ink-950/60 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-[var(--nav-h)] items-center justify-between">
        <a href="#top" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, "#top")}>
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
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full border-t border-white/10 bg-ink-950/95 backdrop-blur-xl px-6 py-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
