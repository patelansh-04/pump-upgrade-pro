import { useState } from "react";
import { X, MessageSquareQuote } from "lucide-react";
import { toast } from "sonner";
import { PRODUCTS } from "@/data/products";

export function QuoteWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <button
        aria-label="Get a quick quote"
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2 -rotate-90 origin-bottom-right rounded-t-md bg-primary px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-primary-dark"
        style={{ transformOrigin: "100% 100%" }}
      >
        <span className="inline-flex items-center gap-2"><MessageSquareQuote className="size-3.5" /> Get Quote</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex" onClick={() => setOpen(false)}>
          <div className="flex-1 bg-black/50" />
          <aside
            className="flex w-full max-w-md flex-col bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b bg-charcoal p-5 text-white">
              <div>
                <div className="eyebrow text-white/80">Quick Quote</div>
                <h3 className="font-display text-xl font-bold">Get a price in 24 hours</h3>
              </div>
              <button aria-label="Close" onClick={() => setOpen(false)} className="rounded-md p-1 hover:bg-white/10"><X /></button>
            </div>

            {submitted ? (
              <div className="flex-1 p-8 text-center">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-eco/15 text-eco">✓</div>
                <h4 className="mt-4 font-display text-lg font-semibold">Thank you!</h4>
                <p className="mt-2 text-sm text-muted-foreground">We will contact you within 24 hours with pricing and next steps.</p>
                <button onClick={() => { setSubmitted(false); setOpen(false); }} className="btn-outline mt-6">Close</button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Quote request received. We'll be in touch within 24 hours.");
                  setSubmitted(true);
                }}
                className="flex-1 space-y-4 overflow-y-auto p-6"
              >
                <Field label="Full Name *"><input required name="name" className="input" placeholder="Your name" /></Field>
                <Field label="Mobile (10 digits) *">
                  <input required name="mobile" pattern="[6-9][0-9]{9}" maxLength={10} className="input" placeholder="9876543210" />
                </Field>
                <Field label="HP Required">
                  <select className="input">
                    <option>1 HP</option><option>2 HP</option><option>3 HP</option>
                    <option>5 HP</option><option>7.5 HP</option><option>10 HP</option><option>15 HP</option>
                  </select>
                </Field>
                <Field label="Product of Interest">
                  <select className="input">
                    {PRODUCTS.map((p) => <option key={p.slug}>{p.name}</option>)}
                  </select>
                </Field>
                <Field label="Purpose">
                  <select className="input">
                    <option>Agriculture</option><option>Drinking Water</option><option>Industrial</option>
                  </select>
                </Field>
                <button type="submit" className="btn-primary w-full">Request Quote</button>
                <p className="text-center text-xs text-muted-foreground">By submitting you agree to be contacted by Paarth Solar Pumps.</p>
              </form>
            )}
          </aside>
        </div>
      )}
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-charcoal">{label}</span>
      {children}
    </label>
  );
}
