// Central content store. Edit copy here without touching component code.

export const brand = {
  name: "Meraki Consultants",
  tagline: "One system. One team. One standard.",
  positioning:
    "UAE business consultancy and finance operations partner.",
  whatsapp: "+971500000000",
  email: "hello@meraki-consultants.ae",
  phoneDisplay: "+971 50 000 0000",
  address: "Business Bay, Dubai, United Arab Emirates",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "E-Invoicing", href: "/e-invoicing" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "UAE Business Consultancy",
  headline: "Enterprise-Level Business Support, Made Accessible to UAE Companies",
  sub: "Meraki Consultants brings accounting, tax, compliance, business setup, cash-flow management, and AI-assisted workflows into one connected system — managed by one professional team.",
  tagline: "One system. One team. One standard.",
  ctas: [
    { label: "View Packages", href: "/packages", micro: "Choose the package that fits your business.", variant: "primary" },
    { label: "Explore AI Assistant", href: "/ai-assistant", micro: "A smart finance workflow with professional review where it matters.", variant: "accent" },
    { label: "Speak to Our Team", href: "/contact", micro: "Get support, consultation, or a custom solution.", variant: "secondary" },
  ] as const,
};

export const serviceStrip = [
  "Accounting",
  "VAT & Corporate Tax",
  "Business Setup",
  "Cash Flow",
  "E-Invoicing",
  "AI-Assisted Workflows",
];

export const riskCards = [
  { title: "Tax penalties", body: "Late or incorrect VAT and corporate tax submissions translate to direct fines and reassessments." },
  { title: "Missing invoices", body: "Untracked supplier and customer invoices weaken your input VAT recovery and audit trail." },
  { title: "Weak cash flow", body: "Without forecast and reconciliation, businesses run on instinct rather than data." },
  { title: "Poor reporting", body: "Year-end scrambles replace monthly clarity. Decisions get made on incomplete numbers." },
  { title: "Last-minute compliance", body: "Filing windows close fast. Disorganised records mean rushed work and avoidable mistakes." },
  { title: "Audit stress", body: "Without audit-ready records, every external review becomes a multi-week recovery project." },
];

export const pillars = [
  {
    key: "start",
    name: "Start",
    summary: "Set up your UAE business with the right structure, license, and PRO support.",
    items: [
      "Mainland & free zone setup",
      "Activity selection & trade license",
      "Bank account coordination",
      "Visa & PRO services",
      "License renewal & amendments",
    ],
  },
  {
    key: "manage",
    name: "Manage",
    summary: "Day-to-day accounting, bookkeeping, and reporting handled by one team.",
    items: [
      "Monthly bookkeeping",
      "Bank & ledger reconciliation",
      "Payables & receivables",
      "Payroll support",
      "Financial statements & management reports",
    ],
  },
  {
    key: "comply",
    name: "Comply",
    summary: "VAT, corporate tax, and FTA submissions managed with structured workflows.",
    items: [
      "VAT registration & filings",
      "Corporate tax registration & support",
      "FTA portal coordination",
      "Tax invoice review",
      "Tax refunds & clarifications",
    ],
  },
  {
    key: "control",
    name: "Control",
    summary: "Cash flow, budgets, and dashboards that turn records into decisions.",
    items: [
      "Cash-flow management & forecasting",
      "Budgeting & cost control",
      "Profitability reviews",
      "Partner settlement reports",
      "Audit readiness",
    ],
  },
  {
    key: "automate",
    name: "Automate",
    summary: "AI-assisted workflows and a portal layer that reduces manual finance work.",
    items: [
      "Invoice & receipt upload",
      "OCR & smart categorisation",
      "Voice notes & petty cash logging",
      "Missing-document alerts",
      "Human review where accuracy matters",
    ],
  },
] as const;

