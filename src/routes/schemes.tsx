import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/enquiry-form";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/schemes")({
  head: () => ({ meta: [
    { title: "Government Schemes — PM KUSUM & Drinking Water | Paarth" },
    { name: "description", content: "PM KUSUM subsidy, state drinking water projects — Paarth is an MNRE-empanelled supplier. Check eligibility and apply." },
  ]}),
  component: Schemes,
});

function Schemes() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Schemes" }]} />
      <PageHero eyebrow="Government Schemes" title="Up to 60% central subsidy on solar pumps"
        subtitle="Under PM KUSUM and state drinking water programmes, eligible farmers and panchayats can get a Paarth solar pump at a fraction of the retail price." />

      <section className="section-y">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <SchemeCard
            tag="PM KUSUM"
            title="Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan"
            subsidy="Up to 60% subsidy (30% Centre + 30% State)"
            who={["Individual farmers", "Water user associations", "Farmer producer organisations", "Cooperatives"]}
            how={["Submit an enquiry below with your state and HP requirement", "Paarth team confirms eligibility and quotes", "We file the subsidy paperwork on your behalf", "Installation in 30–60 days"]}
          />
          <SchemeCard
            tag="State Drinking Water"
            title="State Drinking Water Projects"
            subsidy="100% government-funded (panchayat-level tenders)"
            who={["Gram Panchayats", "Block Development Offices", "Water resource departments"]}
            how={["Floats as a state tender", "Paarth participates as MNRE-approved bidder", "Supply + commissioning + 5-year AMC included"]}
          />
        </div>
      </section>

      <section className="alt-bg section-y">
        <div className="container-x">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <div className="font-display text-5xl font-bold text-primary">42,000+</div>
              <p className="mt-2 font-display text-lg font-semibold text-charcoal">pump sets supplied to government schemes</p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <div className="flex flex-wrap gap-3">
                <a href="https://pmkusum.mnre.gov.in" target="_blank" rel="noreferrer" className="btn-outline">PM KUSUM Portal <ArrowUpRight className="size-4" /></a>
                <a href="https://mnre.gov.in" target="_blank" rel="noreferrer" className="btn-outline">MNRE Website <ArrowUpRight className="size-4" /></a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Official government portals for cross-verification of scheme details, subsidy %, and eligibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">Check your eligibility</h2>
          <p className="mt-2 text-muted-foreground">Tell us your state and we'll get back with the exact subsidy and process.</p>
          <div className="mt-8 max-w-3xl">
            <EnquiryForm defaultType="Government / Scheme" />
          </div>
        </div>
      </section>
    </>
  );
}

function SchemeCard({ tag, title, subsidy, who, how }: { tag: string; title: string; subsidy: string; who: string[]; how: string[] }) {
  return (
    <div className="rounded-lg border bg-white p-7">
      <div className="hp-pill">{tag}</div>
      <h3 className="mt-3 font-display text-2xl font-semibold text-charcoal">{title}</h3>
      <div className="mt-3 rounded-md bg-eco/10 px-4 py-2 font-display text-sm font-semibold text-eco">{subsidy}</div>
      <div className="mt-5">
        <div className="eyebrow text-charcoal">Who can apply</div>
        <ul className="mt-2 space-y-1.5">
          {who.map((w) => <li key={w} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-eco" /> {w}</li>)}
        </ul>
      </div>
      <div className="mt-5">
        <div className="eyebrow text-charcoal">How Paarth helps</div>
        <ol className="mt-2 space-y-2">
          {how.map((h, i) => (
            <li key={h} className="flex gap-3 text-sm">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">{i + 1}</span>
              <span>{h}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
