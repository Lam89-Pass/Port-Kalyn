import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 text-center">
      <h2 className="text-7xl font-black mb-10 tracking-tighter leading-none">
        LET'S START <br />
        SOMETHING.
      </h2>
      <p className="text-gray-500 mb-16 text-lg">Punya ide proyek atau cuma mau say hi? Drop pesan lu di bawah.</p>

      <form className="space-y-12 text-left">
        <input type="text" placeholder="YOUR FULL NAME" className="w-full bg-transparent border-b-2 border-gray-100 dark:border-white/10 py-6 outline-none focus:border-blue-600 transition font-bold text-2xl" />
        <input type="email" placeholder="YOUR EMAIL ADDRESS" className="w-full bg-transparent border-b-2 border-gray-100 dark:border-white/10 py-6 outline-none focus:border-blue-600 transition font-bold text-2xl" />
        <button className="w-full py-6 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.4em] rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
