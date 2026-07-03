import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ChatWidget from "@/components/ChatWidget";
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
  metadataBase: new URL("https://www.woodriverbc.org"),
  title: {
    default: `${site.name} | Independent Baptist Church in Wyoming, RI`,
    template: `%s | ${site.name}`,
  },
  description:
    "Wood River Baptist Church is an independent Baptist church in Wyoming, Rhode Island, serving families throughout southern Rhode Island with Bible preaching, worship services, gospel outreach, sermons, and Christian resources.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.originalUrl }],
  creator: site.name,
  publisher: site.name,
  category: "Church",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.originalUrl,
    siteName: site.name,
    title: `${site.name} | Independent Baptist Church in Wyoming, RI`,
    description:
      "Bible preaching, worship services, gospel outreach, sermons, and Christian resources for families in Wyoming and southern Rhode Island.",
    images: [
      {
        url: "/hero-image-wrbc.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Wyoming, Rhode Island`,
    description:
      "Bible preaching, worship services, gospel outreach, sermons, and Christian resources in southern Rhode Island.",
    images: ["/hero-image-wrbc.png"],
  },
  alternates: {
    types: {
      "application/rss+xml": "/podcast.xml",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#5bdae1",
};

const churchStructuredData = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: site.name,
  url: site.originalUrl,
  logo: `${site.originalUrl}/icon.png`,
  image: `${site.originalUrl}/hero-image-wrbc.png`,
  description:
    "An independent Baptist church serving Wyoming and southern Rhode Island with Bible preaching, worship, gospel outreach, and Christian resources.",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "246 Kingstown Rd",
    addressLocality: "Wyoming",
    addressRegion: "RI",
    postalCode: "02898",
    addressCountry: "US",
  },
  sameAs: [site.facebook, site.instagram, site.podcast, site.twitter],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchStructuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
