import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { ArrowRight, Cpu, Globe2, Wrench } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [
    { title: "Services — Monitoring, EPC & Onsite Support | Paarth" },
    { name: "description", content: "Mobile App & RMS monitoring, EPC project execution, and pan-India onsite service from Paarth Solar Pumps." },
  ]}),
  component: ServicesIndex,
});

const SERVICES = [
  { to: "/services/monitoring", icon: Cpu, t: "Mobile App & RMS", d: "Monitor your pump from anywhere — live status, energy, water output, remote ON/OFF." },
  { to: "/services/epc", icon: Globe2, t: "EPC Projects", d: "500+ EPC installations executed — for government schemes, farms and industrial clients." },
  { to: "/services/onsite", icon: Wrench, t: "Onsite Service", d: "20+ service centres and 200+ engineers — fast response across India." },
];

function ServicesIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <PageHero eyebrow="Services" title="Beyond the pump"
        subtitle="Hardware is half the story. Real-time monitoring, EPC project execution, and field-engineer support keep your installation running for years." />
      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.to} to={s.to} className="card-lift block rounded-lg border bg-white p-7">
              <div className="grid size-12 place-items-center rounded-md bg-primary text-white"><s.icon className="size-6" /></div>
              <h3 className="mt-5 font-display text-xl font-semibold text-charcoal">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
              <div className="mt-5 inline-flex items-center gap-1 font-display text-sm font-semibold text-primary">
                Learn more <ArrowRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
