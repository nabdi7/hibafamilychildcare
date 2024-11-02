import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import { Sun, Star } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-green-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* <nav className="py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-green-600">Sunshine Kids</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="programs" className="text-gray-600 hover:text-green-600">Programs</a>
            <a href="about" className="text-gray-600 hover:text-green-600">About Us</a>
            <a href="contact" className="text-gray-600 hover:text-green-600">Contact</a>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Register Now
            </button>
          </div>
        </div>
      </nav> */}

        <div className="grid md:grid-cols-2 gap-12 items-center py-24">
          <div>
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
              <span className="text-green-600 font-medium">
                Opening Hours: 24 hours{" "}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Growing Minds,
              <span className="text-green-600">Nurturing Hearts</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience a loving environment where your child will learn, play,
              and grow. Our experienced educators create magical moments every
              day.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition inline-block text-center"
              >
                Book a Tour
              </Link>
              <Link
                href="/programs"
                className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition border-2 border-green-600 inline-block text-center"
              >
                View Programs
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-white p-4 shadow-xl">
              <img
                src="/img4.jpg"
                alt="Children playing"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 p-6 rounded-full">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
