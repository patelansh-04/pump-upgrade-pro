import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Award, Cpu, Factory, Globe2, ShieldCheck, Wrench, Quote, MapPin } from "lucide-react";
import heroFarm from "@/assets/hero-solar-field.jpg";
import heroInstall from "@/assets/hero-installation.jpg";
import heroCtrl from "@/assets/hero-controller.jpg";
import { Counter } from "@/components/counter";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/data/products";
import { IndiaMap } from "@/components/india-map";

export const Route = createFileRoute("/")({ component: Index });

const HERO_IMAGES = [heroFarm, heroInstall, heroCtrl];

function Index() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100vh] items-center overflow-hidden text-white md:min-h-[100vh]">
        {HERO_IMAGES.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`absolute inset-0 -z-10 size-full object-cover transition-opacity duration-1000 ${slide === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />
        <div className="diag-shape" />
        <div className="container-x relative py-24">
          <div className="eyebrow text-primary animate-fade-up">Solar Pumps · Since 1991</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[1.05] animate-fade-up md:text-6xl lg:text-7xl">
            Powering Agriculture<br />with Solar Strength
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90 animate-fade-up delay-150 md:text-xl">
            32 years of expertise · 42,000+ pump sets supplied across India ·
            Trusted by Tata Power Solar and EMMVEE.
          </p>
          <div className="mt-8 flex flex-col gap-3 animate-fade-up delay-300 sm:flex-row">
            <Link to="/products" className="btn-primary">Explore Products <ArrowRight className="size-4" /></Link>
            <Link to="/contact" className="btn-ghost-light">Get a Free Quote</Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all ${slide === i ? "w-10 bg-primary" : "w-5 bg-white/50"}`} />
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary text-white">
        <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-14">
          {[
            { icon: <Factory className="size-8" />, end: 42000, suffix: "+", label: "Solar Pump Sets Supplied" },
            { icon: <Award className="size-8" />, end: 32, suffix: " Yrs", label: "Years of Expertise" },
            { icon: <Globe2 className="size-8" />, end: 500, suffix: "+", label: "EPC Projects" },
            { icon: <MapPin className="size-8" />, end: 20, suffix: "+", label: "Service Centres" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto mb-2 grid size-12 place-items-center rounded-full bg-white/10">{s.icon}</div>
              <div className="font-display text-4xl font-bold md:text-5xl"><Counter end={s.end} suffix={s.suffix} /></div>
              <div className="mt-1 text-sm font-medium text-white/85">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="section-y">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">Product Range</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal md:text-4xl">Engineered for every pumping need</h2>
            <p className="mt-3 text-muted-foreground">From the borewell to the controller box — our seven product lines cover solar, agriculture, domestic and industrial water systems.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
          <div className="mt-8 text-center">
            <Link to="/products" className="btn-outline">View all products <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* WHY PAARTH */}
      <section className="alt-bg section-y">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">Why Choose Paarth</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal md:text-4xl">Six reasons farmers and EPCs choose us</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: <Cpu />, t: "99% MPPT Efficiency", d: "More water per watt — outperforms MNRE benchmark." },
              { i: <ShieldCheck />, t: "SS304 Build Quality", d: "Investment cast stainless steel, end-to-end." },
              { i: <Award />, t: "MNRE Government Approved", d: "Empanelled supplier under PM KUSUM scheme." },
              { i: <Wrench />, t: "Real-Time IoT Monitoring", d: "RMS dashboard — 54% of installed pumps online." },
              { i: <Globe2 />, t: "Pan-India Service", d: "20+ centres, 200+ engineers, 9+ states active." },
              { i: <Factory />, t: "32 Years of Excellence", d: "Three in-house manufacturing units, 42,500+ sq.ft." },
            ].map((c) => (
              <div key={c.t} className="card-lift rounded-lg border bg-white p-6">
                <div className="grid size-11 place-items-center rounded-md bg-primary/10 text-primary">{c.i}</div>
                <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">{c.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEME BAND */}
      <section className="bg-charcoal text-white">
        <div className="container-x grid items-center gap-8 py-16 md:grid-cols-2">
          <div className="flex flex-wrap gap-3">
            <div className="rounded-md border border-white/15 bg-white/5 px-4 py-3 font-display font-semibold">PM KUSUM</div>
            <div className="rounded-md border border-white/15 bg-white/5 px-4 py-3 font-display font-semibold">Drinking Water Projects</div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Supplying solar pumps to India's largest government schemes</h2>
            <p className="mt-3 text-white/80">42,000+ pump sets delivered to government and EPC projects pan-India.</p>
            <Link to="/schemes" className="btn-primary mt-6">Check Scheme Eligibility <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section-y">
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">Trusted By</div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-charcoal md:text-3xl">India's leading solar companies</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 items-center gap-8 md:grid-cols-5">
            {["Tata Power Solar", "EMMVEE", "MNRE", "PM KUSUM", "ISO 9001:2015"].map((l) => (
              <div key={l} className="rounded-lg border bg-white px-4 py-6 text-center font-display text-sm font-semibold text-charcoal/70 grayscale transition hover:grayscale-0">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="alt-bg section-y">
        <div className="container-x">
          <div className="mb-10 text-center">
            <div className="eyebrow">Voices from the field</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal md:text-4xl">What our customers say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "John Doe", l: "Rajkot, Gujarat", p: "Solar Submersible 5 HP", q: "This solar pump has transformed my farming. Efficiency and reliability are unmatched." },
              { n: "Jane Smith", l: "Surat, Gujarat", p: "Solar Surface 3 HP", q: "Very satisfied with the performance. Significantly reduced my electricity costs." },
              { n: "Raj Patel", l: "Ahmedabad, Gujarat", p: "Solar Controller", q: "Excellent product! Installation was quick and the support team very helpful." },
            ].map((t) => (
              <figure key={t.n} className="rounded-lg border bg-white p-6">
                <Quote className="size-7 text-primary" />
                <blockquote className="mt-3 text-charcoal">"{t.q}"</blockquote>
                <figcaption className="mt-5 border-t pt-4">
                  <div className="font-display font-semibold text-charcoal">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.l} · {t.p}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE MAP */}
      <section className="section-y">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Pan-India Coverage</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal md:text-4xl">Serving farmers across India</h2>
            <p className="mt-3 text-muted-foreground">20+ service centres and 200+ field engineers — when you need help, someone is close by.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Stat k="20+" v="Service Centres" />
              <Stat k="200+" v="Field Engineers" />
            </div>
            <Link to="/services/onsite" className="btn-primary mt-7">Request Onsite Service <ArrowRight className="size-4" /></Link>
          </div>
          <IndiaMap />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary text-white">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to power your farm with solar?</h2>
            <p className="mt-2 text-white/90">Contact us today to learn more about our solar solutions.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="rounded-md bg-white px-6 py-3 font-display text-sm font-semibold text-primary hover:bg-white/90">Get a Free Quote</Link>
            <a href="https://wa.me/917575074156" target="_blank" rel="noreferrer" className="btn-ghost-light">Talk on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border bg-white p-5">
      <div className="font-display text-3xl font-bold text-primary">{k}</div>
      <div className="mt-0.5 text-sm text-muted-foreground">{v}</div>
    </div>
  );
}
