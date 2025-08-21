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
      <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Header />
      </div>
      {showSticky && <StickyHeader />}
      <div className="relative w-full z-[1]">
        <img
          src="/swing-gates.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940] opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl font-[900] text-white">ABOUT</div>
        </div>
        <div className="absolute z-[10] top-[450px] left-1/2 -translate-x-1/2 flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg">
            <h2 className="text-[14px] md:text-[14px] font-bold mb-2 text-white">
              HOME &nbsp; - &nbsp; About
            </h2>
          </div>
        </div>
      </div>

      <AboutDescription />
      <Partner />
      <Enuiry />
      <Footer />
    </div>
  );
};

export default About;
