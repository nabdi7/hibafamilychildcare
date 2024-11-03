import React from "react";
import { programs } from "./index";

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6 pb-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Age-appropriate programs designed to nurture your child&apos;s
            natural curiosity and love for learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
            >
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {program.title}
              </h3>
              <p className="text-green-600 font-medium mb-4">{program.age}</p>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
