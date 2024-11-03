import React from "react";
import ProgramsPage from "@/components/programs/ProgramsPage";

export const metadata = {
  title: "Our Programs | Najah Family Childcare",
  description:
    "Learn about our programs at Najah Family Childcare, a licensed home-based childcare in Seattle WA. We provide quality early education and nurturing care for children of all ages.",
  openGraph: {
    title: "Our Programs | Najah Family Childcare",
    description:
      "Learn about our programs at Najah Family Childcare, a licensed home-based childcare in Seattle WA. We provide quality early education and nurturing care for children of all ages.",
    type: "website",
    url: "https://najahfamilychildcare.com/programs",
  },
  twitter: {
    title: "Our Programs | Najah Family Childcare",
    description:
      "Learn about our programs at Najah Family Childcare, a licensed home-based childcare in Seattle WA. We provide quality early education and nurturing care for children of all ages.",
  },
};

const page = () => {
  return (
    <div>
      <ProgramsPage />
    </div>
  );
};

export default page;
