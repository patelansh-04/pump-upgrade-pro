import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { GALLERY } from "@/data/gallery";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Paarth Installations, Manufacturing & EPC Projects" },
    { name: "description", content: "Photos from Paarth solar pump installations, manufacturing facilities, and EPC projects across India." },
  ]}),
  component: Gallery,
});

const FILTERS = ["All", "Agriculture", "Drinking Water", "Industrial", "Manufacturing", "EPC"] as const;

function Gallery() {
  const [filter, setFilter] = useState<typeof FILTERS[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? null : (v + 1) % items.length));
      if (e.key === "ArrowLeft") setLightbox((v) => (v === null ? null : (v - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, items.length]);

  return (
    <>
      <Breadcrumbs items={[{ label: "Gallery" }]} />
      <PageHero eyebrow="Gallery" title="From factory floor to farm" subtitle="Scenes from our manufacturing units, installations and EPC projects across India." />

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 font-display text-sm font-semibold transition ${filter === f ? "border-primary bg-primary text-white" : "border-border bg-white text-charcoal hover:border-primary hover:text-primary"}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setLightbox(i)}
                className="group mb-5 block w-full overflow-hidden rounded-lg border bg-white text-left"
              >
                <img src={g.image} alt={g.alt} loading="lazy" className="w-full transition group-hover:scale-105" />
                <div className="p-3">
                  <div className="text-xs uppercase tracking-wider text-primary">{g.category}</div>
                  <div className="mt-0.5 font-display text-sm font-semibold text-charcoal">{g.caption}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4" onClick={() => setLightbox(null)}>
          <button aria-label="Close" className="absolute right-5 top-5 text-white" onClick={() => setLightbox(null)}><X className="size-8" /></button>
          <button aria-label="Previous" className="absolute left-5 text-white" onClick={(e) => { e.stopPropagation(); setLightbox((v) => v === null ? null : (v - 1 + items.length) % items.length); }}><ChevronLeft className="size-8" /></button>
          <button aria-label="Next" className="absolute right-5 top-1/2 text-white" onClick={(e) => { e.stopPropagation(); setLightbox((v) => v === null ? null : (v + 1) % items.length); }}><ChevronRight className="size-8" /></button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-5xl">
            <img src={items[lightbox].image} alt={items[lightbox].alt} className="max-h-[80vh] w-auto rounded-md" />
            <figcaption className="mt-3 text-center text-white">
              <div className="text-xs uppercase tracking-wider text-primary">{items[lightbox].category}</div>
              <div className="mt-1 font-display">{items[lightbox].caption}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
