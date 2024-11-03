import React from "react";
import Image from "next/image";
import Link from "next/link";
import { features } from "./index";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-green-50">
      <div className="container mx-auto px-6 pb-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the highest quality childcare services with a focus on
            safety, education, and fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Schedule a Tour Today
              </h3>
              <p className="text-gray-600 mb-6">
                Visit our facility and see firsthand how we nurture young minds
                in a safe, engaging environment.
              </p>
              <Link
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
              >
                Book Your Tour
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/img10.jpg"
                width={500}
                height={400}
                alt="Daycare facility"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