export const packagePreview = [
  {
    name: "Starter",
    badge: "For micro businesses",
    price: "Starting from AED ___ / month",
    points: [
      "Monthly bookkeeping (limited transactions)",
      "Bank reconciliation",
      "Quarterly reporting summary",
      "VAT submission support (if registered)",
    ],
    cta: "Enquire",
  },
  {
    name: "Compliance",
    badge: "Most chosen",
    price: "Starting from AED ___ / month",
    points: [
      "Full monthly bookkeeping",
      "VAT submissions & FTA coordination",
      "Corporate tax tracking",
      "Monthly financial statements",
    ],
    featured: true,
    cta: "Enquire",
  },
  {
    name: "Growth",
    badge: "Scaling SMEs",
    price: "Starting from AED ___ / month",
    points: [
      "Compliance + management dashboards",
      "Cash-flow forecasting",
      "Quarterly business review",
      "Audit-ready file structure",
    ],
    cta: "Enquire",
  },
  {
    name: "Managed Finance",
    badge: "Outsourced finance team",
    price: "Starting from AED ___ / month",
    points: [
      "Dedicated account manager",
      "Full finance operations",
      "Board-ready reporting",
      "Strategic advisory hours",
    ],
    cta: "Speak to team",
  },
];

export const portalFeatures = [
  { title: "Upload invoices & receipts", body: "Drop files or capture by photo. We handle the rest." },
  { title: "OCR & smart categorisation", body: "AI reads invoices, suggests categories, flags missing fields." },
  { title: "Voice notes & petty cash", body: "Capture cash spend on the go — your accountant sees it instantly." },
  { title: "Missing-document alerts", body: "Know what's needed before tax season knocks." },
  { title: "VAT & report drafts", body: "Auto-prepared drafts ready for Meraki team review." },
  { title: "Human review built in", body: "Smart workflows, professional oversight where accuracy matters." },
];

// AI Assistant — dedicated page content
export const aiAssistant = {
  hero: {
    eyebrow: "Meraki AI Assistant",
    badge: "Coming soon · Portal preview",
    headline: "Meraki AI Assistant",
    sub: "A smart finance workflow that helps UAE businesses capture invoices, organise records, reduce manual entry, and prepare financial data for professional review.",
    principle: "AI-assisted finance workflows with professional review where accuracy matters.",
  },
  helps: [
    { title: "Invoice upload", body: "Email-in, drag-drop, or capture from mobile.", icon: "upload" },
    { title: "Receipt capture", body: "Photograph receipts; OCR pulls the fields.", icon: "camera" },
    { title: "OCR document reading", body: "Supplier, TRN, lines, VAT, totals — auto-read.", icon: "scan" },
    { title: "Expense categorisation", body: "AI suggests categories; you confirm.", icon: "tag" },
    { title: "Petty cash logging", body: "Quick entries with photo or voice support.", icon: "cash" },
    { title: "Voice note records", body: "Speak it. The Assistant logs it.", icon: "mic" },
    { title: "Missing-document alerts", body: "Find gaps before deadlines find them first.", icon: "alert" },
    { title: "VAT preparation support", body: "Drafts ready for Meraki team review.", icon: "vat" },
    { title: "E-invoicing workflow", body: "Tax invoice quality checks and capture.", icon: "invoice" },
    { title: "Meraki team review", body: "Human eyes where accuracy matters.", icon: "review" },
  ],
  steps: [
    { step: "01", title: "Upload invoices, receipts, or notes", body: "Drag-drop, email-in, photograph, or record a voice note." },
    { step: "02", title: "AI reads and organises the document", body: "OCR extracts supplier, TRN, line items, VAT, and totals." },
    { step: "03", title: "Categories and missing data are suggested", body: "The Assistant proposes categories and flags incomplete fields." },
    { step: "04", title: "Meraki team reviews where required", body: "Edge cases and judgement calls handled by professionals." },
    { step: "05", title: "Reports and tax records are prepared", body: "Monthly accounts, VAT drafts, and clean audit trails." },
  ],
  builtFor: {
    title: "Built for business owners.",
    body: "The AI Assistant is designed for SMEs, shops, entrepreneurs, and companies that don't want messy WhatsApp files, scattered Excel sheets, and last-minute invoice collection. Capture as work happens. Review on schedule. Close the books with confidence.",
    audiences: [
      "SMEs without full finance teams",
      "Shops & retail with daily receipts",
      "Founders running multi-entity setups",
      "Established companies tightening ops",
    ],
  },
  humanReview: {
    title: "AI helps organise. Professionals verify.",
    body: "The AI Assistant supports the workflow, but accounting, tax, and compliance decisions can be reviewed by Meraki's professional team where accuracy matters. The system never publishes a return or signs off on books on its own — every regulated submission flows through human review.",
  },
  finalCta: {
    title: "Prepare your business for cleaner finance operations.",
    sub: "Subscribe when the Meraki AI Assistant is available, or speak to our team about which package fits.",
  },
};

