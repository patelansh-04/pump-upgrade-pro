import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { Activity, AlertCircle, Battery, Bell, Clock, Droplet, Power, Wifi } from "lucide-react";

export const Route = createFileRoute("/services/monitoring")({
  head: () => ({ meta: [
    { title: "Mobile App & RMS Monitoring — Paarth Solar Pumps" },
    { name: "description", content: "Monitor your pump anytime, anywhere. Live status, energy, water output, run-hours, remote ON/OFF and fault alerts." },
  ]}),
  component: Monitoring,
});

const FEATURES = [
  { icon: Activity, t: "Live Pump Status" },
  { icon: Battery, t: "Today's Energy (kWh)" },
  { icon: Droplet, t: "Total Water Output (kL)" },
  { icon: Clock, t: "Run Hours" },
  { icon: Power, t: "Remote ON / OFF" },
  { icon: Bell, t: "Timer Setting" },
  { icon: AlertCircle, t: "Fault Alerts" },
  { icon: Wifi, t: "RS485 + GPRS" },
];

function Monitoring() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "Monitoring" }]} />
      <PageHero eyebrow="Mobile App & RMS" title="Monitor your pump. Anytime. Anywhere."
        subtitle="Real-time data from every Paarth controller — on your phone and on the web." />

      <section className="section-y">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          {/* CSS Phone mockup */}
          <div className="mx-auto">
            <div className="relative h-[560px] w-[280px] rounded-[40px] border-[10px] border-charcoal bg-charcoal shadow-2xl">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-charcoal" />
              <div className="size-full overflow-hidden rounded-[30px] bg-gradient-to-b from-secondary to-white p-4">
                <div className="rounded-lg bg-primary p-3 text-white">
                  <div className="text-[10px] opacity-80">PUMP #042 · Rajkot</div>
                  <div className="font-display text-lg font-bold">RUNNING</div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-charcoal">
                  <Tile l="Energy" v="14.2 kWh" />
                  <Tile l="Water" v="38 kL" />
                  <Tile l="Run hrs" v="6h 12m" />
                  <Tile l="MPPT" v="98%" />
                </div>
                <div className="mt-3 rounded-md border bg-white p-3 text-xs text-charcoal">
                  <div className="font-semibold">Today's curve</div>
                  <svg viewBox="0 0 200 60" className="mt-1 w-full">
                    <polyline fill="none" stroke="oklch(0.554 0.181 27.5)" strokeWidth="2" points="0,50 30,40 60,30 90,15 120,8 150,18 180,30 200,45" />
                  </svg>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-md bg-eco py-2 text-xs font-semibold text-white">ON</button>
                  <button className="flex-1 rounded-md bg-secondary py-2 text-xs font-semibold text-charcoal">SCHEDULE</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">Every metric your customers ask about</h2>
            <p className="mt-3 text-muted-foreground">Eight live signals from every connected controller — pushed to your phone in seconds.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.t} className="flex items-center gap-3 rounded-md border bg-white p-3">
                  <div className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><f.icon className="size-5" /></div>
                  <span className="font-display text-sm font-semibold text-charcoal">{f.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button disabled className="rounded-md border-2 border-charcoal/20 px-5 py-3 font-display text-sm font-semibold text-charcoal/60">Play Store · Coming Soon</button>
              <button disabled className="rounded-md border-2 border-charcoal/20 px-5 py-3 font-display text-sm font-semibold text-charcoal/60">App Store · Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      {/* RMS Tablet */}
      <section className="alt-bg section-y">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="eyebrow">RMS Web Dashboard</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal md:text-4xl">For governments, EPCs and large farm owners</h2>
            <p className="mt-3 text-muted-foreground">Fleet view across districts. Drill down to any installation. Export CSV reports for compliance.</p>
            <div className="mt-6 rounded-lg border bg-white p-5">
              <div className="font-display text-4xl font-bold text-primary">54%</div>
              <div className="text-sm text-muted-foreground">of installed Paarth pumps online today</div>
            </div>
            <button className="btn-primary mt-7">Request RMS Demo</button>
          </div>
          <div className="mx-auto rounded-2xl border-[10px] border-charcoal bg-charcoal shadow-2xl">
            <div className="aspect-[4/3] w-[480px] max-w-full overflow-hidden rounded-lg bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="font-display font-bold text-charcoal">Paarth RMS · Gujarat District View</div>
                <div className="text-xs text-eco">● Live</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { l: "Online", v: "1,248", c: "text-eco" },
                  { l: "Offline", v: "62", c: "text-destructive" },
                  { l: "Total Water", v: "98.2 ML", c: "text-primary" },
                ].map((s) => (
                  <div key={s.l} className="rounded-md bg-secondary p-3">
                    <div className={`font-display text-xl font-bold ${s.c}`}>{s.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
              <svg viewBox="0 0 400 120" className="mt-4 w-full">
                <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.554 0.181 27.5 / 0.4)" /><stop offset="100%" stopColor="oklch(0.554 0.181 27.5 / 0)" /></linearGradient></defs>
                <polyline fill="none" stroke="oklch(0.554 0.181 27.5)" strokeWidth="2.5" points="0,90 50,70 100,75 150,40 200,55 250,30 300,45 350,25 400,40" />
                <polygon fill="url(#g)" points="0,90 50,70 100,75 150,40 200,55 250,30 300,45 350,25 400,40 400,120 0,120" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Tile({ l, v }: { l: string; v: string }) {
  return (
    <div className="rounded-md border bg-white p-2">
      <div className="text-[10px] uppercase text-muted-foreground">{l}</div>
      <div className="font-display text-sm font-bold">{v}</div>
    </div>
  );
}
