import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="card-lift group block overflow-hidden rounded-lg border bg-white"
    >
      <div className="aspect-[16/11] overflow-hidden bg-secondary">
        <img src={product.image} alt={product.name} loading="lazy" className="size-full object-contain p-6 transition group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-primary">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{product.shortDesc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="hp-pill">{product.hpRange}</span>
          <span className="inline-flex items-center gap-1 font-display text-sm font-semibold text-primary">
            View Details <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
