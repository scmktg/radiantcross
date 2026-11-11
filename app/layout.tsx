import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Radiant Cross Australia | Built By Discipline",
  description: "The Southern Cross Tee. A premium everyday oversized essential. Explore Black and Sand from Radiant Cross Australia.",
  metadataBase: new URL("https://radiantcross.au"),
  icons: {
    icon: [{ url: "/Radiant_Cross_Favicon.ico" }],
    apple: [{ url: "/Radiant_Cross_Apple_Touch_Icon.png" }]
  },
  openGraph: { title: "Radiant Cross Australia", description: "Built by discipline. The Southern Cross Tee — Collection 001.", type: "website", siteName: "Radiant Cross" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
