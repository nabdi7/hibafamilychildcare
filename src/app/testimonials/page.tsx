import React from "react";
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";

export const metadata = {
  title: "Testimonials | Hiba Family Childcare",
  description:
    "Read testimonials from parents and families who have experienced Hiba Family Childcare's nurturing environment and quality early education in Seattle WA.",
  openGraph: {
    title: "Testimonials | Hiba Family Childcare",
    description:
      "Read testimonials from parents and families who have experienced Hiba Family Childcare's nurturing environment and quality early education in Seattle WA.",
    type: "website",
    url: "https://hibafamilychildcare.com/testimonials",
  },
  twitter: {
    title: "Testimonials | Hiba Family Childcare",
    description:
      "Read testimonials from parents and families who have experienced Hiba Family Childcare's nurturing environment and quality early education in Seattle WA.",
  },
};

const page = () => {
  return (
    <div>
      <TestimonialsPage />
    </div>
  );
};

export default page;
