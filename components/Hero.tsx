"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[75vh] min-h-[560px] overflow-hidden bg-black"
    >
      {/* Right Image */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
        <Image
          src="/images/hero.png"
          alt="Namaslay Coach"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black" />
      </div>

      {/* Left Content */}
      <div className="container-custom relative z-10 flex h-full items-center">
        <div className="max-w-xl">
          <h1
            className="font-black uppercase leading-[0.95] text-white"
            style={{
              fontSize: "clamp(2.2rem,5vw,5rem)",
            }}
          >
            Transform
            <br />
            Your Body.
            <br />
            <span className="gold-text">
              Elevate Your Life.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}