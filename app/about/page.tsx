"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: "Our Mission",
      description: "To empower businesses by building innovative digital products that solve real-world problems and provide exceptional value.",
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: "Our Vision",
      description: "To be the leading digital product studio known for excellence in design, engineering, and strategic thinking.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Our Team",
      description: "A diverse group of passionate designers, engineers, and strategists dedicated to crafting high-quality software.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Our Approach",
      description: "We use a lean, iterative process focused on rapid prototyping and continuous feedback to ensure we build the right thing.",
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
        <h1 className="text-4xl font-bold mb-4">About Rubric</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Rubric is a digital product studio based in Mauritius. We specialize in building custom software solutions that help our clients scale and succeed in the digital age.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 border rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
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
        <h2 className="text-2xl font-bold mb-4">Ready to build something great?</h2>
        <p className="text-gray-600 mb-6">Let's talk about your next project and how we can help you bring it to life.</p>
        <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
