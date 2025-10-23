import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#connect", label: "Connect" }, // goes to GitHub/LinkedIn/etc
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  const navbarHeight = 80;

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all " +
        (elevated
          ? "bg-neutral-950/80 backdrop-blur border-b border-neutral-800"
          : "bg-transparent")
      }
    >
      <nav className="container-max flex items-center justify-between py-3">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight"
          onClick={(e) => handleScroll(e, "#home")}
        >
          <span className="text-brand-400">Sanchit</span> Vashisth
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleScroll(e, l.href)}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact-form"
            onClick={(e) => handleScroll(e, "#contact-form")}
            className="ml-2 inline-flex items-center rounded-full border border-brand-500/50 bg-brand-600/10 px-3 py-1.5 text-sm font-medium text-brand-200 hover:shadow-glow hover:text-white"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg border border-neutral-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
          <div className="container-max py-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className="px-2 py-3 text-neutral-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact-form"
              onClick={(e) => handleScroll(e, "#contact-form")}
              className="mx-2 my-2 inline-flex items-center justify-center rounded-lg border border-brand-500/50 bg-brand-600/10 px-3 py-2 text-sm font-medium text-brand-200 hover:shadow-glow hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
