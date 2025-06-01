import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Detectar sección activa
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (!element) return;

    const offset = 80; // altura del navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMobileDrawerOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-900/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center flex-shrink-0"
          >
            <img
              className="h-10 w-10 mr-2"
              src={logo}
              alt="logo de la pagina"
            />
            <span className="text-xl tracking-tight">VirtualR</span>
          </motion.div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative py-2 transition-colors hover:text-blue-400 ${
                    activeSection === item.href.slice(1) ? "text-blue-400" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full h-0.5 w-full bg-blue-400"
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:flex justify-center space-x-12 items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-3 border rounded-md hover:bg-white/10 transition-colors"
              onClick={() => scrollToSection("#contact")}
            >
              Contacto
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-green-800 py-2 px-3 rounded-md hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("#start")}
            >
              Empezar ahora
            </motion.button>
          </motion.div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed right-0 top-[4rem] z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
            >
              <ul>
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="py-4"
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={
                        activeSection === item.href.slice(1)
                          ? "text-blue-400"
                          : ""
                      }
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col space-y-4 mt-6"
              >
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="py-2 px-3 border rounded-md text-center hover:bg-white/10 transition-colors"
                  onClick={() => scrollToSection("#contact")}
                >
                  Contacto
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-green-800 text-center"
                  onClick={() => scrollToSection("#start")}
                >
                  Empezar ahora
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
