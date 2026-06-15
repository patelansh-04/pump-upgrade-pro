import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Logo } from "./site-header";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="diag-divider" />
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            32 years of engineering solar and conventional pumping for Indian agriculture,
            drinking water and industry.
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2.5 text-white/80"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> {site.address}</div>
            <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2.5 text-white/80 hover:text-white"><Phone className="size-4 text-primary" /> {site.phone}</a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-white/80 hover:text-white"><Mail className="size-4 text-primary" /> {site.email}</a>
          </div>
          <div className="mt-5 flex gap-3">
            <a aria-label="LinkedIn" href="#" className="grid size-9 place-items-center rounded-md border border-white/15 transition hover:border-primary hover:bg-primary"><Linkedin className="size-4" /></a>
          </div>
        </div>

        <FooterCol title="Products" links={[
          { to: "/products/solar-submersible-dc", label: "Solar Submersible DC/PMSM" },
          { to: "/products/solar-submersible-ac", label: "Changeover Controllers" },
          { to: "/products/solar-surface", label: "Solar Surface" },
          { to: "/products/solar-controller", label: "Solar Controllers" },
          // { to: "/products/agriculture-range", label: "Agriculture Range" },
          // { to: "/products/domestic-range", label: "Domestic Range" },
          // { to: "/products/industrial-range", label: "Industrial Range" },
        ]} />

        <FooterCol title="Services" links={[
          { to: "/services/monitoring", label: "Mobile App & RMS" },
          { to: "/services/epc", label: "EPC Projects" },
          { to: "/services/onsite", label: "Onsite Service" },
          // { to: "/schemes", label: "Government Schemes" },
        ]} />

        <FooterCol title="Quick Links" links={[
          { to: "/about", label: "About Us" },
          { to: "/gallery", label: "Gallery" },
          { to: "/careers", label: "Careers" },
          { to: "/contact", label: "Contact" },
          { to: "/contact", label: "Request Quote" },
          { to: "/contact", label: "Become a Dealer" },
        ]} />
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Paarth Solar Pumps Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/admin" className="hover:text-white">Admin Portal</Link>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-primary">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-white/75 transition hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
