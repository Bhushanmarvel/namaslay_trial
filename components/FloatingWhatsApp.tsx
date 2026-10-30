"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      <span
        className="
          mb-2
          rounded-full
          bg-white
          px-3
          py-1
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-[#25D366]
          shadow-lg
        "
         style={{
          backgroundColor: "#C8A96A",
          color: "#111111",
          }}
      >
        DM "TRANSFORM"
      </span>

      <a
        href="https://wa.me/917020443962?text=Hi%20I%20want%20to%20know%20more%20about%20your%20fitness%20program."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-2xl
          active:scale-95
        "
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}