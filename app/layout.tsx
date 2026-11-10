import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radiant Cross — Australian Streetwear",
  description: "Australian streetwear. Dark undertones. Timeless design. Faith. Strength. Discipline.",
  metadataBase: new URL("https://radiantcross.au"),
  openGraph: {
    title: "Radiant Cross — Australian Streetwear",
    description: "Minimal by design. The first chapter is coming.",
    type: "website",
    siteName: "Radiant Cross",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
