import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-16">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold tracking-tight text-white">
              VeRa<span className="text-ember-500">FIED</span> Studios
            </p>
            <p className="mt-2 text-sm text-slate-400">{siteConfig.motto}</p>
            <p className="mt-1 text-xs text-slate-500">{siteConfig.location}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {siteConfig.socials.slice(0, 5).map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.founders}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
