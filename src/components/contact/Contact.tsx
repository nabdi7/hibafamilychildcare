import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
              <span className="text-green-600 font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Get in Touch With Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to answer any questions you may have about our programs
              and enrollment process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  ></textarea>
                </div>

                <button className="w-full bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Address</div>
                      <div className="text-gray-600">8411 8th Ave SW, Seattle WA 98106</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Phone</div>
                      <div className="text-gray-600">(206) 422-8654</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Email</div>
                      <div className="text-gray-600">info@sunshinekids.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">Hours</div>
                      <div className="text-gray-600">
                        Monday - Friday<br />
                        7:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition">
                    <Facebook className="w-6 h-6 text-green-600" />
                  </a>
                  <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition">
                    <Twitter className="w-6 h-6 text-green-600" />
                  </a>
                  <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition">
                    <Instagram className="w-6 h-6 text-green-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Schedule a Tour
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our facility and see firsthand how we nurture young minds in a safe, 
              engaging environment.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
              Book Your Tour Now
            </button>
          </div>
        </div>
      </section>

      <section className="h-96 relative">
        <iframe
          title="Sunshine Kids Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.5888871812897!2d-122.3215012!3d47.5341138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMyJzAyLjgiTiAxMjLCsDE5JzE3LjQiVw!5e0!3m2!1sen!2sus!4v1635188000000!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;