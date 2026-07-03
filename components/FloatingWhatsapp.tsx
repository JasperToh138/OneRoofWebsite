"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function FloatingWhatsapp() {
  return (
    <a
      aria-label="Contact us on WhatsApp"
      className="focus-ring fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 animate-pulseRing items-center justify-center rounded-full bg-ocean text-white shadow-glow transition duration-300 hover:scale-105 hover:bg-ink sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      href={site.whatsappHref}
    >
      <MessageCircle className="h-6 w-6 sm:h-[26px] sm:w-[26px]" aria-hidden />
    </a>
  );
}
