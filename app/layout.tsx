import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radiant Cross — Built by Discipline",
  description: "Australian training and lifestyle apparel. Discipline in the gym, at work and in life. Collection 001: The Original Tee.",
  metadataBase: new URL("https://radiantcross.au"),
  openGraph: {
    title: "Radiant Cross — Built by Discipline",
    description: "One tee. One philosophy. Australian training and lifestyle apparel built by discipline.",
    type: "website",
    siteName: "Radiant Cross",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
