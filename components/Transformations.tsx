"use client";

import Image from "next/image";

const transformations = [
  { id: 1, image: "/images/Transformations/Client1.jpeg" },
  { id: 2, image: "/images/Transformations/Client2.jpeg" },
  { id: 3, image: "/images/Transformations/Client3.jpeg" },
  { id: 4, image: "/images/Transformations/Client4.jpeg" },
  { id: 5, image: "/images/Transformations/Client5.jpeg" },
  { id: 6, image: "/images/Transformations/Client6.jpeg" },
];

export default function Transformations() {
  return (
    <section
      id="transformations"
      className="bg-white py-12"
    >
      <div className="container-custom">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[5px] text-[var(--gold)]">
            Real Client Transformations
          </p>

          <h2 className="mt-2 text-3xl font-bold text-zinc-900 md:text-4xl">
            Results That Speak For Themselves
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Every transformation reflects dedication, personalised coaching,
            proper nutrition and consistent training.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((client) => (
            <div
              key={client.id}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={client.image}
                alt={`Client Transformation ${client.id}`}
                width={600}
                height={700}
                className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}