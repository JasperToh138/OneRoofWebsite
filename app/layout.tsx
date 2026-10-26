import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { Navbar } from "@/components/Navbar";
import { ScrollEffects } from "@/components/ScrollEffects";
import { serviceAreas, site } from "@/data/site";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Roofing Contractor Penang`,
    template: `%s | ${site.name}`,
  },
  description:
    "Roofing contractor Penang for roof repair, roof leaking repair, roof replacement, modern awning extension, awning contractor work, and waterproofing specialist services in Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh.",
  openGraph: {
    title: `${site.name} | Roofing Contractor Penang`,
    description:
      "Professional roof repair, modern awning extension, waterproofing, gutter, flashing, and steel structure solutions serving Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh.",
    url: site.url,
    siteName: site.name,
    images: [{ url: site.heroImage, width: 1200, height: 800, alt: site.tagline }],
    locale: "en_MY",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressCountry: "MY",
  },
  openingHours: ["Mo-Fr 08:30-17:30", "Sa 08:30-13:00"],
  areaServed: serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-MY">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <ScrollEffects />
        {children}
        <Footer />
        <FloatingWhatsapp />
        <SpeedInsights />
      </body>
    </html>
  );
}
