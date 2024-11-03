import React from "react";
import Gallery from "@/components/gallery/Gallery";

export const metadata = {
  title: "Our Gallery | Najah Family Childcare",
  description:
    "View our gallery of images showcasing our childcare center in Seattle WA and White Center. Discover our child-centered approach and nurturing environment.",
  openGraph: {
    title: "Our Gallery | Najah Family Childcare",
    description:
      "View our gallery of images showcasing our childcare center in Seattle WA and White Center. Discover our child-centered approach and nurturing environment.",
    type: "website",
    url: "https://najahfamilychildcare.com/gallery",
  },
  twitter: {
    title: "Our Gallery | Najah Family Childcare",
    description:
      "View our gallery of images showcasing our childcare center in Seattle WA and White Center. Discover our child-centered approach and nurturing environment.",
  },
};

const page = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default page;
