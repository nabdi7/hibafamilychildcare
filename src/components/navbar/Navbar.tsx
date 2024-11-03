"use client";
import React from "react";
import { TreePine } from "lucide-react";
import Menu from "../menu/Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-6 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TreePine className="w-8 h-8 text-green-600" strokeWidth={1.5} />
            <Link href="/" className="text-xl font-bold text-green-600">
              Najah Family Childcare
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-green-600 transition"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Programs
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Register Now
            </Link>
          </div>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// "use client"
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center">
//             <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               KidsPlay
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
//             <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
//             <a href="#programs" className="text-gray-600 hover:text-blue-600 transition">Programs</a>
//             <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition">Gallery</a>
//             <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
//             <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition">
//               Enroll Now
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-600"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4">
//             <div className="flex flex-col space-y-4">
//               <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
//               <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
//               <a href="#programs" className="text-gray-600 hover:text-blue-600 transition">Programs</a>
//               <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition">Gallery</a>
//               <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition">
//                 Enroll Now
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
