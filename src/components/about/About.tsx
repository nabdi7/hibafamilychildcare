import React from 'react';
import { Heart, Shield, Users, Book } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Loving Care",
      description: "Nurturing environment where every child feels safe and valued"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Safe Space",
      description: "State-of-the-art security and health protocols for peace of mind"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Expert Teachers",
      description: "Experienced educators passionate about early childhood development"
    },
    {
      icon: <Book className="w-6 h-6 text-green-500" />,
      title: "Learning Through Play",
      description: "Innovative curriculum that makes learning fun and engaging"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Daycare activities" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/api/placeholder/300/200" 
                  alt="Daycare activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/api/placeholder/300/200" 
                  alt="Daycare activities" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Daycare activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nurturing Young Minds for a 
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brighter Tomorrow
              </span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              At KidsPlay, we believe every child deserves the best start in life. 
              Our approach combines play-based learning with structured activities 
              to create an enriching environment where children can explore, learn, 
              and grow with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;