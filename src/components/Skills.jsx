import React from "react";

import { motion } from "framer-motion";

const skills = [
  { name: "C, C++", level: 80 },
  { name: "HTML, CSS, JS", level: 75 },
  { name: "My SQL", level: 70 },
  { name: "Python", level: 65 },
  { name: "MS Office", level: 85 },
  { name: "Git/GitHub", level: 75 },
];

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Skills</h2>
      <p className="mt-2 text-neutral-400">Constantly learning, always improving.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-5">
        {skills.map((s, idx) => (
          <motion.div
            key={s.name}
            className="card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-sm text-neutral-400">{s.level}%</span>
            </div>
            <div className="mt-2 h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand-500"
                initial={{ width: 0 }}
                whileInView={{ width: s.level + "%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
