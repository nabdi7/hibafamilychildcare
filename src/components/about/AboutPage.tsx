import React from "react";
import {
  Users,
  Award,
  Clock,
  BookOpen,
  FileText,
  Download,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      value: "300+",
      label: "Happy Children",
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      value: "8+",
      label: "Years Experience",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      value: "24/7",
      label: "Hours Care",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      value: "6",
      label: "Expert Staff",
    },
  ];

  const downloads = [
    {
      title: "Application Form",
      description:
        "Download our application form to begin the enrollment process",
      icon: <FileText className="w-6 h-6" />,
      href: "/application.pdf",
    },
    {
      title: "Parent Handbook",
      description: "View our comprehensive guide for parents",
      icon: <FileText className="w-6 h-6" />,
      href: "/parent-handbook.pdf",
    },
    {
      title: "Childcare Agreement",
      description: "Read and sign our childcare agreement",
      icon: <FileText className="w-6 h-6" />,
      href: "/childcareAgreement.pdf",
    },
    {
      title: "Immunization",
      description: "Learn about our immunization requirements",
      icon: <FileText className="w-6 h-6" />,
      href: "/immunization.pdf",
    },
  ];

  return (
    <div className="bg-green-50 ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none" />
      </div>
      <section className="py-20">
        <div className="container mx-auto px-6 pb-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
                <span className="text-green-600 font-medium">About Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Nurturing Tomorrow&apos;s Leaders Today
              </h2>
              <p className="text-gray-600 mb-6">
                At Najah Family Childcare, we believe every child deserves the
                best start in life. Since 2008, we&apos;ve been providing
                exceptional childcare services that focus on nurturing both the
                mind and heart of each child in our care.
              </p>
              <p className="text-gray-600 mb-8">
                Our state-of-the-art facility and experienced staff create an
                environment where children can explore, learn, and grow while
                feeling safe and loved. We emphasize play-based learning, social
                development, and age-appropriate academic preparation.
              </p>
            </div>
            <div className="relative">
              <img
                src="/img4.jpg"
                alt="Children playing"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-green-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        {stat.icon}
                      </div>
                      <div className="font-bold text-xl text-gray-800">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-green-50 px-4">
            <div className="flex space-x-4 items-center">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="h-4 w-4 rounded-full bg-green-600"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Najah Family Childcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description:
                  "We maintain the highest safety standards to ensure your child's wellbeing",
              },
              {
                title: "Learning Through Play",
                description:
                  "We believe children learn best when they're having fun and engaging actively",
              },
              {
                title: "Individual Growth",
                description:
                  "Every child develops at their own pace, and we honor that journey",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Important Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download these essential documents to get started with Najah
              Family Childcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="block bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
