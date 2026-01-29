import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-gray-200 dark:bg-slate-900 rounded-[2rem] aspect-square overflow-hidden border border-white/5">
          <img src="https://via.placeholder.com/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" alt="Profile" />
        </div>
      </motion.div>

      <div className="space-y-8">
        <h2 className="text-5xl font-black tracking-tighter">THE VISIONARY.</h2>
        <p className="text-gray-500 text-xl leading-relaxed">Gue adalah Fullstack Developer yang terobsesi dengan performa ekstrem dan estetika visual. Setiap baris kode yang gue tulis adalah investasi untuk masa depan digital lu.</p>
        <div className="flex gap-12 pt-4">
          <div>
            <h4 className="text-4xl font-black text-blue-600">05+</h4>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Exp Years</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-blue-600">40+</h4>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Global Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
