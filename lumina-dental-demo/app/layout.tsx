import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina Dental Studio | Thoughtful Dentistry, Beautifully Done",
  description: "Modern, thoughtful dental care in Austin, Texas. Explore preventive, cosmetic and restorative dentistry at Lumina Dental Studio.",
  keywords: ["Austin dentist", "cosmetic dentistry", "family dentistry", "dental implants", "teeth whitening"],
  openGraph: {
    title: "Lumina Dental Studio",
    description: "A calmer kind of dental care, right here in Austin.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
