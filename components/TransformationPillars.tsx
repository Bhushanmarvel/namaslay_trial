
"use client";

import { Dumbbell, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function TransformationPillars() {
  return (
    <section id="services" className="bg-black py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Personal Coaching */}
          <a
            href="#contact"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-[var(--gold)] bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900"
          >
            <Dumbbell
              size={32}
              className="text-[var(--gold)]"
            />

            <h2 className="mt-6 text-3xl font-bold uppercase text-white">
              Program Details
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Explore our personalised fitness transformation program, 
              including workout planning, nutrition guidance, progress tracking and coaching support.
            </p>

            <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold uppercase text-[var(--gold)]">
              Explore Program
              <ArrowUpRight size={18} />
            </div>
          </a>

          {/* Digital Products */}
          <a
            href="https://plans.namaslay.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-[var(--gold)] bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900"
          >
            <ShoppingBag
              size={32}
              className="text-[var(--gold)]"
            />

            <h2 className="mt-6 text-3xl font-bold uppercase text-white">
              Digital Products
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Explore our diet plans, workout plans
              and complete fitness bundles.
            </p>

            <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold uppercase text-[var(--gold)]">
              Explore Products
              <ArrowUpRight size={18} />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
