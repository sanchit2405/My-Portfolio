import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-2 text-neutral-400">
        A few things I’ve built recently.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link?.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
            className="card group overflow-hidden rounded-xl bg-neutral-900/80 backdrop-blur border border-neutral-800 shadow-md transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{
              scale: 1.06,
              y: -4,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
              filter: "brightness(1.08)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{ scale: 1.02 }}
          >
            {/* ✅ Show project image if available */}
            {p.image ? (
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-image w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="h-36 rounded-xl bg-gradient-to-br from-brand-600/30 to-neutral-800 group-hover:from-brand-500/40 group-hover:to-neutral-700 transition-all duration-200" />
            )}

            <div className="mt-4 p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-neutral-700 px-2 py-1 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
