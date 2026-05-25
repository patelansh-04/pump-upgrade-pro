import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-24 pb-2 text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        <li><Link to="/" className="hover:text-primary">Home</Link></li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5" />
            {it.to ? (
              <Link to={it.to} className="hover:text-primary">{it.label}</Link>
            ) : (
              <span className="text-charcoal">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
