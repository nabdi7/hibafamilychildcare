import React from "react";
import { TreePine } from "lucide-react";
import Link from "next/link";
import { quickLinks, contactInfo, businessHours, companyInfo } from "./index";

const Footer = () => {
  const getContactLink = (type: string, text: string) => {
    switch (type) {
      case "phone":
        return `tel:${text.replace(/\D/g, "")}`;
      case "email":
        return `mailto:${text}`;
      case "location":
        return `https://maps.app.goo.gl/qDUy3MDSiPztrfyK8`;
      default:
        return "#";
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TreePine className="w-8 h-8 text-green-400" />
              <Link href="/" className="text-xl font-bold">
                {companyInfo.name}
              </Link>
            </div>
            <p className="text-gray-400">{companyInfo.tagline}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-400"
                >
                  {info.icon}
                  <a
                    href={getContactLink(info.type, info.text)}
                    className="hover:text-green-400 transition"
                    target={info.type === "location" ? "_blank" : undefined}
                    rel={
                      info.type === "location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Hours of Operation</h3>
            <ul className="space-y-4 text-gray-400">
              <li>{businessHours.days}</li>
              <li className="text-green-400">{businessHours.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.copyright}. All
            rights reserved.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 text-gray-400">
          <span>Made by</span>
          <a
            href={companyInfo.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-600 transition"
          >
            {companyInfo.developer.name}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
