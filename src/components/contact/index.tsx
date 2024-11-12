export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  hours: {
    text: string;
    details: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  tour: {
    title: string;
    description: string;
  };
  mapUrl: string;
}

export const contactInfo: ContactInfo = {
  address: {
    street: "6532 32nd Ave SW",
    city: "Seattle",
    state: "WA",
    zip: "98126",
  },
  phone: "(206) 371-3011",
  email: "koosmohamed2@gmail.com",
  hours: {
    text: "We're Open Daily",
    details: "24 Hours",
  },
  social: {
    facebook: "https://www.facebook.com/hibafamilychildcare",
    instagram: "https://www.instagram.com/hibafamilychildcare",
    youtube: "https://www.instagram.com/hibafamilychildcare",
  },
  company: {
    name: "Contact Us",
    tagline: "Get in Touch With Us",
    description:
      "We're here to answer any questions you may have about our programs and enrollment process.",
  },
  tour: {
    title: "Schedule a Tour",
    description:
      "Visit our facility and see firsthand how we nurture young minds in a safe, engaging environment.",
  },
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2693.2175798653197!2d-122.3758739!3d47.5440939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041688e9c9f69%3A0x9cc33ad2cb2ab7b!2sHiba%20Family%20Home%20Childcare!5e0!3m2!1sen!2sus!4v1731370778891!5m2!1sen!2sus",
};

