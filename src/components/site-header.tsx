import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { site } from "@/data/site";
import { PRODUCTS } from "@/data/products";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", mega: true },
  { to: "/services", label: "Services", drop: true },
  { to: "/schemes", label: "Schemes" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { to: "/services/monitoring", label: "Mobile App & RMS" },
  { to: "/services/epc", label: "EPC Projects" },
  { to: "/services/onsite", label: "Onsite Service" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpenMega(null), setMobileOpen(false));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || mobileOpen
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setOpenMega(null)}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Logo light={!scrolled && !mobileOpen} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div key={item.to} className="relative" onMouseEnter={() => item.mega || item.drop ? setOpenMega(item.label) : setOpenMega(null)}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={`flex items-center gap-1 px-3 py-2 font-display text-[15px] font-medium transition ${
                  scrolled || mobileOpen ? "text-charcoal" : "text-white"
                }`}
                activeProps={{ className: "!text-primary border-b-2 border-primary" }}
              >
                {item.label}
                {(item.mega || item.drop) && <ChevronDown className="size-3.5" />}
              </Link>

              {item.mega && openMega === item.label && (
                <div className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-2">
                  <div className="grid grid-cols-3 gap-3 rounded-lg border bg-white p-5 shadow-2xl">
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.slug}
                        to="/products/$slug"
                        params={{ slug: p.slug }}
                        className="group flex gap-3 rounded-md p-2 transition hover:bg-secondary"
                        onClick={() => setOpenMega(null)}
                      >
                        <img src={p.image} alt={p.name} className="size-16 shrink-0 rounded object-contain" loading="lazy" />
                        <div className="min-w-0">
                          <div className="truncate font-display text-sm font-semibold text-charcoal group-hover:text-primary">{p.name}</div>
                          <div className="line-clamp-2 text-xs text-muted-foreground">{p.shortDesc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {item.drop && openMega === item.label && (
                <div className="absolute left-0 top-full w-64 pt-2">
                  <div className="rounded-lg border bg-white p-2 shadow-2xl">
                    {SERVICE_LINKS.map((s) => (
                      <Link key={s.to} to={s.to} className="block rounded px-3 py-2 font-display text-sm text-charcoal hover:bg-secondary hover:text-primary" onClick={() => setOpenMega(null)}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phoneRaw}`} className={`flex items-center gap-2 text-sm font-medium ${scrolled || mobileOpen ? "text-charcoal" : "text-white"}`}>
            <Phone className="size-4" /> {site.phone}
          </a>
          <Link to="/contact" className="btn-primary py-2.5">Get a Quote</Link>
        </div>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden ${scrolled || mobileOpen ? "text-charcoal" : "text-white"}`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 overflow-y-auto bg-charcoal text-white lg:hidden">
          <div className="container-x py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block border-b border-white/10 py-4 font-display text-lg font-medium"
                onClick={() => setMobileOpen(false)}
                activeProps={{ className: "!text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            {SERVICE_LINKS.map((s) => (
              <Link key={s.to} to={s.to} className="block border-b border-white/10 py-3 pl-4 text-sm text-white/80" onClick={() => setMobileOpen(false)}>
                ↳ {s.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-6 w-full" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative grid size-10 place-items-center rounded-md bg-primary">
        <span className="font-display text-xl font-extrabold text-white">P</span>
        <div className="absolute -right-1 -bottom-1 size-3 rounded-sm bg-primary-dark" />
      </div>
      <div className="leading-tight">
        <div className={`font-display text-base font-extrabold tracking-tight ${light ? "text-white" : "text-charcoal"}`}>
          PAARTH
        </div>
        <div className={`text-[10px] font-medium uppercase tracking-[0.18em] ${light ? "text-white/80" : "text-primary"}`}>
          Solar Pumps
        </div>
      </div>
    </div>
  );
}
