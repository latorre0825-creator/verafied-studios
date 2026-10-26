import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-12">
      <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold text-white">
            VeRa<span className="text-ember-500">FIED</span> Studios
          </p>
          <p className="mt-1 text-sm text-slate-500">{siteConfig.motto}</p>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.founders}. Florida.
        </p>
      </div>
    </footer>
  );
}
