import { ChevronRight } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";
import { Link } from "react-router-dom";

const Services = () => {
  const rollingShutters = [
    { url: "/mannual-rolling", name: "Manual Rolling Shutters" },
    { url: "/rolling-shutter", name: "Gear Operated Rolling Shutters" },
    { url: "/motorized-shutter", name: "Motorized Rolling Shutters" },
    { url: "/ms-rolling-shtter", name: "MS Rolling Shutter" },
    { url: "/ss-rolling-shtter", name: "SS Rolling Shutter" },
    { url: "/perforted-rolling-shutter", name: "Perforated Rolling Shutter" },
    { url: "/grill-rolling-shutter", name: "Grill Rolling Shutter" },
    { url: "/galvanized-rolling-shutter", name: "Galvanised Rolling Shutter" },
    { url: "/aluminium-rolling-shutter", name: "Aluminum Rolling Shutter" },
    { url: "/transparent-rolling-shutter", name: "Transparent/Polycarbonate Rolling Shutter" },
    { url: "/fire-rated-shurtter", name: "Fire-Rated Rolling Shutter" },
    { url: "/aluminium-puff-rolling-shutter", name: "Aluminum Puff Insulated Rolling Shutter" },
    { url: "/powder-coated-rolling-shutter", name: "Powder Coated Rolling Shutter" },
  ];

  const entranceAutomation = [
    "MS Gates",
    "SS Gates",
    "Automatic Gates",
    "Swing Gates",
    "Sliding Gate",
    "Telescopic Gate",
    "Curve Sliding Gate",
    "Curve Garage Gate",
    "Bi-Folding Gate",
    "Tri-Folding Gate",
    "Collapsible Gate",
    "High Speed Door",
    "Automatic Overhead Garage Door",
    "Automatic Sensor Glass Door",
    "Automatic Barriers",
    "Dock Levers",
    "Dock Shelters",
    "Turnstile",
  ];

  const generalFabrication = [
    "MS Railings",
    "SS Railings",
    "Structural Fabrication",
    "Staircase",
    "Pergola",
    "Window Grill",
    "Compound Grill",
    "Building Elevation Work",
    "Roofing Work",
    "Collapsible Gate",
    "Safety Grill",
  ];

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
      <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Header />
      </div>
      {showSticky && <StickyHeader />}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border-2 border-[#fcc729] text-[#fcc729] font-bold text-sm rounded mb-6">
              Our Services
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              WHAT WE OFFER
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Rolling Shutters */}
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Rolling Shutters
              </h3>
              <div className="space-y-3">
                {rollingShutters.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer space-x-3 text-muted-foreground hover:text-[#fcc729] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <Link to={item?.url}>
                      <span>{item?.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Entrance Automation */}
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Entrance Automation
              </h3>
              <div className="space-y-3">
                {entranceAutomation.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer space-x-3 text-muted-foreground hover:text-[#fcc729] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* General Fabrications */}
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                General Fabrications
              </h3>
              <div className="space-y-3">
                {generalFabrication.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer space-x-3 text-muted-foreground hover:text-[#fcc729] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
