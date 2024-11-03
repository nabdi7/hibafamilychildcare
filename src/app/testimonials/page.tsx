import React from "react";
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";

export const metadata = {
  title: "Testimonials | Najah Family Childcare",
  description:
    "Read testimonials from parents and families who have experienced Najah Family Childcare's nurturing environment and quality early education in Seattle WA and White Center.",
  openGraph: {
    title: "Testimonials | Najah Family Childcare",
    description:
      "Read testimonials from parents and families who have experienced Najah Family Childcare's nurturing environment and quality early education in Seattle WA and White Center.",
    type: "website",
    url: "https://najahfamilychildcare.com/testimonials",
  },
  twitter: {
    title: "Testimonials | Najah Family Childcare",
    description:
      "Read testimonials from parents and families who have experienced Najah Family Childcare's nurturing environment and quality early education in Seattle WA and White Center.",
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
