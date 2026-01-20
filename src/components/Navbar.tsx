import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "@/assets/image.png"; // ✅ LOGO

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Careers", href: "/careers" }, // ✅ Careers as page
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ lock background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ✅ scroll to section (only # links)
  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (!element) return;

      const headerOffset = 90;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 220);
  };

  // ✅ handles BOTH routes + smooth scroll
  const handleNavClick = (href) => {
    // route navigation
    if (!href.startsWith("#")) {
      setIsMobileMenuOpen(false);
      navigate(href);
      return;
    }

    // section scroll must happen on homepage
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(href), 350);
      return;
    }

    scrollToSection(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-soft" : "bg-primary"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3"
          >
            {/* ✅ Image logo tile */}
            <motion.div
              whileHover={{ rotate: 3, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="w-11 h-11 rounded-xl overflow-hidden bg-white/15 border border-white/20 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Rite Pharmacy Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <span className="text-xl font-display font-bold text-white">
              Rite Pharmacy
            </span>
          </button>

          {/* ✅ Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* ✅ Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </button>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-primary border-t border-white/20"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 rounded-xl transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                ))}

                <div className="px-4 pt-4">
                  <button
                    type="button"
                    onClick={() => handleNavClick("#contact")}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
