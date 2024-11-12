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
              Hiba Family Childcare
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
