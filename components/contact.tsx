"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { supabase } from "@/lib/supabaseClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase
      .from("contact_messages")
      .insert([formData]);

    if (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    } else {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-400">
              Let's <span className="text-gray-950">Connect.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              I'm currently open to new opportunities. Whether you have a project
              or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <FiMail className="text-blue-200 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-lg text-gray-500 font-medium">
                    shola.mujeeb@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <FiMapPin className="text-blue-200 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-lg text-gray-500 font-medium">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-300">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-gray-400 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-gray-400 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-gray-400 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 outline-none resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full bg-gray-400 hover:bg-gray-300 font-bold py-1 rounded-lg flex items-center justify-center gap-2 transition"
              >
                {loading ? "Sending..." : <>Send Message <FiSend /></>}
              </motion.button>

              {success && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}