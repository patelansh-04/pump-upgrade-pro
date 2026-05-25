import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pb-16 pt-32 text-white md:pb-24 md:pt-40">
      {bgImage && (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 -z-10 size-full object-cover opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </>
      )}
      <div className="diag-shape" />
      <div className="container-x relative">
        {eyebrow && <div className="eyebrow text-primary mb-3">{eyebrow}</div>}
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
