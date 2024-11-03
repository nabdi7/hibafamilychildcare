import React from "react";
import Image from "next/image";
import {
  Baby,
  Users,
  Star,
  Sun,
  Clock,
  Moon,
  Sunrise,
  Sunset,
} from "lucide-react";

const ProgramsPage = () => {
  const programs = [
    {
      icon: <Baby className="w-8 h-8 text-green-600" />,
      title: "Infants & Toddlers",
      age: "Ages 12-36 months",
      description:
        "Nurturing care in a safe, loving environment with personalized attention.",
      features: [
        "Diaper changes & hygiene care",
        "Supervised playtime",
        "Nap schedules",
        "Daily updates to parents",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Preschool Age",
      age: "Ages 3-4",
      description:
        "Active care with plenty of fun activities and social interaction.",
      features: [
        "Group playtime",
        "Outdoor activities",
        "Snacks & meals",
        "Rest periods",
      ],
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: "Pre-K Age",
      age: "Ages 4-5",
      description:
        "Engaging daycare with focus on social skills and creative play.",
      features: [
        "Supervised group activities",
        "Indoor/outdoor play",
        "Meal & snack time",
        "Quiet time",
      ],
    },
    {
      icon: <Sun className="w-8 h-8 text-green-600" />,
      title: "School Age",
      age: "Ages 5-6",
      description:
        "Before & after school care with fun recreational activities.",
      features: [
        "Homework time supervision",
        "Free play periods",
        "Healthy snacks",
        "Group activities",
      ],
    },
  ];

  return (
    <div className="bg-green-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      <section className="py-20">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
              <span className="text-green-600 font-medium">Our Programs</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Age-Based Childcare Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide loving, attentive care for children of all ages in a
              safe and nurturing environment. Our focus is on creating a
              comfortable second home where your child can play, rest, and grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-green-50 p-4 rounded-2xl">
                    {program.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {program.title}
                    </h2>
                    <p className="text-green-600 font-medium mb-4">
                      {program.age}
                    </p>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              24-Hour Care Schedule
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Open 24/7 to accommodate all work schedules. Our caring staff is
              here around the clock to provide safe, nurturing care for your
              child.
            </p>
          </div>
          <div className="grid  lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Sunrise className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Day Shift
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-gray-800">
                          6:00 AM - 2:00 PM
                        </div>
                        <div className="text-gray-600">
                          Morning activities, breakfast, outdoor play
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Sunset className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Evening Shift
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-gray-800">
                          2:00 PM - 10:00 PM
                        </div>
                        <div className="text-gray-600">
                          Afternoon activities, dinner, quiet play
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Moon className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Night Shift
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-gray-800">
                          10:00 PM - 6:00 AM
                        </div>
                        <div className="text-gray-600">
                          Bedtime routine, peaceful sleep monitoring
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img9.jpg"
                width={650}
                height={400}
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
