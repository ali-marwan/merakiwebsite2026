// Premium AI Assistant preview — pure CSS/SVG, no backend dependency.
// When the real portal is built, swap the static rows for live data.

export function AssistantMockup() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-8 -z-10 rounded-[32px] bg-radial-fade blur-3xl opacity-80"
        aria-hidden
      />
      <div className="rounded-2xl border border-ink-100 bg-white shadow-soft overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-ink-100 bg-sand">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          </div>
          <div className="flex items-center gap-2 rounded-md border border-ink-100 bg-white px-3 py-1 text-[11px] text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
            assistant.meraki-consultants.ae
          </div>
          <div className="text-[11px] text-ink-400">Preview</div>
        </div>

        <div className="grid grid-cols-12">
          {/* sidebar */}
          <aside className="hidden md:flex md:col-span-3 flex-col border-r border-ink-100 bg-bone p-5 gap-4">
            <div className="flex items-center gap-2.5">
              <span className="h-7 w-7 rounded-md bg-ink-900 flex items-center justify-center text-[11px] text-bronze-300 font-display font-bold">
                M
              </span>
              <p className="text-[14px] text-ink-900 font-semibold tracking-display">
                AI Assistant
              </p>
            </div>
            <div className="space-y-1.5 text-[12.5px]">
              {[
                { label: "Overview", active: true },
                { label: "Inbox" },
                { label: "Invoices" },
                { label: "Receipts" },
                { label: "Petty cash" },
                { label: "Voice notes" },
                { label: "VAT" },
                { label: "Reports" },
                { label: "Reviews" },
              ].map((it) => (
                <div
                  key={it.label}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 ${
                    it.active
                      ? "bg-ink-900 text-bone"
                      : "text-ink-600 hover:bg-sand"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      it.active ? "bg-bronze-400" : "bg-ink-200"
                    }`}
                  />
                  {it.label}
                </div>
              ))}
            </div>
            <div className="mt-auto rounded-lg border border-ink-100 bg-white p-3.5">
              <p className="text-[11px] text-ink-400">Account manager</p>
              <p className="text-[12.5px] text-ink-900 mt-1 font-medium">
                Meraki Team
              </p>
              <button className="mt-3 w-full rounded-md bg-ink-900 px-2 py-1.5 text-[11.5px] text-bone font-medium">
                Request review
              </button>
            </div>
          </aside>

          {/* main */}
          <div className="col-span-12 md:col-span-9 p-5 md:p-7 space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-ink-400 font-medium">
                  May 2026
                </p>
                <p className="text-[16px] text-ink-900 font-semibold tracking-display">
                  Finance overview
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="chip-accent">AI-assisted</span>
                <span className="chip">Reviewed by Meraki</span>
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { k: "Cash in", v: "AED 184,200", t: "+12%" },
                { k: "Cash out", v: "AED 121,840", t: "−4%" },
                { k: "VAT due", v: "AED 9,415", t: "Q2" },
                { k: "Open items", v: "7", t: "Review" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-ink-100 bg-white p-3.5"
                >
                  <p className="text-[11px] text-ink-400 font-medium">{s.k}</p>
                  <p className="mt-1 font-display text-[18px] font-semibold tracking-display text-ink-900">
                    {s.v}
                  </p>
                  <p className="text-[10.5px] text-bronze-600 mt-0.5 font-medium">
                    {s.t}
                  </p>
                </div>
              ))}
            </div>

            {/* invoice OCR result */}
            <div className="rounded-xl border border-ink-100 bg-white p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-[12px] text-ink-700 font-medium">
                  Invoice #2041 — auto-read
                </p>
                <span className="chip-accent">OCR · 98% confidence</span>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-[12px]">
                <Field label="Supplier" value="Al Madina Trading LLC" />
                <Field label="TRN" value="100123456700003" />
                <Field label="Amount" value="AED 2,450.00" />
                <Field label="VAT" value="AED 122.50" />
                <Field label="Date" value="03 May 2026" />
                <Field label="Category" value="Suggested: Inventory" accent />
                <Field label="Reference" value="PO-1183" />
                <Field label="Status" value="Awaiting review" pill />
              </div>
            </div>

            {/* alerts + ready for review */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-xl border border-bronze-200 bg-bronze-50/50 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-bronze-100 text-bronze-700 inline-flex items-center justify-center text-[11px] border border-bronze-200">
                    !
                  </span>
                  <p className="text-[13px] text-ink-900 font-semibold tracking-display">
                    Missing information
                  </p>
                </div>
                <p className="text-[12px] text-ink-600 mt-1.5 leading-relaxed">
                  3 receipts missing a supplier name. The Assistant flagged
                  them for your review.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center text-[11px] border border-emerald-200">
                    ✓
                  </span>
                  <p className="text-[13px] text-ink-900 font-semibold tracking-display">
                    VAT report draft prepared
                  </p>
                </div>
                <p className="text-[12px] text-ink-600 mt-1.5 leading-relaxed">
                  Q2 ready for Meraki team review · Human review required
                  before submission.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="px-5 py-3 border-t border-ink-100 bg-sand flex items-center justify-between text-[11.5px] text-ink-400">
          <span>One system. One team. One standard.</span>
          <span>Meraki AI Assistant — preview</span>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  accent = false,
  pill = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
  pill?: boolean;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-ink-400 font-medium">
        {label}
      </p>
      {pill ? (
        <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-bronze-50 px-2 py-0.5 text-[11px] text-bronze-700 border border-bronze-200">
          {value}
        </span>
      ) : (
        <p
          className={`mt-0.5 font-medium ${
            accent ? "text-bronze-700" : "text-ink-900"
          }`}
        >
          {value}
        </p>
      )}
    </div>
  );
}
