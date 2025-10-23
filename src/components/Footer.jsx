import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800">
      <div className="container-max py-6 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Sanchit Vashisth. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#home">Top</a>
          <a className="hover:text-white" href="https://github.com/sanchit2405" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-white" href="/My-Portfolio/assets/resume.pdf " target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </footer>
  );
}
  