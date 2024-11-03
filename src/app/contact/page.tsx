import React from "react";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact Us | Najah Family Childcare",
  description:
    "Get in touch with Najah Family Childcare to learn more about our childcare center in Seattle WA and White Center. We provide quality early education and nurturing care for children of all ages.",
  openGraph: {
    title: "Contact Us | Najah Family Childcare",
    description:
      "Get in touch with Najah Family Childcare to learn more about our childcare center in Seattle WA and White Center. We provide quality early education and nurturing care for children of all ages.",
    type: "website",
    url: "https://najahfamilychildcare.com/contact",
  },
  twitter: {
    title: "Contact Us | Najah Family Childcare",
    description:
      "Get in touch with Najah Family Childcare to learn more about our childcare center in Seattle WA and White Center. We provide quality early education and nurturing care for children of all ages.",
  },
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