export const whyMeraki = [
  { title: "One connected system", body: "Setup, accounting, tax and compliance run on one workflow — not separate suppliers." },
  { title: "One professional team", body: "A single point of accountability instead of fragmented service providers." },
  { title: "UAE-focused", body: "Built around UAE accounting practice, FTA processes, and local business reality." },
  { title: "Accessible to SMEs", body: "Professional finance and compliance support without hiring a full finance department." },
  { title: "AI-assisted, human-reviewed", body: "Faster workflows for the routine. Professional review for what matters." },
  { title: "Clear packages", body: "Transparent starting prices and upfront scope, with custom quotes when needed." },
];

export const howItWorks = [
  { step: "01", title: "Choose your package or speak to our team", body: "Pick a plan or request a custom quote based on your business." },
  { step: "02", title: "Submit your business details and documents", body: "Trade license, VAT records, bank statements, and existing books." },
  { step: "03", title: "Meraki sets up your workflow", body: "Chart of accounts, document flow, portal access, and review schedule." },
  { step: "04", title: "Upload invoices and records", body: "Use the portal, mobile capture, or share files directly." },
  { step: "05", title: "Meraki reviews, reports, and submits", body: "Monthly accounts, VAT, corporate tax, and FTA coordination." },
  { step: "06", title: "You receive clear reports and updates", body: "Statements, dashboards, and compliance status — every month." },
];

type Pkg = {
  name: string;
  best: string;
  price: string;
  includes: string[];
  excludes: string[];
  featured?: boolean;
};

export const allPackages: {
  accounting: Pkg[];
  tax: Pkg[];
  setup: Pkg[];
  ai: Pkg[];
} = {
  accounting: [
    { name: "Starter", best: "Micro businesses & solo founders", price: "AED ___ / month", includes: ["Monthly bookkeeping (up to 30 transactions)", "Bank reconciliation", "Quarterly summary", "Email support"], excludes: ["Payroll", "Corporate tax filing", "Management dashboards"] },
    { name: "Compliance", best: "Active SMEs", price: "AED ___ / month", includes: ["Full monthly bookkeeping", "VAT submissions", "Corporate tax tracking", "Monthly P&L and balance sheet"], excludes: ["Forecasting", "Dedicated account manager"], featured: true },
    { name: "Growth", best: "Scaling businesses", price: "AED ___ / month", includes: ["Compliance package", "Management dashboards", "Cash-flow forecast", "Quarterly review meeting"], excludes: ["Board reporting"] },
    { name: "Managed Finance", best: "Established companies", price: "AED ___ / month", includes: ["Dedicated account manager", "Full finance operations", "Board-ready reports", "Advisory hours"], excludes: [] },
  ],
  tax: [
    { name: "VAT Support", best: "VAT-registered businesses", price: "AED ___ / quarter", includes: ["Quarterly VAT prep & filing", "Input VAT review", "FTA correspondence"], excludes: ["Corporate tax filing"] },
    { name: "Corporate Tax Support", best: "Companies in CT scope", price: "AED ___ / year", includes: ["Corporate tax registration", "Annual tax computation", "Filing coordination"], excludes: ["Audit"] },
    { name: "Tax Health Check", best: "Businesses unsure of position", price: "AED ___ one-time", includes: ["VAT & CT review", "Risk register", "Action plan"], excludes: ["Filings"] },
    { name: "Tax Refund Support", best: "Eligible businesses", price: "AED ___ per case", includes: ["Refund eligibility review", "Documentation prep", "FTA submission"], excludes: [] },
  ],
  setup: [
    { name: "UAE Startup Setup", best: "First-time founders", price: "AED ___ one-time", includes: ["Activity guidance", "License application", "Initial PRO support"], excludes: ["Visa quota beyond 1"] },
    { name: "Mainland Setup", best: "Mainland operations", price: "AED ___ one-time", includes: ["Mainland license", "Local service agent guidance", "Bank coordination"], excludes: [] },
    { name: "Free Zone Setup", best: "Free zone operations", price: "AED ___ one-time", includes: ["Free zone license", "Visa quota planning", "Office solution coordination"], excludes: [] },
    { name: "Setup + Accounting Bundle", best: "New entities wanting compliance from day one", price: "AED ___ bundled", includes: ["Setup package", "First 6 months Compliance accounting"], excludes: [], featured: true },
  ],
  ai: [
    { name: "AI Self-Service", best: "Self-managed businesses", price: "AED ___ / month", includes: ["Portal access", "Invoice OCR", "Categorisation", "Reports export"], excludes: ["Human review"] },
    { name: "AI + Monthly Review", best: "Founders wanting a safety net", price: "AED ___ / month", includes: ["Self-Service plan", "Monthly Meraki review", "Issue flagging"], excludes: ["Filings"] },
    { name: "AI + Accounting Support", best: "SMEs replacing manual bookkeeping", price: "AED ___ / month", includes: ["Portal + OCR", "Bookkeeping", "Bank reconciliation"], excludes: ["VAT filings"], featured: true },
    { name: "Full Managed AI Finance", best: "Businesses going fully digital", price: "AED ___ / month", includes: ["AI workflows", "Bookkeeping", "VAT & CT", "Monthly reporting"], excludes: [] },
  ],
};

