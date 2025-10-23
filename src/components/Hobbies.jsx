import React from "react";
import { motion } from "framer-motion";

export default function Hobbies() {
  const hobbies = [
    {
      name: "Trading",
      description: "Analyzing charts and markets.",
      icon: (
        <motion.svg
          width="80"
          height="50"
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.polyline
            points="0,40 10,30 20,35 30,20 40,25 50,10 60,15 70,5 80,10"
            stroke="#10B981"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          />
        </motion.svg>
      ),
    },
    {
      name: "Basketball",
      description: "Playing basketball in free time.",
      icon: (
        <motion.div
          className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center relative"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-5 h-5 rounded-full bg-black absolute bottom-2"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ),
    },
    {
      name: "Cricket",
      description: "Enjoy cricket matches and practice.",
      icon: (
        <motion.div className="w-24 h-12 relative">
          <motion.div
            className="w-6 h-6 bg-red-500 rounded-full absolute"
            animate={{ x: [0, 60, 0], y: [0, -20, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-16 h-2 bg-yellow-800 absolute bottom-0 left-4 rounded"></div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center gap-12 mt-12">
      <h2 className="text-2xl font-bold text-center">My Hobbies</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card flex flex-col items-center p-6 rounded-xl hover:scale-105 transition-transform"
          >
            {hobby.icon}
            <h3 className="text-lg font-semibold mt-4">{hobby.name}</h3>
            <p className="text-neutral-400 text-center mt-2">{hobby.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Horizontal line to separate from next section */}
      <hr className="w-full border-t border-neutral-700 mt-12" />
    </div>
  );
}
