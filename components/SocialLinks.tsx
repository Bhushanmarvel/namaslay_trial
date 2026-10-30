"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IconType } from "react-icons";

type Social = {
  name: string;
  href: string;
  icon: IconType;
  color: string;
};

const SOCIALS: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/namaslay_transforms?igsh=bXl0Z2tpbHRkNTR1",
    icon: FaInstagram,
    color: "#E4405F",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@bhushan_namaslay",
    icon: FaYoutube,
    color: "#FF0000",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Bhushan2412",
    icon: FaFacebookF,
    color: "#1877F2",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917020443962",
    icon: FaWhatsapp,
    color: "#25D366",
  },
];

function SocialIcon({
  href,
  name,
  icon: Icon,
  color,
}: Social) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="
        group
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-zinc-700
        bg-zinc-900
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <Icon
        size={22}
        style={{ color }}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div
      id="contact"
      className="rounded-2xl bg-black p-5 text-white shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[4px] text-[var(--gold)]">
        Connect With Us
      </p>

      <h2 className="mt-2 text-2xl font-bold leading-tight">
        Stay Connected
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        Follow us for transformations,
        workout tips and daily motivation.
      </p>

      <div className="mt-5 flex justify-center gap-4">
        {SOCIALS.map((social) => (
          <SocialIcon
            key={social.name}
            {...social}
          />
        ))}
      </div>

      <div className="mt-5 border-t border-zinc-800 pt-4">
        <p className="text-center text-[11px] text-zinc-500">
          © {new Date().getFullYear()} NAMASLAY
        </p>
      </div>
    </div>
  );
}