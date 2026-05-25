import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/enquiry-form";
import { site } from "@/data/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Paarth Solar Pumps — Ahmedabad, Gujarat" },
    { name: "description", content: "Get in touch with Paarth Solar Pumps. Call, WhatsApp, email, or submit an enquiry — we respond within 24 hours." },
  ]}),
  component: Contact,
});

function Contact() {
  const mapsSrc = `https://www.google.com/maps?q=${site.coords.lat},${site.coords.lng}&z=15&output=embed`;
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero eyebrow="Contact" title="Let's talk pumps" subtitle="Tell us what you need — irrigation, drinking water, EPC tender, or dealership. We reply within 24 hours." />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[2fr_3fr]">
          {/* INFO */}
          <div className="space-y-5">
            <Info icon={<MapPin />} label="Head Office" value={site.address} />
            <Info icon={<Phone />} label="Phone" value={<a href={`tel:${site.phoneRaw}`} className="hover:text-primary">{site.phone}</a>} />
            <Info icon={<Mail />} label="Email" value={<>
              <a href={`mailto:${site.email}`} className="block hover:text-primary">{site.email}</a>
              <a href={`mailto:${site.email2}`} className="block hover:text-primary">{site.email2}</a>
            </>} />
            <Info icon={<MessageCircle />} label="WhatsApp" value={
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 font-display text-sm font-semibold text-white">
                Chat on WhatsApp
              </a>
            } />

            <div className="overflow-hidden rounded-lg border">
              <iframe title="Paarth office map" src={mapsSrc} width="100%" height="280" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* FORM */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">Send us an enquiry</h2>
            <p className="mt-1 text-muted-foreground">All fields marked * are required.</p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-lg border bg-white p-5">
      <div className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">{icon}</div>
      <div className="min-w-0">
        <div className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1 text-charcoal">{value}</div>
      </div>
    </div>
  );
}
