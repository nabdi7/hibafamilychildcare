import React from "react";
import Gallery from "@/components/gallery/Gallery";

export const metadata = {
  title: "Our Gallery | Hiba Family Childcare",
  description:
    "View our gallery of images showcasing our childcare in Seattle WA. Discover our child-centered approach and nurturing environment.",
  openGraph: {
    title: "Our Gallery | Hiba Family Childcare",
    description:
      "View our gallery of images showcasing our childcare in Seattle WA. Discover our child-centered approach and nurturing environment.",
    type: "website",
    url: "https://hibafamilychildcare.com/gallery",
  },
  twitter: {
    title: "Our Gallery | Hiba Family Childcare",
    description:
      "View our gallery of images showcasing our childcare in Seattle WA. Discover our child-centered approach and nurturing environment.",
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
