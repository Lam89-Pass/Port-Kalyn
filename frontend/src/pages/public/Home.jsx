import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Download, Terminal, ChevronRight } from "lucide-react";
// Import foto dari assets lu
import heroImg from "../../assets/hero.png";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* KIRI: Konten & Typography */}
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-red-600"></span>
            <span className="text-red-500 font-black tracking-[0.4em] text-[10px] uppercase flex items-center gap-2">
              <Terminal size={14} /> System Initialized
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-red-600 text-3xl md:text-5xl font-black italic tracking-tighter uppercase">Web Developer.</h2>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white uppercase">
              Cyber <br /> <span className="text-red-600">Security.</span>
            </h1>
          </div>

          <p className="max-w-md text-gray-400 text-lg font-medium leading-relaxed">Menyatukan keindahan kode dengan keamanan sistem tingkat tinggi. Gue membangun infrastruktur digital yang tak hanya kencang, tapi juga tak tertembus.</p>

          <div className="flex flex-wrap gap-5 pt-4">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              offset={-100}
              className="bg-red-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-red-700 transition shadow-[0_10px_30px_rgba(220,38,38,0.3)] flex items-center gap-2 cursor-pointer"
            >
              My Projects <ChevronRight size={14} />
            </ScrollLink>

            <a href="/cv.pdf" className="border-2 border-red-600/30 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-red-600/10 transition flex items-center gap-2">
              <Download size={14} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* KANAN: Foto hero.png */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-[500px] ml-auto">
            {/* Cyber Ornaments */}
            <div className="absolute inset-0 border-2 border-red-600/10 rounded-[3rem] animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-10 border border-red-900/30 rounded-[3rem] animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Main Image */}
            <div className="absolute inset-16 rounded-[2.5rem] overflow-hidden border-4 border-red-600 shadow-[0_0_80px_rgba(220,38,38,0.4)]">
              <img src={heroImg} alt="Alam Hero" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition duration-1000" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradasi Bawah Seamless */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#020617] to-transparent z-20"></div>
    </div>
  );
};

export default Home;
