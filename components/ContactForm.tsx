"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);

    if (!form.name || !form.phone || !form.service || !form.message) {
      setError("Please complete your name, phone number, service needed, and message.");
      return;
    }

    setError("");
    // Connect a real email service or API route here when the backend is ready.
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "Not provided"}\nService: ${form.service}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `${site.emailHref}?subject=New%20Website%20Enquiry&body=${body}`;
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <form
      className="steel-card rounded-lg border border-ocean/10 bg-white p-6 shadow-soft"
      data-scroll-reveal="left"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Name
          <input
            className="focus-ring min-h-11 rounded-md border border-slate-300 px-3 py-2 text-base font-normal"
            onChange={(event) => updateField("name", event.target.value)}
            required
            type="text"
            value={form.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Phone number
          <input
            className="focus-ring min-h-11 rounded-md border border-slate-300 px-3 py-2 text-base font-normal"
            onChange={(event) => updateField("phone", event.target.value)}
            required
            type="tel"
            value={form.phone}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input
            className="focus-ring min-h-11 rounded-md border border-slate-300 px-3 py-2 text-base font-normal"
            onChange={(event) => updateField("email", event.target.value)}
            type="email"
            value={form.email}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Service needed
          <select
            className="focus-ring min-h-11 rounded-md border border-slate-300 px-3 py-2 text-base font-normal"
            onChange={(event) => updateField("service", event.target.value)}
            required
            value={form.service}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea
          className="focus-ring min-h-32 rounded-md border border-slate-300 px-3 py-2 text-base font-normal"
          onChange={(event) => updateField("message", event.target.value)}
          required
          value={form.message}
        />
      </label>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        Your information will only be used to respond to your enquiry. We do not sell or share your personal information.
        Maklumat anda hanya digunakan untuk membalas pertanyaan.
      </p>
      {error ? <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}
      {submitted ? (
        <p className="mt-4 rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          Thank you. Your enquiry is ready to send from your email app.
        </p>
      ) : null}
      <button
        className="shine-button focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-ocean px-5 py-3 text-sm font-bold text-white shadow-soft transition duration-300 hover:bg-ink hover:shadow-glow sm:w-auto"
        type="submit"
      >
        Submit Enquiry <Send className="ml-2 h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
