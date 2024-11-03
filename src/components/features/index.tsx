import { Shield, Heart, Users, Clock } from 'lucide-react';
import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Licensed & Certified",
    description: "Our facility and staff meet the highest safety and state standards"
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "Nurturing Environment",
    description: "Creating a loving and supportive space for every child to thrive"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Small Class Sizes",
    description: "Ensuring individual attention and personalized care for each child"
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "Flexible Hours",
    description: "Convenient scheduling options to support working parents"
  }
];