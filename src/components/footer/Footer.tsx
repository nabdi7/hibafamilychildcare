import React from 'react';
import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sun className="w-8 h-8 text-green-400" />
              <Link
                href="/" className="text-xl font-bold">Najah Family Childcare</Link>
            </div>
            <p className="text-gray-400">
              Nurturing young minds and creating bright futures through play-based learning 
              and dedicated care.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link
                href="/programs" className="text-gray-400 hover:text-green-400 transition">Programs</Link></li>
              <li><Link
                href="/about" className="text-gray-400 hover:text-green-400 transition">About Us</Link></li>
              <li><Link
                href="/contact" className="text-gray-400 hover:text-green-400 transition">Contact Us</Link></li>
              <li><Link
                href="/testimonials" className="text-gray-400 hover:text-green-400 transition">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>(206) 422-8654</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>info@sunshinekids.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>8411 8th Ave SW, Seattle WA 98106</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Hours of Operation</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Monday - Friday</li>
              <li>7:00 AM - 6:00 PM</li>
              <li className="pt-4">Follow Us</li>
              <li className="flex gap-4">
                <a href="#" className="hover:text-green-400 transition"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-green-400 transition"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-green-400 transition"><Instagram className="w-5 h-5" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sunshine Kids Daycare. All rights reserved.</p>
        </div>

        {/* made by */}
        <div className="flex justify-center items-center gap-4 text-gray-400">
          <span>Made by</span>
          <a href="https://www.qdwebdesigns.com/" className="text-green-400 hover:text-green-600 transition">QD Web Designs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;