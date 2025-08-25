import { useEffect, useRef, useState } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { Description } from "@/components/Description";
import { Process } from "@/components/Process";
import { Offer } from "@/components/Offer";
import { News } from "@/components/news";
import StickyHeader from "@/components/sticky-header";
import { Fabrication } from "@/components/fabrication";


const Index = () => {
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

  return (
    <div className="min-h-screen relative bg-background">
      {/* Regular Header (always in DOM) */}
      {/* <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      > */}
        <Header />
      {/* </div> */}

      {/* Sticky Header */}
      {/* {showSticky && <StickyHeader />} */}
 

      <main>
        <Hero />
        <Description />
        <Offer />
        <Process />
        <Testimonials />
        <WhyChoose />
        <Clients />
        <Fabrication />
        {/* <News /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
