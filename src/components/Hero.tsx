import { heroStats, siteConfig } from "@/lib/content";
import {
  ArrowIcon,
  ChameleonIcon,
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  SoundcloudIcon,
  SpotifyIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/Icons";

const followIcons = {
  YouTube: YoutubeIcon,
  TikTok: TiktokIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Spotify: SpotifyIcon,
  SoundCloud: SoundcloudIcon,
  Discord: DiscordIcon,
} as const;

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-[calc(var(--nav-h)+3rem)]">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-verafied.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/88 to-ink-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
        <div className="mesh-bg opacity-55" />
        <div className="grid-lines" />
        <div className="noise" />
      </div>

      <div className="container-x relative pb-24 pt-10 md:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-1.5 pl-1.5 pr-4 backdrop-blur-md">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-ember-600 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.15em] text-white">
              <ChameleonIcon className="h-3.5 w-3.5" />
              Est. {siteConfig.founded}
            </span>
            <span className="text-[12.5px] text-slate-300">
              {siteConfig.location} · Shipping worldwide
            </span>
          </div>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,7.2vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white">
            We don&apos;t just build apps.
            <br />
            <span className="text-gradient">We build ecosystems.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-slate-300">
            {siteConfig.name} is a Florida-born creative and technology studio
            producing music, telehealth, native iOS &amp; Android apps — and{" "}
            <span className="font-semibold text-white">Vera AI</span>, the chat
            assistant that powers all of it. Designed in-house. Engineered
            in-house. Shipped by us.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#ecosystem"
              className="shine group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-ember-500 to-ember-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_44px_-14px_rgba(255,107,44,0.95)] transition-transform duration-300 hover:scale-[1.02]"
            >
              Explore our products
              <ArrowIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#vera"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-ember-500/50 hover:bg-ember-500/10"
            >
              Meet Vera AI
              <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/20 text-[10px]">
                ●
              </span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Follow us
            </span>
            <div className="flex flex-wrap gap-2">
              {siteConfig.socials.map((social) => {
                const Icon = followIcons[social.label as keyof typeof followIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-ember-500/50 hover:bg-ember-500/10 hover:text-ember-400"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-9 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-[clamp(1.75rem,3.4vw,2.4rem)] font-bold leading-none tracking-tight text-white">
                  {stat.value}
                </dt>
                <dd className="mt-2">
                  <span className="block text-[13px] font-semibold text-slate-200">
                    {stat.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-slate-500">
                    {stat.detail}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
