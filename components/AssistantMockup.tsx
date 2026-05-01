// Premium Meraki AI preview — pure CSS/SVG, no backend dependency.
// When the real product is built, swap the static rows for live data.

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
            meraki-ai · invoice review
          </div>
          <div className="text-[11px] text-ink-400">Preview</div>
        </div>

        <div className="p-5 md:p-6 space-y-5">
          {/* Top: invoice card */}
          <div className="rounded-xl border border-ink-100 bg-white p-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-ink-400 font-medium">
                  Invoice #INV-2041
                </p>
                <p className="text-[15px] text-ink-900 font-semibold tracking-display mt-0.5">
                  Al Madina Trading LLC
                </p>
              </div>
              <span className="chip-accent">AI extracted · 98%</span>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-[12px]">
              <Field label="Date" value="03 May 2026" />
              <Field label="Amount" value="AED 2,450.00" />
              <Field label="VAT (5%)" value="AED 122.50" />
              <Field label="TRN" value="100123456700003" pass />
            </div>
          </div>

          {/* Middle: checks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <CheckCard
              tone="ok"
              title="VAT amount valid"
              body="5% applied · matches taxable line items"
            />
            <CheckCard
              tone="warn"
              title="Missing customer TRN"
              body="Customer record incomplete · review needed"
            />
            <CheckCard
              tone="warn"
              title="Possible duplicate"
              body="Similar invoice on 02 May from same supplier"
            />
          </div>

          {/* Bottom: review queue + export */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl border border-ink-100 bg-bone p-5">
              <p className="text-[11px] uppercase tracking-wider text-ink-400 font-medium">
                Suggested category
              </p>
              <p className="text-[14px] text-ink-900 mt-1.5 font-medium">
                Inventory · Cost of goods
              </p>
              <p className="text-[11.5px] text-bronze-700 mt-1 font-medium">
                Auto-classified · awaiting accountant approval
              </p>
            </div>
            <div className="rounded-xl border border-ink-100 bg-bone p-5">
              <p className="text-[11px] uppercase tracking-wider text-ink-400 font-medium">
                E-invoicing readiness
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-[14px] text-ink-900 font-medium">
                  All required fields present
                </p>
              </div>
              <p className="text-[11.5px] text-ink-400 mt-1">
                Ready for future structured export
              </p>
            </div>
          </div>

          {/* Export bar */}
          <div className="rounded-xl border border-ink-100 bg-white p-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[12px] text-ink-700 font-medium">
              Sync clean record to
            </p>
            <div className="flex flex-wrap gap-2">
              {["Zoho", "QuickBooks", "Xero", "Tally", "Excel"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-ink-100 bg-bone px-3 py-1 text-[11.5px] text-ink-700 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="px-5 py-3 border-t border-ink-100 bg-sand flex items-center justify-between text-[11.5px] text-ink-400">
          <span>Your UAE invoice compliance copilot.</span>
          <span>Reviewed by Meraki accountants</span>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  pass = false,
}: {
  label: string;
  value: string;
  pass?: boolean;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-ink-400 font-medium">
        {label}
      </p>
      <div className="flex items-center gap-1.5 mt-0.5">
        <p className="text-ink-900 font-medium">{value}</p>
        {pass && (
          <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px]">
            ✓
          </span>
        )}
      </div>
    </div>
  );
}

function CheckCard({
  tone,
  title,
  body,
}: {
  tone: "ok" | "warn";
  title: string;
  body: string;
}) {
  const isOk = tone === "ok";
  return (
    <div
      className={`rounded-xl border p-4 ${
        isOk
          ? "border-emerald-200 bg-emerald-50/40"
          : "border-bronze-200 bg-bronze-50/50"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`h-5 w-5 rounded-full inline-flex items-center justify-center text-[11px] border ${
            isOk
              ? "bg-emerald-100 text-emerald-700 border-emerald-200"
              : "bg-bronze-100 text-bronze-700 border-bronze-200"
          }`}
        >
          {isOk ? "✓" : "!"}
        </span>
        <p className="text-[13px] text-ink-900 font-semibold tracking-display">
          {title}
        </p>
      </div>
      <p className="text-[11.5px] text-ink-600 mt-1.5 leading-relaxed">
        {body}
      </p>
    </div>
  );
}
