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
    <section id="top" className="relative isolate overflow-hidden pt-[calc(var(--nav-h)+4rem)]">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-verafied.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/80" />
        <div className="mesh-bg opacity-40" />
      </div>

      <div className="container-x relative pb-28 pt-8 md:pb-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-4 backdrop-blur-md">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-ember-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
              <ChameleonIcon className="h-3.5 w-3.5" />
              Est. {siteConfig.founded}
            </span>
            <span className="text-sm text-slate-300">
              {siteConfig.location} · Shipping worldwide
            </span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.75rem,7.5vw,5.75rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-white">
            We don't just build apps.
            <br />
            <span className="text-gradient">We build ecosystems.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
            {siteConfig.name} is a Florida-born creative and technology studio
            producing music, telehealth, native iOS & Android apps — and{" "}
            <span className="font-semibold text-white">Vera AI</span>, the chat
            assistant that powers all of it. Designed in-house. Engineered
            in-house. Shipped by us.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#ecosystem"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-ember-500 to-ember-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-ember-600/20 transition-all hover:scale-[1.02] hover:shadow-ember-600/30"
            >
              Explore our products
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#vera"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-ember-500/40 hover:bg-white/[0.07]"
            >
              Meet Vera AI
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Follow us
            </span>
            <div className="flex flex-wrap gap-2.5">
              {siteConfig.socials.map((social) => {
                const Icon = followIcons[social.label as keyof typeof followIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-ember-500/40 hover:bg-ember-500/10 hover:text-ember-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2">
                  <span className="block text-sm font-semibold text-slate-200">
                    {stat.label}
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
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
