"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt className="text-indigo-500" />,
    title: "Phone",
    description: "(+91) 9611670779",
  },
  {
    icon: <FaEnvelope className="text-emerald-500" />,
    title: "Email",
    description: "avinashpoojary651@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt className="text-rose-500" />,
    title: "Address",
    description: "Bangalore, Karnataka-India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus(response.ok ? "success" : "error");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 gap-8 p-8"
      >
        {/* Contact Info Section */}
        <div className="bg-indigo-50 rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">
            Contact Information
          </h2>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md"
            >
              <div className="p-3 bg-gray-100 rounded-full">{info.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{info.title}</p>
                <p className="font-semibold text-gray-800">
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          <h2 className="text-3xl font-bold text-indigo-800 text-center mb-6">
            Send a Message
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition"
            />
          </div>

          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            maxLength={10}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-indigo-300 transition"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full p-3 rounded-lg text-white font-semibold transition duration-300 flex items-center justify-center space-x-2 ${
              status === "sending"
                ? "bg-gray-400 cursor-not-allowed"
                : status === "success"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            <FaPaperPlane />
            <span>
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message Sent!"
                : "Send Message"}
            </span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
