"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, MessageSquare, User, Tag } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for reaching out. We've received your message and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
        <p className="text-gray-600">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4" /> Name
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            placeholder="Your Name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
            <Mail className="w-4 h-4" /> Email Address
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
            <Tag className="w-4 h-4" /> Subject
          </label>
          <input
            required
            id="subject"
            name="subject"
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            placeholder="What is this regarding?"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400"
        >
          {loading ? "Sending..." : (
            <>
              Send Message <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
