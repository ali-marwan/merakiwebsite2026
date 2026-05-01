// Premium portal/dashboard mockup. Pure CSS/SVG — no images.

export function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-radial-fade blur-2xl opacity-80" aria-hidden />
      <div className="rounded-2xl border border-ink-100 bg-white shadow-soft overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink-100 bg-sand">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          </div>
          <div className="flex items-center gap-2 rounded-md border border-ink-100 bg-white px-2.5 py-1 text-[10px] text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
            portal.meraki-consultants.ae
          </div>
          <div className="text-[10px] text-ink-400">v1.0</div>
        </div>

        {/* main */}
        <div className="grid grid-cols-12 gap-0">
          {/* sidebar */}
          {!compact && (
            <aside className="hidden md:flex md:col-span-3 flex-col border-r border-ink-100 bg-bone p-4 gap-3">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-md bg-ink-900 flex items-center justify-center text-[10px] text-bronze-300 font-display">M</span>
                <p className="text-[13px] text-ink-900 font-medium">Meraki Portal</p>
              </div>
              <div className="mt-4 space-y-1.5 text-[12px]">
                {[
                  { label: "Dashboard", active: true },
                  { label: "Documents" },
                  { label: "Invoices" },
                  { label: "Receipts" },
                  { label: "Petty Cash" },
                  { label: "VAT" },
                  { label: "Reports" },
                  { label: "Reviews" },
                ].map((it) => (
                  <div
                    key={it.label}
                    className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 ${
                      it.active
                        ? "bg-ink-900 text-bone"
                        : "text-ink-600 hover:bg-sand"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${it.active ? "bg-bronze-400" : "bg-ink-200"}`} />
                    {it.label}
                  </div>
                ))}
              </div>
              <div className="mt-auto rounded-lg border border-ink-100 bg-white p-3">
                <p className="text-[11px] text-ink-400">Account manager</p>
                <p className="text-[12px] text-ink-900 mt-0.5">Meraki Team</p>
                <button className="mt-2 w-full rounded-md bg-ink-900 px-2 py-1 text-[11px] text-bone">
                  Request review
                </button>
              </div>
            </aside>
          )}

          {/* content */}
          <div className={`col-span-12 ${compact ? "" : "md:col-span-9"} p-5 md:p-6 space-y-5`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-ink-400">May 2026</p>
                <p className="text-[15px] text-ink-900 font-medium">Finance Overview</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="chip-accent">AI-assisted</span>
                <span className="chip">Reviewed by Meraki</span>
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { k: "Cash in", v: "AED 184,200", trend: "+12%" },
                { k: "Cash out", v: "AED 121,840", trend: "−4%" },
                { k: "VAT due", v: "AED 9,415", trend: "Q2" },
                { k: "Open items", v: "7", trend: "Review" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-ink-100 bg-white p-3">
                  <p className="text-[11px] text-ink-400">{s.k}</p>
                  <p className="mt-1 font-display text-[18px] text-ink-900">{s.v}</p>
                  <p className="text-[10px] text-bronze-600 mt-0.5">{s.trend}</p>
                </div>
              ))}
            </div>

            {/* chart + activity */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="md:col-span-3 rounded-xl border border-ink-100 bg-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[12px] text-ink-700">Cash flow — last 6 months</p>
                  <span className="text-[10px] text-ink-400">AED 000s</span>
                </div>
                <BarChart />
              </div>
              <div className="md:col-span-2 rounded-xl border border-ink-100 bg-white p-4">
                <p className="text-[12px] text-ink-700 mb-3">Recent activity</p>
                <ul className="space-y-2.5">
                  {[
                    { t: "Invoice #2041 — captured", s: "OCR · awaiting review", color: "bg-bronze-400" },
                    { t: "Petty cash — voice note", s: "Categorised: Office", color: "bg-ink-200" },
                    { t: "Bank reconciliation", s: "ENBD · 24 / 24 matched", color: "bg-emerald-400" },
                    { t: "VAT draft prepared", s: "Q2 — ready for review", color: "bg-bronze-400" },
                  ].map((a) => (
                    <li key={a.t} className="flex items-start gap-2.5 text-[12px]">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${a.color}`} />
                      <div>
                        <p className="text-ink-900">{a.t}</p>
                        <p className="text-ink-400 text-[11px]">{a.s}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* invoice card */}
            <div className="rounded-xl border border-ink-100 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-ink-700">Invoice #2041 — auto-read</p>
                <span className="chip-accent">OCR · 98% confidence</span>
              </div>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-[12px]">
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
          </div>
        </div>

        {/* footer */}
        <div className="px-5 py-3 border-t border-ink-100 bg-sand flex items-center justify-between text-[11px] text-ink-400">
          <span>Smart workflows. Professional oversight.</span>
          <span>Meraki AI Finance Assistant</span>
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
      <p className="text-[10px] uppercase tracking-wider text-ink-400">{label}</p>
      {pill ? (
        <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-bronze-50 px-2 py-0.5 text-[11px] text-bronze-700 border border-bronze-200">
          {value}
        </span>
      ) : (
        <p className={`mt-0.5 ${accent ? "text-bronze-700" : "text-ink-900"}`}>{value}</p>
      )}
    </div>
  );
}

function BarChart() {
  const bars = [
    { i: 32, o: 22 },
    { i: 40, o: 28 },
    { i: 38, o: 30 },
    { i: 50, o: 36 },
    { i: 46, o: 33 },
    { i: 58, o: 40 },
  ];
  const labels = ["Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  return (
    <div className="h-32 flex items-end gap-2">
      {bars.map((b, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full flex items-end gap-0.5 h-24">
            <div
              className="flex-1 rounded-sm bg-ink-900"
              style={{ height: `${b.i * 1.4}%` }}
            />
            <div
              className="flex-1 rounded-sm bg-bronze-400"
              style={{ height: `${b.o * 1.4}%` }}
            />
          </div>
          <span className="text-[10px] text-ink-400">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}
