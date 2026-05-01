import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Meraki Consultants — UAE Business Consultancy & Finance Operations",
    template: "%s | Meraki Consultants",
  },
  description:
    "Meraki Consultants brings accounting, tax, compliance, business setup, cash-flow management, and AI-assisted workflows into one connected system for UAE companies. One system. One team. One standard.",
  keywords: [
    "UAE accounting services",
    "Dubai accounting",
    "UAE bookkeeping",
    "VAT filing UAE",
    "Corporate tax UAE",
    "Business setup UAE",
    "PRO services UAE",
    "Cash flow management UAE",
    "E-invoicing UAE",
    "Tax invoice compliance UAE",
    "AI accounting assistant UAE",
  ],
  metadataBase: new URL("https://meraki-consultants.ae"),
  openGraph: {
    title: "Meraki Consultants — UAE Business Consultancy",
    description:
      "Enterprise-level business support, made accessible to UAE companies. One system. One team. One standard.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
