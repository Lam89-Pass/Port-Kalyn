import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass-red rounded-2xl px-8 py-4 flex items-center justify-between shadow-[0_0_30px_rgba(220,38,38,0.15)]">
      <div className="text-2xl font-black tracking-tighter text-red-600 cursor-pointer uppercase">
        Kalyn<span className="text-white">.Exe</span>
      </div>

      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} smooth={true} spy={true} offset={-100} className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-red-500 cursor-pointer transition-all" activeClass="text-red-600">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_#dc2626]"></div>
    </nav>
  );
};

export default Navbar;
