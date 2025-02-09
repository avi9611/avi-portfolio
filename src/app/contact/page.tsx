"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaPaperPlane } from "react-icons/fa";

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  description: string;
}

const contactInfo: ContactInfo[] = [
  { icon: <FaPhoneAlt className="text-indigo-500" />, title: "Phone", description: "(+91) 9611670779" },
  { icon: <FaEnvelope className="text-emerald-500" />, title: "Email", description: "avinashpoojary651@gmail.com" },
  { icon: <FaMapMarkedAlt className="text-rose-500" />, title: "Address", description: "Bangalore, Karnataka-India" },
];

interface FormData {
  fullName: string;
  email: string;
  number: string;
  text: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ fullName: "", email: "", number: "", text: "" });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row p-6 md:p-10"
      >
        {/* Contact Info Section */}
        <div className="bg-indigo-50 p-6 md:p-10 flex flex-col space-y-6 rounded-lg w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800">Contact Information</h2>
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-gray-100 rounded-full">{info.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{info.title}</p>
                <p className="font-semibold text-gray-800">{info.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 text-center">Send a Message</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-300" />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-300" />
          </div>
          <input type="tel" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} maxLength={10} className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-300" />
          <textarea name="text" placeholder="Your Message" value={formData.text} onChange={handleChange} required className="w-full p-4 border rounded-lg h-40 focus:ring-2 focus:ring-indigo-300" />

          <button type="submit" disabled={status === "sending"} className={`w-full p-4 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 transition ${status === "sending" ? "bg-gray-400 cursor-not-allowed" : status === "success" ? "bg-green-500 hover:bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"}`}>
            <FaPaperPlane />
            <span>{status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
