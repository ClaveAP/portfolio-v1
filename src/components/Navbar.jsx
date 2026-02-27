import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (item, e) => {
    if (item.external) {
      e.preventDefault();
      //  CV
      window.open("/Trias Aldi Prasetia-resume.pdf", "_blank");
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink-900/90 backdrop-blur-xl border-b border-ink-700/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="font-display text-lg font-semibold text-cream-50 tracking-tight"
          >
            TAP<span className="text-sage-500">.</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) =>
              item.external ? (
                <button
                  key={item.label}
                  onClick={(e) => handleNavClick(item, e)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream-200 hover:text-cream-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        className={`fixed inset-0 z-40 bg-ink-900/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {navItems.map((item, i) =>
          item.external ? (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: i * 0.07 }}
              onClick={(e) => handleNavClick(item, e)}
              className="font-display text-3xl text-cream-200 hover:text-cream-50 transition-colors"
            >
              {item.label}
            </motion.button>
          ) : (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: i * 0.07 }}
            >
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl text-cream-200 hover:text-cream-50 transition-colors"
              >
                {item.label}
              </NavLink>
            </motion.div>
          )
        )}
      </motion.div>
    </>
  );
}
