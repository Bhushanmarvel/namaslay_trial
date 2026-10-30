"use client";

import { useState } from "react";
import { Phone, ShieldCheck, User } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  phone: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);

  const updateField = (
    key: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]:
        key === "phone"
          ? value.replace(/\D/g, "")
          : value,
    }));
  };

  const isValid = () => {
    if (!form.name.trim()) {
      alert("Please enter your name.");
      return false;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  alert("Submitting...");
  

  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         name: form.name,
         phone: form.phone,
      }),
    });

    alert(`Status: ${response.status}`);

    const data = await response.json();

    console.log(data);
    alert(JSON.stringify(data));
  } catch (err) {
    console.error(err);
    alert("Fetch failed");
  }
};
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold uppercase leading-tight text-zinc-900">
          Ready To Start Your Transformation
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Fill in your details and we'll contact you shortly.
        </p>
      </div>
         
      <form
        onSubmit={handleSubmit}
        className="mt-5 space-y-3"
      >
        <InputField
          icon={<User size={18} />}
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            updateField("name", e.target.value)
          }
        />

        <InputField
          icon={<Phone size={18} />}
          placeholder="Phone Number"
          type="tel"
          maxLength={10}
          value={form.phone}
          onChange={(e) =>
            updateField("phone", e.target.value)
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="h-11 w-full rounded-xl bg-[var(--gold)] font-semibold uppercase tracking-wide text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Submitting..."
            : "Start My Transformation"}
        </button>
      </form>

      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
        <ShieldCheck size={13} />
        <span>Your information is 100% safe.</span>
      </div>
    </div>
  );
}

type InputFieldProps = {
  icon: React.ReactNode;
  value: string;
  placeholder: string;
  type?: string;
  maxLength?: number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function InputField({
  icon,
  value,
  placeholder,
  type = "text",
  maxLength,
  onChange,
}: InputFieldProps) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
        {icon}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        className="h-11 w-full rounded-xl border border-zinc-300 bg-white pl-11 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20"
      />
    </div>
  );
}