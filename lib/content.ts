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
  { label: "Meraki AI", href: "/meraki-ai" },
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
    { label: "Explore Meraki AI", href: "/meraki-ai", micro: "AI-powered invoice review, VAT checks, and e-invoicing readiness.", variant: "accent" },
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

// Meraki AI — UAE invoice compliance copilot. Dedicated page content.
export const merakiAi = {
  hero: {
    eyebrow: "Meraki AI",
    badge: "UAE Invoice Compliance Copilot",
    headline: "AI-Powered Invoice, VAT & Compliance Review for UAE Businesses",
    sub: "Meraki AI helps businesses review invoices, detect VAT errors, classify transactions, prepare for UAE e-invoicing, and connect clean data with existing accounting systems like Zoho, QuickBooks, Xero, Tally, or Excel.",
    principle: "Your UAE invoice compliance copilot.",
  },
  // Section 1 — What It Is
  whatItIs: {
    title: "Not accounting software. A compliance intelligence layer.",
    body: "Zoho, QuickBooks, Xero, and Tally help businesses create invoices, record transactions, manage bookkeeping, and generate accounting reports. Meraki AI is different. It reviews invoices, checks VAT details, identifies missing information, flags compliance risks, supports tax categorisation, and prepares documents for accountant review.",
    accountingSoftware: [
      "Create invoices",
      "Record transactions",
      "Maintain ledgers",
      "Generate financial reports",
      "Manage bookkeeping workflow",
      "Store accounting records",
    ],
    merakiAi: [
      "Review invoice compliance",
      "Detect missing TRN details",
      "Flag VAT risks",
      "Identify duplicate invoices",
      "Classify expenses & revenue",
      "Prepare VAT review summaries",
      "Support corporate tax categorisation",
      "Prepare for UAE e-invoicing readiness",
      "Route documents for accountant review",
    ],
    statement: "Meraki AI works with accounting platforms. It does not replace them.",
  },
  // Section 2 — What It Checks
  checks: [
    { title: "VAT Invoice Compliance", body: "Checks whether invoices contain key VAT information. Flags missing TRN, invoice date, supplier details, VAT amount, or required fields.", icon: "vat" },
    { title: "TRN & Supplier Details", body: "Detects missing or incomplete supplier and customer tax details.", icon: "id" },
    { title: "VAT Treatment Review", body: "Flags possible incorrect VAT treatment and tax category issues.", icon: "review" },
    { title: "Duplicate Invoice Detection", body: "Identifies possible duplicate invoices before they affect records.", icon: "duplicate" },
    { title: "Expense & Revenue Classification", body: "Suggests categories for expenses, revenue, projects, or departments.", icon: "tag" },
    { title: "Supplier Invoice Review", body: "Helps review supplier invoices before VAT recovery.", icon: "supplier" },
    { title: "Corporate Tax Categorisation", body: "Supports categorisation of expenses and records for corporate tax review.", icon: "ct" },
    { title: "E-Invoicing Readiness", body: "Helps prepare invoice data and workflows for future UAE e-invoicing requirements.", icon: "invoice" },
    { title: "Missing Document Alerts", body: "Flags invoices or receipts that need additional information.", icon: "alert" },
    { title: "Accountant Review Queue", body: "Routes high-risk or unclear items for Meraki accountant review.", icon: "queue" },
  ],
  // Section 3 — MVP product (Invoice Review)
  mvp: {
    title: "First product: Meraki AI Invoice Review",
    sub: "Upload your invoices. Get a VAT and compliance review before filing.",
    steps: [
      { step: "01", title: "Upload documents", body: "Invoices, receipts, supplier invoices, quotations, LPOs, emails, or WhatsApp screenshots." },
      { step: "02", title: "AI extracts the data", body: "Supplier, customer, TRN, invoice number, date, amount, VAT, category, payment details." },
      { step: "03", title: "Compliance checks run", body: "Missing information, possible VAT errors, duplicates, and risk flags surfaced automatically." },
      { step: "04", title: "Accountant review", body: "A Meraki accountant reviews flagged items where needed." },
      { step: "05", title: "Review report delivered", body: "A clear invoice review report with VAT and compliance summary, ready for filing." },
    ],
    reportShows: [
      "Passed checks",
      "Errors",
      "Warnings",
      "Recommended corrections",
      "VAT treatment notes",
      "Documents requiring accountant review",
    ],
  },
  // Section 4 — Integrations (planned, not live)
  integrations: {
    title: "Designed to work with your existing accounting system.",
    body: "Meraki AI is built to support businesses already using accounting tools. It can be structured to connect with existing workflows instead of forcing companies to replace their systems.",
    items: [
      { name: "Zoho Books", note: "Planned" },
      { name: "QuickBooks", note: "Planned" },
      { name: "Xero", note: "Planned" },
      { name: "Tally", note: "Planned" },
      { name: "Excel", note: "Export-ready" },
      { name: "Email", note: "Planned" },
      { name: "WhatsApp", note: "Planned" },
      { name: "Bank feeds", note: "Planned" },
      { name: "UAE e-invoicing providers", note: "Future" },
    ],
  },
  // Section 5 — Workflow
  workflow: [
    { step: "01", title: "Upload invoice or connect accounting software", body: "Documents arrive via portal, email, or planned integrations." },
    { step: "02", title: "Meraki AI extracts and checks data", body: "Key fields parsed, structured, and validated against compliance rules." },
    { step: "03", title: "VAT, tax, and e-invoicing risks are flagged", body: "Missing TRN, VAT mismatches, duplicates, and review prompts surfaced." },
    { step: "04", title: "Manager or accountant approves", body: "Approval queue routes items to the right person before they hit the books." },
    { step: "05", title: "Data syncs to accounting software or export", body: "Clean records sent to your existing system or exported for upload." },
    { step: "06", title: "Documents and audit trail are stored", body: "Original files indexed and searchable, with full review history." },
    { step: "07", title: "Monthly VAT/compliance summary is prepared", body: "Ready for accountant sign-off and filing." },
  ],
  // Section 6 — Compliance strategy
  compliance: {
    title: "Built for readiness, review, and safer workflows.",
    body: "Meraki AI is not positioned as a UAE Accredited Service Provider for e-invoicing at this stage. The safer strategy is to focus first on invoice validation, VAT checking, workflow automation, and compliance readiness. As UAE e-invoicing develops, Meraki AI can later integrate with accredited service providers where required.",
  },
  // Section 7 — Audience
  audience: {
    title: "Built for UAE businesses that handle invoices every month.",
    body: "Meraki AI is for companies that already have invoices, receipts, supplier bills, and VAT records — but need a smarter way to review, classify, validate, and prepare them before accounting and tax submission.",
    segments: [
      "SMEs",
      "Contractors",
      "Consultants",
      "Service businesses",
      "Landlords",
      "Property managers",
      "Retail shops",
      "Restaurants",
      "Admin teams",
      "Accountants",
      "Business owners",
      "Companies preparing for e-invoicing",
      "Businesses wanting cleaner VAT records",
    ],
  },
  finalCta: {
    title: "Cleaner invoices. Cleaner VAT. Cleaner audits.",
    sub: "Start with an AI Invoice Review, or speak to our team about a workflow that fits.",
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
    {
      name: "AI Invoice Review",
      best: "Small businesses that want monthly invoice checking before VAT filing",
      price: "Starting from AED ___ / month",
      includes: [
        "Upload invoices and receipts",
        "AI extraction of key fields",
        "VAT field checks",
        "Missing TRN alerts",
        "Duplicate invoice warnings",
        "Basic review report",
      ],
      excludes: ["Accountant review", "Filings"],
    },
    {
      name: "AI + Accountant Review",
      best: "SMEs that want AI checks plus professional review",
      price: "Starting from AED ___ / month",
      includes: [
        "Everything in AI Invoice Review",
        "Meraki accountant review of flagged items",
        "Monthly VAT summary",
        "Recommended corrections",
        "Compliance notes",
      ],
      excludes: ["Multi-user approvals"],
      featured: true,
    },
    {
      name: "AI Compliance Workflow",
      best: "Businesses with regular invoices, multiple suppliers, and admin teams",
      price: "Starting from AED ___ / month",
      includes: [
        "Multi-user upload workflow",
        "Approval queue",
        "Expense classification",
        "Supplier invoice review",
        "E-invoicing readiness tracking",
        "Export-ready summaries",
      ],
      excludes: ["Bookkeeping", "Filings"],
    },
    {
      name: "Managed Finance + AI",
      best: "Companies that want Meraki to manage the full accounting and compliance workflow",
      price: "Starting from AED ___ / month",
      includes: [
        "Monthly bookkeeping support",
        "VAT and tax support",
        "AI document review",
        "Accountant verification",
        "Management reports",
        "Cash-flow review",
        "Custom workflow",
      ],
      excludes: [],
    },
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
  { title: "Digital-first future", body: "Meraki AI is being built as a UAE invoice compliance copilot — an intelligence layer that reviews invoices, checks VAT, and prepares records for filing alongside your existing accounting system." },
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
    q: "Does Meraki AI replace my accounting software?",
    a: "No. Meraki AI is a compliance intelligence layer — invoice review, VAT checks, duplicate detection, classification, and accountant routing. It works with your existing accounting software (Zoho, QuickBooks, Xero, Tally, or Excel), not in place of it.",
  },
  {
    q: "Does AI replace your accountants?",
    a: "No. AI handles routine document review — extraction, VAT field checks, duplicate alerts, suggested categories. Our team reviews where accuracy and judgement matter. Smart workflows, professional oversight.",
  },
  {
    q: "Can I subscribe online?",
    a: "Yes — Meraki AI is being prepared for online subscription. Accounting and tax packages can be initiated online with onboarding handled by our team.",
  },
  {
    q: "Mainland or free zone — which do you support?",
    a: "Both. Setup, accounting, tax, and PRO services across UAE mainland and free zone entities.",
  },
];
