import { useState } from "react";
import { toast } from "sonner";
import { INDIAN_STATES, ENQUIRY_TYPES } from "@/data/site";
import { PRODUCTS } from "@/data/products";

export function EnquiryForm({
  defaultType,
  defaultProduct,
}: {
  defaultType?: typeof ENQUIRY_TYPES[number];
  defaultProduct?: string;
}) {
  const [type, setType] = useState<string>(defaultType ?? "Product Enquiry");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-lg border-2 border-eco/30 bg-eco/5 p-8 text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-eco text-2xl text-white">✓</div>
        <h3 className="mt-4 font-display text-2xl font-bold text-charcoal">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">We will contact you within 24 hours.</p>
        <button onClick={() => setDone(false)} className="btn-outline mt-6">Submit another enquiry</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.success("Enquiry submitted. We'll contact you within 24 hours.");
        setDone(true);
      }}
      className="space-y-5 rounded-lg border bg-white p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name *"><input required name="name" className="input" /></Field>
        <Field label="Mobile (10 digits) *">
          <input required name="mobile" pattern="[6-9][0-9]{9}" maxLength={10} className="input" placeholder="9876543210" />
        </Field>
        <Field label="Email"><input name="email" type="email" className="input" /></Field>
        <Field label="State *">
          <select required className="input" defaultValue="">
            <option value="" disabled>Select state</option>
            {INDIAN_STATES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Enquiry Type *">
        <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
          {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>

      {type === "Product Enquiry" && (
        <Field label="Product of Interest">
          <select className="input" defaultValue={defaultProduct ?? PRODUCTS[0].slug}>
            {PRODUCTS.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
          </select>
        </Field>
      )}

      <Field label="Message">
        <textarea name="message" maxLength={500} rows={4} className="input resize-none" placeholder="Tell us about your requirement (max 500 characters)" />
      </Field>

      <button type="submit" className="btn-primary w-full md:w-auto">Submit Enquiry</button>
      <p className="text-xs text-muted-foreground">Protected by reCAPTCHA. By submitting, you agree to be contacted by Paarth Solar Pumps.</p>
    </form>
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
