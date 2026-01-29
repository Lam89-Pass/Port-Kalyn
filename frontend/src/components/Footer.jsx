import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Branding Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-black text-blue-600 tracking-tighter">
              KALYN<span className="text-gray-900">.PORT</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fullstack Developer yang berfokus pada pembangunan aplikasi web modern, 
              bersih, dan berperforma tinggi menggunakan Laravel & React.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Navigasi</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/projects" className="text-gray-500 hover:text-blue-600 transition">Proyek Saya</Link></li>
              <li><Link to="/skills" className="text-gray-500 hover:text-blue-600 transition">Keahlian</Link></li>
              <li><Link to="/experience" className="text-gray-500 hover:text-blue-600 transition">Pengalaman</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-blue-600 transition">Hubungi Gue</Link></li>
            </ul>
          </div>

          {/* Social Media / Connect */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition group">
                <span className="font-bold text-xs">GH</span>
            </div>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                <span className="font-bold text-xs">IN</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                <span className="font-bold text-xs">IG</span>
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 italic">Tersedia untuk kerja sama tim atau freelance.</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} Kalyn Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Built with React 19 & Laravel 12</span>
            <span className="text-blue-500 font-medium">Standard Industrial Version</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;