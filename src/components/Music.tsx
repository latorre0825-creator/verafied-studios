export default function Music() {
  return (
    <section id="music" className="py-28 bg-ink-900/40">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-500">The Sound</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">The Music</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            VeRaFIED sound. Anthems of resilience, love, and truth. Stream everywhere. Watch on YouTube so the algorithm knows we’re real.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-ink-950">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/5cftPhbg14s"
              title="VeRaFIED Music"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <a
              href="https://www.youtube.com/@verafiedmusic"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Watch full catalog on YouTube →
            </a>
            <a
              href="https://soundcloud.com/venus-809407830"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-base font-semibold text-white transition hover:border-white/30"
            >
              Listen on SoundCloud →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
