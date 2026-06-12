import type { Metadata } from "next";
import { Archivo_Narrow, Outfit } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Worcester & Central MA`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.trade} for ${siteConfig.serviceArea}. Family-owned since ${siteConfig.founded}. ${siteConfig.license}. 24/7 emergency service. Call ${siteConfig.phone}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteConfig.primaryDomain || undefined,
    name: siteConfig.businessName,
    description: `${siteConfig.trade} for ${siteConfig.serviceArea}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
    },
    areaServed: siteConfig.serviceAreaList.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.rating,
      reviewCount: siteConfig.stats.projects,
    },
  };

  return (
    <html
      lang="en"
      className={`${archivoNarrow.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ScrollToTop />
        <Header />
        <main className="flex-1 mt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
