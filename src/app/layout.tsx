import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Najah Family Childcare | Licensed Family Childcare in Seattle WA",
    template: "%s | Najah Family Childcare"
  },
  description:
    "Licensed family childcare in Seattle WA providing quality early childhood education and care for children of all ages. Offering full-time and part-time programs, experienced caregivers, and a nurturing home-based learning environment.",
  keywords: [
    "childcare",
    "daycare",
    "family childcare",
    "early childhood education",
    "preschool",
    "infant care",
    "toddler care",
    "seattle childcare",
    "licensed daycare",
    "home-based childcare"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  authors: [
    {
      name: "Najah Family Childcare",
      url: "https://najahfamilychildcare.com",
    }
  ],
  creator: "Najah Family Childcare",
  publisher: "Najah Family Childcare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Najah Family Childcare | Licensed Family Childcare Center in Seattle WA",
    description:
      "Licensed family childcare center providing quality early childhood education and care for children of all ages. Offering full-time and part-time programs in a nurturing home-based environment.",
    type: "website",
    siteName: "Najah Family Childcare",
    url: "https://najahfamilychildcare.com",
    locale: "en_US",
    images: [
      {
        url: "https://najahfamilychildcare.com/img8.jpg",
        width: 500,
        height: 500,
        alt: "Najah Family Childcare - Quality childcare and early education center",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najah Family Childcare | Licensed Childcare Center in Seattle WA",
    description: 
      "Licensed family childcare center providing quality early childhood education and care for children of all ages. Offering full-time and part-time programs.",
    images: ["https://najahfamilychildcare.com/img8.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: "", 
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}