export const eInvoicingPoints = [
  { title: "What is changing", body: "UAE businesses are moving toward structured digital invoicing, with stricter expectations on tax invoice content, formatting, and document workflow." },
  { title: "Why it matters", body: "Tax invoice quality affects VAT recovery, FTA reviews, and how cleanly your records reconcile each month." },
  { title: "Who should prepare", body: "Any UAE business issuing tax invoices — particularly those operating across multiple sales channels or accounting systems." },
  { title: "How Meraki helps", body: "We review your current invoice format, document flow, and software — then build a practical readiness plan." },
];

export const eInvoicingChecklist = [
  "Tax invoice content review (TRN, VAT lines, sequence)",
  "Invoice numbering & archive policy",
  "Accounting software readiness assessment",
  "Document workflow mapping (sales → finance → archive)",
  "AI-assisted invoice capture & categorisation",
  "Staff guidance on tax invoice issuance",
  "Integration planning with current systems",
  "Ongoing compliance support",
];

export const aboutPoints = [
  { title: "Who we are", body: "Meraki Consultants is a UAE business consultancy and finance operations partner. We work with SMEs, founders, and established companies that want one structured team behind their finance, tax, and compliance." },
  { title: "Why we exist", body: "Most UAE businesses juggle disconnected providers — a setup agent, a part-time bookkeeper, a tax filer, a PRO. The cost of that fragmentation shows up at year-end, in penalties, in missed decisions. We replace that with one connected system." },
  { title: "Our approach", body: "Structured workflows. Clear monthly reporting. AI-assisted operations where it accelerates work. Human review where accuracy matters. No theatre, no guesswork." },
  { title: "UAE focus", body: "We are built around UAE accounting practice and FTA processes. We understand how mainland and free zone operations differ, and how to keep both audit-ready." },
  { title: "Digital-first future", body: "Our AI Assistant is being built to give clients a clean way to upload, categorise, and review their finance workflow — backed by our team." },
];

export const faq = [
  {
    q: "Is Meraki a tax agent?",
    a: "Meraki provides UAE tax support including VAT and corporate tax compliance, FTA portal coordination, and tax invoice review. We can confirm the exact scope and credentials during your consultation.",
  },
  {
    q: "Do you only serve small businesses?",
    a: "No. Our packages are designed to be accessible for SMEs, but we also support established companies needing audit readiness, partner settlement reports, restructuring, and advisory work.",
  },
  {
    q: "Are your prices final?",
    a: "Starting prices are shown for transparency. Final pricing depends on transaction volume, VAT status, number of employees, reporting requirements, and service scope.",
  },
  {
    q: "Does AI replace your accountants?",
    a: "No. AI handles routine document work — capture, OCR, categorisation, alerts. Our team reviews where accuracy and judgement matter. Smart workflows, professional oversight.",
  },
  {
    q: "Can I subscribe online?",
    a: "Yes — the AI Assistant is being prepared for online subscription. Accounting and tax packages can be initiated online with onboarding handled by our team.",
  },
  {
    q: "Mainland or free zone — which do you support?",
    a: "Both. Setup, accounting, tax, and PRO services across UAE mainland and free zone entities.",
  },
];
