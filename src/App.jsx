import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navbarOffset = 80; // adjust if navbar height changes

  return (
    <div className="font-sans">
      <Navbar />
      <main className="space-y-24 md:space-y-36">
        <section
          id="home"
          className="container-max pt-28 md:pt-32"
          style={{ scrollMarginTop: `${navbarOffset}px` }}
        >
          <Hero />
        </section>
        <section
          id="about"
          className="container-max"
          style={{ scrollMarginTop: `${navbarOffset}px` }}
        >
          <About />
        </section>
        <section
          id="projects"
          className="container-max"
          style={{ scrollMarginTop: `${navbarOffset}px` }}
        >
          <Projects />
        </section>
        <section
          id="skills"
          className="container-max"
          style={{ scrollMarginTop: `${navbarOffset}px` }}
        >
          <Skills />
        </section>
        <section
          id="hobbies" // added this so navbar can scroll here
          className="container-max"
          style={{ scrollMarginTop: `${navbarOffset}px` }}
        >
          <Contact /> {/* Hobbies component is inside Contact */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
