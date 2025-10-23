import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="grid md:grid-cols-5 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="md:col-span-3 card"
      >
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-neutral-300 leading-relaxed">
        Hi, I’m Sanchit, a B.Tech student with a keen interest in technology, analytics, and innovation. I’m passionate about developing practical projects that bridge data, business, and real-world applications — from web development to AI-driven solutions.
        </p>
        <p className="mt-3 text-neutral-300 leading-relaxed">
          I have a strong aptitude for numbers and logical reasoning, and I enjoy solving problems that combine creativity with structured thinking. My goal is to leverage my analytical and technical skills to design impactful solutions that make everyday life smarter and more efficient.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="md:col-span-2 card"
      >
        <h3 className="text-lg font-semibold">Quick Facts</h3>
        <ul className="mt-3 space-y-2 text-neutral-300">
          <li>📍 Meerut, U.P. (India)</li>
          <li>🎓 BTech CSE</li>
          <li>💻 Preferred Language: C++</li>
          <li>⚡ Hardworking & Quick Learner</li>
        </ul>
      </motion.div>
    </div>
  );
}
