import Navbar from "@/components/Navbar";

const NEWSLETTERS = [
  {
    id: 1,
    title: "6-Week Strength Kickstart",
    date: "2026-08-01",
    excerpt:
      "A progressive 6-week plan focused on compound lifts, mobility, and nutrition guidelines to build strength without burning out.",
    content:
      `Week 1-2: Build technique with 3x/week full-body sessions. Week 3-4: Increase intensity and introduce accessory work. Week 5-6: Peak week and deload. Nutrition guidance includes a small surplus, high protein, and simplified meal templates.`,
  },
  {
    id: 2,
    title: "Fat Loss Without Losing Muscle",
    date: "2026-07-10",
    excerpt:
      "Sustainable strategies for losing body fat while preserving lean mass — practical training and protein-focused nutrition.",
    content:
      `Use progressive resistance, maintain protein at ~1.6-2.2g/kg, include 2-3 cardio sessions of low-moderate intensity, and use weekly calorie targets instead of daily extremes.`,
  },
  {
    id: 3,
    title: "Gym Hacks: Faster Recovery",
    date: "2026-06-20",
    excerpt:
      "Small changes that speed up recovery: sleep, hydration, active rest and targeted mobility routines.",
    content:
      `Prioritise 7-9 hours sleep, add short mobility sessions post-workout, use contrast showers sparingly, and schedule active recovery days with walking or cycling.`,
  },
];

export default function NewsletterPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-28 pb-20">
        <div className="container-custom">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[5px] text-[var(--gold)]">
              Newsletter
            </p>

            <h1 className="mt-2 text-4xl font-bold text-zinc-900">
              Namaslay Newsletter
            </h1>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Practical tips, program outlines and short reads to help you
              progress in the gym.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6">
            {NEWSLETTERS.map((n) => (
              <article
                key={n.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900">
                      {n.title}
                    </h2>
                    <p className="mt-1 text-xs text-zinc-500">
                      {new Date(n.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-zinc-700">
                  {n.excerpt}
                </p>

                <details className="mt-4 text-sm text-zinc-700">
                  <summary className="cursor-pointer font-medium text-[var(--gold)]">
                    Read more
                  </summary>
                  <div className="mt-3 whitespace-pre-line">
                    {n.content}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
