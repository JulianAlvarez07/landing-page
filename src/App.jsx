import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow">
        <section id="home" className="h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <HeroSection />
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <FeaturesSection />
          </div>
        </section>

        <section id="workflow" className="py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Workflow />
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Pricing />
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Testimonials />
          </div>
        </section>

        <section id="start" className="py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            {/* Contenido de la sección Start */}
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            {/* Contenido de la sección Contact */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
