"use client";

import {
  House,
  Images,
  Dumbbell,
  Phone,
  Mail,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
    icon: House,
  },
  {
    label: "Transformations",
    href: "#transformations",
    icon: Images,
  },
  {
    label: "Services",
    href: "#services",
    icon: Dumbbell,
  },
  {
    label: "Newsletter",
    href: "/newsletter",
    icon: Mail,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Phone,
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <div>
          <h1
            className="gold-text text-4xl font-bold tracking-[8px]"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            NAMASLAY
          </h1>

          <p className="text-xs uppercase tracking-[5px] text-zinc-400">
            Premium Fitness Coaching
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-[var(--gold)]"
            >
              <Icon
                size={18}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}