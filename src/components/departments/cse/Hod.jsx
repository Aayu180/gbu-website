import React from "react";
import { motion } from "framer-motion";

const HodMessage = ({
  title = "From the Desk of HOD",
  image = "",
  name = "Dr. John Doe",
  designation = "Head of Department",
  messageParagraphs = [],
  contact = null,
}) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Optional decorative background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-900 mb-12"
          >
            {title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Photo + Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1 flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 shadow-2xl ring-4 ring-blue-200 hover:ring-blue-400 transition">
                {image ? (
                  <img
                    src={image}
                    alt={`${name} - ${designation}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">{name}</h3>
              <p className="text-blue-600 font-medium">{designation}</p>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 space-y-5 text-gray-700 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-100"
            >
              {Array.isArray(messageParagraphs) && messageParagraphs.length > 0 ? (
                messageParagraphs.map((para, idx) => (
                  <p key={idx} className="leading-relaxed text-lg">
                    {para}
                  </p>
                ))
              ) : (
                <p className="leading-relaxed text-lg italic text-gray-500">
                  No message available.
                </p>
              )}

              {contact && (
                <div className="pt-6 border-t border-gray-300">
                  <p className="font-semibold text-blue-900">{contact.name}</p>
                  <p className="text-sm text-gray-600">{contact.designation}</p>
                  {contact.email && (
                    <p className="text-sm text-blue-700">Email: {contact.email}</p>
                  )}
                  {contact.phone && (
                    <p className="text-sm text-blue-700">Phone: {contact.phone}</p>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;
