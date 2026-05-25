import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { Building2, Droplets, Sprout, Sun } from "lucide-react";

export const Route = createFileRoute("/services/epc")({
  head: () => ({ meta: [
    { title: "EPC Solar Pump Projects — Paarth (500+ Installations)" },
    { name: "description", content: "End-to-end EPC for solar pumping projects: agriculture, drinking water, industrial, and government schemes. 500+ projects delivered." },
  ]}),
  component: EPC,
});

const TYPES = [
  { icon: Sprout, t: "Agricultural Solar Pumping" },
  { icon: Droplets, t: "Community Drinking Water" },
  { icon: Building2, t: "Industrial Solar" },
  { icon: Sun, t: "Government Scheme Installations" },
];

const CASES = [
  { t: "PM-KUSUM Component B", s: "Rajasthan", c: 1240, hp: "5 HP", y: 2024, o: "Off-grid solar pumps for 1,240 farmers across 6 districts." },
  { t: "Village Drinking Water", s: "Gujarat", c: 320, hp: "3 HP", y: 2023, o: "Replaced diesel-powered borewells in 320 villages." },
  { t: "Industrial Process Water", s: "Maharashtra", c: 18, hp: "15 HP", y: 2023, o: "Solar-AC submersible array for textile plant cooling tower." },
  { t: "Tribal Belt Water Access", s: "Madhya Pradesh", c: 540, hp: "2 HP", y: 2022, o: "Hand-pump replacement program with surface solar pumps." },
];

function EPC() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "EPC Projects" }]} />
      <PageHero eyebrow="EPC Projects" title="500+ EPC installations delivered" subtitle="From single-village drinking water schemes to multi-thousand-pump KUSUM tenders — Paarth has designed, supplied and commissioned across India." />

      <section className="section-y">
        <div className="container-x grid gap-6 sm:grid-cols-3">
          {[{k:"500+",v:"EPC Projects"},{k:"Pan-India",v:"Active in 12 states"},{k:"42,000+",v:"Pumps deployed via projects"}].map((s) => (
            <div key={s.v} className="rounded-lg border bg-white p-6 text-center">
              <div className="font-display text-3xl font-bold text-primary">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="alt-bg section-y">
        <div className="container-x">
          <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">Project types</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {TYPES.map((t) => (
              <div key={t.t} className="rounded-lg border bg-white p-5 text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-md bg-primary/10 text-primary"><t.icon className="size-6" /></div>
                <h3 className="mt-3 font-display font-semibold text-charcoal">{t.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">Case studies</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {CASES.map((c) => (
              <div key={c.t} className="card-lift rounded-lg border bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="hp-pill">{c.s}</span>
                  <span className="text-xs text-muted-foreground">Completed {c.y}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-charcoal">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.o}</p>
                <div className="mt-4 flex gap-6 border-t pt-4 text-sm">
                  <div><span className="font-bold text-primary">{c.c.toLocaleString("en-IN")}</span> pumps</div>
                  <div><span className="font-bold text-primary">{c.hp}</span> avg.</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-lg bg-charcoal p-8 text-white">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="font-display text-2xl font-semibold">Have an EPC project?</h3>
                <p className="mt-1 text-white/80">Talk to our project team about your tender or BOQ.</p>
              </div>
              <Link to="/contact" className="btn-primary">Talk to Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
