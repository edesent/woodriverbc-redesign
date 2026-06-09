import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woodriverbc-redesign.local"),
  title: {
    default: `${site.name} | Wyoming, RI`,
    template: `%s | ${site.name}`,
  },
  description:
    "A redesigned website for Wood River Baptist Church in Wyoming, Rhode Island, with services, events, Bible resources, prayer, gospel pages, and church information.",
};

export const viewport: Viewport = {
  themeColor: "#5bdae1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://static.tithely.com/give/give.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
