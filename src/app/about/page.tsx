import React from "react";
import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About Us | Hiba Family Childcare",
  description:
    "Licensed home-based childcare center in Seattle WA providing quality early education and nurturing care for children of all ages. Discover our experienced team and child-centered approach.",
  openGraph: {
    title: "About Us | Hiba Family Childcare",
    description:
      "Licensed home-based childcare center in Seattle WA providing quality early education and nurturing care for children of all ages.",
    type: "website",
    url: "https://hibafamilychildcare.com/about",
  },
  twitter: {
    title: "About Us | Hiba Family Childcare",
    description:
      "Licensed home-based childcare center in Seattle WA providing quality early education and nurturing care for children of all ages.",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
