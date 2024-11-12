import React from "react";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact Us | Hiba Family Childcare",
  description:
    "Get in touch with Hiba Family Childcare to learn more about our childcare in Seattle WA. We provide quality early education and nurturing care for children of all ages.",
  openGraph: {
    title: "Contact Us | Hiba Family Childcare",
    description:
      "Get in touch with Hiba Family Childcare to learn more about our childcare in Seattle WA. We provide quality early education and nurturing care for children of all ages.",
    type: "website",
    url: "https://hibafamilychildcare.com/contact",
  },
  twitter: {
    title: "Contact Us | Hiba Family Childcare",
    description:
      "Get in touch with Hiba Family Childcare to learn more about our childcare in Seattle WA. We provide quality early education and nurturing care for children of all ages.",
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
