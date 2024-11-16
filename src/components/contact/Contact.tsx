"use client";
import emailjs from "@emailjs/browser";
import React, { useState, useRef, FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { contactInfo } from "./index";
 interface ContactFormState {
  formSubmitted: boolean;
  contactMessage: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

const Contact = () => {
  const [
    {
      formSubmitted,
      // contactMessage,
      user_name,
      user_email,
      user_phone,
      message,
    },
    setState,
  ] = useState<ContactFormState>({
    formSubmitted: false,
    contactMessage: "",
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  console.log("Service ID:", process.env.NEXT_PUBLIC_APP_SERVICE_ID);
  console.log("Template ID:", process.env.NEXT_PUBLIC_APP_TEMPLATE_ID);
  console.log("User ID:", process.env.NEXT_PUBLIC_APP_USER_ID);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID ?? "",
        formRef.current!,
        process.env.NEXT_PUBLIC_APP_USER_ID ?? ""
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setState((prevState) => ({
            ...prevState,
            formSubmitted: true,
            contactMessage: "We got your message. Thanks!",
          }));
          setTimeout(() => {
            setState((prevState) => ({
              ...prevState,
              contactMessage: "",
              user_name: "",
              user_phone: "",
              user_email: "",
              message: "",
              formSubmitted: false,
            }));
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="bg-green-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none" />
      </div>
      <section className="py-20">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
              <span className="text-green-600 font-medium">
                {contactInfo.company.name}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {contactInfo.company.tagline}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {contactInfo.company.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={user_name}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        user_name: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={user_email}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        user_email: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    value={user_phone}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        user_phone: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        message: e.target.value,
                      }))
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  ></textarea>
                </div>

                <button className="w-full bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
                  Send Message
                </button>
                {formSubmitted && (
                  <p className="text-green-400">
                    Successfull!! We&apos;ll get back to you shortly.
                  </p>
                )}
              </form>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Address</div>
                      <a
                        href={`https://maps.app.goo.gl/m2LnmWsHqURfBqFQ7`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition"
                      >
                        {contactInfo.address.street}, {contactInfo.address.city}{" "}
                        {contactInfo.address.state} {contactInfo.address.zip}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Phone</div>
                      <a
                        href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                        className="text-gray-600 hover:text-green-600 transition"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Email</div>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-600 hover:text-green-600 transition"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Hours</div>
                      <div className="text-gray-600">
                        {contactInfo.hours.text}
                        <br />
                        {contactInfo.hours.details}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition"
                  >
                    <Facebook className="w-6 h-6 text-green-600" />
                  </a>
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition"
                  >
                    <Instagram className="w-6 h-6 text-green-600" />
                  </a>
                  <a
                    href={contactInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition"
                  >
                    <Youtube className="w-6 h-6 text-green-600" />
                  </a>
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

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {contactInfo.tour.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {contactInfo.tour.description}
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition inline-flex items-center gap-2"
            >
              {/* <Phone className="w-5 h-5" /> */}
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>

      <section className="h-96 relative">
        <iframe
          title="Najah Family Childcare Location"
          className="w-full h-full"
          src={contactInfo.mapUrl}
          style={{ border: 0 }}
          // allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
