
import { ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function EnquiryForm() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold uppercase leading-tight text-zinc-900">
          Ready To Start Your Transformation?
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Take the first step towards a stronger, healthier and more confident you.
        </p>
      </div>

      <a
        href="https://wa.me/917020443962"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[var(--gold)] px-4 py-3 text-center font-semibold uppercase tracking-wide text-black transition hover:brightness-95"
      >
        <FaWhatsapp size={23} />
        Chat On WhatsApp
      </a>

      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
        <ShieldCheck size={13} />
        <span>Connect directly with our coaching team.</span>
      </div>
    </div>
  );
}
