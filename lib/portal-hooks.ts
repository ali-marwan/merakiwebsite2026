// Backend-ready hook surface for the Meraki AI Assistant.
//
// Frontend-only for now: every function below is a placeholder that resolves
// to a stubbed result. When backend services are wired up, replace the bodies
// of these hooks (or swap to real fetch calls / SDKs) without changing the
// UI components that import them. Keep the function signatures stable so the
// UI does not need to be refactored.

// TODO(auth): Replace with real authentication (Clerk, Auth.js, custom JWT).
export type Session = { userId: string; email: string } | null;
export async function getSession(): Promise<Session> {
  return null;
}
export async function signIn(_email: string, _password: string): Promise<Session> {
  // TODO(auth): POST /api/auth/sign-in
  return null;
}
export async function signOut(): Promise<void> {
  // TODO(auth): POST /api/auth/sign-out
}

// TODO(subscriptions): Wire to Stripe / Tap / Telr / custom billing.
export type PlanId =
  | "ai-self-service"
  | "ai-monthly-review"
  | "ai-accounting"
  | "managed-finance";

export async function startCheckout(_plan: PlanId): Promise<{ url: string } | null> {
  // TODO(subscriptions): create checkout session and return redirect URL.
  return null;
}
export async function joinWaitlist(_email: string, _plan?: PlanId): Promise<void> {
  // TODO(subscriptions): persist to waitlist table / CRM.
}

// TODO(uploads): Replace with signed-URL upload to S3 / R2 / Azure Blob.
export type UploadKind = "invoice" | "receipt" | "petty-cash" | "voice-note";
export async function uploadDocument(
  _file: File,
  _kind: UploadKind,
): Promise<{ documentId: string } | null> {
  // TODO(uploads): get signed URL → PUT → register doc → return id.
  return null;
}

// TODO(ocr): Replace with real OCR pipeline (Textract, GCP DocAI, custom).
export type OcrResult = {
  supplier?: string;
  trn?: string;
  total?: number;
  vat?: number;
  date?: string;
  confidence: number;
};
export async function runOcr(_documentId: string): Promise<OcrResult> {
  // TODO(ocr): trigger OCR job; poll or webhook back.
  return { confidence: 0 };
}

// TODO(storage): Document index, search, retention policy.
export async function listDocuments(): Promise<unknown[]> {
  return [];
}

// TODO(client-dashboard): Aggregate KPIs (cash in/out, VAT due, open items).
export async function loadDashboard(): Promise<unknown> {
  return null;
}

// TODO(admin-review): Meraki team review queue + audit trail.
export async function listReviewQueue(): Promise<unknown[]> {
  return [];
}
