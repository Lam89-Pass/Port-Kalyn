import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    { title: "NEO BANKING", cat: "FINTECH", img: "https://via.placeholder.com/800x500" },
    { title: "VAULT SECURE", cat: "SECURITY", img: "https://via.placeholder.com/800x500" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-5xl font-black mb-20 tracking-tighter">PROJECTS GALLERY.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="group">
            <div className="aspect-video bg-gray-100 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 relative">
              <img src={p.img} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition duration-700" alt={p.title} />
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition duration-700"></div>
            </div>
            <div className="flex justify-between items-end px-4">
              <div>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-2">{p.cat}</p>
                <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
              </div>
              <button className="text-[10px] font-bold underline underline-offset-8 decoration-blue-600 decoration-2">VIEW CASE STUDY</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
