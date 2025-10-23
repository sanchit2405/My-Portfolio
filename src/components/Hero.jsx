import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullName = "Sanchit Vashisth";
  const [displayedName, setDisplayedName] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 150; // ms per character

  useEffect(() => {
    if (index < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedName(fullName.slice(0, index + 1));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [index, fullName]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }
  };

  const taglineItems = [
    { text: "B.Tech CSE Student" },
    { text: "Tech Explorer" },
    { text: "Problem Solver" },
    { text: "Lifelong Learner" },
  ];

  return (
    <div className="relative overflow-hidden font-poppins">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-600 blur-[160px] opacity-20"></div>
      </div>

      <div className="text-center px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          <span className="text-brand-400">{displayedName}</span>
          <span className="blinking-cursor">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-neutral-300 flex justify-center flex-wrap gap-3"
        >
          {taglineItems.map((item, idx) => (
            <span
              key={idx}
              className="hover:text-brand-400 hover:scale-110 transition-transform cursor-pointer"
            >
              {item.text}
              {idx < taglineItems.length - 1 && " | "}
            </span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3 flex-wrap"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 font-medium text-white shadow hover:shadow-glow transition-shadow"
          >
            View Projects
          </a>
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("connect");
            }}
            className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2.5 font-medium text-neutral-200 hover:border-brand-500/60 transition-colors"
          >
            Connect
          </a>
        </motion.div>

        {/* Four Boxes with Hover Scale */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          {[
            [
              "Coding Skills",
              "Passionate about solving problems with C, C++, and Python; exploring web development basics.",
            ],
            [
              "AI & Web",
              "Exploring AI concepts and web technologies; constantly learning and experimenting.",
            ],
            [
              "Goals",
              "Aspiring to apply strong mathematical and problem-solving skills to develop impactful and efficient tech solutions and projects.",
            ],
            [
              "Soft Skills",
              "Strong communicator and team player; quick learner with a problem-solving mindset, adaptable to any challenge.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="bg-neutral-900 p-4 rounded-xl shadow hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300 cursor-pointer"
            >
              <p className="text-sm text-neutral-400">{title}</p>
              <p className="mt-2 font-medium text-white">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
