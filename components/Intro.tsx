export default function Intro() {
  return (
    <section
      className="relative -mt-16 bg-white z-20"
      style={{
        paddingTop: "12px",
        paddingBottom: "32px",
      }}
    >
      <div className="container-custom grid items-start gap-4 md:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold uppercase leading-tight text-black md:text-4xl">
            THIS ISN'T JUST COACHING.
            <br />
            THIS IS A TRANSFORMATION.
          </h2>

          <p className="mt-3 max-w-lg text-base leading-7 text-gray-700">
            At Namaslay, we go beyond workouts and diets. We build systems that
            create lasting change in your body, mind and lifestyle.
          </p>
        </div>

        {/* Right */}
        <div className="flex h-full items-center justify-center md:justify-center">
          <a
            href="#contact"
            className="rounded-md bg-[var(--gold)] px-8 py-3 font-semibold uppercase text-black transition hover:opacity-90"
          >
            Enquire With Us
          </a>
        </div>
      </div>
    </section>
  );
}