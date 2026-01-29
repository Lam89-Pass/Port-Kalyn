import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          KALYN<span className="text-gray-900">.PORT</span>
        </Link>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-sm font-semibold transition hover:text-blue-600 ${location.pathname === link.path ? "text-blue-600" : "text-gray-500"}`}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Tombol Mobile simpel kalau lu mau nambahin logic nantinya */}
        <div className="md:hidden font-bold text-blue-600">Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
