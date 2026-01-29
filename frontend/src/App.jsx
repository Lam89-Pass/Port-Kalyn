import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Skills from "./pages/public/Skills";
import Experience from "./pages/public/Experience";
import Education from "./pages/public/Education";
import Project from "./pages/public/Projects"; // FIXED: Nama file asli Project.jsx
import Contact from "./pages/public/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
        <Navbar />
        <main>
          {/* Section ID harus pas buat navigasi Navbar */}
          <section id="home">
            <Home />
          </section>
          <section id="about" className="py-24">
            <About />
          </section>
          <section id="skills" className="py-24 bg-white/2">
            <Skills />
          </section>
          <section id="experience" className="py-24">
            <Experience />
          </section>
          <section id="education" className="py-24 bg-white/2">
            <Education />
          </section>
          <section id="projects" className="py-24">
            <Project />
          </section>
          <section id="contact" className="py-24 bg-red-950/10">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
