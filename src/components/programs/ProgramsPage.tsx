import React from 'react';
import { BookOpen, Music, Palette, Brain, Clock, Users, Star, Heart } from 'lucide-react';

const ProgramsPage = () => {
  const programs = [
    {
      icon: <BookOpen className="w-12 h-12 text-green-600" />,
      title: "Early Learning",
      age: "Ages 2-3",
      description: "Foundation learning through play, stories, and basic concepts.",
      features: [
        "Basic language development",
        "Motor skills activities",
        "Social interaction",
        "Sensory play",
      ]
    },
    {
      icon: <Music className="w-12 h-12 text-green-600" />,
      title: "Creative Arts",
      age: "Ages 3-4",
      description: "Music, movement, and artistic expression for holistic development.",
      features: [
        "Music and movement",
        "Arts and crafts",
        "Dramatic play",
        "Creative expression",
      ]
    },
    {
      icon: <Palette className="w-12 h-12 text-green-600" />,
      title: "Preschool Program",
      age: "Ages 4-5",
      description: "Structured learning with focus on pre-reading and math skills.",
      features: [
        "Pre-reading skills",
        "Basic mathematics",
        "Science exploration",
        "Social studies",
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-green-600" />,
      title: "Kindergarten Prep",
      age: "Ages 5-6",
      description: "Advanced preparation for successful kindergarten transition.",
      features: [
        "Reading readiness",
        "Advanced mathematics",
        "Critical thinking",
        "Independence skills",
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
              <span className="text-green-600 font-medium">Our Programs</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Age-Appropriate Learning Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each program is carefully designed to meet the developmental needs of your child,
              ensuring they reach their full potential in a nurturing environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-6">
                  <div className="bg-green-50 p-4 rounded-2xl">
                    {program.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h2>
                    <p className="text-green-600 font-medium mb-4">{program.age}</p>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                A Day at Sunshine Kids
              </h2>
              <div className="space-y-6">
                {[
                  { time: "7:00 AM - 9:00 AM", activity: "Arrival & Free Play" },
                  { time: "9:00 AM - 10:30 AM", activity: "Structured Learning" },
                  { time: "10:30 AM - 12:00 PM", activity: "Outdoor Activities" },
                  { time: "12:00 PM - 3:00 PM", activity: "Lunch & Rest Time" },
                  { time: "3:00 PM - 6:00 PM", activity: "Afternoon Activities & Pickup" },
                ].map((schedule, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-800">{schedule.time}</div>
                      <div className="text-gray-600">{schedule.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img4.jpg" 
                alt="Daily activities" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;