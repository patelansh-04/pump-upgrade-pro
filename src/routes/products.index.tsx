import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({ meta: [
    { title: "Solar & Conventional Pumps — Paarth Product Range" },
    { name: "description", content: "Seven product lines: solar submersible, surface, controller; agriculture, domestic and industrial pumps. 1–50 HP." },
  ]}),
  component: ProductsIndex,
});

function ProductsIndex() {
  const solar = PRODUCTS.filter((p) => p.category === "Solar");
  const legacy = PRODUCTS.filter((p) => p.category === "Legacy");
  return (
    <>
      <Breadcrumbs items={[{ label: "Products" }]} />
      <PageHero eyebrow="Product Range" title="Built to outlast Indian conditions"
        subtitle="From solar BLDC submersibles to industrial inline pumps — engineered, manufactured and supported by Paarth." />

      <section className="section-y">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">Solar Range</h2>
          <p className="mt-2 text-muted-foreground">Solar-direct pumps and controllers — MNRE empanelled.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solar.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* <section className="alt-bg section-y">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">Conventional Range</h2>
          <p className="mt-2 text-muted-foreground">Grid-powered agriculture, domestic and industrial pumps.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {legacy.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section> */}
    </>
  );
}
