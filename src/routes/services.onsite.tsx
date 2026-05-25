import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/enquiry-form";
import { SERVICE_CENTRES, COVERED_STATES } from "@/data/service-centres";
import { MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/services/onsite")({
  head: () => ({ meta: [
    { title: "Onsite Service — Pan-India Pump Service | Paarth" },
    { name: "description", content: "20+ service centres, 200+ engineers across India. Find your nearest Paarth service centre and book a service request." },
  ]}),
  component: Onsite,
});

function Onsite() {
  const [state, setState] = useState<string>("Gujarat");
  const centres = useMemo(() => SERVICE_CENTRES.filter((s) => s.state === state), [state]);

  return (
    <>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "Onsite Service" }]} />
      <PageHero eyebrow="Onsite Service" title="20+ centres. 200+ engineers. Pan-India."
        subtitle="When something needs a wrench, someone is close by." />

      <section className="section-y">
        <div className="container-x">
          <div className="rounded-lg border bg-white p-6 md:p-8">
            <label className="block">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-charcoal">Find your nearest service centre</span>
              <select value={state} onChange={(e) => setState(e.target.value)} className="input mt-2 max-w-md">
                {COVERED_STATES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {centres.map((c) => (
                <div key={c.city} className="rounded-md border bg-secondary p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="size-4" />
                    <h3 className="font-display font-semibold text-charcoal">{c.city}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.address}</p>
                  <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"><Phone className="size-3.5" /> {c.phone}</a>
                </div>
              ))}
              {centres.length === 0 && <p className="text-muted-foreground">No centres listed in {state} yet. Submit a service request and we'll dispatch from the nearest state.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="alt-bg section-y">
        <div className="container-x">
          <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">Raise a service request</h2>
          <p className="mt-2 text-muted-foreground">An engineer will call you back within 24 hours.</p>
          <div className="mt-8 max-w-3xl">
            <EnquiryForm defaultType="Service Request" />
          </div>
        </div>
      </section>
    </>
  );
}
