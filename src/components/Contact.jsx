import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import Hobbies from "./Hobbies";

export default function Contact() {
  const links = [
    { name: "GitHub", icon: <FaGithub size={40} />, url: "https://github.com/sanchit2405" },
    { name: "LinkedIn", icon: <FaLinkedin size={40} color="#0A66C2" />, url: "https://www.linkedin.com/in/sanchit-vashisth-5abb57287/" },
    { name: "Email", icon: <MdEmail size={40} color="#D44638" />, url: "mailto:svashisth2405@gmail.com" },
    { name: "Resume", icon: <HiDocumentText size={40} color="#90EE90" />, url: "/My-Portfolio/assets/resume.pdf" },
    { name: "Instagram", icon: <FaInstagram size={40} color="#E1306C" />, url: "https://www.instagram.com/itzzzmesanchit/" },
  ];

  return (
    <div className="flex flex-col items-center gap-16">
      
      {/* Hobbies Section */}
      <div id="hobbies" className="w-full">
        <Hobbies />
      </div>

      {/* Links Section */}
      <motion.div
        id="connect"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-16"
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
          >
            {link.icon}
            <span className="text-sm font-medium">{link.name}</span>
          </a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        id="contact-form"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto card mt-16"
      >
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>
        <p className="mt-2 text-neutral-400 text-center">
          👋 Hey there! Let’s connect and make cool things happen.
        </p>
        <form
          className="mt-6 grid gap-3"
          action="https://formspree.io/f/mzzvwbzj"
          method="POST"
        >
          <input
            className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:border-brand-500"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:border-brand-500"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <textarea
            className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:border-brand-500 min-h-[140px]"
            name="message"
            placeholder="Your message"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 font-medium text-white hover:scale-105 transition-transform hover:shadow-lg hover:shadow-brand-500/30"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
