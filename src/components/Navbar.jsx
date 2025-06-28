import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Add scroll effect to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 text-xs py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-sm w-10 h-10 font-bold text-blue-600">
          <img src="./images/gallery10.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative group transition ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Register
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${scrolled ? "text-gray-800" : "text-gray-700"}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-500 md:hidden flex flex-col">
          {/* Close button top right */}
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} className="text-gray-800" />
            </button>
          </div>

          {/* Mobile links */}
          <ul className="flex flex-col items-center justify-center flex-1 gap-6 text-sm text-white-50">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                className="mt-4 bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
