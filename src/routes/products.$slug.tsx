import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "@/components/product-card";
import { EnquiryForm } from "@/components/enquiry-form";
import { getProduct, PRODUCTS } from "@/data/products";
import { Download, ShieldCheck, ZoomIn } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.product.name} — Paarth Solar Pumps` : "Product" },
    { name: "description", content: loaderData?.product.valueProp ?? "" },
  ]}),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = product.related.map(getProduct).filter(Boolean) as typeof PRODUCTS;
  const allHP = [1, 2, 3, 5, 7.5, 10, 15];

  return (
    <>
      <Breadcrumbs items={[{ label: "Products", to: "/products" }, { label: product.name }]} />

      {/* HERO */}
      <section className="container-x grid items-center gap-12 py-10 lg:grid-cols-[55fr_45fr]">
        <div className="group relative aspect-square overflow-hidden rounded-lg border bg-secondary">
          <img src={product.image} alt={product.name} className="size-full object-contain p-10 transition group-hover:scale-105" />
          <div className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-charcoal shadow"><ZoomIn className="size-5" /></div>
        </div>
        <div>
          <div className="eyebrow">{product.category} Range</div>
          <h1 className="mt-2 font-display text-4xl font-bold text-primary md:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg text-charcoal/80">{product.valueProp}</p>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Available HP</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {allHP.map((hp) => {
                const has = product.hpAvailable.includes(hp);
                return (
                  <span key={hp} className={`rounded-full px-3 py-1 font-display text-sm font-semibold ${has ? "bg-primary text-white" : "bg-secondary text-muted-foreground/50 line-through"}`}>
                    {hp} HP
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#enquire" className="btn-primary flex-1">Request a Quote</a>
            <button className="btn-outline flex-1"><Download className="size-4" /> Datasheet</button>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="alt-bg section-y">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <div className="eyebrow">For the farmer</div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-charcoal">In plain language</h2>
            <p className="mt-3 leading-relaxed">{product.description.farmer}</p>
          </div>
          <div>
            <div className="eyebrow">For the engineer</div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-charcoal">Technical context</h2>
            <p className="mt-3 leading-relaxed">{product.description.engineer}</p>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="section-y">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">Specifications</h2>
          <div className="mt-6 overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-primary-dark text-white">
                <tr>
                  <th className="px-5 py-3 text-left font-display font-semibold">Specification</th>
                  <th className="px-5 py-3 text-left font-display font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={s.label} className={i % 2 === 0 ? "bg-white" : "bg-secondary"}>
                    <td className="px-5 py-3 font-medium text-charcoal">{s.label}</td>
                    <td className="px-5 py-3 text-muted-foreground">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="alt-bg section-y">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">Key Features</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => (
              <div key={f.title} className="card-lift rounded-lg border bg-white p-5">
                <div className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><ShieldCheck className="size-5" /></div>
                <h3 className="mt-3 font-display font-semibold text-charcoal">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY (controller only) */}
      {product.safety && (
        <section className="section-y">
          <div className="container-x">
            <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">8 Built-In Safety Protections</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.safety.map((s) => (
                <div key={s.title} className="rounded-lg border bg-white p-5 text-center">
                  <div className="mx-auto grid size-12 place-items-center rounded-full bg-primary/10 text-primary"><ShieldCheck className="size-6" /></div>
                  <h3 className="mt-3 font-display font-semibold text-charcoal">{s.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INLINE QUOTE */}
      <section id="enquire" className="alt-bg section-y">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">Get a quote for this product</h2>
          <p className="mt-2 text-muted-foreground">We respond within 24 hours.</p>
          <div className="mt-8 max-w-3xl">
            <EnquiryForm defaultType="Product Enquiry" defaultProduct={product.slug} />
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section-y">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
