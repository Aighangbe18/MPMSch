import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // ✅ import Link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // to highlight active nav if needed

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-9xl mx-auto px-4 text-lg py-3 flex items-center bg-indigo-950 justify-between">
        {/* Logo */}
        <div className="w-10 h-10">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`relative group transition text-white ${
                  location.pathname === link.href ? "font-bold text-white-50" : ""
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/register"
              className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${scrolled ? "text-white" : "text-white"}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-700 md:hidden flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} className="text-white" />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center flex-1 gap-6 text-xl text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="hover:text-yellow-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/register"
                className="mt-4 bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
    
  );
};

export default Navbar;
