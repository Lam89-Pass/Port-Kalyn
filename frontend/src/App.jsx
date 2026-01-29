import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Skills from "./pages/public/Skills";
import Experience from "./pages/public/Experience";
import Education from "./pages/public/Education";
import Projects from "./pages/public/Projects";
import Contact from "./pages/public/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-blue-100">
        {/* Navbar akan selalu muncul di setiap halaman */}
        <Navbar />

        {/* Konten Halaman */}
        <main className="pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Sederhana */}
        <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100">© {new Date().getFullYear()} Kalyn Portfolio. Built with React 19 & Laravel 12.</footer>
      </div>
    </Router>
  );
}

export default App;
