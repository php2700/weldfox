import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Factory, Trophy } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";
import { AboutDescription } from "./About-desc";
import { Partner } from "./partner";
import { Enuiry } from "./About-inq";
import { motion } from "framer-motion";

const About = () => {
  const [showSticky, setShowSticky] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const goingDown = currentScroll > lastScrollY.current;

        if (currentScroll <= 0 || (!goingDown && currentScroll < 100)) {
          setShowSticky(false);
        } else if (goingDown && currentScroll > 100) {
          setShowSticky(true);
        }

        lastScrollY.current = currentScroll;
        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const achievements = [
    "ISO 9001:2015 Certified",
    "AWS Certified Welding Facility",
    "AISC Certified Steel Fabricator",
    "OSHA 10/30 Safety Certified",
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Skilled Craftsmen" },
    { icon: Factory, value: "25K", label: "Sq Ft Facility" },
    { icon: Trophy, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen relative bg-background">
      {/* <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      > */}
        <Header />
      {/* </div>
      {showSticky && <StickyHeader />} */}

      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/swing-gates.jpg"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 skew-y-[-3deg] origin-top-left"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary/90 leading-tight mb-4">
            ABOUT
          </h1>
          <p className="text-white/90 text-md md:text-lg leading-relaxed">
            At METAL4CRAFT AUTOMATION, we specialize in delivering premium
            fabrication solutions designed around the specific requirements of
            our clients. Focused on Entrance Automation, Rolling Shutters, and
            General Fabrication, our skilled team blends innovation with
            craftsmanship.
          </p>
        </motion.div>
      </section>

      <AboutDescription />
      <Pargittner />
      <Enuiry />
      <Footer />
    </div>
  );
};

export default About;
