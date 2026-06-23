"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      id: "sr-frontend",
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote / Mauritius",
      type: "Full-time",
    },
    {
      id: "product-designer",
      title: "Product Designer",
      department: "Design",
      location: "Remote / Mauritius",
      type: "Full-time",
    },
    {
      id: "full-stack",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Mauritius",
      type: "Full-time",
    },
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're looking for passionate individuals to help us build the next generation of digital products.
        </p>
      </motion.div>

      <div className="space-y-6 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 border rounded-xl hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" /> {job.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {job.type}
                </span>
              </div>
            </div>
            <Link
              href={`/careers/apply?job=${job.id}`}
              className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors w-fit"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-50 p-8 rounded-2xl text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h2>
        <p className="text-gray-600 mb-6">
          We're always looking for talented people. Send us an open application and we'll keep you in mind for future roles.
        </p>
        <Link
          href="/careers/apply"
          className="px-6 py-3 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-all"
        >
          Open Application
        </Link>
      </motion.div>
    </div>
  );
}
