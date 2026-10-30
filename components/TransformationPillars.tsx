"use client";

import {
  Apple,
  Dumbbell,
  TrendingUp,
  HeartPulse,
  Moon,
  Pill,
  Brain,
  BarChart3,
  LucideIcon,
} from "lucide-react";

type Pillar = {
  title: string;
  icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  { title: "Nutrition Protocol", icon: Apple },
  { title: "Resistance Training", icon: Dumbbell },
  { title: "Progressive Overload", icon: TrendingUp },
  { title: "Hormonal & Metabolic Health", icon: HeartPulse },
  { title: "Recovery & Sleep", icon: Moon },
  { title: "Supplement Strategy", icon: Pill },
  { title: "Habit Coaching", icon: Brain },
  { title: "Progress Tracking", icon: BarChart3 },
];

function PillarCard({ title, icon: Icon }: Pillar) {
  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        gap-2
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-950
        py-4
        px-3
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--gold)]
        hover:bg-zinc-900
      "
    >
      <Icon
        size={18}
        className="
          text-[var(--gold)]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <h3 className="text-[13px] font-medium leading-5 text-white">
        {title}
      </h3>
    </div>
  );
}

export default function TransformationPillars() {
  return (
    <section
      id="services"
      className="bg-black py-10"
    >
      <div className="container-custom">
        <div className="mb-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[5px] text-[var(--gold)]">
            What You Get
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            What's Included
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {PILLARS.map((pillar) => (
            <PillarCard
              key={pillar.title}
              {...pillar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}