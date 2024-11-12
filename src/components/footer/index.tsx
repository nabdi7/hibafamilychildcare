import { Phone, Mail, MapPin } from "lucide-react";

export interface QuickLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  type: "phone" | "email" | "location";
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export const quickLinks: QuickLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Our Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="w-5 h-5" />,
    text: "(206) 371-3011",
    type: "phone",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    text: "koosmohamed2@gmail.com",
    type: "email",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "6532 32nd Ave SW, Seattle, WA",
    type: "location",
  },
];

export const businessHours = {
  days: "We're Open Daily",
  hours: "24 hours",
};

export const companyInfo = {
  name: "Hiba Family Childcare",
  tagline:
    "Nurturing young minds and creating bright futures through play-based learning and dedicated care.",
  copyright: "Hiba Family Childcare",
  developer: {
    name: "QD Web Designs",
    url: "https://www.qdwebdesigns.com/",
  },
};
