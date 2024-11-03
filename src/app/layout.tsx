import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Najah Family Childcare",
  description:
    "A family daycare that provides a safe, nurturing, and educational environment for children.",
  keywords:
    "childcare, daycare, preschool, early childhood education, Najah Family Childcare",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  openGraph: {
    title: "Najah Family Childcare",
    description:
      "A family daycare that provides a safe, nurturing, and educational environment for children.",
    type: "website",
    siteName: "Najah Family Childcare",
    url: "https://najahfamilychildcare.com",

    images: [
      {
        url: "https://najahfamilychildcare.com/img5.jpg",
        width: 500,
        height: 500,
        alt: "Najah Family Childcare",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
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
