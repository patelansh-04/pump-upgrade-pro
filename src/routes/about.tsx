import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { IndiaMap } from "@/components/india-map";
import factory from "@/assets/about-factory.jpg";
import { Award, Factory, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Our Story — Paarth Solar Pumps (Since 1991)" },
    { name: "description", content: "Founded in 1991 by Mr. Himmat Patel. From the first V4 submersible pump to today's solar BLDC range — three decades of Indian pump engineering." },
  ]}),
  component: About,
});

const TIMELINE = [
  { year: "1991", title: "Single-phase V4 Submersible", eff: ">50% efficiency", desc: "Mr. Himmat Patel founds Parth Pumps India in Ahmedabad." },
  { year: "1997", title: "Oil-filled V4", eff: ">60% efficiency", desc: "Improved cooling and bearing life for hot deep wells." },
  { year: "2015", title: "Solar BLDC / PMSM", eff: ">90% drive efficiency", desc: "Entry into solar pumping; MNRE empanelment follows." },
  { year: "Today", title: "Solar + RMS + IoT", eff: "99% MPPT", desc: "Full solar range plus real-time monitoring, deployed at 42,000+ sites." },
];

function About() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <PageHero eyebrow="Our Story" title="32 years of engineering Indian pumping"
        subtitle="From a single submersible model in 1991 to a full solar range trusted by Tata Power Solar and the Government of India."
        bgImage={factory} />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[40fr_60fr]">
          <div>
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
              <img src={factory} alt="Paarth manufacturing facility" loading="lazy" className="size-full object-cover" />
            </div>
          </div>
          <div>
            <div className="eyebrow">Founder</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal">Mr. Himmat Patel</h2>
            <p className="mt-4 leading-relaxed">
              In 1991, Mr. Himmat Patel set out with a simple conviction: Indian farmers
              deserve a pump that doesn't break in the first hot season. Starting with a
              single-phase V4 submersible, his team built reliability into every weld.
            </p>
            <p className="mt-4 leading-relaxed">
              Three decades later, Paarth is one of the country's largest pump manufacturers — but
              the conviction hasn't changed. Every pump is still type-tested in our own facility before it ships.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="alt-bg section-y">
        <div className="container-x">
          <div className="eyebrow">Product Evolution</div>
          <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal md:text-4xl">Four turning points in 32 years</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {TIMELINE.map((t) => (
              <div key={t.year} className="rounded-lg border bg-white p-6">
                <div className="font-display text-3xl font-bold text-primary">{t.year}</div>
                <div className="mt-2 font-display font-semibold text-charcoal">{t.title}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-eco">{t.eff}</div>
                <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { t: "Mission", d: "Bring affordable, durable water-pumping to every Indian farm and village." },
            { t: "Vision", d: "Replace the diesel-pump economy with a solar one — pump by pump, state by state." },
            { t: "Values", d: "Honest specifications. Engineered conservatively. Serviced locally." },
          ].map((b) => (
            <div key={b.t} className="rounded-lg border-l-4 border-primary bg-secondary p-6">
              <h3 className="font-display text-xl font-semibold text-charcoal">{b.t}</h3>
              <p className="mt-2 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="alt-bg section-y">
        <div className="container-x">
          <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">Three in-house manufacturing units</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { t: "Motor Unit", s: "18,000+ sq.ft." },
              { t: "Pump Unit", s: "16,500+ sq.ft." },
              { t: "Controller Unit", s: "8,000+ sq.ft." },
            ].map((f) => (
              <div key={f.t} className="rounded-lg border bg-white p-6">
                <Factory className="size-8 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">{f.t}</h3>
                <div className="text-2xl font-bold text-primary">{f.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-y">
        <div className="container-x">
          <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">Certifications</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { t: "IEC 62253", d: "International standard for solar-pumping systems. Independently type-tested." },
              { t: "MNRE Approved", d: "Empanelled supplier under PM KUSUM — eligible for central subsidy." },
              { t: "ISO 9001:2015", d: "Quality management system audited annually — process consistency you can audit." },
            ].map((c) => (
              <div key={c.t} className="rounded-lg border bg-white p-6">
                <div className="grid size-12 place-items-center rounded-md bg-primary/10 text-primary"><Award className="size-6" /></div>
                <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  <ShieldCheck className="size-4" /> Download Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt-bg section-y">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">Pan-India presence</h2>
            <p className="mt-3 text-muted-foreground">Active in Gujarat, Rajasthan, MP, Maharashtra, Karnataka, Telangana, TN, UP, Bihar, AP, Punjab, Haryana — and growing.</p>
          </div>
          <IndiaMap />
        </div>
      </section>
    </>
  );
}
