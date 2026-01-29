import { motion } from "framer-motion";

const Skills = () => {
  const stacks = ["Laravel 12", "React 19", "MySQL", "Tailwind 4", "Node.js", "Docker", "AWS", "Framer"];

  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black mb-16 tracking-tighter italic">MY ARSENAL.</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stacks.map((stack, i) => (
          <motion.div key={stack} whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all">
            <div className="w-10 h-10 bg-blue-600/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-blue-600 font-bold uppercase text-xs">{stack[0]}</div>
            <span className="font-black text-xs tracking-widest uppercase">{stack}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
