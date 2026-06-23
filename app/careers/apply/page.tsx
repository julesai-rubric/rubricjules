"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Upload, Send, CheckCircle2 } from "lucide-react";

function ApplicationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const job = searchParams.get("job");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
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
        <h1 className="text-3xl font-bold mb-4">Application Received!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your interest in joining Rubric. Our team will review your application and get back to you soon.
        </p>
        <button
          onClick={() => router.push("/careers")}
          className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Back to Careers
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Apply for a Position</h1>
        <p className="text-gray-600">
          {job
            ? `Applying for: ${job.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
            : "Submit an open application to join our talent pool."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
            <input
              required
              id="firstName"
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
            <input
              required
              id="lastName"
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <input
            required
            id="email"
            type="email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="resume" className="text-sm font-medium">Resume / CV URL</label>
          <div className="relative">
            <input
              required
              id="resume"
              type="url"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
              placeholder="https://linkedin.com/in/johndoe or PDF link"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="coverLetter" className="text-sm font-medium">Cover Letter / Message</label>
          <textarea
            required
            id="coverLetter"
            rows={5}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            placeholder="Tell us why you're a great fit for Rubric..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : (
            <>
              Submit Application <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading application form...</div>}>
      <ApplicationForm />
    </Suspense>
  );
}
