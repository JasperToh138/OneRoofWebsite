import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Roofing Contractor Penang",
  description:
    "Contact One Roof Solutions for roofing contractor Penang enquiries, roof repair, roof leaking repair, roof replacement, modern awning extension, awning contractor, and waterproofing services in Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh.",
  openGraph: {
    title: "Contact One Roof Solutions Roofing Contractor Penang",
    description:
      "Request a roofing, awning, waterproofing, or steel structure quotation by WhatsApp for Penang and nearby service areas.",
  },
};

const contactItems = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Phone, label: "Phone 2", value: site.secondaryPhone, href: site.secondaryPhoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: site.whatsapp, href: site.whatsappHref },
  { icon: MessageCircle, label: "WhatsApp 2", value: site.secondaryWhatsapp, href: site.secondaryWhatsappHref },
  { icon: Mail, label: "Email", value: site.email, href: site.emailHref },
  { icon: MapPin, label: "Address", value: site.address },
  { icon: Clock, label: "Business hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-mist px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl" data-scroll-reveal="fade">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">Contact / Hubungi Kami</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-5xl">
            WhatsApp our roofing contractor team for Penang and nearby service areas
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Send photos, measurements, and a short description of the issue. Hantar gambar dan maklumat kerja melalui
            WhatsApp untuk respons yang cepat. We handle roof repair, modern awning extension, awning contractor,
            waterproofing, and roof replacement enquiries for Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <aside className="grid gap-5">
            {contactItems.map((item) => (
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft" data-scroll-reveal="up" key={item.label}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-mist text-ocean">
                    <item.icon size={22} aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.label}</p>
                    {item.href ? (
                      <a className="mt-1 block text-sm leading-6 text-slate-600 hover:text-ocean" href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-lg border border-dashed border-slate-300 bg-mist p-6" data-scroll-reveal="fade">
              <p className="text-sm font-bold text-ink">Google Maps embed placeholder</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Replace this block with the company Google Maps iframe after the map listing is confirmed.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
