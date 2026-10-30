const items = [
  "ExoVet",
  "Vera AI",
  "VeRaFIED Music App",
  "Chameleon Widgets",
  "VeRaFIED THE BAND",
  "Love Always. Hate Never.",
  "Creation with Care",
  "Florida → World",
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="relative border-y border-white/10 bg-ink-900/50 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-12 pr-12">
          {track.map((item, i) => (
            <span key={i} className="flex shrink-0 items-center gap-12">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {item}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-ember-500 to-violet-500" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
