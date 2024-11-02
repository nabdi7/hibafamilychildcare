import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Whitney Buckles",
      content:
        "Having a loving village for my son was the most important thing on my list when I moved. I sat and discussed my concerns with Mrs. Fartun. She gave me a shoulder to cry on and a promise to care/protect my son. She delivered that and so much more! The ENTIRE family is amazing and loving! I’m so GRATEFUL we found them. They love and care for my son like he is their own. They are so accommodating and flexible with my changing schedule. My son loves them and they love him! I recommend this facility to anyone looking for a LOVING environment for their child and looking to have a peace of mind while working. Thanks family! We truly APPRECIATE you guys!💚.",
      rating: 5,
    },
    {
      name: "Kaylee Kahn",
      content:
        "My two daughters have attended this daycare since June of 2023 and this is by far the best home childcare they have attended in the 3 years we have lived in Washington. It truly feels like home away from home for my daughters. She has a huge heart and treats my children as her own. If you are looking for a safe, fun, and loving daycare. Najah family childcare is best for your babies!.",
      rating: 5,
    },
    {
      name: "Jazmine Curry",
      content:
        "Me and my Lil ones love the daycare center and Mrs fartun she is so awesome kind and fun love her spirt the daycare is always clean and well organized!!",
      rating: 5,
    },
    {
      name: "Ramla Hussein",
      content: "Amazing daycare ! She loves kids and treats them amazing",
      rating: 5,
    },
    {
      name: "Abdi Jama",
      content:
        "Very nice well set up , more importantly good people with such good care",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy parents!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
