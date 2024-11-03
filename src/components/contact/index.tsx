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
    street: "8411 8th Ave SW",
    city: "Seattle",
    state: "WA",
    zip: "98106",
  },
  phone: "(206) 422-8654",
  email: "khalfaj2000@gmail.com",
  hours: {
    text: "We're Open Daily",
    details: "24 Hours",
  },
  social: {
    facebook: "https://www.facebook.com/najahfamilychildcare",
    instagram: "https://www.instagram.com/najahfamilychildcare",
    youtube: "https://www.instagram.com/najahfamilychildcare",
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
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10776.185096117453!2d-122.3457709!3d47.5279621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041c0e35391ab%3A0xe4ea2bb87e3c92a5!2sNajah%20Family%20Childcare!5e0!3m2!1sen!2sus!4v1730525388110!5m2!1sen!2sus",
};
