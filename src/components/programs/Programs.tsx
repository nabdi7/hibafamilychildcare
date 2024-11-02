import React from 'react';
import { BookOpen, Music, Palette, Brain } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Early Learning",
      age: "Ages 2-3",
      description: "Foundation learning through play, stories, and basic concepts."
    },
    {
      icon: <Music className="w-8 h-8 text-green-600" />,
      title: "Creative Arts",
      age: "Ages 3-4",
      description: "Music, movement, and artistic expression for holistic development."
    },
    {
      icon: <Palette className="w-8 h-8 text-green-600" />,
      title: "Preschool Program",
      age: "Ages 4-5",
      description: "Structured learning with focus on pre-reading and math skills."
    },
    {
      icon: <Brain className="w-8 h-8 text-green-600" />,
      title: "Kindergarten Prep",
      age: "Ages 5-6",
      description: "Advanced preparation for successful kindergarten transition."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Age-appropriate programs designed to nurture your child's natural curiosity and love for learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
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