import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Radiant Cross Australia",
  description: "Radiant Cross is an Australian training and lifestyle label built by discipline. Join the list for our first release.",
  metadataBase: new URL("https://radiantcross.au"),
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg" },
  openGraph: { title: "Radiant Cross Australia", description: "Built by discipline. Australian training and lifestyle. Be first to know.", type: "website", siteName: "Radiant Cross" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
