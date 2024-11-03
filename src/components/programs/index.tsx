import { Baby, Users, Star, Sun } from "lucide-react";
import { ReactNode } from "react";

export interface Program {
  icon: ReactNode;
  title: string;
  age: string;
  description: string;
}

export const programs: Program[] = [
  {
    icon: <Baby className="w-8 h-8 text-green-600" />,
    title: "Toddlers",
    age: "Ages 12-36 months",
    description: "Gentle care and playful activities in a cozy, nurturing environment.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Preschool Age",
    age: "Ages 3-4",
    description: "Social playtime, fun activities, and friendly interaction with other children.",
  },
  {
    icon: <Star className="w-8 h-8 text-green-600" />,
    title: "Pre-K Age",
    age: "Ages 4-5",
    description: "Engaging activities, storytime, and creative play throughout the day.",
  },
  {
    icon: <Sun className="w-8 h-8 text-green-600" />,
    title: "Kindergarten Age",
    age: "Ages 5-6",
    description: "Fun-filled days with arts, crafts, games, and supervised playtime.",
  },
];