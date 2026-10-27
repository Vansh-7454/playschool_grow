import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const headingFont = Fredoka({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://littlestepslucknow.in"),
  title: {
    default: siteContent.pages.home.title,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: siteContent.pages.home.description,
  keywords: [
    "Play school Lucknow",
    "Day care Lucknow",
    "Gomti Nagar play school",
    "Early childhood education Lucknow",
    "Nursery admissions Lucknow",
    "Montessori Lucknow",
    "Pre school Gomti Nagar",
  ],
  authors: [{ name: siteContent.brand.name }],
  creator: siteContent.brand.name,
  publisher: siteContent.brand.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: siteContent.brand.name,
    description: siteContent.brand.shortDescription,
    url: "https://littlestepslucknow.in",
    siteName: siteContent.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteContent.brand.name} - Play School & Day Care in Lucknow`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.brand.name,
    description: siteContent.brand.shortDescription,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness Structured Data strictly adhering to Section 17 & facts provided
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: siteContent.brand.name,
    description: siteContent.brand.shortDescription,
    url: "https://littlestepslucknow.in",
    telephone: siteContent.contact.phoneTel,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gomti Nagar",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226010",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FFFDF9] text-[#29332F] antialiased">
        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF786B] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Sticky Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
